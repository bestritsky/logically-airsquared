import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const abbaIntelligence = (
  <div className="space-y-6">
    <div className="prose prose-sm max-w-none">
      <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
        P-RISM FOUNDATION ANALYSIS: ABBA TECHNOLOGIES
      </h2>
      <div className="bg-muted/30 p-4 rounded-lg mb-6">
        <p className="text-sm text-muted-foreground mb-2">
          <strong>Analysis Date:</strong> November 10, 2025<br />
          <strong>Target Organization:</strong> ABBA Technologies, Inc.<br />
          <strong>Headquarters:</strong> Albuquerque, New Mexico<br />
          <strong>Framework:</strong> P-RISM Foundation Assessment<br />
          <strong>Overall Assessment Confidence:</strong> 75%
        </p>
      </div>
    </div>

    <Accordion type="multiple" className="w-full">
      <AccordionItem value="executive-summary">
        <AccordionTrigger className="text-lg font-heading font-semibold">
          Executive Overview - Organizational Snapshot
        </AccordionTrigger>
        <AccordionContent className="prose prose-sm max-w-none space-y-4">
          <p>
            ABBA Technologies represents a mature, regionally dominant managed service provider that has successfully navigated the evolution of enterprise IT for over three decades. Founded in 1993 in Albuquerque, New Mexico, the company has established itself as a trusted technology partner for a diverse clientele spanning federal agencies, state and local government entities, educational institutions, and small-to-mid-sized businesses throughout the southwestern United States.
          </p>
          
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Key Metrics</h4>
            <ul className="space-y-1 text-sm">
              <li><strong>Employees:</strong> 86 (83% growth in 12-24 months)</li>
              <li><strong>Revenue:</strong> $18.4M (2024) - doubled in 12-24 months</li>
              <li><strong>Structure:</strong> Employee-owned (ESOP)</li>
              <li><strong>Founded:</strong> 1993 (32 years of operation)</li>
              <li><strong>Market Focus:</strong> Federal, SLED, and Commercial sectors</li>
            </ul>
          </div>

          <h4 className="font-semibold mt-4">Strategic Inflection Point</h4>
          <p>
            ABBA stands at a defining moment in its history. The organization has evolved from a regional steady-state managed service provider into a rapidly scaling federal contractor-focused growth enterprise. This transformation represents explosive growth outpacing organizational maturity - creating both extraordinary opportunity and significant operational stress.
          </p>

          <h4 className="font-semibold mt-4">Competitive Advantages</h4>
          <ul>
            <li><strong>Federal Expertise:</strong> 32 years of federal contracting experience with DOE national laboratories, DoD entities, and federal contractors</li>
            <li><strong>Security Certifications:</strong> SOC 2 Type 3, Cyber Verify AAA, MSP Verify - federal-grade security for all clients</li>
            <li><strong>Cleared Workforce:</strong> DOE-Q level clearance capabilities for Sandia National Laboratories work</li>
            <li><strong>Industry Recognition:</strong> MSP 501 rankings (#114 in 2018, #137 in 2019), New Mexico Flying 40 (2024)</li>
            <li><strong>Strategic Partnerships:</strong> HPE, VMware, Cisco, Pure Storage, Fortinet, FireEye</li>
            <li><strong>NASA SEWP Contract:</strong> One of 23 companies nationwide with SEWP eligibility</li>
          </ul>

          <h4 className="font-semibold mt-4">Current State Assessment</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold text-sm">Federal Market Readiness</p>
              <Badge className="bg-green-600">85/100 (High)</Badge>
            </div>
            <div>
              <p className="font-semibold text-sm">Commercial Market Readiness</p>
              <Badge className="bg-yellow-600">70/100 (Moderate-High)</Badge>
            </div>
            <div>
              <p className="font-semibold text-sm">Operational Scalability</p>
              <Badge className="bg-orange-600">65/100 (Moderate)</Badge>
            </div>
            <div>
              <p className="font-semibold text-sm">Cultural Change Readiness</p>
              <Badge className="bg-orange-600">60/100 (Moderate)</Badge>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="organizational-profile">
        <AccordionTrigger className="text-lg font-heading font-semibold">
          Organizational Culture & Big Five Profile
        </AccordionTrigger>
        <AccordionContent className="prose prose-sm max-w-none">
          <h3>Core Identity Architecture</h3>
          <p>
            ABBA Technologies has constructed its organizational identity around three foundational pillars: <strong>technical expertise</strong>, <strong>federal security capability</strong>, and <strong>community stewardship</strong>. The employee-ownership structure fundamentally shapes organizational culture and priorities - emphasizing sustainable profitability, job security, and work-life balance over quarter-to-quarter growth metrics.
          </p>

          <h3 className="mt-6">Big Five Organizational Personality Assessment</h3>

          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="text-base">Openness to Experience: 40-55% (Moderate-Low)</CardTitle>
              <Badge variant="secondary">Confidence: 60%</Badge>
            </CardHeader>
            <CardContent className="text-sm">
              <p>
                ABBA exhibits measured, conservative adoption of new technologies rather than early-adopter enthusiasm. Technology partnerships emphasize established enterprise vendors (HPE, VMware, Cisco) over emerging startups. Marketing materials stress proven reliability over cutting-edge innovation. The company has successfully evolved through major technology transitions but as a follower adopting mature solutions rather than a pioneer.
              </p>
              <p className="mt-2 font-semibold">Implication: This organization will NOT be your innovation partner. They're in "proven solutions" mode.</p>
            </CardContent>
          </Card>

          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="text-base">Conscientiousness: 75-85% (High)</CardTitle>
              <Badge variant="secondary">Confidence: 75%</Badge>
            </CardHeader>
            <CardContent className="text-sm">
              <p>
                Multiple indicators point to a highly conscientious organization. Achievement of demanding certifications (MSP Verify, SOC 2 Type 3, Cyber Verify AAA) requires rigorous processes, documentation, and quality control. Federal contracting demands meticulous compliance, documentation, and reliability. The 32-year operating history and strong financial stability suggest disciplined management.
              </p>
              <p className="mt-2 font-semibold">Implication: Once you get them to yes, they'll execute well. The challenge is getting to yes.</p>
            </CardContent>
          </Card>

          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="text-base">Extraversion: 45-60% (Moderate)</CardTitle>
              <Badge variant="secondary">Confidence: 50%</Badge>
            </CardHeader>
            <CardContent className="text-sm">
              <p>
                ABBA demonstrates moderate extraversion - present in their community through sponsorships and local events, but not aggressively pursuing brand awareness or thought leadership at national scale. The focus on existing client relationships and regional market presence over aggressive new business development suggests comfort with steady growth through referrals and reputation.
              </p>
              <p className="mt-2 font-semibold">Implication: They're not networking aggressively. You'll need to come to them.</p>
            </CardContent>
          </Card>

          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="text-base">Agreeableness: 65-75% (Moderately High)</CardTitle>
              <Badge variant="secondary">Confidence: 65%</Badge>
            </CardHeader>
            <CardContent className="text-sm">
              <p>
                The company's emphasis on partnership relationships, collaborative problem-solving, and client advocacy suggests above-average agreeableness. Positioning as trusted advisors and focus on long-term relationships over transactional sales indicates cooperation over competition. Community philanthropy and cultural sponsorships reflect concern for broader social good.
              </p>
              <p className="mt-2 font-semibold">Implication: They'll be nice and listen politely. Don't mistake politeness for commitment.</p>
            </CardContent>
          </Card>

          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="text-base">Neuroticism: 25-35% (Low/High Emotional Stability)</CardTitle>
              <Badge variant="secondary">Confidence: 55%</Badge>
            </CardHeader>
            <CardContent className="text-sm">
              <p>
                The 32-year track record navigating technology disruptions, economic cycles, and market changes demonstrates resilience and emotional stability. Conservative financial management and strong credit rating suggest calm decision-making rather than reactive crisis management. The measured growth pace indicates comfort with current state rather than anxiety-driven change.
              </p>
              <p className="mt-2 font-semibold">Implication: Stable organization, but current growth is creating stress they're managing.</p>
            </CardContent>
          </Card>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="values-hierarchy">
        <AccordionTrigger className="text-lg font-heading font-semibold">
          Values Hierarchy with Observable Evidence
        </AccordionTrigger>
        <AccordionContent className="prose prose-sm max-w-none">
          <h3>TIER 1: NON-NEGOTIABLE CORE VALUES</h3>

          <div className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">1. Reliability and Trust (Weight: 30%)</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p><strong>Evidence:</strong> 32-year operational continuity, strong client retention, emphasis on "reliable" and "proven" solutions in all communications, investment in rigorous certifications, positioning as stable partner during technology transitions.</p>
                <p className="mt-2"><strong>Behavioral Indicator:</strong> Client needs consistently override internal convenience</p>
                <p><strong>Trade-offs:</strong> Will sacrifice internal efficiency to solve client problems</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">2. Security and Compliance Excellence (Weight: 25%)</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p><strong>Evidence:</strong> Federal security certifications, DOE-Q-level clearance capabilities, SOC 2 Type 3 and Cyber Verify AAA ratings, security central to value proposition.</p>
                <p className="mt-2"><strong>Behavioral Indicator:</strong> Security concerns trigger immediate action</p>
                <p><strong>Trade-offs:</strong> Will delay projects or spend extra to ensure security</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">3. Employee Welfare & Shared Success (Weight: 20%)</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p><strong>Evidence:</strong> Employee-ownership structure, low turnover rate, benefits of ownership (profit sharing, equity participation), culture where employee success connects to organizational success.</p>
                <p className="mt-2"><strong>Behavioral Indicator:</strong> Employee welfare factored into major decisions</p>
                <p><strong>Trade-offs:</strong> Sometimes tolerates underperformance to maintain employee morale</p>
              </CardContent>
            </Card>
          </div>

          <h3 className="mt-6">TIER 2: IMPORTANT OPERATIONAL VALUES</h3>

          <div className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">4. Community Stewardship (Weight: 15%)</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p><strong>Evidence:</strong> Extensive philanthropic activities (National Dance Institute, Hispano Chamber of Commerce, National Institute of Flamenco), cultural sponsorships.</p>
                <p><strong>Engagement Strategy:</strong> Regional community commitment resonates strongly</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">5. Client Success & Partnership (Weight: 10%)</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p><strong>Evidence:</strong> Emphasis on holistic solutions, business outcome focus, long-term advisory relationships over transactional sales.</p>
                <p><strong>Engagement Strategy:</strong> Partnership orientation requires deeper engagement</p>
              </CardContent>
            </Card>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="leadership-profiles">
        <AccordionTrigger className="text-lg font-heading font-semibold">
          Key Decision-Maker Profiles
        </AccordionTrigger>
        <AccordionContent className="prose prose-sm max-w-none">
          <h3 className="mb-4">ANDREW BACA - Chief Executive Officer</h3>
          
          <div className="bg-muted/50 p-4 rounded-lg mb-4">
            <p className="text-sm"><strong>LinkedIn:</strong> https://www.linkedin.com/in/andrew-baca-3b51973b/</p>
            <p className="text-sm"><strong>Tenure:</strong> Founder (32+ years)</p>
            <p className="text-sm"><strong>Education:</strong> University of New Mexico - BS in Electrical Engineering</p>
            <p className="text-sm"><strong>Role:</strong> Founder, primary decision-maker, vision-setter, final authority on all strategic initiatives</p>
          </div>

          <h4>Psychological Profile (Big Five):</h4>
          <ul className="text-sm space-y-2">
            <li><strong>Openness:</strong> 60-75% (Moderately High) - Strategic thinker, values innovation in proven contexts</li>
            <li><strong>Conscientiousness:</strong> 75-85% (High) - Methodical, detail-oriented, values thoroughness</li>
            <li><strong>Extraversion:</strong> 50-65% (Moderate) - Comfortable with networking but not seeking spotlight</li>
            <li><strong>Agreeableness:</strong> 65-80% (Moderately High) - Collaborative, values harmony, servant-steward style</li>
            <li><strong>Neuroticism:</strong> 35-50% (Low-Moderate) - Generally stable but can experience stress under pressure</li>
          </ul>

          <h4 className="mt-4">Core Values & Priorities:</h4>
          <ol className="text-sm space-y-1">
            <li><strong>Federal Relationship Capital Protection (35%):</strong> Lifetime federal connections are crown jewel</li>
            <li><strong>Employee-Owner Welfare (25%):</strong> Stewardship obligation to employee-owners</li>
            <li><strong>Community Stewardship (20%):</strong> New Mexico technology ecosystem contribution</li>
            <li><strong>Technical Excellence & Security (15%):</strong> Federal-grade quality standard</li>
            <li><strong>Sustainable Growth & Profitability (5%):</strong> Measured over aggressive scaling</li>
          </ol>

          <h4 className="mt-4">DO's and DON'Ts:</h4>
          <div className="grid md:grid-cols-2 gap-4 mt-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm text-green-700 dark:text-green-400">DO:</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-1">
                <p>✓ Emphasize federal relationship protection and enhancement</p>
                <p>✓ Frame solutions as supporting employee-owner welfare</p>
                <p>✓ Acknowledge community integration and regional leadership</p>
                <p>✓ Lead with security, compliance, and reliability</p>
                <p>✓ Show proven track record with similar organizations</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm text-red-700 dark:text-red-400">DON'T:</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-1">
                <p>✗ Rush decisions or pressure for quick commitment</p>
                <p>✗ Suggest aggressive scaling or exit-oriented strategies</p>
                <p>✗ Criticize conservative approach or employee ownership</p>
                <p>✗ Propose solutions risking federal relationships</p>
                <p>✗ Ignore community values or regional focus</p>
              </CardContent>
            </Card>
          </div>

          <hr className="my-8" />

          <h3 className="mb-4">ED PEÑA - Vice President</h3>
          
          <div className="bg-muted/50 p-4 rounded-lg mb-4">
            <p className="text-sm"><strong>LinkedIn:</strong> https://www.linkedin.com/in/ed-peña-ba233294/</p>
            <p className="text-sm"><strong>Education:</strong> University of New Mexico</p>
            <p className="text-sm"><strong>Background:</strong> Boeing Missile Defense (Program Manager), IT distribution (Territory/Regional Manager)</p>
            <p className="text-sm"><strong>Network:</strong> 500+ LinkedIn connections</p>
          </div>

          <h4>Psychological Profile (Big Five):</h4>
          <ul className="text-sm space-y-2">
            <li><strong>Openness:</strong> 55-70% (Moderate-High) - Willing to explore new approaches, values innovation</li>
            <li><strong>Conscientiousness:</strong> 70-85% (High) - Defense program management requires exceptional discipline</li>
            <li><strong>Extraversion:</strong> 65-80% (High) - Sales and networking roles, 500+ connections</li>
            <li><strong>Agreeableness:</strong> 55-70% (Moderate-High) - Collaborative but results-focused</li>
            <li><strong>Neuroticism:</strong> 30-45% (Low-Moderate) - Moderate emotional stability</li>
          </ul>

          <h4 className="mt-4">Core Priorities:</h4>
          <ol className="text-sm space-y-1">
            <li><strong>Revenue Growth & Business Development (30%):</strong> Sales background drives measurable outcomes</li>
            <li><strong>Team Success & Capability Building (25%):</strong> History of managing sales teams</li>
            <li><strong>Strategic Partnerships (20%):</strong> Vendor relationships and channel expertise</li>
            <li><strong>Client Satisfaction (15%):</strong> Solution-selling orientation</li>
            <li><strong>Industry Recognition (10%):</strong> Conference participation, thought leadership</li>
          </ol>

          <h4 className="mt-4">DO's and DON'Ts:</h4>
          <div className="grid md:grid-cols-2 gap-4 mt-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm text-green-700 dark:text-green-400">DO:</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-1">
                <p>✓ Emphasize competitive differentiation and market advantage</p>
                <p>✓ Demonstrate clear ROI and business value</p>
                <p>✓ Provide sales enablement and partner support</p>
                <p>✓ Show commitment to long-term partnership</p>
                <p>✓ Respect technical depth, avoid oversimplification</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm text-red-700 dark:text-red-400">DON'T:</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-1">
                <p>✗ Present solutions without clear business case</p>
                <p>✗ Ignore vendor partnership dynamics</p>
                <p>✗ Underestimate his technical knowledge</p>
                <p>✗ Bypass him on business development matters</p>
                <p>✗ Propose complex deals without sales support</p>
              </CardContent>
            </Card>
          </div>

          <hr className="my-8" />

          <h3 className="mb-4">MARQUITA BACA - Director of Marketing & Community Relations</h3>
          
          <div className="bg-muted/50 p-4 rounded-lg mb-4">
            <p className="text-sm"><strong>LinkedIn:</strong> https://www.linkedin.com/in/marquita-baca-3a078153/</p>
            <p className="text-sm"><strong>Education:</strong> Arizona State University - BS in Marketing</p>
            <p className="text-sm"><strong>Background:</strong> Sales operations, market planning, business development</p>
            <p className="text-sm"><strong>Community Engagement:</strong> Active in regional philanthropic initiatives</p>
          </div>

          <h4>Psychological Profile (Big Five):</h4>
          <ul className="text-sm space-y-2">
            <li><strong>Openness:</strong> 60-75% (Moderately High) - Creative, comfortable with experimentation</li>
            <li><strong>Conscientiousness:</strong> 65-80% (Moderately High-High) - Organized, project management focused</li>
            <li><strong>Extraversion:</strong> 70-85% (High) - Networking, community events, 500+ connections</li>
            <li><strong>Agreeableness:</strong> 65-80% (Moderately High-High) - Community service, relationship-focused</li>
            <li><strong>Neuroticism:</strong> 25-40% (Low-Moderate) - Resilient, positive energy</li>
          </ul>

          <h4 className="mt-4">DO's and DON'Ts:</h4>
          <div className="grid md:grid-cols-2 gap-4 mt-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm text-green-700 dark:text-green-400">DO:</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-1">
                <p>✓ Provide marketing differentiation opportunities</p>
                <p>✓ Share case studies and success stories</p>
                <p>✓ Position as regional economic development contribution</p>
                <p>✓ Emphasize employee-owner pride in offerings</p>
                <p>✓ Support community engagement initiatives</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm text-red-700 dark:text-red-400">DON'T:</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-1">
                <p>✗ Expect her to make technical or financial decisions</p>
                <p>✗ Provide solutions without marketing support materials</p>
                <p>✗ Ignore community relations dimension</p>
                <p>✗ Underestimate her influence on brand positioning</p>
                <p>✗ Propose initiatives conflicting with community values</p>
              </CardContent>
            </Card>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="top-opportunities">
        <AccordionTrigger className="text-lg font-heading font-semibold">
          Top 10 MSP Service Opportunities
        </AccordionTrigger>
        <AccordionContent className="prose prose-sm max-w-none">
          <p className="mb-4">
            Based on comprehensive analysis of ABBA's organizational profile, market position, and strategic trajectory, the following services represent the highest-value opportunities ranked by priority score and implementation timeline.
          </p>

          <h3 className="text-lg font-semibold mt-6">TIER 1: CRITICAL ENABLERS (Months 0-12)</h3>
          
          <Card className="mb-4 border-green-600">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>1. Federal Compliance & CMMC Services</CardTitle>
                <Badge className="bg-green-600">9.8/10</Badge>
              </div>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p><strong>Timeline:</strong> 0-6 months | <strong>Criticality:</strong> MANDATORY</p>
              <p><strong>Why Now:</strong> CMMC certification is non-negotiable for continued DoD contracting eligibility. Federal compliance transforms ABBA from infrastructure provider to strategic compliance partner.</p>
              <p><strong>Revenue Potential:</strong> $150K-$300K per annual advisory client</p>
              <p><strong>Margin:</strong> 35-45% gross margins vs. 25-30% for traditional infrastructure services</p>
              <p><strong>Organizational Fit:</strong> 95% - Aligns perfectly with federal expertise, security values, and strategic vision</p>
              <p><strong>Primary Champion:</strong> Ed Peña (VP) - Federal business development owner</p>
            </CardContent>
          </Card>

          <Card className="mb-4 border-green-600">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>2. Cloud Migration & Hybrid Infrastructure Management</CardTitle>
                <Badge className="bg-green-600">9.5/10</Badge>
              </div>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p><strong>Timeline:</strong> 3-9 months | <strong>Criticality:</strong> HIGH</p>
              <p><strong>Why Now:</strong> Federal agencies modernizing legacy infrastructure. Natural pairing with compliance automation platform.</p>
              <p><strong>Revenue Potential:</strong> Recurring revenue through managed cloud services</p>
              <p><strong>Success Probability:</strong> 85% (market demand high, partnership support available)</p>
            </CardContent>
          </Card>

          <Card className="mb-4 border-green-600">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>3. 24/7 Security Operations Center (SOC)</CardTitle>
                <Badge className="bg-green-600">9.2/10</Badge>
              </div>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p><strong>Timeline:</strong> 6-12 months | <strong>Criticality:</strong> HIGH</p>
              <p><strong>Why Now:</strong> Federal compliance requires continuous monitoring. Addresses CFO's revenue diversification goal - converts project work to recurring MRR.</p>
              <p><strong>Revenue Potential:</strong> $250K+ annually per client</p>
              <p><strong>Success Probability:</strong> 80% (federal requirement clear, partnership option reduces risk)</p>
            </CardContent>
          </Card>

          <h3 className="text-lg font-semibold mt-6">TIER 2: HIGH-VALUE DIFFERENTIATORS (Months 6-18)</h3>

          <Card className="mb-4 border-blue-600">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>4. Strategic Advisory & vCISO Services</CardTitle>
                <Badge className="bg-blue-600">8.7/10</Badge>
              </div>
            </CardHeader>
            <CardContent className="text-sm">
              <p><strong>Timeline:</strong> 6-12 months | <strong>Success Probability:</strong> 75%</p>
              <p>Capability development required but market fit good. Positions ABBA as strategic advisor vs. transactional vendor.</p>
            </CardContent>
          </Card>

          <Card className="mb-4 border-blue-600">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>5. Identity & Access Management (IAM)</CardTitle>
                <Badge className="bg-blue-600">8.5/10</Badge>
              </div>
            </CardHeader>
            <CardContent className="text-sm">
              <p><strong>Timeline:</strong> 6-15 months | <strong>Success Probability:</strong> 85%</p>
              <p>Technical capability strong, federal need clear. Zero-trust architecture implementation.</p>
            </CardContent>
          </Card>

          <Card className="mb-4 border-blue-600">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>6. Backup, Disaster Recovery & Business Continuity</CardTitle>
                <Badge className="bg-blue-600">8.3/10</Badge>
              </div>
            </CardHeader>
            <CardContent className="text-sm">
              <p><strong>Timeline:</strong> 3-12 months | <strong>Success Probability:</strong> 90%</p>
              <p>Existing strength - packaging and premium tier opportunity. Federal compliance integration.</p>
            </CardContent>
          </Card>

          <h3 className="text-lg font-semibold mt-6">TIER 3: GROWTH ACCELERATORS (Months 12-24)</h3>

          <Card className="mb-4">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>7. AI-Powered Automation & Efficiency Services</CardTitle>
                <Badge>7.9/10</Badge>
              </div>
            </CardHeader>
            <CardContent className="text-sm">
              <p><strong>Timeline:</strong> 12-18 months | <strong>Success Probability:</strong> 65%</p>
              <p>Emerging category. Internal benefit clear, client-facing value uncertain.</p>
            </CardContent>
          </Card>

          <Card className="mb-4">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>8. Unified Communications & Collaboration</CardTitle>
                <Badge>7.6/10</Badge>
              </div>
            </CardHeader>
            <CardContent className="text-sm">
              <p><strong>Timeline:</strong> 9-18 months | <strong>Success Probability:</strong> 80%</p>
              <p>Market mature, execution straightforward. Federal secure communications requirements.</p>
            </CardContent>
          </Card>

          <Card className="mb-4">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>9. Data Analytics & Business Intelligence</CardTitle>
                <Badge>7.3/10</Badge>
              </div>
            </CardHeader>
            <CardContent className="text-sm">
              <p><strong>Timeline:</strong> 12-24 months | <strong>Success Probability:</strong> 70%</p>
              <p>Capability building required, client value moderate. Federal data governance opportunity.</p>
            </CardContent>
          </Card>

          <Card className="mb-4">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>10. Legacy System Modernization</CardTitle>
                <Badge>7.1/10</Badge>
              </div>
            </CardHeader>
            <CardContent className="text-sm">
              <p><strong>Timeline:</strong> 12-24 months | <strong>Success Probability:</strong> 75%</p>
              <p>Federal opportunity clear, project risk moderate. Application migration and infrastructure refresh.</p>
            </CardContent>
          </Card>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="engagement-strategy">
        <AccordionTrigger className="text-lg font-heading font-semibold">
          Strategic Engagement Recommendations
        </AccordionTrigger>
        <AccordionContent className="prose prose-sm max-w-none">
          <h3>PRIMARY ENGAGEMENT APPROACH</h3>

          <h4 className="font-semibold mt-4">Phase 1: Entry Point (Weeks 1-4)</h4>
          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="text-base">Contact Andrew Baca with Federal Compliance Value Proposition</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <ul>
                <li>Lead with CMMC 2.0 automation opportunity</li>
                <li>Frame as "mission-critical" for federal contract retention (his language)</li>
                <li>Emphasize competitive advantage and revenue protection</li>
                <li>Request 30-minute exploratory call</li>
              </ul>
            </CardContent>
          </Card>

          <h4 className="font-semibold mt-4">Phase 2: Discovery & Validation (Weeks 5-8)</h4>
          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="text-base">Engage Leadership Team with Detailed Analysis</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <ul>
                <li>Provide comprehensive proposal with financial model</li>
                <li>Address operational implementation concerns</li>
                <li>Demonstrate understanding of employee-ownership structure</li>
                <li>Build trust through thorough preparation and regional references</li>
              </ul>
            </CardContent>
          </Card>

          <h4 className="font-semibold mt-4">Phase 3: Relationship Development (Weeks 9-16)</h4>
          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="text-base">Involve Technical and Sales Teams</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <ul>
                <li>Discuss how solution enables better client service</li>
                <li>Explore federal market expansion opportunities</li>
                <li>Gather feedback on competitive positioning</li>
                <li>Build advocates for internal selling</li>
              </ul>
            </CardContent>
          </Card>

          <h4 className="font-semibold mt-4">Phase 4: Pilot Engagement (Weeks 17-24)</h4>
          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="text-base">Propose Limited Scope Pilot</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <ul>
                <li>Start with single compliance area (e.g., CMMC Level 1 automation)</li>
                <li>Demonstrate quick wins to build confidence</li>
                <li>Document results and ROI for expansion case</li>
                <li>Transition from project to partnership mindset</li>
              </ul>
            </CardContent>
          </Card>

          <h3 className="mt-6">MESSAGING FRAMEWORK BY PERSONA</h3>

          <div className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">For Andrew Baca (CEO):</CardTitle>
              </CardHeader>
              <CardContent className="text-sm italic">
                "Federal compliance services represent your most strategic opportunity to protect and expand your federal relationships. CMMC 2.0 is mandatory for defense contractors—your clients need this now. Early movers will capture market share while competitors scramble. This positions ABBA as the compliance-enabled MSP in your region, protecting the federal relationship capital you've built over 32 years."
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">For Ed Peña (VP):</CardTitle>
              </CardHeader>
              <CardContent className="text-sm italic">
                "Your federal clients are asking about CMMC compliance—they're worried about losing contracts. This solution lets you proactively address their concerns while differentiating ABBA from regional competitors. Partnership opportunities with compliance vendors leverage your existing vendor relationships and create new revenue streams at premium margins."
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">For Technical Team:</CardTitle>
              </CardHeader>
              <CardContent className="text-sm italic">
                "We understand you're managing explosive growth with existing resources. This solution converts manual compliance work into automated processes, reducing operational burden while creating recurring revenue. The technical architecture emphasizes compliance-as-code and continuous monitoring tools that reduce manual burden rather than increasing it."
              </CardContent>
            </Card>
          </div>

          <h3 className="mt-6">CRITICAL SUCCESS FACTORS</h3>
          <ul className="text-sm space-y-2">
            <li><strong>Patience:</strong> Conservative culture moves slowly on new initiatives despite rapid revenue growth</li>
            <li><strong>Persistence:</strong> Follow-up discipline essential - they get distracted by operational fires</li>
            <li><strong>Partnership Framing:</strong> Position as long-term partner, not transactional vendor</li>
            <li><strong>Quick Wins:</strong> Demonstrate value rapidly - they need confidence-building early results</li>
            <li><strong>Regional References:</strong> New Mexico or Southwest references critical for trust-building</li>
            <li><strong>Federal Expertise:</strong> Must demonstrate deep understanding of federal compliance landscape</li>
          </ul>

          <h3 className="mt-6">RED FLAGS TO AVOID</h3>
          <ul className="text-sm space-y-2">
            <li>❌ Lengthy implementation timelines (they want results, not multi-year projects)</li>
            <li>❌ Complex contract structures (keep agreements simple and straightforward)</li>
            <li>❌ Criticism of current processes (frame as evolution, not replacement)</li>
            <li>❌ Overpromising capabilities (under-promise, over-deliver approach)</li>
            <li>❌ Ignoring employee-ownership culture (fundamental to their identity)</li>
            <li>❌ Aggressive scaling pressure (conflicts with sustainable growth values)</li>
          </ul>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="risk-assessment">
        <AccordionTrigger className="text-lg font-heading font-semibold">
          Risk Assessment & Mitigation Strategies
        </AccordionTrigger>
        <AccordionContent className="prose prose-sm max-w-none">
          <h3>Key Risks Identified</h3>

          <div className="space-y-4 mt-4">
            <Card className="border-red-600">
              <CardHeader>
                <CardTitle className="text-base">RISK #1: Leadership Capacity Constraints</CardTitle>
                <div className="flex gap-2 mt-2">
                  <Badge className="bg-red-600">Probability: 75%</Badge>
                  <Badge variant="outline">Impact: High</Badge>
                </div>
              </CardHeader>
              <CardContent className="text-sm">
                <p><strong>Issue:</strong> Three senior leaders (CEO/VP/CTO) managing 86 employees represents unsustainable span of control during rapid scaling.</p>
                <p className="mt-2"><strong>Mitigation:</strong> Executive team expansion prioritization, middle management development, delegation framework implementation, strategic advisory support for CEO.</p>
              </CardContent>
            </Card>

            <Card className="border-orange-600">
              <CardHeader>
                <CardTitle className="text-base">RISK #2: Operational Scalability Gaps</CardTitle>
                <div className="flex gap-2 mt-2">
                  <Badge className="bg-orange-600">Probability: 70%</Badge>
                  <Badge variant="outline">Impact: Moderate-High</Badge>
                </div>
              </CardHeader>
              <CardContent className="text-sm">
                <p><strong>Issue:</strong> 83% workforce growth creating process strain, service delivery inconsistency risk, and quality control challenges.</p>
                <p className="mt-2"><strong>Mitigation:</strong> Process documentation and automation, service delivery playbooks, quality assurance systems, technical team expansion.</p>
              </CardContent>
            </Card>

            <Card className="border-orange-600">
              <CardHeader>
                <CardTitle className="text-base">RISK #3: Federal Contract Dependency</CardTitle>
                <div className="flex gap-2 mt-2">
                  <Badge className="bg-orange-600">Probability: 60%</Badge>
                  <Badge variant="outline">Impact: High</Badge>
                </div>
              </CardHeader>
              <CardContent className="text-sm">
                <p><strong>Issue:</strong> Heavy reliance on federal sector creates cyclical revenue vulnerability and CMMC eligibility risk.</p>
                <p className="mt-2"><strong>Mitigation:</strong> Commercial market expansion, service diversification, CMMC Level 2 certification immediate priority, federal contractor client base broadening.</p>
              </CardContent>
            </Card>

            <Card className="border-yellow-600">
              <CardHeader>
                <CardTitle className="text-base">RISK #4: Margin Compression Extended Period</CardTitle>
                <div className="flex gap-2 mt-2">
                  <Badge className="bg-yellow-600">Probability: 35%</Badge>
                  <Badge variant="outline">Impact: Moderate-High</Badge>
                </div>
              </CardHeader>
              <CardContent className="text-sm">
                <p><strong>Issue:</strong> Growth investments and scaling inefficiencies creating temporary margin pressure.</p>
                <p className="mt-2"><strong>Mitigation:</strong> Efficiency automation prioritization, premium service tier pricing, portfolio optimization (exit low-margin work), cost discipline.</p>
              </CardContent>
            </Card>

            <Card className="border-yellow-600">
              <CardHeader>
                <CardTitle className="text-base">RISK #5: Culture Dilution & Employee Disengagement</CardTitle>
                <div className="flex gap-2 mt-2">
                  <Badge className="bg-yellow-600">Probability: 45%</Badge>
                  <Badge variant="outline">Impact: Moderate</Badge>
                </div>
              </CardHeader>
              <CardContent className="text-sm">
                <p><strong>Issue:</strong> Rapid hiring diluting employee-ownership culture, founding generation stress from growth pace.</p>
                <p className="mt-2"><strong>Mitigation:</strong> Values reinforcement programs, transparent communication, founding generation engagement, culture ambassador program, equitable employee-owner distribution.</p>
              </CardContent>
            </Card>
          </div>

          <h3 className="mt-6">Overall Partnership Success Probability</h3>
          <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg">
            <p className="text-3xl font-bold text-green-700 dark:text-green-400 mb-4">78%</p>
            <p className="text-sm font-semibold mb-2">High Confidence Assessment Reflecting:</p>
            <ul className="text-sm space-y-1">
              <li>✓ <strong>Strategic Alignment (95%):</strong> Federal growth trajectory perfectly aligns with recommended services</li>
              <li>✓ <strong>Organizational Readiness (75%):</strong> Strong capabilities foundation with addressable gaps</li>
              <li>✓ <strong>Cultural Fit (70%):</strong> Services align with reliability, security, and client success values</li>
              <li>✓ <strong>Financial Capacity (80%):</strong> Revenue growth and conservative balance sheet support investment</li>
              <li>✓ <strong>Leadership Commitment (85%):</strong> CEO/VP demonstrated commitment through growth investments</li>
              <li>✓ <strong>Execution Capability (65%):</strong> Stretched but competent; executive expansion needed</li>
              <li>✓ <strong>Market Opportunity (90%):</strong> Federal IT spending robust; commercial demand for premium security</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);
