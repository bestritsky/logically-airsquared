import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { emailUpdateSchema } from "@/lib/emailValidation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Copy, Save, Trash2 } from "lucide-react";

type InfluencePrinciple = 
  | 'Reciprocation'
  | 'Liking'
  | 'Social Proof'
  | 'Authority'
  | 'Scarcity'
  | 'Commitment/Consistency'
  | 'Unity'
  | 'Instant Influence';

type EmailStatus = 'Draft' | 'Ready' | 'Exported' | 'Archived';

interface GeneratedEmail {
  id: string;
  client_id: number;
  opportunity_id: string | null;
  contact_name: string;
  contact_email: string;
  subject: string;
  body: string;
  influence_principle: InfluencePrinciple;
  template_variables: Record<string, string>;
  status: EmailStatus;
  notes: string | null;
  created_at: string;
  updated_at: string;
  exported_at: string | null;
  clients?: {
    id: number;
    name: string;
    sector: string;
  };
  opportunities?: {
    id: string;
    name: string;
  } | null;
}

interface GeneratedEmailViewerProps {
  email: GeneratedEmail | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onEmailUpdated?: () => void;
}

export const GeneratedEmailViewer = ({
  email,
  open,
  onOpenChange,
  onEmailUpdated,
}: GeneratedEmailViewerProps) => {
  const queryClient = useQueryClient();
  const [editedSubject, setEditedSubject] = useState("");
  const [editedBody, setEditedBody] = useState("");
  const [editedNotes, setEditedNotes] = useState("");
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  useEffect(() => {
    if (email) {
      setEditedSubject(email.subject);
      setEditedBody(email.body);
      setEditedNotes(email.notes || "");
    }
  }, [email]);

  const updateMutation = useMutation({
    mutationFn: async () => {
      if (!email) return;

      // Validate before updating
      const validation = emailUpdateSchema.safeParse({
        subject: editedSubject,
        body: editedBody,
        notes: editedNotes || null
      });
      
      if (!validation.success) {
        throw new Error(validation.error.errors[0].message);
      }

      const { error } = await supabase
        .from("generated_emails")
        .update(validation.data)
        .eq("id", email.id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["generated-emails"] });
      toast.success("Email updated successfully!");
      onEmailUpdated?.();
    },
    onError: (error: Error) => {
      toast.error(`Failed to update email: ${error.message}`);
    },
  });

  const statusMutation = useMutation({
    mutationFn: async (newStatus: EmailStatus) => {
      if (!email) return;
      const { error } = await supabase
        .from("generated_emails")
        .update({
          status: newStatus,
          exported_at: newStatus === "Exported" ? new Date().toISOString() : email.exported_at,
        })
        .eq("id", email.id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["generated-emails"] });
      toast.success("Status updated successfully!");
      onEmailUpdated?.();
    },
    onError: (error: Error) => {
      toast.error(`Failed to update status: ${error.message}`);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async () => {
      if (!email) return;
      const { error } = await supabase
        .from("generated_emails")
        .delete()
        .eq("id", email.id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["generated-emails"] });
      toast.success("Email deleted successfully!");
      onOpenChange(false);
      onEmailUpdated?.();
    },
    onError: (error: Error) => {
      toast.error(`Failed to delete email: ${error.message}`);
    },
  });

  const handleCopy = () => {
    if (!email) return;
    const text = `Subject: ${editedSubject}\n\n${editedBody}`;
    navigator.clipboard.writeText(text);
    toast.success("Email copied to clipboard!");
  };

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

  const getStatusBadgeClass = (status: EmailStatus) => {
    const classes: Record<EmailStatus, string> = {
      "Draft": "bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20",
      "Ready": "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
      "Exported": "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
      "Archived": "bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20",
    };
    return classes[status];
  };

  if (!email) return null;

  const hasUnsavedChanges =
    editedSubject.trim() !== email.subject.trim() ||
    editedBody.trim() !== email.body.trim() ||
    (editedNotes.trim() || null) !== email.notes;

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-xl">Email Details</DialogTitle>
              <Badge className={getPrincipleBadgeClass(email.influence_principle)}>
                {email.influence_principle}
              </Badge>
            </div>
            <div className="text-sm text-muted-foreground mt-2">
              Created: {new Date(email.created_at).toLocaleString()} • 
              Updated: {new Date(email.updated_at).toLocaleString()}
              {email.exported_at && ` • Exported: ${new Date(email.exported_at).toLocaleString()}`}
            </div>
          </DialogHeader>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
            {/* Left Column - Email Content */}
            <div className="lg:col-span-2 space-y-4">
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  value={editedSubject}
                  onChange={(e) => setEditedSubject(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="body">Body</Label>
                <Textarea
                  id="body"
                  value={editedBody}
                  onChange={(e) => setEditedBody(e.target.value)}
                  className="mt-1 min-h-[400px] font-mono text-sm"
                />
              </div>

              <div>
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={editedNotes}
                  onChange={(e) => setEditedNotes(e.target.value)}
                  placeholder="Add internal notes about this email..."
                  className="mt-1 min-h-[100px]"
                />
              </div>
            </div>

            {/* Right Column - Metadata */}
            <div className="space-y-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopy}
                className="w-full"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy to Clipboard
              </Button>

              <div className="bg-muted/30 p-4 rounded-lg space-y-3">
                <div>
                  <h4 className="text-sm font-semibold mb-2">Contact Information</h4>
                  <div className="text-sm space-y-1">
                    <div className="font-medium">{email.contact_name}</div>
                    <div className="text-muted-foreground">{email.contact_email}</div>
                  </div>
                </div>

                {email.clients && (
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Client</h4>
                    <div className="text-sm space-y-1">
                      <div className="font-medium">{email.clients.name}</div>
                      <div className="text-muted-foreground">{email.clients.sector}</div>
                    </div>
                  </div>
                )}

                {email.opportunities && (
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Opportunity</h4>
                    <div className="text-sm font-medium">{email.opportunities.name}</div>
                  </div>
                )}

                <div>
                  <h4 className="text-sm font-semibold mb-2">Status</h4>
                  <Select
                    value={email.status}
                    onValueChange={(value: EmailStatus) => statusMutation.mutate(value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Draft">Draft</SelectItem>
                      <SelectItem value="Ready">Ready</SelectItem>
                      <SelectItem value="Exported">Exported</SelectItem>
                      <SelectItem value="Archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="bg-muted/30 p-4 rounded-lg">
                <h4 className="text-sm font-semibold mb-2">Template Variables</h4>
                <div className="text-xs font-mono bg-background p-3 rounded border max-h-[200px] overflow-y-auto">
                  {Object.entries(email.template_variables).length > 0 ? (
                    <pre className="whitespace-pre-wrap break-words">
                      {JSON.stringify(email.template_variables, null, 2)}
                    </pre>
                  ) : (
                    <div className="text-muted-foreground">No variables used</div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <DialogFooter className="flex-row items-center justify-between gap-3 pt-6 border-t">
            <Button
              variant="destructive"
              onClick={() => setShowDeleteDialog(true)}
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete
            </Button>
            <div className="flex gap-2 ml-auto">
              <Button variant="outline" onClick={() => onOpenChange(false)}>
                Close
              </Button>
              <Button
                onClick={() => updateMutation.mutate()}
                disabled={!hasUnsavedChanges || updateMutation.isPending}
              >
                <Save className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Email?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete this generated email. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteMutation.mutate()}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
