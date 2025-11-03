import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { EmailTemplate, InfluencePrinciple } from "@/data/emailTemplates";
import { EmailVariableEditor } from "./EmailVariableEditor";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSaveGeneratedEmail } from "@/hooks/useSaveGeneratedEmail";
import { useClients } from "@/hooks/useClients";
import { useOpportunities } from "@/hooks/useOpportunities";

interface EmailTemplatePreviewProps {
  template: EmailTemplate;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  preSelectedClient?: { id: number; name: string };
  preSelectedOpportunity?: { id: string; name: string };
  campaignData?: any;
}

export const EmailTemplatePreview = ({
  template,
  open,
  onOpenChange,
  preSelectedClient,
  preSelectedOpportunity,
  campaignData,
}: EmailTemplatePreviewProps) => {
  const navigate = useNavigate();
  const [variables, setVariables] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);
  const [editedSubject, setEditedSubject] = useState("");
  const [editedBody, setEditedBody] = useState("");
  const [selectedClient, setSelectedClient] = useState<{ id: number; name: string } | undefined>(preSelectedClient);
  const [selectedOpportunity, setSelectedOpportunity] = useState<{ id: string; name: string } | undefined>(preSelectedOpportunity);
  
  const saveEmailMutation = useSaveGeneratedEmail();
  const { data: clients } = useClients();
  const { data: opportunities } = useOpportunities();

  // Filter opportunities by selected client
  const filteredOpportunities = opportunities?.filter(
    opp => selectedClient && opp.client_id === selectedClient.id
  );

  const substituteVariables = (text: string, vars: Record<string, string>) => {
    return text.replace(/\{(\w+)\}/g, (match, key) => vars[key] || match);
  };

  // Update edited fields when variables change
  useEffect(() => {
    setEditedSubject(substituteVariables(template.subject, variables));
    setEditedBody(substituteVariables(template.body, variables));
  }, [variables, template]);

  const generatedSubject = editedSubject;
  const generatedBody = editedBody;

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

  const handleClientChange = (clientId: string) => {
    const client = clients?.find(c => c.id === parseInt(clientId));
    setSelectedClient(client ? { id: client.id, name: client.name } : undefined);
    setSelectedOpportunity(undefined); // Reset opportunity when client changes
  };

  const handleOpportunityChange = (opportunityId: string) => {
    const opportunity = filteredOpportunities?.find(o => o.id === opportunityId);
    setSelectedOpportunity(opportunity ? { id: opportunity.id, name: opportunity.name } : undefined);
  };

  const handleSaveEmail = async () => {
    if (!selectedClient) {
      toast.error("Please select a client");
      return;
    }

    await saveEmailMutation.mutateAsync({
      clientId: selectedClient.id,
      opportunityId: selectedOpportunity?.id,
      templateId: template.id,
      contactName: variables.contact_name || '',
      contactEmail: variables.contact_email || '',
      subject: editedSubject,
      body: editedBody,
      influencePrinciple: template.influencePrinciple,
      templateVariables: variables,
    });
    
    onOpenChange(false);
    navigate('/emails');
  };

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

        <div className="grid grid-cols-2 gap-4 pb-4 border-b">
          <div className="space-y-2">
            <Label htmlFor="client-select" className="text-sm font-medium">
              Client <span className="text-destructive">*</span>
            </Label>
            <Select
              value={selectedClient?.id.toString()}
              onValueChange={handleClientChange}
            >
              <SelectTrigger id="client-select">
                <SelectValue placeholder="Select a client..." />
              </SelectTrigger>
              <SelectContent>
                {clients?.map(client => (
                  <SelectItem key={client.id} value={client.id.toString()}>
                    {client.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="opportunity-select" className="text-sm font-medium">
              Opportunity (Optional)
            </Label>
            <Select
              value={selectedOpportunity?.id}
              onValueChange={handleOpportunityChange}
              disabled={!selectedClient}
            >
              <SelectTrigger id="opportunity-select">
                <SelectValue placeholder={selectedClient ? "Select an opportunity..." : "Select a client first"} />
              </SelectTrigger>
              <SelectContent>
                {filteredOpportunities?.map(opp => (
                  <SelectItem key={opp.id} value={opp.id}>
                    {opp.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 flex-1 overflow-hidden">
          {/* Variable Editor */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">Customize Your Email</h3>
            <ScrollArea className="h-[calc(95vh-280px)]">
              <EmailVariableEditor
                template={template}
                variables={variables}
                onVariablesChange={setVariables}
                preSelectedClient={selectedClient}
                preSelectedOpportunity={selectedOpportunity}
                campaignData={campaignData}
              />
            </ScrollArea>
          </div>

          {/* Live Editable Preview */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-heading font-semibold text-foreground">Live Editable Preview</h3>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyToClipboard}
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
                  <Label htmlFor="subject" className="text-xs font-medium text-muted-foreground mb-2">
                    Subject:
                  </Label>
                  <Input
                    id="subject"
                    value={editedSubject}
                    onChange={(e) => setEditedSubject(e.target.value)}
                    className="font-medium mt-2"
                  />
                </div>
                
                <Separator />
                
                <div>
                  <Label htmlFor="body" className="text-xs font-medium text-muted-foreground mb-2">
                    Body:
                  </Label>
                  <Textarea
                    id="body"
                    value={editedBody}
                    onChange={(e) => setEditedBody(e.target.value)}
                    className="min-h-[400px] text-sm mt-2 whitespace-pre-wrap"
                  />
                </div>
              </div>
            </ScrollArea>

          </div>
        </div>

        <div className="flex justify-end gap-2 pt-4 border-t">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
          <Button
            onClick={handleSaveEmail}
            disabled={saveEmailMutation.isPending}
          >
            {saveEmailMutation.isPending ? "Saving..." : "Save Email"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
