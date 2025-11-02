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
import { Sparkles } from "lucide-react";

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
    
    // If campaignData is available, use all its fields
    if (campaignData) {
      quickFillData.client_name = campaignData.clientName;
      quickFillData.opportunity_name = campaignData.opportunityName || '';
      quickFillData.contact_name = campaignData.contactName;
      quickFillData.email = campaignData.contactEmail;
    } else {
      // Fallback to preSelected values
      if (preSelectedClient) {
        quickFillData.client_name = preSelectedClient.name;
      }
      
      if (preSelectedOpportunity) {
        quickFillData.opportunity_name = preSelectedOpportunity.name;
      }
    }
    
    // Add some default values for common fields
    quickFillData.your_name = "Sarah Johnson";
    quickFillData.your_title = "VP Marketing";
    
    onVariablesChange({ ...variables, ...quickFillData });
  };

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

  return (
    <div className="space-y-4 pr-4">
      <Button
        variant="outline"
        size="sm"
        onClick={handleQuickFill}
        className="w-full"
      >
        <Sparkles className="w-4 h-4 mr-2" />
        Quick Fill from Client
      </Button>

      {template.variables.map((variable) => (
        <div key={variable.key} className="space-y-2">
          <Label htmlFor={variable.key} className="text-sm font-medium">
            {variable.label}
            {variable.required && <span className="text-destructive ml-1">*</span>}
          </Label>
          {renderInput(variable)}
          {variable.helpText && (
            <p className="text-xs text-muted-foreground">{variable.helpText}</p>
          )}
        </div>
      ))}
    </div>
  );
};
