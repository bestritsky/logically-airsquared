import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { EmailTemplate, InfluencePrinciple } from "@/data/emailTemplates";
import { EmailVariableEditor } from "./EmailVariableEditor";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

interface EmailTemplatePreviewProps {
  template: EmailTemplate;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  preSelectedClient?: { id: number; name: string };
  preSelectedOpportunity?: { id: string; name: string };
}

export const EmailTemplatePreview = ({
  template,
  open,
  onOpenChange,
  preSelectedClient,
  preSelectedOpportunity,
}: EmailTemplatePreviewProps) => {
  const [variables, setVariables] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);

  const substituteVariables = (text: string, vars: Record<string, string>) => {
    return text.replace(/\{(\w+)\}/g, (match, key) => vars[key] || match);
  };

  const generatedSubject = substituteVariables(template.subject, variables);
  const generatedBody = substituteVariables(template.body, variables);

  const getPrincipleBadgeClass = (principle: InfluencePrinciple) => {
    const classes: Record<InfluencePrinciple, string> = {
      "Reciprocation": "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
      "Liking": "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
      "Social Proof": "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20",
      "Authority": "bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-500/20",
      "Scarcity": "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20",
      "Commitment/Consistency": "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20",
      "Unity": "bg-pink-500/10 text-pink-700 dark:text-pink-400 border-pink-500/20",
      "Instant Influence": "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20",
    };
    return classes[principle];
  };

  const handleCopyToClipboard = () => {
    const fullEmail = `Subject: ${generatedSubject}\n\n${generatedBody}`;
    navigator.clipboard.writeText(fullEmail);
    setCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const hasAllRequiredVariables = template.variables
    .filter(v => v.required)
    .every(v => variables[v.key] && variables[v.key].trim() !== "");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-7xl max-h-[95vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-2xl font-heading">{template.name}</DialogTitle>
              <Badge className={`${getPrincipleBadgeClass(template.influencePrinciple)} mt-2`}>
                {template.influencePrinciple}
              </Badge>
            </div>
          </div>
          <div className="mt-3 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm font-medium text-foreground mb-1">Why This Works:</p>
            <p className="text-sm text-muted-foreground">{template.psychologyExplanation}</p>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-6 flex-1 overflow-hidden">
          {/* Variable Editor */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">Customize Your Email</h3>
            <ScrollArea className="h-[calc(95vh-280px)]">
              <EmailVariableEditor
                template={template}
                variables={variables}
                onVariablesChange={setVariables}
                preSelectedClient={preSelectedClient}
                preSelectedOpportunity={preSelectedOpportunity}
              />
            </ScrollArea>
          </div>

          {/* Live Preview */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-heading font-semibold text-foreground">Live Preview</h3>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyToClipboard}
                disabled={!hasAllRequiredVariables}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Email
                  </>
                )}
              </Button>
            </div>
            
            <ScrollArea className="h-[calc(95vh-280px)]">
              <div className="border rounded-lg p-6 bg-card space-y-4">
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2">Subject:</p>
                  <p className="font-medium text-foreground">{generatedSubject}</p>
                </div>
                
                <Separator />
                
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2">Body:</p>
                  <div className="whitespace-pre-wrap text-sm text-foreground">
                    {generatedBody}
                  </div>
                </div>
              </div>
            </ScrollArea>

            {!hasAllRequiredVariables && (
              <p className="text-sm text-muted-foreground italic">
                * Fill in all required fields to copy the email
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-4 border-t">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
          <Button
            onClick={() => {
              toast.success("Template saved! (Campaign creation coming in Phase 3)");
              onOpenChange(false);
            }}
            disabled={!hasAllRequiredVariables}
          >
            Save to Campaign
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
