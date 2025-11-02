import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { influencePrincipleTemplates, EmailTemplate, InfluencePrinciple } from "@/data/emailTemplates";
import { EmailTemplatePreview } from "./EmailTemplatePreview";
import { Info } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface EmailTemplateLibraryProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  preSelectedClient?: { id: number; name: string };
  preSelectedOpportunity?: { id: string; name: string };
  campaignData?: any;
}

export const EmailTemplateLibrary = ({
  open,
  onOpenChange,
  preSelectedClient,
  preSelectedOpportunity,
  campaignData,
}: EmailTemplateLibraryProps) => {
  const [selectedTemplate, setSelectedTemplate] = useState<EmailTemplate | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterPrinciple, setFilterPrinciple] = useState<InfluencePrinciple | "All">("All");

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

  const filteredTemplates = influencePrincipleTemplates.filter((template) => {
    const matchesSearch = 
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.psychologyExplanation.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrinciple = filterPrinciple === "All" || template.influencePrinciple === filterPrinciple;
    return matchesSearch && matchesPrinciple;
  });

  const principles: (InfluencePrinciple | "All")[] = [
    "All",
    "Reciprocation",
    "Liking",
    "Social Proof",
    "Authority",
    "Scarcity",
    "Commitment/Consistency",
    "Unity",
    "Instant Influence",
  ];

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading">Email Template Library</DialogTitle>
            <p className="text-muted-foreground mt-2">
              Select a template based on Cialdini's 8 Principles of Influence
            </p>
          </DialogHeader>

          {/* Search and Filter */}
          <div className="space-y-4 mt-4">
            <Input
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-md"
            />
            
            <div className="flex flex-wrap gap-2">
              {principles.map((principle) => (
                <Button
                  key={principle}
                  variant={filterPrinciple === principle ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterPrinciple(principle)}
                  className="text-xs"
                >
                  {principle}
                </Button>
              ))}
            </div>
          </div>

          {/* Template Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {filteredTemplates.map((template) => (
              <div
                key={template.id}
                className="border rounded-lg p-4 hover:shadow-md transition-shadow bg-card"
              >
                <div className="space-y-3">
                  <Badge className={getPrincipleBadgeClass(template.influencePrinciple)}>
                    {template.influencePrinciple}
                  </Badge>
                  
                  <h3 className="font-heading font-semibold text-foreground">
                    {template.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {template.psychologyExplanation}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="px-2 py-1 bg-muted rounded">{template.useCase}</span>
                    {template.successRate && (
                      <span className="font-medium">Success: {template.successRate}%</span>
                    )}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full"
                        >
                          <Info className="w-4 h-4 mr-1" />
                          Why This Works
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-96">
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm font-semibold mb-1">Psychology:</p>
                            <p className="text-sm text-muted-foreground">{template.psychologyExplanation}</p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold mb-1">When to Use:</p>
                            <p className="text-sm text-muted-foreground">{template.whenToUse}</p>
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                    
                    <Button
                      onClick={() => setSelectedTemplate(template)}
                      size="sm"
                      className="w-full"
                    >
                      Use Template
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredTemplates.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              No templates found. Try adjusting your search or filters.
            </div>
          )}
        </DialogContent>
      </Dialog>

      {selectedTemplate && (
        <EmailTemplatePreview
          template={selectedTemplate}
          open={!!selectedTemplate}
          onOpenChange={(open) => !open && setSelectedTemplate(null)}
          preSelectedClient={preSelectedClient}
          preSelectedOpportunity={preSelectedOpportunity}
          campaignData={campaignData}
        />
      )}
    </>
  );
};
