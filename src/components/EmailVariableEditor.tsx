import { useEffect, useMemo } from "react";
import { EmailTemplate } from "@/data/emailTemplates";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Sparkles } from "lucide-react";
import { getClientIntelligence, getOpportunityIntelligence } from "@/data/clientIntelligenceLoader";
import { toast } from "sonner";

interface EmailVariableEditorProps {
  template: EmailTemplate;
  variables: Record<string, string>;
  onVariablesChange: (variables: Record<string, string>) => void;
  preSelectedClient?: { id: number; name: string };
  preSelectedOpportunity?: { id: string; name: string };
  campaignData?: any;
}

export const EmailVariableEditor = ({
  template,
  variables,
  onVariablesChange,
  preSelectedClient,
  preSelectedOpportunity,
  campaignData,
}: EmailVariableEditorProps) => {
  
  const handleVariableChange = (key: string, value: string) => {
    onVariablesChange({ ...variables, [key]: value });
  };

  const handleQuickFill = () => {
    const quickFillData: Record<string, string> = {};
    
    // Get client intelligence
    const clientIntel = preSelectedClient 
      ? getClientIntelligence(preSelectedClient.id) 
      : null;
    
    // Get opportunity intelligence
    const oppIntel = preSelectedOpportunity
      ? getOpportunityIntelligence(preSelectedOpportunity.id)
      : null;
    
    // === CORE FIELDS ===
    if (campaignData) {
      quickFillData.client_name = campaignData.clientName;
      quickFillData.opportunity_name = campaignData.opportunityName || '';
      quickFillData.contact_name = campaignData.contactName;
      quickFillData.email = campaignData.contactEmail;
    } else {
      if (preSelectedClient) {
        quickFillData.client_name = preSelectedClient.name;
      }
      
      if (preSelectedOpportunity) {
        quickFillData.opportunity_name = preSelectedOpportunity.name;
      }
    }
    
    // === CONTACT FIELDS ===
    if (!quickFillData.contact_name) {
      quickFillData.contact_name = "[Contact Name]";
    }
    if (!quickFillData.email) {
      quickFillData.email = "[contact@email.com]";
    }
    quickFillData.contact_title = clientIntel?.suggestedContactTitle || "Director";
    
    // === YOUR INFO ===
    quickFillData.your_name = "Sarah Johnson";
    quickFillData.your_title = "VP of Sales";
    quickFillData.your_company = "SecureIT Solutions";
    quickFillData.your_email = "sarah.johnson@secureit.com";
    quickFillData.your_phone = "(555) 123-4567";
    
    // === OPPORTUNITY-SPECIFIC ===
    if (oppIntel) {
      quickFillData.service_type = oppIntel.serviceType;
      quickFillData.timeline = oppIntel.timeline;
      quickFillData.estimated_value = oppIntel.estimatedValue;
    }
    
    // === TEMPLATE-SPECIFIC SMART DEFAULTS ===
    
    // For Social Proof templates
    if (template.influencePrinciple === "Social Proof") {
      quickFillData.case_study_client = "Charlotte-Mecklenburg Schools";
      quickFillData.metric_1 = "100% compliance achieved";
      quickFillData.metric_2 = "40% reduction in security incidents";
      quickFillData.timeframe = "within 6 months";
    }
    
    // For Scarcity templates
    if (template.influencePrinciple === "Scarcity") {
      quickFillData.deadline = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split('T')[0]; // 2 weeks from now
      quickFillData.limited_spots = "3 remaining";
    }
    
    // For Authority templates
    if (template.influencePrinciple === "Authority") {
      quickFillData.credential_1 = "ISO 27001 Certified";
      quickFillData.credential_2 = "20+ years in cybersecurity";
      quickFillData.industry_recognition = "Top Rated by Gartner";
    }
    
    // For Reciprocation templates (Free Resource)
    if (template.name.includes("Free Resource")) {
      quickFillData.resource_name = "CJIS Compliance Checklist";
      quickFillData.resource_value = "$500";
      quickFillData.download_link = "https://example.com/download";
    }
    
    // === CLIENT INTELLIGENCE-BASED FIELDS ===
    if (clientIntel) {
      quickFillData.industry = clientIntel.industry;
      quickFillData.pain_point = clientIntel.keyPainPoints[0] || "compliance challenges";
      quickFillData.decision_maker = clientIntel.decisionMakers[0] || "Executive Team";
    }
    
    onVariablesChange({ ...variables, ...quickFillData });
    
    toast.success(`Auto-filled ${Object.keys(quickFillData).length} fields!`);
  };

  // Auto-fill when campaignData is available
  useEffect(() => {
    if (campaignData && Object.keys(variables).length === 0) {
      handleQuickFill();
    }
  }, [campaignData]);

  const renderInput = (variable: typeof template.variables[0]) => {
    const value = variables[variable.key] || "";
    
    switch (variable.type) {
      case "textarea":
        return (
          <Textarea
            id={variable.key}
            value={value}
            onChange={(e) => handleVariableChange(variable.key, e.target.value)}
            placeholder={variable.placeholder}
            className="min-h-[80px]"
          />
        );
      
      case "select":
        return (
          <Select value={value} onValueChange={(val) => handleVariableChange(variable.key, val)}>
            <SelectTrigger id={variable.key}>
              <SelectValue placeholder={variable.placeholder || "Select..."} />
            </SelectTrigger>
            <SelectContent>
              {variable.options?.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      
      case "date":
        return (
          <Input
            id={variable.key}
            type="date"
            value={value}
            onChange={(e) => handleVariableChange(variable.key, e.target.value)}
          />
        );
      
      case "currency":
        return (
          <Input
            id={variable.key}
            type="text"
            value={value}
            onChange={(e) => handleVariableChange(variable.key, e.target.value)}
            placeholder={variable.placeholder || "$0"}
          />
        );
      
      default:
        return (
          <Input
            id={variable.key}
            type="text"
            value={value}
            onChange={(e) => handleVariableChange(variable.key, e.target.value)}
            placeholder={variable.placeholder}
          />
        );
    }
  };

  // Calculate progress
  const requiredFields = useMemo(() => 
    template.variables.filter(v => v.required),
    [template.variables]
  );
  
  const filledRequiredFields = useMemo(() => 
    requiredFields.filter(v => variables[v.key] && variables[v.key].trim() !== ""),
    [requiredFields, variables]
  );
  
  const progress = useMemo(() => 
    (filledRequiredFields.length / requiredFields.length) * 100,
    [filledRequiredFields.length, requiredFields.length]
  );

  return (
    <div className="space-y-4 pr-4">
      {/* Progress Bar */}
      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Required Fields</span>
          <span className="font-medium">
            {filledRequiredFields.length} / {requiredFields.length}
          </span>
        </div>
        <Progress value={progress} className="h-2" />
        {progress === 100 ? (
          <p className="text-xs text-green-600 dark:text-green-400">
            ✓ All required fields completed!
          </p>
        ) : (
          <p className="text-xs text-amber-600 dark:text-amber-400">
            {requiredFields.length - filledRequiredFields.length} field(s) remaining
          </p>
        )}
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={handleQuickFill}
        className="w-full"
      >
        <Sparkles className="w-4 h-4 mr-2" />
        Quick Fill from Client
      </Button>

      {template.variables.map((variable) => {
        const isRequired = variable.required;
        const isFilled = variables[variable.key] && variables[variable.key].trim() !== "";
        const showWarning = isRequired && !isFilled;
        
        return (
          <div 
            key={variable.key} 
            className={`space-y-2 ${showWarning ? 'ring-2 ring-amber-500/50 rounded-lg p-3 -m-3' : ''}`}
          >
            <Label htmlFor={variable.key} className="text-sm font-medium">
              {variable.label}
              {variable.required && (
                <span className="text-destructive ml-1">*</span>
              )}
              {showWarning && (
                <span className="text-xs text-amber-600 dark:text-amber-400 ml-2">
                  (Required - please fill)
                </span>
              )}
            </Label>
            {renderInput(variable)}
            {variable.helpText && (
              <p className="text-xs text-muted-foreground">{variable.helpText}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};
