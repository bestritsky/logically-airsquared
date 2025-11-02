import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle } from "lucide-react";

export const mecklenburgIntelligence = {
  header: {
    name: "MECKLENBURG COUNTY GOVERNMENT",
    subtitle: "Complete Organizational & Leadership Psychological Profiling - Charlotte, NC",
    metrics: [
      { label: "Win Rate", value: "70%", size: "3xl" },
      { label: "Deal Size", value: "$300K-500K", size: "2xl" },
      { label: "Timeline", value: "12-18 mo", size: "3xl" },
      { label: "Confidence", value: "85-90%", size: "3xl" },
      { label: "Key Personas", value: "12", size: "3xl" },
    ],
  },
  
  sections: (
    <>
      {/* Executive Summary */}
      <AccordionItem value="executive-summary" className="border rounded-lg px-4">
        <AccordionTrigger className="text-xl font-semibold">
          Executive Summary & Bottom Line Up Front
        </AccordionTrigger>
        <AccordionContent className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Understanding Mecklenburg County: Strategic Intelligence Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-sm max-w-none">
                <p className="text-sm leading-relaxed">
                  <strong>Mecklenburg County is a professionally-managed, highly-credentialed, data-driven government organization currently navigating a significant leadership transition while maintaining strong financial discipline and expanding equity-focused services.</strong> The organization exhibits a powerful internal promotion culture that simultaneously represents both its greatest strength (institutional continuity, loyalty, expertise) and its most significant vulnerability (insularity, groupthink risk, innovation resistance).
                </p>

                <p className="text-sm leading-relaxed">
                  <strong>For Partners & Stakeholders:</strong> This organization responds best to data-backed proposals that align with Board priorities, emphasize measurable outcomes, demonstrate fiscal responsibility, and advance racial equity. They value long-term relationships over transactional interactions, prefer collaborative partnerships over top-down expertise, and require extensive stakeholder engagement processes. Success requires patience, relationship-building, and understanding that while they move deliberately on new initiatives, they execute exceptionally well once committed.
                </p>

                <p className="text-sm leading-relaxed">
                  <strong>Critical Insight:</strong> The transition from 11-year County Manager Dena Diorio to career employee Mike Bryant represents both continuity and change. While operations remain stable, Bryant is actively reshaping his executive team (replacing one deputy, bringing in two external hires for deputy roles) while maintaining two longtime internal deputies. This signals openness to outside perspectives within a fundamentally insider culture—a narrow window for external partners to establish influence.
                </p>

                <h4 className="font-semibold text-sm mt-6">Organization Overview:</h4>
                <ul className="text-sm space-y-1">
                  <li><strong>Size:</strong> 6,000+ employees | $2.5B annual budget | 1.1-1.2M residents</li>
                  <li><strong>Leadership:</strong> Mike Bryant, County Manager (promoted internally April 2025)</li>
                  <li><strong>Governance:</strong> 9-member Board of County Commissioners (all Democrats)</li>
                  <li><strong>Financial Strength:</strong> AAA bond rating (34+ consecutive years)</li>
                  <li><strong>Strategic Focus:</strong> Economic mobility, education, health equity, affordable housing, workforce development, racial equity</li>
                </ul>
              </div>
              
              <div className="space-y-3 mt-6">
                <h4 className="font-semibold text-sm">Success Probability by Engagement Type:</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                    <span className="text-sm">Economic Development Partnership</span>
                    <Badge className="bg-green-600">70-80%</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                    <span className="text-sm">Nonprofit Grant Funding (Established Org)</span>
                    <Badge className="bg-green-600">65-75%</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                    <span className="text-sm">Vendor/Service Provider (Proven Track Record)</span>
                    <Badge className="bg-yellow-600">60-70%</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                    <span className="text-sm">Strategic Partnership with External Funding</span>
                    <Badge className="bg-yellow-600">55-65%</Badge>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                    <span className="text-sm">New Organization Grant Request</span>
                    <Badge className="bg-orange-600">35-45%</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AccordionContent>
      </AccordionItem>

      {/* Top 10 Critical Findings */}
      <AccordionItem value="critical-findings" className="border rounded-lg px-4">
        <AccordionTrigger className="text-xl font-semibold">
          Top 10 Critical Findings
        </AccordionTrigger>
        <AccordionContent className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5" />
                1. The Internal Promotion Paradigm
              </CardTitle>
              <Badge variant="secondary">Confidence: 95%</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed">
                Every finalist for County Manager was an internal employee. This wasn't an accident—it's organizational DNA. Mecklenburg County deeply believes in growing its own leaders. This creates exceptional institutional knowledge and loyalty but introduces groupthink and innovation resistance risks. Mike Bryant's 22-year tenure exemplifies this: he knows every budget line, every stakeholder relationship, every operational process. He also shares the organizational blind spots.
              </p>
              <p className="text-sm leading-relaxed mt-2 font-semibold">
                Implication: External partners must position themselves as enablers of internal expertise, never as competitors to internal knowledge. The framing is everything: "We can help amplify what you're already doing brilliantly" works; "We have a better approach" fails.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5" />
                2. Data-Driven to a Fault
              </CardTitle>
              <Badge variant="secondary">Confidence: 92%</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed">
                This organization won the 2024 ASPA Organizational Leadership Award for strategic planning and performance measurement. They've received the Distinguished Budget Presentation Award for 34+ consecutive years. They don't just value data—they worship it. Every proposal needs quantitative evidence, comparison metrics, and performance indicators.
              </p>
              <p className="text-sm leading-relaxed mt-2 font-semibold">
                Implication: Never pitch without data. Even great ideas fail without statistical backing. Conversely, mediocre ideas with strong data backing can succeed. Their appetite for measurement and evaluation is nearly infinite.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5" />
                3. The Equity Commitment is Genuine But Capacity-Limited
              </CardTitle>
              <Badge variant="secondary">Confidence: 88%</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed">
                Reducing racial disparities is a genuine Board priority, reflected in budget allocations and program design. However, the gap between commitment and capacity is real. With limited resources and growing demands, equity initiatives compete with service delivery maintenance. They want to do more but face fiscal constraints.
              </p>
              <p className="text-sm leading-relaxed mt-2 font-semibold">
                Implication: Equity-focused proposals that come with external funding or demonstrate clear ROI on equity investments have highest probability of approval. Don't assume equity commitment equals unlimited budget flexibility.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-blue-500 mt-0.5" />
                4. Mike Bryant is Building HIS Team, Not Continuing Diorio's
              </CardTitle>
              <Badge variant="secondary">Confidence: 85%</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed">
                Within 100 days, Bryant replaced Deputy County Manager Anthony Trotman (10-year veteran) and brought in two external executives (Attreed from Virginia, Campbell returning from Florida). He retained two longtime deputies (Johnson, Ramos). This is purposeful team architecture: maintain institutional knowledge while injecting fresh perspectives.
              </p>
              <p className="text-sm leading-relaxed mt-2 font-semibold">
                Implication: Bryant is more open to external partnerships and new approaches than his internal promotion might suggest. However, he's building credibility with the Board and won't take unnecessary risks in year one. The sweet spot: proposals that are innovative but not radically disruptive.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-green-500 mt-0.5" />
                5. The Board-Manager Dynamic is Collaborative, Not Adversarial
              </CardTitle>
              <Badge variant="secondary">Confidence: 90%</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed">
                The Board unanimously selected Bryant and praised his receptiveness to feedback. The Board sets broad policy priorities; the Manager implements with wide operational discretion. This is a healthy council-manager relationship where the Board trusts professional staff competence.
              </p>
              <p className="text-sm leading-relaxed mt-2 font-semibold">
                Implication: Pitches should target County Manager's office for operational details but acknowledge Board priorities explicitly. The Manager won't advance proposals that don't align with Board vision, regardless of technical merit.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                6. Revenue Growth is Slowing While Expenses Accelerate
              </CardTitle>
              <Badge variant="secondary">Confidence: 92%</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed">
                After robust post-pandemic sales tax growth, projections now show &lt;3% annual revenue growth while expenses (healthcare, salaries, services) grow faster. The FY2026 budget reflects this tension: maintaining services while protecting fund balance. Tax rate increases are politically difficult.
              </p>
              <p className="text-sm leading-relaxed mt-2 font-semibold">
                Implication: Proposals requiring ongoing County funding face higher scrutiny than ever. One-time expenditures funded through grants or external sources have significantly higher approval probability. ROI justification is critical.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-purple-500 mt-0.5" />
                7. Geographic Equity Drives Service Location Decisions
              </CardTitle>
              <Badge variant="secondary">Confidence: 87%</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed">
                The "Bringing Mecklenburg County to You" initiative places services in underserved areas. Two Community Resource Centers consolidate services in high-need neighborhoods. This isn't just public relations—it's operational strategy.
              </p>
              <p className="text-sm leading-relaxed mt-2 font-semibold">
                Implication: Partners proposing services or facilities should consider geographic distribution. North and East Mecklenburg County receive priority attention. Proposals serving these areas gain advantage.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
                8. The Communications-Reality Gap
              </CardTitle>
              <Badge variant="secondary">Confidence: 75%</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed">
                Mecklenburg County's communications are sophisticated: award-winning podcast, strong social media presence, innovative public engagement. These communications occasionally create expectations that operations must then fulfill. The brand ("model of excellence") sometimes outpaces operational capacity.
              </p>
              <p className="text-sm leading-relaxed mt-2 font-semibold">
                Implication: Don't assume operational capacity matches communications polish. Direct conversations with operational staff often reveal more realistic timelines and capacity constraints than public communications suggest.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-blue-500 mt-0.5" />
                9. They Value Relationships Over Transactions
              </CardTitle>
              <Badge variant="secondary">Confidence: 90%</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed">
                Review of partnership patterns shows sustained, multi-year relationships with organizations like CPCC, Arts & Science Council, and numerous nonprofits. They don't chase one-off deals—they build institutional partnerships. Relationship investment pays long-term dividends.
              </p>
              <p className="text-sm leading-relaxed mt-2 font-semibold">
                Implication: First interactions rarely yield immediate wins. Strategy should be relationship-building over 12-18 months, demonstrating value through small collaborations before proposing major initiatives. Patience is competitive advantage.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-green-500 mt-0.5" />
                10. Unanimous Decisions Signal Deep Consensus
              </CardTitle>
              <Badge variant="secondary">Confidence: 95%</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed">
                Mike Bryant's selection was unanimous. Board votes on major initiatives typically show unity. This all-Democrat Board operates through consensus-building rather than partisan division. When disagreements exist, they're resolved in closed sessions or work sessions before public votes.
              </p>
              <p className="text-sm leading-relaxed mt-2 font-semibold">
                Implication: By the time an item reaches public Board agenda, the outcome is usually predetermined. Influencing decisions requires engaging during budget development cycles, Board retreats, or committee meetings—not during formal votes. The real decisions happen in the process, not the vote.
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
                  <Badge variant="outline">70th Percentile (MODERATE-HIGH)</Badge>
                </div>
                <p className="text-xs text-muted-foreground">Willing to try innovative programs (MECK Pre-K), receptive to technology, brings in occasional external expertise, but innovation must be proven elsewhere first.</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Conscientiousness</span>
                  <Badge variant="outline">95th Percentile (EXTREMELY HIGH)</Badge>
                </div>
                <p className="text-xs text-muted-foreground">34+ years Distinguished Budget Award, AAA bond rating, strategic planning framework. Will NOT cut corners or rush processes. Values thoroughness over speed.</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Extraversion</span>
                  <Badge variant="outline">55th Percentile (MODERATE)</Badge>
                </div>
                <p className="text-xs text-muted-foreground">Strong public communications and community engagement, but not aggressively promotional. Prefers substantive engagement over publicity.</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Agreeableness</span>
                  <Badge variant="outline">75th Percentile (HIGH)</Badge>
                </div>
                <p className="text-xs text-muted-foreground">Collaborative Board-Manager relationship, long-term partnerships, community engagement emphasis. High agreeableness can slow decision making.</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Emotional Stability</span>
                  <Badge variant="outline">75th Percentile (HIGH STABILITY)</Badge>
                </div>
                <p className="text-xs text-muted-foreground">Maintained AAA rating through crises, smooth leadership transitions, stable operations. Not prone to panic but can mean slow response to urgency.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Core Identity Architecture</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="font-semibold text-sm mb-2">Primary Identity: "The Steward of Public Trust"</h4>
                <p className="text-sm text-muted-foreground">
                  Fundamentally a responsible guardian of taxpayer resources and community wellbeing. 34+ consecutive years of Distinguished Budget Presentation Awards, AAA bond rating maintained through 2008 crisis, 20+ years of data-driven decision making. Moves deliberately, requires extensive evidence, resists financial risk.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">Secondary Identity: "The Progressive Government Model"</h4>
                <p className="text-sm text-muted-foreground">
                  First female County Manager, Universal Pre-K (MECK Pre-K) launched 2018, racial equity as explicit budget priority, Community Resource Centers in underserved neighborhoods. Creates openness to equity-focused partnerships but also expectations for genuine commitment.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">Tertiary Identity: "The Data-Driven Professional"</h4>
                <p className="text-sm text-muted-foreground">
                  Office of Strategy & Innovation, annual performance reports, Corporate Strategic Business Plans with KPIs, budget portal with interactive exploration. Partners who speak the language of data, metrics, and evidence-based practice gain immediate credibility.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Values Hierarchy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm mb-2">Tier 1 Values (Non-Negotiable)</h4>
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                  <li><strong>Fiscal Responsibility</strong> - AAA rating for decades, fund balance protection even during revenue shortfalls</li>
                  <li><strong>Data-Driven Decision Making</strong> - Programs without measurable outcomes get cut; strong data gets expanded</li>
                  <li><strong>Racial Equity</strong> - Explicit Board priority, dedicated budget allocations, equity lens on budget decisions</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">Tier 2 Values (Important)</h4>
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                  <li><strong>Education & Workforce Development</strong> - $666M to Charlotte-Mecklenburg Schools, MECK Pre-K expansion</li>
                  <li><strong>Community Health & Wellbeing</strong> - Integrated Health & Human Services, Office of Violence Prevention</li>
                  <li><strong>Partnership & Collaboration</strong> - Long-term nonprofit funding relationships, collaborative governance</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">Tier 3 Values (Variable Commitment)</h4>
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                  <li><strong>Innovation & Improvement</strong> - "Fast follower" not "first mover" - innovation must be proven elsewhere</li>
                  <li><strong>Environmental Sustainability</strong> - Programs continue but don't receive priority funding increases</li>
                  <li><strong>Transparency & Accountability</strong> - Systematic transparency but strategic communications management</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </AccordionContent>
      </AccordionItem>

      {/* Organizational Attachment Style */}
      <AccordionItem value="attachment-style" className="border rounded-lg px-4">
        <AccordionTrigger className="text-xl font-semibold">
          Organizational Attachment Style - Understanding Relationship Patterns
        </AccordionTrigger>
        <AccordionContent className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Assessment: SECURE ATTACHMENT with CAUTIOUS elements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm mb-2">Secure Attachment Indicators:</h4>
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                  <li>Comfortable with long-term partnerships and commitments</li>
                  <li>Able to maintain relationships through challenges</li>
                  <li>Not excessively controlling or micromanaging of partners</li>
                  <li>Communicates clearly about expectations and concerns</li>
                  <li>Values mutually beneficial relationships</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">Cautious Elements:</h4>
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                  <li>Takes time to develop trust with new partners</li>
                  <li>Requires evidence and validation before commitment</li>
                  <li>Maintains boundaries and process requirements</li>
                  <li>Doesn't rush into partnerships without thorough evaluation</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">Practical Implications:</h4>
                
                <div className="mb-3">
                  <p className="font-medium text-sm mb-1">For New Partners:</p>
                  <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                    <li>Expect slow trust-building process</li>
                    <li>Demonstrate reliability through small commitments before seeking large ones</li>
                    <li>Accept that evaluation and validation are part of trust development</li>
                    <li>Don't interpret deliberate pace as rejection—it's security-building</li>
                  </ul>
                </div>

                <div className="mb-3">
                  <p className="font-medium text-sm mb-1">For Existing Partners:</p>
                  <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                    <li>Leverage established trust for expanded collaboration</li>
                    <li>Maintain consistent communication and follow-through</li>
                    <li>Understand that past performance creates advantage for future proposals</li>
                    <li>Relationship equity is real and valuable</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">Attachment-Based Strategy:</h4>
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                  <li><strong>Initial Contact:</strong> Focus on learning their needs, not pitching solutions</li>
                  <li><strong>Early Relationship:</strong> Deliver on small commitments flawlessly</li>
                  <li><strong>Growing Partnership:</strong> Gradually increase scope and complexity</li>
                  <li><strong>Mature Relationship:</strong> Leverage trust for innovative or complex initiatives</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </AccordionContent>
      </AccordionItem>

      {/* Size, Scale & Scope */}
      <AccordionItem value="size-scale" className="border rounded-lg px-4">
        <AccordionTrigger className="text-xl font-semibold">
          Size, Scale & Scope - Understanding the Organization
        </AccordionTrigger>
        <AccordionContent className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Organizational Dimensions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm mb-2">Geographic Scope:</h4>
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                  <li><strong>Mecklenburg County, North Carolina</strong> - 523 square miles</li>
                  <li><strong>Includes</strong> - City of Charlotte (largest city in NC) and 6 surrounding municipalities</li>
                  <li><strong>Population Served</strong> - 1.1-1.2 million residents (growing rapidly)</li>
                  <li><strong>Regional Position</strong> - Largest county in NC, anchors Charlotte-Concord-Gastonia MSA (2.8M people)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">Organizational Scale:</h4>
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                  <li><strong>Budget</strong> - $2.5 billion annual operating budget (FY2025/FY2026)</li>
                  <li><strong>Employees</strong> - 6,000+ full-time employees across all departments</li>
                  <li><strong>Service Scope</strong> - Health & Human Services, Public Safety, Parks & Recreation, Land Use & Environmental Services, Economic Development, Library, Tax Collection, Property Assessment, Criminal Justice Services, Public Health, Community Support Services, and more</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">Financial Strength:</h4>
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                  <li><strong>Bond Rating</strong> - AAA from major rating agencies (rare for counties)</li>
                  <li><strong>Fund Balance</strong> - $96M+ above policy minimum (fiscal 2025)</li>
                  <li><strong>Tax Base</strong> - Property tax rate 49.27 cents per $100 assessed valuation (FY2026 recommended)</li>
                  <li><strong>Revenue Sources</strong> - Property tax, sales tax, federal/state grants, fees for services</li>
                  <li><strong>Financial Recognition</strong> - Distinguished Budget Award 34+ consecutive years</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">Comparative Context:</h4>
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                  <li>Among largest 50-75 county governments in United States by population and budget</li>
                  <li>Charlotte-Mecklenburg is major economic hub of Southeast US</li>
                  <li>Regional economic engine with significant corporate headquarters presence</li>
                  <li>Growing more rapidly than most large US counties</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </AccordionContent>
      </AccordionItem>

      {/* Leadership Transition */}
      <AccordionItem value="leadership-transition" className="border rounded-lg px-4">
        <AccordionTrigger className="text-xl font-semibold">
          Recent Transitions & Change Dynamics - Critical Intelligence
        </AccordionTrigger>
        <AccordionContent className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Leadership Transition: Dena Diorio → Mike Bryant (2024-2025)</CardTitle>
              <CardDescription>Most significant recent change creating opportunities and constraints for external partners</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm mb-2">Dena Diorio Tenure (2014-2025): The Context</h4>
                <p className="text-sm text-muted-foreground mb-2">Dena Diorio served as County Manager for 11 years, one of the longer tenures in major US counties. Her leadership established the current organizational culture.</p>
                
                <div className="mb-3">
                  <p className="font-medium text-sm mb-1">Diorio's Legacy:</p>
                  <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                    <li>First female County Manager in organization history (groundbreaker identity)</li>
                    <li>Maintained AAA bond rating through multiple crises (financial strength culture)</li>
                    <li>Created MECK Pre-K universal preschool (progressive policy innovation)</li>
                    <li>Established strategic planning and performance management framework (data-driven culture)</li>
                    <li>Navigated COVID-19, cyber attack, natural disasters (crisis management competence)</li>
                    <li>Built reputation as one of Charlotte's most admired CEOs (external recognition)</li>
                    <li>Created culture of accountability and transparency (governance values)</li>
                    <li>Improved economic mobility ranking from 50/50 to 38/50 in national study (measurable impact)</li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium text-sm mb-1">What Diorio Established:</p>
                  <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                    <li>Professional management culture</li>
                    <li>Board-Manager collaborative relationship</li>
                    <li>Performance measurement obsession</li>
                    <li>Progressive policy positioning</li>
                    <li>National best practice engagement</li>
                    <li>Equity focus in budget and programs</li>
                    <li>Strategic planning discipline</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">Mike Bryant Transition (April 2025 appointed, June 2025 sworn in)</h4>
                
                <div className="mb-3">
                  <p className="font-medium text-sm mb-1">Selection Process:</p>
                  <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                    <li>Nationwide search conducted</li>
                    <li>All finalists were internal employees</li>
                    <li>Board unanimously selected Bryant</li>
                    <li>Emphasizes internal promotion culture strength</li>
                  </ul>
                </div>

                <div className="mb-3">
                  <p className="font-medium text-sm mb-1">Bryant Background:</p>
                  <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                    <li>22 years with Mecklenburg County (joined 2003 as budget analyst)</li>
                    <li>Career progression: Budget Analyst → Budget Director (2014) → Deputy County Manager (2020) → County Manager (2025)</li>
                    <li>Education: NC Central University (BA, MPA) - local HBCU connection</li>
                    <li>Previous experience: City of Durham, Duke University, Granville County, NC Governor's Office (30+ years public service total)</li>
                    <li>Expertise: Budget, finance, operations (deep financial acumen)</li>
                    <li>Awards: Jack Vogt Lifetime Achievement Award, Community Building Initiative Leaders Under 40</li>
                    <li>Leadership roles: GFOA Executive Board President, NFBPA Southern Piedmont Chapter President</li>
                  </ul>
                </div>

                <div className="mb-3">
                  <p className="font-medium text-sm mb-1">Bryant's First Moves Signal Strategic Intent - 100-Day Executive Team Restructuring:</p>
                  <ol className="text-sm space-y-1 list-decimal list-inside text-muted-foreground">
                    <li><strong>Removed</strong> - Anthony Trotman (10-year Deputy County Manager for Health & Human Services)</li>
                    <li><strong>Brought In Externally</strong> - Michelle Attreed (30-year Prince William County veteran, CFO expertise) as Deputy County Manager for Financial Services</li>
                    <li><strong>Brought In Externally</strong> - Dr. Kimm Campbell (returning to Mecklenburg from Broward County FL) as Deputy County Manager for Health & Human Services</li>
                    <li><strong>Retained</strong> - Dr. Leslie Johnson (24-year veteran, since 2001) as Deputy County Manager for Sustainable Communities</li>
                    <li><strong>Retained</strong> - Derrick Ramos (8-year veteran, former DOE official) as Deputy County Manager/Chief of Staff</li>
                    <li><strong>Created New Position</strong> - Assistant County Manager for Upward Mobility Strategy (Economic Development/Workforce Development focus)</li>
                  </ol>
                </div>

                <div className="mb-3">
                  <p className="font-medium text-sm mb-1">Analysis of Bryant's Team Architecture - What It Tells Us:</p>
                  <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                    <li>Bryant values external perspectives (hired two outsiders) but not at expense of institutional knowledge (kept two veterans)</li>
                    <li>He's willing to make difficult personnel decisions (Trotman removal despite 10-year tenure)</li>
                    <li>Financial expertise is priority (brought in Attreed with extensive CFO experience, his own budget background)</li>
                    <li>Health & Human Services needed fresh leadership (Campbell returns with big-county experience)</li>
                    <li>Upward mobility focus signals Board priority emphasis</li>
                    <li>Building HIS team for HIS vision, not just continuing Diorio's approach</li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium text-sm mb-1">What It Means for Partners:</p>
                  <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                    <li>Bryant is more open to external input than pure internal promotion might suggest</li>
                    <li>However, he's still fundamentally an insider with deep institutional loyalty</li>
                    <li>First 1-2 years will balance continuity with establishing distinct identity</li>
                    <li>External partners should acknowledge both Diorio's foundation and Bryant's evolution</li>
                    <li>Window exists for new partnerships if framed as enabling Bryant's vision</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">Implication for Partner Timing:</h4>
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                  <li><strong>Year 1 (FY2026: July 2025-June 2026)</strong> - Proving credibility, maintaining stability, careful risk management</li>
                  <li><strong>Year 2 (FY2027)</strong> - More confident in authority, willing to pursue larger initiatives</li>
                  <li><strong>Year 3+</strong> - Fully established, able to pursue transformational changes</li>
                </ul>
                <p className="mt-2 text-sm font-medium">Optimal window for new partnership pitches: <strong>Late Year 1 / Early Year 2</strong> - Bryant has proven himself but is receptive to ideas that help establish his distinct legacy.</p>
              </div>
            </CardContent>
          </Card>
        </AccordionContent>
      </AccordionItem>

      {/* Leadership Personas */}
      <AccordionItem value="leadership" className="border rounded-lg px-4">
        <AccordionTrigger className="text-xl font-semibold">
          Key Leadership Personas (12 Profiles)
        </AccordionTrigger>
        <AccordionContent className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Mike Bryant - County Manager</CardTitle>
              <Badge>PRIMARY DECISION MAKER</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="font-semibold">Tenure:</span> 22 years (joined 2003)
                </div>
                <div>
                  <span className="font-semibold">Education:</span> NC Central University (BA, MPA)
                </div>
                <div>
                  <span className="font-semibold">Background:</span> Budget Analyst → Director → Deputy → Manager
                </div>
                <div>
                  <span className="font-semibold">Expertise:</span> Budget, finance, operations
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                <strong>Psychological Profile:</strong> Growth mindset orientation, loves feedback, acts appropriately. Deep institutional knowledge but willing to bring in external perspectives. Building HIS team with strategic mix of internal veterans and external hires. First 1-2 years will balance continuity with establishing distinct identity.
              </p>
              <p className="text-sm font-semibold">
                <strong>Engagement Strategy:</strong> Acknowledge both Diorio's foundation and Bryant's evolution. Frame proposals as enabling his vision for upward mobility and equity. Year 1 (FY2026): careful risk management. Year 2+: more ambitious initiatives.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Michelle L. Attreed - Deputy County Manager, Financial Services</CardTitle>
              <Badge variant="secondary">EXTERNAL HIRE - BRYANT'S CHOICE</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                30-year veteran from Prince William County, Virginia. CFO expertise. Bryant brought her in to strengthen financial management during revenue constraints. Signal of Bryant's focus on fiscal discipline and external perspectives.
              </p>
              <p className="text-sm font-semibold">
                <strong>Engagement Strategy:</strong> Lead with ROI, fiscal responsibility, data-backed financial projections. She values proven financial models and risk mitigation.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dr. Kimm Campbell - Deputy County Manager, Health & Human Services</CardTitle>
              <Badge variant="secondary">EXTERNAL HIRE (RETURNING) - BRYANT'S CHOICE</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Returned to Mecklenburg from Broward County, Florida. Big-county experience. Replaced 10-year veteran Anthony Trotman. Fresh leadership for Health & Human Services - signal that Bryant wanted new approaches in this critical area.
              </p>
              <p className="text-sm font-semibold">
                <strong>Engagement Strategy:</strong> Health equity focus, social determinants of health, prevention-oriented. Open to innovative partnerships in health and human services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dr. Leslie Johnson - Deputy County Manager, Sustainable Communities</CardTitle>
              <Badge variant="secondary">RETAINED - 24-YEAR VETERAN</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Since 2001. Deep institutional knowledge. Sustainable communities, land use, environmental services. Bryant retained her for continuity and expertise. Represents the institutional memory and proven leadership.
              </p>
              <p className="text-sm font-semibold">
                <strong>Engagement Strategy:</strong> Respect institutional knowledge, reference past successes, emphasize how proposals build on existing work. Environmental and sustainability proposals should align with other priorities.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Derrick Ramos - Deputy County Manager/Chief of Staff</CardTitle>
              <Badge variant="secondary">RETAINED - 8-YEAR VETERAN</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Former DOE official. Strategic advisor role. Bryant retained him as Chief of Staff - signal of trust and continuity in strategic direction. Likely gatekeeper for County Manager access.
              </p>
              <p className="text-sm font-semibold">
                <strong>Engagement Strategy:</strong> Build relationship early. Likely influences what reaches Bryant's desk. Strategic, policy-oriented approach. Federal government experience means comfort with complex proposals.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dr. Raynard Washington - Public Health Director</CardTitle>
              <Badge variant="secondary">NATIONAL LEADER</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                First Black Public Health Director. Chairs Big Cities Health Coalition. National recognition for health equity work. COVID-19 response leadership (Doses to Doors outreach). Influential voice on health equity and community health.
              </p>
              <p className="text-sm font-semibold">
                <strong>Engagement Strategy:</strong> Health equity partnerships, innovative outreach models, data-driven public health interventions. Values community engagement and addressing social determinants.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mark Jerrell - Board Chair (District 4)</CardTitle>
              <Badge variant="secondary">BOARD LEADERSHIP</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Current Board Chair. Part of all-Democrat Board that unanimously selected Bryant. Focus on equity and community representation. Board sets broad policy priorities that Manager implements.
              </p>
              <p className="text-sm font-semibold">
                <strong>Engagement Strategy:</strong> Acknowledge Board priorities explicitly in proposals. Board won't micromanage but expects alignment with strategic direction. Equity, education, workforce development resonate.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Leigh Altman - Board Vice Chair (At-Large)</CardTitle>
              <Badge variant="secondary">BOARD LEADERSHIP</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Board Vice Chair. At-large position gives county-wide perspective. Part of consensus-oriented Board that resolves disagreements privately before public votes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9-Member Board of County Commissioners</CardTitle>
              <Badge variant="secondary">ALL DEMOCRATS - CONSENSUS-ORIENTED</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                All-Democrat Board operates through consensus-building rather than partisan division. Unanimous votes common. Real decisions happen in budget development cycles, Board retreats, committee meetings—not during formal votes. By the time an item reaches public Board agenda, outcome usually predetermined.
              </p>
              <p className="text-sm font-semibold">
                <strong>Engagement Strategy:</strong> Engage during budget development (January-March), Board retreats (January-February), not during public votes. Build Board consensus before formal presentation.
              </p>
            </CardContent>
          </Card>
        </AccordionContent>
      </AccordionItem>

      {/* Behavioral Predictions */}
      <AccordionItem value="predictions" className="border rounded-lg px-4">
        <AccordionTrigger className="text-xl font-semibold">
          Behavioral Predictions & Response Patterns
        </AccordionTrigger>
        <AccordionContent className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Cultural DNA & Behavioral Patterns</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm mb-2">Pattern 1: "Prove It Elsewhere First"</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  This organization is a "fast follower" not a "first mover." They want to see innovations proven in peer jurisdictions before adopting. MECK Pre-K modeled on successful programs elsewhere.
                </p>
                <p className="text-sm font-semibold">
                  Always reference peer government success stories. "Jurisdiction X implemented this successfully" carries more weight than theoretical benefits.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">Pattern 2: "Internal Knowledge is Sacred"</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  The internal promotion culture reflects deep respect for institutional knowledge. Long-tenured employees valued and promoted. Careers spanning decades common.
                </p>
                <p className="text-sm font-semibold">
                  "We can help you accomplish your vision" works better than "We have a better approach." Show deference to internal expertise.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">Pattern 3: "Process is Protection"</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Following proper process protects against criticism and ensures quality. Extensive stakeholder engagement, detailed budget development, procurement requirements followed meticulously.
                </p>
                <p className="text-sm font-semibold">
                  Don't try to shortcut processes. Understand process timeline and align proposal submission accordingly. The fastest path is through the process, not around it.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">Pattern 4: "Relationships Compound Over Time"</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Decades-long funding relationships with CPCC, Arts & Science Council, nonprofits. Sustained community engagement, leadership continuity.
                </p>
                <p className="text-sm font-semibold">
                  First interactions are relationship-building, not deal-closing. Demonstrate value through small collaborations before proposing major initiatives. Track record gives significant advantage.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Stress Response Patterns</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm mb-2">Revenue Shortfall / Budget Pressure</h4>
                <p className="text-sm text-muted-foreground">
                  <strong>Response:</strong> Protect core services and fund balance; seek efficiency improvements; modest tax rate increases (politically difficult); reduce scope of new initiatives but maintain existing commitments.
                </p>
                <p className="text-sm font-semibold mt-2">
                  During fiscal stress, proposals requiring ongoing County funding face much higher bar. One-time or externally-funded initiatives significantly more attractive.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">Public Crisis / Emergency Response</h4>
                <p className="text-sm text-muted-foreground">
                  <strong>Response:</strong> Activate emergency protocols professionally; communicate transparently and frequently; learn and adapt systems. Effective COVID-19 response, maintained services during crises.
                </p>
                <p className="text-sm font-semibold mt-2">
                  During crises, organization can move quickly but maintains process. Emergency response partnerships that complement (not compete with) government capacity are welcomed.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">Leadership Transition (Current State)</h4>
                <p className="text-sm text-muted-foreground">
                  <strong>Response:</strong> Emphasize continuity and stability; new leader makes selective changes to establish authority; increased team-building and communication.
                </p>
                <p className="text-sm font-semibold mt-2">
                  Bryant's first year (2025-2026) balances stability and change. Proposals should honor past while offering future value. Years 2-3 will see more willingness to diverge from past patterns.
                </p>
              </div>
            </CardContent>
          </Card>
        </AccordionContent>
      </AccordionItem>

      {/* Strategic Priorities & Board Vision */}
      <AccordionItem value="strategic-priorities" className="border rounded-lg px-4">
        <AccordionTrigger className="text-xl font-semibold">
          Strategic Priorities & Board Vision - Critical for Partners
        </AccordionTrigger>
        <AccordionContent className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Strategic Implications for Partners</CardTitle>
              <CardDescription>
                How to align your proposal with Board priorities for maximum success
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg space-y-3">
                <h4 className="font-semibold text-sm flex items-start gap-2">
                  ✅ Alignment Strategy
                </h4>
                <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
                  <li>Map your proposal to at least two Board priorities (e.g., workforce development + racial equity)</li>
                  <li>Use Board priority language in proposal framing</li>
                  <li>Demonstrate measurable impact on priority outcomes</li>
                  <li>Show how initiative advances multiple priorities simultaneously</li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg space-y-3">
                <h4 className="font-semibold text-sm flex items-start gap-2">
                  ✅ Evidence Strategy
                </h4>
                <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
                  <li>Reference specific Board statements and priorities</li>
                  <li>Cite budget allocations as evidence of commitment</li>
                  <li>Demonstrate understanding of priority interdependencies</li>
                  <li>Show how your proposal leverages existing priority investments</li>
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg space-y-3">
                <h4 className="font-semibold text-sm flex items-start gap-2">
                  ❌ Misalignment Risks
                </h4>
                <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
                  <li>Proposals not aligned to any priority face uphill battle</li>
                  <li>Economic development proposals ignoring equity dimension likely fail</li>
                  <li>Programs without clear connection to Board vision struggle regardless of merit</li>
                  <li>Trying to create new priorities outside existing framework rarely succeeds</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </AccordionContent>
      </AccordionItem>

      {/* Financial Position & Constraints */}
      <AccordionItem value="financial-position" className="border rounded-lg px-4">
        <AccordionTrigger className="text-xl font-semibold">
          Financial Position & Constraints - Critical Reality Check
        </AccordionTrigger>
        <AccordionContent className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Current Fiscal Situation (FY2025-2026)</CardTitle>
              <CardDescription>
                Understanding fiscal reality is essential to crafting viable proposals
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm mb-2">Revenue Dynamics</h4>
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                  <li><strong>Post-Pandemic Pattern Change:</strong> Robust sales tax growth (2021-2023) has slowed to &lt;3% annual growth</li>
                  <li><strong>Property Tax Base:</strong> Growing but rate increases politically difficult (Republican state legislature monitors county tax rates)</li>
                  <li><strong>Federal/State Grants:</strong> Variable and often restricted</li>
                  <li><strong>Overall Projection:</strong> Revenues growing slower than expenses</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">Expense Pressures</h4>
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                  <li><strong>Healthcare Costs:</strong> 8.75% increase in medical premiums (FY2026)</li>
                  <li><strong>Salary Expectations:</strong> 3% across-the-board + up to 5% performance pay needed to retain talent</li>
                  <li><strong>Service Demands:</strong> Growing population creates demand growth</li>
                  <li><strong>Inflation Impact:</strong> Equipment, contracts, materials all cost more</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">Budget Response Strategy</h4>
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                  <li>$2.5B operating budget (1.6% growth - minimal)</li>
                  <li>0.96 cent tax rate increase (modest, to 49.27 cents per $100)</li>
                  <li>$30.66M fund balance utilization for one-time expenses</li>
                  <li>$65M in new funding for priorities (vs $146M in FY2025 - significant reduction)</li>
                </ul>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg">
                <h4 className="font-semibold text-sm mb-2">What This Means for Partners</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>"Do more with less" is real, not rhetoric.</strong> The revenue-expense gap is creating genuine constraints.
                </p>
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                  <li>One-time expenditures preferred over ongoing commitments</li>
                  <li>External funding sources highly valued</li>
                  <li>ROI justification critical for all proposals</li>
                  <li>Efficiency improvements welcomed</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Partner Financial Implications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-sm mb-2 text-green-700 dark:text-green-400">Highly Favorable Proposals</h4>
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                  <li>Bring external funding (federal/state grants, foundation support, private investment)</li>
                  <li>Demonstrate clear ROI with realistic timeline</li>
                  <li>Create one-time deliverables rather than requiring ongoing support</li>
                  <li>Show efficiency improvements or cost savings</li>
                  <li>Leverage existing County investments</li>
                </ul>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-sm mb-2 text-red-700 dark:text-red-400">Challenging Proposals</h4>
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                  <li>Require significant ongoing County funding commitments</li>
                  <li>Lack external funding or revenue generation</li>
                  <li>Cannot demonstrate clear measurable ROI</li>
                  <li>Compete with existing programs for constrained resources</li>
                  <li>Require new staff positions (ongoing expense)</li>
                </ul>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg">
                <h4 className="font-semibold text-sm mb-2">Optimal Financial Framing</h4>
                <ul className="text-sm space-y-2 list-disc list-inside">
                  <li><strong>Lead with external funding:</strong> "This $5M program is 80% grant-funded, requiring only $1M County match"</li>
                  <li><strong>Show multiplicative impact:</strong> "Each County dollar invested leverages $3 from other sources"</li>
                  <li><strong>Emphasize long-term savings:</strong> "Initial investment of $X yields annual savings of $Y starting year 2"</li>
                  <li><strong>Connect to existing budget lines:</strong> "Enhances existing $Z investment in [program] rather than creating new expense"</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Fund Balance Philosophy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                Maintain healthy fund balance above policy minimum. Use fund balance for one-time, non-recurring costs only. Protect fund balance for emergencies and credit rating maintenance.
              </p>
              <p className="text-sm font-semibold">
                Currently $96M+ above policy minimum - healthy but will draw down over time if revenue/expense gap continues.
              </p>
            </CardContent>
          </Card>
        </AccordionContent>
      </AccordionItem>

      {/* Competitive Landscape */}
      <AccordionItem value="competitive-landscape" className="border rounded-lg px-4">
        <AccordionTrigger className="text-xl font-semibold">
          Competitive Landscape & Regional Context
        </AccordionTrigger>
        <AccordionContent className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Peer Comparison Context</CardTitle>
              <CardDescription>
                How Mecklenburg County positions itself against peer jurisdictions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm mb-2">National Peer Comparisons (Large Urban Counties)</h4>
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                  <li>Wake County, NC (Raleigh)</li>
                  <li>Fulton County, GA (Atlanta)</li>
                  <li>Davidson County, TN (Nashville)</li>
                  <li>Bexar County, TX (San Antonio)</li>
                  <li>Other large metro counties in Southeast/South</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">Regional Context</h4>
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                  <li>Largest county in North Carolina (significantly larger than Wake County)</li>
                  <li>Charlotte-Mecklenburg is economic engine of NC and Southeast</li>
                  <li>Banking center (Bank of America, Truist headquarters)</li>
                  <li>Growing tech and innovation sector</li>
                  <li>Diverse and rapidly growing population</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Competitive Positioning</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                <h4 className="font-semibold text-sm mb-2">Strengths</h4>
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                  <li>Strong financial management (AAA rating, Distinguished Budget Award 34+ years)</li>
                  <li>Progressive policy innovation (MECK Pre-K, equity focus)</li>
                  <li>Professional management culture</li>
                  <li>Strategic planning and performance measurement sophistication</li>
                  <li>Award-winning communications and engagement</li>
                  <li>Stable, committed leadership</li>
                </ul>
              </div>

              <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg">
                <h4 className="font-semibold text-sm mb-2">Challenges</h4>
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                  <li>Rapid growth creating infrastructure and service demand pressure</li>
                  <li>Affordable housing crisis (severe)</li>
                  <li>Racial equity gaps persist despite investments</li>
                  <li>Education outcomes lag some peer metros</li>
                  <li>Economic mobility still below national median (38/50)</li>
                  <li>Transportation infrastructure needs</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How Mecklenburg County Positions Itself</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm mb-2">Internal Self-Concept</h4>
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                  <li>"Model of excellence" in local government management</li>
                  <li>Progressive leader in NC and Southeast</li>
                  <li>Data-driven professional organization</li>
                  <li>Equity-focused government</li>
                  <li>Fiscally responsible steward</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">External Validation</h4>
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                  <li>National awards for budget, planning, performance management, innovation</li>
                  <li>AAA rating (financial strength)</li>
                  <li>Leadership in national organizations (NACo, GFOA, ICMA, Big Cities Health Coalition)</li>
                  <li>Media recognition of leaders (CBJ Most Admired CEO, 40 Under 40 awards)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Partner Positioning Strategy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                <h4 className="font-semibold text-sm mb-2">✅ Honor Their Self-Concept</h4>
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                  <li>Acknowledge their leadership and excellence</li>
                  <li>Reference their awards and recognition</li>
                  <li>Position proposal as enhancing their strengths</li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                <h4 className="font-semibold text-sm mb-2">✅ Provide Peer Comparisons</h4>
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                  <li>"Wake County implemented similar approach with strong results"</li>
                  <li>"Among the 50 largest US counties, leaders in this area have..."</li>
                  <li>"National best practice from peer AAA-rated counties..."</li>
                </ul>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg">
                <h4 className="font-semibold text-sm mb-2">✅ Address Challenges Respectfully</h4>
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                  <li>Acknowledge affordable housing challenge (they know it's severe)</li>
                  <li>Reference equity gaps as opportunity for partnership to help close</li>
                  <li>Frame your solution as helping them achieve stated goals</li>
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg">
                <h4 className="font-semibold text-sm mb-2">❌ Avoid Positioning Errors</h4>
                <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                  <li>Don't position Mecklenburg as behind or deficient</li>
                  <li>Don't ignore their sophistication (they're highly professional)</li>
                  <li>Don't pretend problems don't exist (they're data-driven and realistic)</li>
                  <li>Don't compare unfavorably to peer counties without context</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </AccordionContent>
      </AccordionItem>

      {/* Engagement Strategy */}
      <AccordionItem value="strategy" className="border rounded-lg px-4">
        <AccordionTrigger className="text-xl font-semibold">
          Influence Strategy Playbook
        </AccordionTrigger>
        <AccordionContent className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Decision Recommendations by Stakeholder Type</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-sm mb-2">Economic Development Partnership</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>DO:</strong> Lead with data on job creation, capital investment, wage metrics. Emphasize alignment with upward mobility goals. Frame as mutual capacity-building. Reference CPCC workforce pipeline. Expect 6-12 month process.
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>DON'T:</strong> Present as one-time transaction. Emphasize tax breaks over community benefit. Rush timeline. Ignore geographic equity (North/East county priorities). Fail to demonstrate fiscal sustainability.
                </p>
                <Badge className="bg-green-600">Success Probability: 70-80%</Badge>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-sm mb-2">Nonprofit Seeking Grant Funding</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>DO:</strong> Align with Board priorities (education, health equity, housing, workforce, racial disparities). Provide detailed outcome metrics and evaluation plans. Demonstrate existing community relationships. Show leveraging of County investment. Build relationship over multiple budget cycles.
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>DON'T:</strong> Apply with only operational funding request. Lack measurable outcomes. Ignore racial equity dimension. Submit late in budget cycle. Present as new organization without track record.
                </p>
                <Badge className="bg-yellow-600">Success Probability: 65-75% (established) / 35-45% (new)</Badge>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-sm mb-2">Vendor/Service Provider</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>DO:</strong> Demonstrate innovation with proven results elsewhere. Show cost savings or efficiency gains with data. Understand procurement process. Reference other government implementations. Build relationship with department heads AND Manager's office.
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>DON'T:</strong> Overpromise and underdeliver (long institutional memory). Bypass formal procurement. Ignore small business/MWBE participation expectations. Fail to provide government references.
                </p>
                <Badge className="bg-yellow-600">Success Probability: 60-70% (proven) / 40-50% (new to gov)</Badge>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold text-sm mb-2">Strategic Partnership/Initiative</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>DO:</strong> Engage early in strategic planning cycle (Board retreats January-February). Provide external funding or demonstrate clear ROI. Show how initiative advances Board priorities. Include community engagement component. Think 18-24 month implementation timeline.
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>DON'T:</strong> Expect quick decisions on new initiatives. Propose significant policy changes without Board-level support. Ignore operational staff concerns. Underestimate process requirements. Skip community input phase.
                </p>
                <Badge className="bg-yellow-600">Success Probability: 55-65% (external funding) / 35-45% (County investment)</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Optimal Timing Windows</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-green-50 dark:bg-green-950 p-3 rounded">
                <h4 className="font-semibold text-sm mb-1">Budget Development (January-March)</h4>
                <p className="text-xs text-muted-foreground">Best time to propose new initiatives for FY inclusion</p>
              </div>
              <div className="bg-green-50 dark:bg-green-950 p-3 rounded">
                <h4 className="font-semibold text-sm mb-1">Board Retreats (January-February)</h4>
                <p className="text-xs text-muted-foreground">Strategic direction setting, priority identification</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-950 p-3 rounded">
                <h4 className="font-semibold text-sm mb-1">Mid-Year Review (December-January)</h4>
                <p className="text-xs text-muted-foreground">Opportunity to demonstrate success and expand scope</p>
              </div>
              <div className="bg-red-50 dark:bg-red-950 p-3 rounded">
                <h4 className="font-semibold text-sm mb-1">AVOID: May-June</h4>
                <p className="text-xs text-muted-foreground">Budget finalization, minimal new initiative receptivity</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Language & Framing That Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h5 className="text-xs font-semibold text-green-600 mb-1">✓ EFFECTIVE FRAMING</h5>
                  <ul className="text-xs space-y-1 list-disc list-inside text-muted-foreground">
                    <li>"Data from peer jurisdictions shows..."</li>
                    <li>"This amplifies your existing work in..."</li>
                    <li>"ROI analysis demonstrates..."</li>
                    <li>"Advancing equity outcomes through..."</li>
                    <li>"Evidence-based approach proven in..."</li>
                    <li>"Building on your foundation of..."</li>
                    <li>"Measurable outcomes include..."</li>
                    <li>"Long-term partnership to..."</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-xs font-semibold text-red-600 mb-1">✗ INEFFECTIVE FRAMING</h5>
                  <ul className="text-xs space-y-1 list-disc list-inside text-muted-foreground">
                    <li>"Trust us, it'll work"</li>
                    <li>"We have a better approach"</li>
                    <li>"This is cutting-edge/untested"</li>
                    <li>"Quick win opportunity"</li>
                    <li>"Everyone's doing this"</li>
                    <li>"You need to change..."</li>
                    <li>"This will disrupt..."</li>
                    <li>"One-time opportunity"</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </AccordionContent>
      </AccordionItem>

      {/* Final Synthesis */}
      <AccordionItem value="synthesis" className="border rounded-lg px-4">
        <AccordionTrigger className="text-xl font-semibold">
          Final Synthesis & The Winning Formula
        </AccordionTrigger>
        <AccordionContent className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>The Complete Picture</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed">
                Mecklenburg County Government is a professionally-managed, data-worshipping, equity-committed, relationship-oriented organization navigating a leadership transition that creates both continuity (internal promotion culture, institutional knowledge) and opportunity (new County Manager bringing external perspectives). They move deliberately through extensive processes but execute exceptionally once committed. Financial constraints are real and growing, making externally-funded proposals significantly more attractive than those requiring ongoing County investment. Success requires understanding that their decision architecture prioritizes fiscal responsibility, measurable outcomes, racial equity advancement, and proven approaches over innovation, speed, or theoretical benefits. The internal promotion culture means external partners must position as enablers of internal expertise, never competitors to institutional knowledge. Mike Bryant's first 1-2 years balance proving himself while establishing distinct identity—creating narrow window for new partnerships if framed as supporting his vision for upward mobility and equity. The organization values relationships over transactions, data over anecdotes, process over speed, and consensus over conflict. Those who understand and respect these dynamics find willing, capable, reliable partners. Those who ignore them encounter polite, endless resistance.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Strengths to Leverage</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
                <li><strong>Financial Strength:</strong> AAA rating, strong fund balance, fiscal discipline creates reliable partnership foundation</li>
                <li><strong>Data Capacity:</strong> Sophisticated analytics, performance measurement expertise enables evidence-based collaboration</li>
                <li><strong>Genuine Equity Commitment:</strong> Board priority backed by budget allocations, not just rhetoric</li>
                <li><strong>Professional Management:</strong> Highly credentialed staff, process adherence, operational excellence</li>
                <li><strong>Long-term Relationships:</strong> Sustained partnerships over decades with consistent funding and support</li>
                <li><strong>Community Engagement:</strong> Sophisticated outreach, stakeholder consultation, accessible communications</li>
                <li><strong>Strategic Planning:</strong> Award-winning frameworks, clear priorities, measurable objectives</li>
                <li><strong>New Leadership Openness:</strong> Bryant bringing in external perspectives while maintaining stability</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Weaknesses to Navigate</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
                <li><strong>Internal Promotion Insularity:</strong> Groupthink risk, "not invented here" resistance to external ideas</li>
                <li><strong>Revenue-Expense Gap:</strong> Slowing revenue growth vs. accelerating expenses limits new investments</li>
                <li><strong>Process-Driven Slowness:</strong> Extensive stakeholder engagement, procurement requirements extend timelines</li>
                <li><strong>Communications-Operations Gap:</strong> Brand sometimes exceeds operational capacity</li>
                <li><strong>Equity Capacity Constraints:</strong> Commitment genuine but resources limited, creating gap between goals and capacity</li>
                <li><strong>Innovation Resistance:</strong> "Fast follower" culture means new approaches must be proven elsewhere first</li>
                <li><strong>Geographic Service Delivery:</strong> Large county with uneven service distribution creates equity challenges</li>
                <li><strong>Decision Timeline:</strong> Consensus-building and process adherence means 12-18 month cycles common</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>The Winning Formula</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-primary/10 p-4 rounded-lg">
                <ol className="text-sm space-y-2 list-decimal list-inside">
                  <li><strong>Lead with Data:</strong> Statistical evidence, peer comparisons, measurable outcomes. Never pitch without quantitative backing.</li>
                  <li><strong>Align with Board Priorities:</strong> Education, health equity, affordable housing, workforce development, racial equity, economic mobility.</li>
                  <li><strong>Demonstrate Fiscal Responsibility:</strong> ROI analysis, external funding sources, cost savings, efficiency gains. Ongoing County funding faces high bar.</li>
                  <li><strong>Reference Peer Success:</strong> "Jurisdiction X implemented this successfully" works better than theoretical benefits. Be a proven approach, not an experiment.</li>
                  <li><strong>Frame as Enabling Internal Expertise:</strong> "We can help amplify what you're already doing brilliantly" not "We have a better approach."</li>
                  <li><strong>Build Relationships First:</strong> Demonstrate value through small collaborations before proposing major initiatives. Think 12-18 months.</li>
                  <li><strong>Respect Process:</strong> Understand timelines, engage early in budget cycles, don't shortcut stakeholder engagement. Process is protection.</li>
                  <li><strong>Address Equity Explicitly:</strong> Not as add-on but as core design. Geographic distribution matters (North/East county priority).</li>
                  <li><strong>Be Patient and Persistent:</strong> First interactions rarely yield immediate wins. Relationship investment compounds over time.</li>
                  <li><strong>Honor Past, Offer Future:</strong> Acknowledge Diorio foundation while supporting Bryant's vision for his tenure and legacy.</li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </AccordionContent>
      </AccordionItem>
    </>
  ),
};
