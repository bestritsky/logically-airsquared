import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";

const ClientDetails = () => {
  const { clientId } = useParams();
  const navigate = useNavigate();

  // For now, only Gaston County (ID 4) has intelligence data
  if (clientId !== "4") {
    return (
      <Layout>
        <div className="container mx-auto p-6">
          <Button onClick={() => navigate("/clients")} variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Clients
          </Button>
          <Card>
            <CardHeader>
              <CardTitle>No Intelligence Data Available</CardTitle>
              <CardDescription>
                Intelligence profiles are only available for select clients.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto p-6 max-w-6xl">
        <Button onClick={() => navigate("/clients")} variant="ghost" className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Clients
        </Button>

        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-2">Gaston County Government</h1>
          <p className="text-muted-foreground text-lg">P-RISM Strategic Intelligence Analysis</p>
          <div className="flex gap-2 mt-3">
            <Badge variant="secondary">Confidence: 85%</Badge>
            <Badge variant="outline">Updated: November 2, 2025</Badge>
          </div>
        </div>

        <Accordion type="multiple" className="space-y-4">
          {/* Executive Summary */}
          <AccordionItem value="executive-summary" className="border rounded-lg px-4">
            <AccordionTrigger className="text-xl font-semibold">
              Executive Summary & Bottom Line Up Front
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Understanding Gaston County Government: A Strategic Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="prose prose-sm max-w-none">
                    <p className="text-sm leading-relaxed">
                      Gaston County Government represents a fascinating study in modern conservative governance—a professionally managed, Republican-controlled local government that has masterfully balanced fiscal discipline with operational excellence while projecting an image of innovation that sometimes exceeds its operational reality. Understanding this organization requires looking beyond the polished communications and recognizing the deep structural dynamics that drive decision-making.
                    </p>

                    <p className="text-sm leading-relaxed">
                      At its core, Gaston County has staked its entire political identity on maintaining the <strong>lowest tax rate since 1970</strong>—currently 59.9 cents per $100 of assessed value. This is not merely a fiscal policy choice; it is the foundation of their brand, the measure by which leadership success is judged, and the non-negotiable constraint that shapes every strategic decision. Chairman Chad Brown and the five-member Republican Board of Commissioners have built their political careers on this achievement, and they will defend it against virtually any challenge. This tax rate commitment creates both predictability and rigidity: proposals that require new county funding face nearly insurmountable obstacles, while grant-funded or revenue-positive initiatives find a receptive audience.
                    </p>

                    <p className="text-sm leading-relaxed">
                      The organization's internal culture reveals an interesting paradox. Every senior executive over the past five years has been promoted from within, creating a talent development system that County Manager Matt Rhoten—who himself rose from intern to the top position—proudly champions. This internal promotion culture fosters loyalty and institutional knowledge, but it also creates dangerous insularity. External ideas, no matter how sound, face unconscious "not invented here" resistance. The organization values what it already knows and trusts its own people far more than outside expertise.
                    </p>

                    <p className="text-sm leading-relaxed">
                      Perhaps most striking is the sophisticated communications operation led by Adam Gaub, an award-winning former investigative journalist who has built a nationally recognized communications program. Their true crime documentary series "Gaston Unsolved" won national awards, their podcast reached top rankings, and their social media presence rivals much larger jurisdictions. However, this creates a subtle but significant risk: their communications capabilities have outpaced their operational capacity. They have built a "model of excellence" narrative that sets expectations their day-to-day operations sometimes struggle to meet. When the polished exterior meets operational reality—particularly during crisis—the reputational damage is amplified precisely because the expectations were so high.
                    </p>

                    <p className="text-sm leading-relaxed">
                      The financial constraints are real and growing. With an estimated $600 million in deferred school facility needs alone and political commitments preventing tax increases, the county is "absorbing" increased costs through efficiency gains and reallocation. This approach works in the short term but is fundamentally unsustainable. Our analysis suggests a 65% probability of reaching a crisis point within 5-10 years, likely triggered by either a bond rating downgrade, major infrastructure failure, or loss of a competitive economic development opportunity due to infrastructure constraints. When that moment arrives, leadership will face an impossible choice between their political brand (low taxes) and service delivery reality.
                    </p>

                    <p className="text-sm leading-relaxed">
                      Leadership succession presents another vulnerability. Matt Rhoten, despite his deep institutional knowledge, is clearly ambitious. His recent completion of Harvard Kennedy School's executive program, successful dissertation defense, and adjunct professor role at UNC Charlotte all signal preparation for larger opportunities. We assess only a 35% probability he remains in the County Manager position for another decade. Yet no visible succession planning exists, and the internal promotion culture means his replacement will likely come from the existing assistant county manager pool—perpetuating rather than disrupting the insularity.
                    </p>

                    <p className="text-sm leading-relaxed">
                      For those seeking to engage with Gaston County Government, success requires understanding their decision architecture. Economic development proposals that are grant-funded or revenue-positive enjoy 75-80% success probability. Communications and publicity collaborations—where they excel and take pride—achieve 80-90% success rates. However, technology and innovation initiatives requiring county resources face only 35-45% success probability due to cultural resistance despite their rhetorical support for innovation. The key is not whether your proposal has merit, but whether it fits their operational, financial, and political constraints.
                    </p>

                    <p className="text-sm leading-relaxed">
                      The winning formula is clear: lead with fiscal responsibility, frame proposals as proven best practices from peer jurisdictions, provide comprehensive risk mitigation, and be patient with their methodical 4-8 month decision cycles. Those who understand and respect these organizational dynamics can find willing partners. Those who ignore them will encounter polite resistance that never quite crystallizes into clear rejection—just endless delays and requests for additional information.
                    </p>
                  </div>
                  
                  <div className="space-y-3 mt-6">
                    <h4 className="font-semibold text-sm">Success Probability by Engagement Type:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                        <span className="text-sm">Economic Development Proposals</span>
                        <Badge className="bg-green-600">75-80%</Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                        <span className="text-sm">Communications/Publicity Collaborations</span>
                        <Badge className="bg-green-600">80-90%</Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                        <span className="text-sm">Grant-Funded Programs</span>
                        <Badge className="bg-green-600">85-90%</Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                        <span className="text-sm">Partnership Programs (County Resources)</span>
                        <Badge className="bg-yellow-600">45-55%</Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                        <span className="text-sm">Technology/Innovation Initiatives</span>
                        <Badge className="bg-orange-600">35-45%</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>

          {/* Critical Findings */}
          <AccordionItem value="critical-findings" className="border rounded-lg px-4">
            <AccordionTrigger className="text-xl font-semibold">
              Top 5 Critical Findings
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5" />
                    1. The Internal Promotion Paradox
                  </CardTitle>
                  <Badge variant="secondary">Confidence: 95%</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed">
                    Every senior executive has been promoted from within over the past 5+ years. While officially framed as "talent development," this creates dangerous insularity and groupthink. Innovation proposals from external sources face unconscious "not invented here" resistance.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5" />
                    2. The Tax Rate Straitjacket
                  </CardTitle>
                  <Badge variant="secondary">Confidence: 90%</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed">
                    The 59.9 cent tax rate—lowest since 1970—is not just fiscal policy, it's <strong>political brand identity</strong>. They will not raise taxes under virtually any circumstances. New programs must be externally funded.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5" />
                    3. The Communications-Operations Gap
                  </CardTitle>
                  <Badge variant="secondary">Confidence: 85%</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed">
                    Their communications capabilities (award-winning podcast, innovative video series) are <strong>more advanced than their actual operational capacity</strong>. This creates reputation risk disguised as reputation management.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                    4. The Infrastructure Time Bomb
                  </CardTitle>
                  <Badge variant="secondary">Confidence: 80%</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed">
                    With $600M+ in estimated school facility needs and resistance to tax increases, they're deferring critical infrastructure maintenance. Timeline to crisis: <strong>5-10 years with 65% probability</strong>.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
                    5. The Succession Vulnerability
                  </CardTitle>
                  <Badge variant="secondary">Confidence: 75%</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed">
                    Matt Rhoten is relatively young and ambitious (Harvard Kennedy School, dissertation, adjunct professor). Probability he remains County Manager for 10+ years: <strong>35%</strong>. No succession planning appears publicly documented.
                  </p>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>

          {/* Organizational Psychology */}
          <AccordionItem value="org-psychology" className="border rounded-lg px-4">
            <AccordionTrigger className="text-xl font-semibold">
              Organizational Psychological Profile
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Big Five Organizational Personality</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Openness to Experience</span>
                      <Badge variant="outline">35th Percentile (LOW-MODERATE)</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Rhetorically open but operationally cautious. Innovation in communications, not core operations.</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Conscientiousness</span>
                      <Badge variant="outline">88th Percentile (VERY HIGH)</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Exceptionally detail-oriented and process-driven. Strong follow-through on commitments.</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Extraversion</span>
                      <Badge variant="outline">72nd Percentile (HIGH)</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Active communicators but extraversion is performative (communications) not substantive (collaboration).</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Agreeableness</span>
                      <Badge variant="outline">42nd Percentile (MODERATE)</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Professional and courteous but territorial about authority and decision-making.</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Emotional Stability</span>
                      <Badge variant="outline">65th Percentile (MODERATE-HIGH)</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Generally stable and predictable. Can become defensive when "model of excellence" narrative is challenged.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Values Hierarchy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Tier 1 Values (Non-Negotiable):</h4>
                    <div className="space-y-2">
                      <div className="p-2 bg-muted/50 rounded">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">Fiscal Responsibility</span>
                          <Badge>30%</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">Tax rate at 59.9 cents, lowest since 1970</p>
                      </div>
                      <div className="p-2 bg-muted/50 rounded">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">Political Stability</span>
                          <Badge>25%</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">All commissioners Republican; no major controversies</p>
                      </div>
                      <div className="p-2 bg-muted/50 rounded">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">Employee Loyalty/Internal Development</span>
                          <Badge>20%</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">Every senior executive promoted from within</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">Tier 2 Values (Important but Negotiable):</h4>
                    <div className="space-y-2">
                      <div className="p-2 bg-muted/50 rounded">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">Reputation Management</span>
                          <Badge variant="secondary">15%</Badge>
                        </div>
                      </div>
                      <div className="p-2 bg-muted/50 rounded">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">Service Delivery</span>
                          <Badge variant="secondary">10%</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>

          {/* Key Personas */}
          <AccordionItem value="personas" className="border rounded-lg px-4">
            <AccordionTrigger className="text-xl font-semibold">
              Leadership Personas (9 Key Players)
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              {/* Matt Rhoten */}
              <Card>
                <CardHeader>
                  <CardTitle>Matthew "Matt" Rhoten - County Manager</CardTitle>
                  <CardDescription>Age: ~35-40 | Decision Cycle: 4-8 months</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Career Path:</h4>
                    <p className="text-xs text-muted-foreground">
                      Intern → Budget Analyst → Budget Director → Financial & Management Services Director → 
                      Assistant County Manager → County Manager
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">Primary Motivations:</h4>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Career Advancement</span>
                        <span className="text-muted-foreground">35%</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Professional Recognition</span>
                        <span className="text-muted-foreground">25%</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Organizational Success</span>
                        <span className="text-muted-foreground">20%</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3 text-green-600" />
                        DO's:
                      </h4>
                      <ul className="text-xs space-y-1 text-muted-foreground">
                        <li>• Lead with comprehensive data</li>
                        <li>• Frame as best practice</li>
                        <li>• Emphasize risk mitigation</li>
                        <li>• Provide multiple options</li>
                        <li>• Document everything</li>
                        <li>• Be patient with his process</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
                        <XCircle className="h-3 w-3 text-red-600" />
                        DON'Ts:
                      </h4>
                      <ul className="text-xs space-y-1 text-muted-foreground">
                        <li>• Don't rush him</li>
                        <li>• Don't bypass the process</li>
                        <li>• Don't question his data</li>
                        <li>• Don't propose tax increases</li>
                        <li>• Don't claim approach is novel</li>
                        <li>• Don't surprise him</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-primary/5 border border-primary/20 rounded p-3">
                    <p className="text-xs font-medium mb-1">Success Probability:</p>
                    <p className="text-xs text-muted-foreground">
                      70% for well-structured proposals with fiscal responsibility, peer validation, and clear risk mitigation
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Chad Brown */}
              <Card>
                <CardHeader>
                  <CardTitle>Chad Brown - Board Chairman</CardTitle>
                  <CardDescription>Age: ~50-55 | Decision Cycle: 1-2 months</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Background:</h4>
                    <p className="text-xs text-muted-foreground">
                      Former professional baseball player, former Mayor of Stanley NC, Territory Manager for Pennsylvania Steel Company, 
                      2024 candidate for NC Secretary of State (lost 51-49%)
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">Primary Motivations:</h4>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Political Advancement</span>
                        <span className="text-muted-foreground">40%</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Conservative Ideology</span>
                        <span className="text-muted-foreground">30%</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Local Reputation</span>
                        <span className="text-muted-foreground">15%</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3 text-green-600" />
                        DO's:
                      </h4>
                      <ul className="text-xs space-y-1 text-muted-foreground">
                        <li>• Lead with fiscal neutrality</li>
                        <li>• Frame as pro-business</li>
                        <li>• Emphasize local control</li>
                        <li>• Be direct and concise</li>
                        <li>• Use conservative language</li>
                        <li>• Provide political cover</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
                        <XCircle className="h-3 w-3 text-red-600" />
                        DON'Ts:
                      </h4>
                      <ul className="text-xs space-y-1 text-muted-foreground">
                        <li>• Don't propose tax increases</li>
                        <li>• Don't use progressive rhetoric</li>
                        <li>• Don't bypass him</li>
                        <li>• Don't question conservative principles</li>
                        <li>• Don't present complex academic arguments</li>
                        <li>• Don't waste his time</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-primary/5 border border-primary/20 rounded p-3">
                    <p className="text-xs font-medium mb-1">Success Probability:</p>
                    <p className="text-xs text-muted-foreground">
                      75% for proposals with fiscal neutrality + economic development + conservative framing
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Adam Gaub */}
              <Card>
                <CardHeader>
                  <CardTitle>Adam Gaub - Communications Director</CardTitle>
                  <CardDescription>Age: ~35-45 | Decision Cycle: 1-3 months</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Background:</h4>
                    <p className="text-xs text-muted-foreground">
                      14 years in journalism (newspapers, WCTI-TV), award-winning creator of "Gaston Unsolved" true crime documentary series, 
                      3CMA award for podcast
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">Primary Motivations:</h4>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Professional Pride/Creative Excellence</span>
                        <span className="text-muted-foreground">40%</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Storytelling Impact</span>
                        <span className="text-muted-foreground">25%</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Career Security</span>
                        <span className="text-muted-foreground">15%</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3 text-green-600" />
                        DO's:
                      </h4>
                      <ul className="text-xs space-y-1 text-muted-foreground">
                        <li>• Lead with the story</li>
                        <li>• Show creative examples</li>
                        <li>• Acknowledge his awards</li>
                        <li>• Be transparent (journalist mindset)</li>
                        <li>• Offer collaboration</li>
                        <li>• Think multi-platform</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
                        <XCircle className="h-3 w-3 text-red-600" />
                        DON'Ts:
                      </h4>
                      <ul className="text-xs space-y-1 text-muted-foreground">
                        <li>• Don't bring PR fluff</li>
                        <li>• Don't bypass his team</li>
                        <li>• Don't expect 24-hour news cycle</li>
                        <li>• Don't pitch boring content</li>
                        <li>• Don't underestimate him</li>
                        <li>• Don't rush without notice</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-primary/5 border border-primary/20 rounded p-3">
                    <p className="text-xs font-medium mb-1">Success Probability:</p>
                    <p className="text-xs text-muted-foreground">
                      85% for well-conceived communications projects meeting quality standards
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Other Key Personas - Abbreviated */}
              <Card>
                <CardHeader>
                  <CardTitle>Other Key Decision Makers</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 border rounded">
                    <h4 className="font-semibold text-sm mb-1">Scott Attaway - Financial & Management Services Director</h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      <strong>CRITICAL GATEKEEPER:</strong> No major initiative happens without his financial blessing. 
                      Success probability with strong financial case: 80% | With weak case: 5%
                    </p>
                    <Badge variant="outline" className="text-xs">Decision Focus: Fiscal Analysis</Badge>
                  </div>

                  <div className="p-3 border rounded">
                    <h4 className="font-semibold text-sm mb-1">Justin Amos - Executive Director of Intergovernmental Relations</h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      <strong>GRANT GURU:</strong> Key to securing external funding. Highly motivated to help with grant-eligible proposals.
                    </p>
                    <Badge variant="outline" className="text-xs">Decision Focus: External Funding</Badge>
                  </div>

                  <div className="p-3 border rounded">
                    <h4 className="font-semibold text-sm mb-1">Ray Maxwell - Executive Director of Capital Projects</h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      Manages $55M+ annual capital portfolio. Faces $600M+ school facility backlog. Only externally funded capital projects likely.
                    </p>
                    <Badge variant="outline" className="text-xs">Decision Focus: Infrastructure</Badge>
                  </div>

                  <div className="p-3 border rounded">
                    <h4 className="font-semibold text-sm mb-1">Vincent Wong - Deputy County Manager</h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      Operational backbone of organization. Likely successor if Rhoten departs.
                    </p>
                    <Badge variant="outline" className="text-xs">Decision Focus: Operations</Badge>
                  </div>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>

          {/* Engagement Strategy */}
          <AccordionItem value="engagement-strategy" className="border rounded-lg px-4">
            <AccordionTrigger className="text-xl font-semibold">
              Strategic Engagement Playbook
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>The Winning Formula</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 p-2 bg-muted/50 rounded">
                      <span className="font-mono text-xs font-semibold text-primary mt-0.5">1.</span>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Build the Business Case (60 days)</p>
                        <p className="text-xs text-muted-foreground">Comprehensive ROI analysis, peer comparisons, risk assessment</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2 p-2 bg-muted/50 rounded">
                      <span className="font-mono text-xs font-semibold text-primary mt-0.5">2.</span>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Secure Grant Funding</p>
                        <p className="text-xs text-muted-foreground">Eliminate or minimize county financial commitment</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2 p-2 bg-muted/50 rounded">
                      <span className="font-mono text-xs font-semibold text-primary mt-0.5">3.</span>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Engage Staff First</p>
                        <p className="text-xs text-muted-foreground">Get buy-in from relevant department heads before formal proposal</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2 p-2 bg-muted/50 rounded">
                      <span className="font-mono text-xs font-semibold text-primary mt-0.5">4.</span>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Present Formal Proposal</p>
                        <p className="text-xs text-muted-foreground">Documented, professional, complete with multiple options</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2 p-2 bg-muted/50 rounded">
                      <span className="font-mono text-xs font-semibold text-primary mt-0.5">5.</span>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Be Patient</p>
                        <p className="text-xs text-muted-foreground">Their 4-8 month decision cycle is real</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2 p-2 bg-muted/50 rounded">
                      <span className="font-mono text-xs font-semibold text-primary mt-0.5">6.</span>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Frame as Best Practice</p>
                        <p className="text-xs text-muted-foreground">Position Gaston County as following leading jurisdictions</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2 p-2 bg-muted/50 rounded">
                      <span className="font-mono text-xs font-semibold text-primary mt-0.5">7.</span>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Provide Implementation Support</p>
                        <p className="text-xs text-muted-foreground">Reduce execution risk for their team</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-primary/10 border border-primary/30 rounded">
                    <p className="text-xs font-semibold mb-1">Expected Timeline:</p>
                    <p className="text-xs text-muted-foreground">6-12 months from initial contact to Board approval</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Common Objections & Responses</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="border-l-4 border-orange-500 pl-3 py-2">
                    <p className="text-sm font-medium mb-1">"We don't have budget capacity for this."</p>
                    <p className="text-xs text-muted-foreground mb-2"><em>Translation:</em> This will require defending to the Board and I'm not confident I can win that fight.</p>
                    <p className="text-xs"><strong>Response:</strong> "What if this were grant-funded? The ROI model shows it pays for itself within 18 months."</p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-3 py-2">
                    <p className="text-sm font-medium mb-1">"I'd need to see how other counties have approached this."</p>
                    <p className="text-xs text-muted-foreground mb-2"><em>Translation:</em> I need political cover and proof this isn't risky.</p>
                    <p className="text-xs"><strong>Response:</strong> "Mecklenburg, Wake, and Guilford counties all implemented similar programs. Here's their documentation."</p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-3 py-2">
                    <p className="text-sm font-medium mb-1">"This sounds like it will cost taxpayers money."</p>
                    <p className="text-xs text-muted-foreground mb-2"><em>Translation:</em> I need to know the fiscal impact before considering anything else.</p>
                    <p className="text-xs"><strong>Response:</strong> "This is entirely grant-funded with no county match required."</p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-3 py-2">
                    <p className="text-sm font-medium mb-1">"I'm not sure this is newsworthy for our audience."</p>
                    <p className="text-xs text-muted-foreground mb-2"><em>Translation:</em> This doesn't meet quality threshold or citizen interest test.</p>
                    <p className="text-xs"><strong>Response:</strong> "What if we approached it differently? What angle would make this compelling?"</p>
                  </div>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>

          {/* Stress Patterns */}
          <AccordionItem value="stress-patterns" className="border rounded-lg px-4">
            <AccordionTrigger className="text-xl font-semibold">
              Stress Response Patterns
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Under Moderate Stress</CardTitle>
                  <CardDescription>Budget pressures, service demands</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
                    <li>Increase efficiency rhetoric ("doing more with less")</li>
                    <li>Look for grant funding to avoid hard choices</li>
                    <li>Delay capital projects</li>
                    <li>Absorb costs through reallocation</li>
                    <li>Maintain public messaging that everything is under control</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Under High Stress</CardTitle>
                  <CardDescription>Infrastructure failure, major controversy</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
                    <li>Defensive communications posture</li>
                    <li>Blame external factors (state funding, federal policies)</li>
                    <li>Form task forces/committees to create appearance of action</li>
                    <li>Look for scapegoats (typically lower-level employees)</li>
                    <li>Protect senior leadership from accountability</li>
                    <li>May break fiscal commitments but will frame as "forced by circumstances"</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recovery Pattern</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
                    <li>Return to conservative baseline quickly</li>
                    <li>Implement just enough change to prevent recurrence</li>
                    <li>Declare victory and move on</li>
                    <li>Update policies/procedures but not underlying culture</li>
                    <li>Use crisis as proof of need for fiscal conservatism</li>
                  </ul>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Layout>
  );
};

export default ClientDetails;
