export type InfluencePrinciple = 
  | 'Reciprocation'
  | 'Liking'
  | 'Social Proof'
  | 'Authority'
  | 'Scarcity'
  | 'Commitment/Consistency'
  | 'Unity'
  | 'Instant Influence';

export interface TemplateVariable {
  key: string;
  label: string;
  type: 'text' | 'select' | 'textarea' | 'date' | 'currency';
  required: boolean;
  options?: string[];
  placeholder?: string;
  helpText?: string;
}

export interface EmailTemplate {
  id: string;
  name: string;
  influencePrinciple: InfluencePrinciple;
  useCase: string;
  subject: string;
  body: string;
  variables: TemplateVariable[];
  psychologyExplanation: string;
  whenToUse: string;
  successRate?: number;
  examplePreview: {
    subject: string;
    bodySnippet: string;
  };
}

export const influencePrincipleTemplates: EmailTemplate[] = [
  {
    id: "tmpl-reciprocation-001",
    name: "Free Resource/Playbook Offer",
    influencePrinciple: "Reciprocation",
    useCase: "First Contact",
    subject: "Free {resource_name} for {client_name}",
    body: `Hi {contact_name},

I've been tracking {client_name}'s growth and your {specific_initiative} with interest. {specific_compliment}.

I wanted to give you something useful, no strings attached:

🎁 Your Free "{resource_name}":
• {deliverable_1}
• {deliverable_2}
• {deliverable_3}
• {deliverable_4}

This is pulled from successful campaigns at {reference_companies}. It's yours whether we ever connect or not.

I'm also happy to do a complimentary {consultation_type} if you'd find it valuable—no pitch, just specific recommendations on {specific_value_prop}.

Download the kit here: {resource_link}

Hoping {upcoming_initiative} is a massive success for you and the team.

Best,
{your_name}
{your_title}, Dataart
{email} | {phone}

P.S. If you want me to look at {specific_deliverable}, just send it over. Happy to give candid feedback.`,
    variables: [
      { key: "contact_name", label: "Contact Name", type: "text", required: true, placeholder: "John" },
      { key: "client_name", label: "Client Name", type: "text", required: true, placeholder: "Acme Corp" },
      { key: "resource_name", label: "Free Resource Name", type: "text", required: true, placeholder: "AI Marketing Playbook 2026" },
      { key: "specific_initiative", label: "Their Initiative/Project", type: "text", required: true, placeholder: "AI strategy rollout" },
      { key: "specific_compliment", label: "Specific Compliment", type: "textarea", required: true, placeholder: "Your approach to digital transformation is impressive" },
      { key: "deliverable_1", label: "Deliverable 1", type: "text", required: true, placeholder: "Framework for AI-powered campaigns" },
      { key: "deliverable_2", label: "Deliverable 2", type: "text", required: true, placeholder: "Case studies from 5 similar platforms" },
      { key: "deliverable_3", label: "Deliverable 3", type: "text", required: true, placeholder: "ROI calculator template" },
      { key: "deliverable_4", label: "Deliverable 4", type: "text", required: true, placeholder: "Implementation timeline" },
      { key: "reference_companies", label: "Reference Companies", type: "text", required: false, placeholder: "similar healthcare platforms" },
      { key: "consultation_type", label: "Consultation Type", type: "text", required: false, placeholder: "30-minute strategy session" },
      { key: "specific_value_prop", label: "Specific Value Proposition", type: "text", required: false, placeholder: "scaling your SOC operations" },
      { key: "resource_link", label: "Resource Link", type: "text", required: false, placeholder: "[LINK]" },
      { key: "upcoming_initiative", label: "Upcoming Initiative", type: "text", required: false, placeholder: "your Q1 launch" },
      { key: "your_name", label: "Your Name", type: "text", required: true, placeholder: "Sarah Johnson" },
      { key: "your_title", label: "Your Title", type: "text", required: true, placeholder: "VP Marketing" },
      { key: "email", label: "Your Email", type: "text", required: true, placeholder: "sarah@dataart.com" },
      { key: "phone", label: "Your Phone", type: "text", required: false, placeholder: "555-0123" },
      { key: "specific_deliverable", label: "Specific Deliverable to Review", type: "text", required: false, placeholder: "your current messaging framework" }
    ],
    psychologyExplanation: "People feel obligated to return favors and value given freely. By providing significant value upfront with no expectation, you create psychological debt that makes them more likely to engage.",
    whenToUse: "First contact with prospects. When you have high-value deliverables to share. When starting relationship with no prior connection.",
    successRate: 45,
    examplePreview: {
      subject: "Free AI Marketing Playbook for Acme Corp",
      bodySnippet: "I've been tracking Acme Corp's growth with interest. I wanted to give you something useful, no strings attached..."
    }
  },
  {
    id: "tmpl-liking-001",
    name: "Shared Background/Alumni",
    influencePrinciple: "Liking",
    useCase: "First Contact",
    subject: "Fellow {shared_connection} helping {industry} platforms scale",
    body: `Hi {contact_name},

I noticed we both {shared_commonality}—{connection_detail}! Small world. More importantly, I've been following your work at {client_name} and I'm genuinely impressed.

Your {specific_achievement} is exactly right. Most {role_title}s in {industry} are still stuck on {common_mistake}, but you're elevating the conversation to {their_approach}. That takes courage and clarity.

I also loved how you're {specific_observation}. That balance—{tension_they_face}—is incredibly hard to execute.

The reason I'm reaching out: I work specifically with {client_type} navigating this exact transition. We've helped {number} companies scale from {start_revenue} to {end_revenue} ARR while maintaining their {core_value}.

I'm in {their_city} quarterly visiting {personal_reason}. Would you be open to coffee next time I'm in town? I'd love to hear about your {strategy_area} strategy and share what's working for similar platforms. No agenda, just fellow {shared_identity} talking shop.

Let me know if that sounds interesting. Either way, keep up the excellent work—you're building something special at {client_name}.

Best,
{your_name}
{your_title}, Dataart
{email} | {linkedin}

P.S. Saw {recent_achievement}—well-deserved! The {specific_metric} while maintaining {other_metric} is remarkable.`,
    variables: [
      { key: "contact_name", label: "Contact Name", type: "text", required: true },
      { key: "shared_commonality", label: "Shared Commonality", type: "select", required: true, options: ["attended Duke", "worked at Microsoft", "live in Charlotte", "are both healthcare marketers"] },
      { key: "connection_detail", label: "Connection Detail", type: "text", required: true, placeholder: "Go Blue Devils!" },
      { key: "client_name", label: "Client Name", type: "text", required: true },
      { key: "specific_achievement", label: "Their Specific Achievement", type: "textarea", required: true, placeholder: "approach to positioning HIPAA compliance as a competitive advantage" },
      { key: "role_title", label: "Their Role Title", type: "text", required: true, placeholder: "CMOs" },
      { key: "industry", label: "Industry", type: "text", required: true, placeholder: "healthcare" },
      { key: "common_mistake", label: "Common Mistake", type: "text", required: true, placeholder: "defensive compliance messaging" },
      { key: "their_approach", label: "Their Approach", type: "text", required: true, placeholder: "proactive trust-building" },
      { key: "specific_observation", label: "Specific Observation", type: "textarea", required: true, placeholder: "balancing regulatory requirements with patient-friendly messaging" },
      { key: "tension_they_face", label: "Tension They Face", type: "text", required: true, placeholder: "legal rigor vs. market approachability" },
      { key: "client_type", label: "Client Type", type: "text", required: true, placeholder: "healthcare platforms" },
      { key: "number", label: "Number of Companies", type: "text", required: false, placeholder: "12" },
      { key: "start_revenue", label: "Start Revenue", type: "text", required: false, placeholder: "$5M" },
      { key: "end_revenue", label: "End Revenue", type: "text", required: false, placeholder: "$50M" },
      { key: "core_value", label: "Core Value", type: "text", required: false, placeholder: "patient-first mission" },
      { key: "their_city", label: "Their City", type: "text", required: false, placeholder: "Charlotte" },
      { key: "personal_reason", label: "Personal Reason", type: "text", required: false, placeholder: "family" },
      { key: "strategy_area", label: "Strategy Area", type: "text", required: true, placeholder: "market positioning" },
      { key: "shared_identity", label: "Shared Identity", type: "text", required: true, placeholder: "Duke alums" },
      { key: "your_name", label: "Your Name", type: "text", required: true },
      { key: "your_title", label: "Your Title", type: "text", required: true },
      { key: "email", label: "Your Email", type: "text", required: true },
      { key: "linkedin", label: "Your LinkedIn", type: "text", required: false, placeholder: "linkedin.com/in/yourname" },
      { key: "recent_achievement", label: "Recent Achievement", type: "text", required: false, placeholder: "your Q3 growth numbers" },
      { key: "specific_metric", label: "Specific Metric", type: "text", required: false, placeholder: "45% growth" },
      { key: "other_metric", label: "Other Metric", type: "text", required: false, placeholder: "95% retention" }
    ],
    psychologyExplanation: "We say yes to people we like. Commonality, genuine compliments, and cooperation create rapport and make people more receptive to your message.",
    whenToUse: "When you have genuine commonality (alumni, location, background). When you can authentically compliment their work. When relationship-building is priority over immediate sale.",
    successRate: 52,
    examplePreview: {
      subject: "Fellow Duke alum helping healthcare platforms scale",
      bodySnippet: "I noticed we both attended Duke—Go Blue Devils! I've been following your work at Maplewood and I'm genuinely impressed..."
    }
  },
  {
    id: "tmpl-social-proof-001",
    name: "How Similar Companies Won",
    influencePrinciple: "Social Proof",
    useCase: "First Contact / Follow-up",
    subject: "How {number} {industry} platforms are winning the {market_segment} market",
    body: `Hi {contact_name},

Quick question: as {client_name} scales into {market_segment}, are you seeing the same pattern other {industry} platforms report—{pain_metric_1} and {pain_metric_2}?

I've been working with {company_1}, {company_2}, and another {industry} provider on this exact challenge. All three saw the same friction points:

**What They Were Experiencing:**
• {friction_point_1}
• {friction_point_2}
• {friction_point_3}
• {friction_point_4}

**What's Working Now:**
✅ {company_1}: {result_1}
✅ {company_2}: {result_2}
✅ Platform 3: {result_3}

The common thread: all three {key_insight}.

Given {their_specific_initiative} and your {their_goal}, this feels timely for {client_name}.

Would a 20-minute call make sense to share the specific playbook? I can walk through what these platforms did differently and how it might apply to your {timeframe} strategy.

Best,
{your_name}
{your_title}, Dataart
{email} | {phone}

P.S. All three platforms mentioned you're the team to beat in the {industry} space—your {reputation_point} is strong.`,
    variables: [
      { key: "contact_name", label: "Contact Name", type: "text", required: true },
      { key: "client_name", label: "Client Name", type: "text", required: true },
      { key: "number", label: "Number of Companies", type: "text", required: true, placeholder: "3" },
      { key: "industry", label: "Industry", type: "text", required: true, placeholder: "healthcare" },
      { key: "market_segment", label: "Market Segment", type: "text", required: true, placeholder: "enterprise compliance" },
      { key: "pain_metric_1", label: "Pain Metric 1", type: "text", required: true, placeholder: "60+ day sales cycles" },
      { key: "pain_metric_2", label: "Pain Metric 2", type: "text", required: true, placeholder: "15% conversion on demos" },
      { key: "company_1", label: "Reference Company 1", type: "text", required: true, placeholder: "HealthTech Solutions" },
      { key: "company_2", label: "Reference Company 2", type: "text", required: true, placeholder: "CareConnect" },
      { key: "friction_point_1", label: "Friction Point 1", type: "text", required: true },
      { key: "friction_point_2", label: "Friction Point 2", type: "text", required: true },
      { key: "friction_point_3", label: "Friction Point 3", type: "text", required: true },
      { key: "friction_point_4", label: "Friction Point 4", type: "text", required: true },
      { key: "result_1", label: "Result for Company 1", type: "text", required: true, placeholder: "Reduced sales cycle 45 days" },
      { key: "result_2", label: "Result for Company 2", type: "text", required: true, placeholder: "Increased demo conversion to 31%" },
      { key: "result_3", label: "Result for Company 3", type: "text", required: true, placeholder: "3x pipeline in 90 days" },
      { key: "key_insight", label: "Key Insight", type: "textarea", required: true, placeholder: "repositioned compliance from cost center to revenue enabler" },
      { key: "their_specific_initiative", label: "Their Specific Initiative", type: "text", required: true },
      { key: "their_goal", label: "Their Goal", type: "text", required: true },
      { key: "timeframe", label: "Timeframe", type: "text", required: true, placeholder: "Q1 2026" },
      { key: "your_name", label: "Your Name", type: "text", required: true },
      { key: "your_title", label: "Your Title", type: "text", required: true },
      { key: "email", label: "Your Email", type: "text", required: true },
      { key: "phone", label: "Your Phone", type: "text", required: false },
      { key: "reputation_point", label: "Reputation Point", type: "text", required: false, placeholder: "patient trust positioning" }
    ],
    psychologyExplanation: "We follow the lead of similar others. Showing that comparable companies faced the same challenge and succeeded creates confidence that it will work for them too.",
    whenToUse: "When you have client references in same industry. When prospect is facing common industry challenge. When social validation matters more than authority.",
    successRate: 58,
    examplePreview: {
      subject: "How 3 healthcare platforms are winning the enterprise compliance market",
      bodySnippet: "Quick question: as Maplewood scales into enterprise compliance, are you seeing the same pattern other healthcare platforms report..."
    }
  },
  {
    id: "tmpl-authority-001",
    name: "Published Research Findings",
    influencePrinciple: "Authority",
    useCase: "First Contact",
    subject: "[Research] Why {industry} platforms fail at {challenge}",
    body: `Hi {contact_name},

I recently completed research with {sample_size} {industry} platforms on {research_topic}. Published in {publication} with {download_count} downloads.

**Key Finding:** {key_stat} of {industry} platforms fail to {challenge} because they {common_mistake}. The {success_criteria} is fundamentally different.

**The Research Shows:**
• {finding_1}
• {finding_2}
• {finding_3}
• {finding_4}

**What Top Performers Do Differently:**
The {success_percentage} who successfully scaled to {success_milestone} all deployed these specific tactics:

1. {tactic_1}
2. {tactic_2}
3. {tactic_3}
4. {tactic_4}

I've documented the complete framework in a {page_count}-page research report: "{report_title}"

Given {client_name}'s positioning as {their_position} and your {their_initiative}, I thought this research would be directly relevant to your {timeframe} strategy.

I'm happy to share the full report and walk through specific applications to {industry} marketing. Worth 30 minutes?

Best,
{your_name}
{your_title}, Dataart
{credential_1}
{linkedin} | {research_link}`,
    variables: [
      { key: "contact_name", label: "Contact Name", type: "text", required: true },
      { key: "client_name", label: "Client Name", type: "text", required: true },
      { key: "sample_size", label: "Sample Size", type: "text", required: true, placeholder: "15" },
      { key: "industry", label: "Industry", type: "text", required: true, placeholder: "healthcare" },
      { key: "research_topic", label: "Research Topic", type: "text", required: true, placeholder: "HIPAA marketing compliance" },
      { key: "publication", label: "Publication", type: "text", required: true, placeholder: "Healthcare Marketing Quarterly" },
      { key: "download_count", label: "Download Count", type: "text", required: false, placeholder: "2,400+" },
      { key: "key_stat", label: "Key Statistic", type: "text", required: true, placeholder: "78%" },
      { key: "challenge", label: "Challenge", type: "text", required: true, placeholder: "balance compliance with compelling messaging" },
      { key: "common_mistake", label: "Common Mistake", type: "textarea", required: true, placeholder: "default to generic legal-approved copy" },
      { key: "success_criteria", label: "Success Criteria", type: "text", required: true, placeholder: "compliance + conversion framework" },
      { key: "finding_1", label: "Research Finding 1", type: "textarea", required: true },
      { key: "finding_2", label: "Research Finding 2", type: "textarea", required: true },
      { key: "finding_3", label: "Research Finding 3", type: "textarea", required: true },
      { key: "finding_4", label: "Research Finding 4", type: "textarea", required: true },
      { key: "success_percentage", label: "Success Percentage", type: "text", required: true, placeholder: "22%" },
      { key: "success_milestone", label: "Success Milestone", type: "text", required: true, placeholder: "$50M ARR" },
      { key: "tactic_1", label: "Tactic 1", type: "textarea", required: true },
      { key: "tactic_2", label: "Tactic 2", type: "textarea", required: true },
      { key: "tactic_3", label: "Tactic 3", type: "textarea", required: true },
      { key: "tactic_4", label: "Tactic 4", type: "textarea", required: true },
      { key: "page_count", label: "Page Count", type: "text", required: false, placeholder: "24" },
      { key: "report_title", label: "Report Title", type: "text", required: true },
      { key: "their_position", label: "Their Position", type: "text", required: true, placeholder: "premium senior living provider" },
      { key: "their_initiative", label: "Their Initiative", type: "text", required: true },
      { key: "timeframe", label: "Timeframe", type: "text", required: true, placeholder: "2026" },
      { key: "your_name", label: "Your Name", type: "text", required: true },
      { key: "your_title", label: "Your Title", type: "text", required: true },
      { key: "credential_1", label: "Credential 1", type: "text", required: false, placeholder: "MBA, Healthcare Marketing" },
      { key: "linkedin", label: "Your LinkedIn", type: "text", required: false },
      { key: "research_link", label: "Research Link", type: "text", required: false }
    ],
    psychologyExplanation: "We defer to experts and credible sources. Published research, data, and credentials position you as an authority figure whose advice should be taken seriously.",
    whenToUse: "When you have legitimate research/data. When targeting analytical/data-driven buyers. When you need to establish credibility quickly.",
    successRate: 48,
    examplePreview: {
      subject: "[Research] Why healthcare platforms fail at HIPAA marketing compliance",
      bodySnippet: "I recently completed research with 15 healthcare platforms on HIPAA marketing compliance. Key Finding: 78% fail to balance compliance with compelling messaging..."
    }
  },
  {
    id: "tmpl-scarcity-001",
    name: "Limited Spots Program",
    influencePrinciple: "Scarcity",
    useCase: "Follow-up / Special Offer",
    subject: "{spots_remaining} spots left: {program_name}",
    body: `Hi {contact_name},

I'll cut right to it: we're running an exclusive {program_name} for {industry} platforms scaling into {market}. It's happening {timeframe}, limited to {total_spots} companies, and we're down to {spots_remaining} spots.

**Why this matters for {client_name}:**

You're at the exact inflection point where this becomes critical:
✅ {inflection_point_1}
✅ {inflection_point_2}
✅ {inflection_point_3}
✅ {inflection_point_4}

**What You'd Get ({duration}, intensive):**
• {deliverable_1}
• {deliverable_2}
• {deliverable_3}
• {deliverable_4}

**Current Participants:**
• {participant_1}
• {participant_2}
• {participant_3}
• {remaining_count} others (under NDA but happy to connect you)

**The constraint:** We can only work deeply with {total_spots} platforms at once. {spots_remaining} spots remain, both currently held for {industry} providers. If {client_name} isn't ready for this, I'll release your spot to the waitlist by **{deadline_date}**.

Worth a 15-minute exploratory call this week to see if it's a fit?

Best,
{your_name}
{your_title}, Dataart
{email} | {phone}

P.S. If timing isn't right for {timeframe}, we'll run another cohort in {future_timeframe}. But given your {specific_initiative} and {event_timing}, {timeframe} feels more strategic.`,
    variables: [
      { key: "contact_name", label: "Contact Name", type: "text", required: true },
      { key: "client_name", label: "Client Name", type: "text", required: true },
      { key: "program_name", label: "Program Name", type: "text", required: true, placeholder: "Enterprise Marketing Accelerator" },
      { key: "spots_remaining", label: "Spots Remaining", type: "text", required: true, placeholder: "2" },
      { key: "total_spots", label: "Total Spots", type: "text", required: true, placeholder: "8" },
      { key: "industry", label: "Industry", type: "text", required: true },
      { key: "market", label: "Market", type: "text", required: true, placeholder: "enterprise healthcare" },
      { key: "timeframe", label: "Timeframe", type: "text", required: true, placeholder: "Q1 2026" },
      { key: "inflection_point_1", label: "Inflection Point 1", type: "text", required: true },
      { key: "inflection_point_2", label: "Inflection Point 2", type: "text", required: true },
      { key: "inflection_point_3", label: "Inflection Point 3", type: "text", required: true },
      { key: "inflection_point_4", label: "Inflection Point 4", type: "text", required: true },
      { key: "duration", label: "Duration", type: "text", required: true, placeholder: "6 weeks" },
      { key: "deliverable_1", label: "Deliverable 1", type: "text", required: true },
      { key: "deliverable_2", label: "Deliverable 2", type: "text", required: true },
      { key: "deliverable_3", label: "Deliverable 3", type: "text", required: true },
      { key: "deliverable_4", label: "Deliverable 4", type: "text", required: true },
      { key: "participant_1", label: "Participant 1", type: "text", required: false },
      { key: "participant_2", label: "Participant 2", type: "text", required: false },
      { key: "participant_3", label: "Participant 3", type: "text", required: false },
      { key: "remaining_count", label: "Remaining Count", type: "text", required: false, placeholder: "5" },
      { key: "deadline_date", label: "Deadline Date", type: "date", required: true },
      { key: "your_name", label: "Your Name", type: "text", required: true },
      { key: "your_title", label: "Your Title", type: "text", required: true },
      { key: "email", label: "Your Email", type: "text", required: true },
      { key: "phone", label: "Your Phone", type: "text", required: false },
      { key: "future_timeframe", label: "Future Timeframe", type: "text", required: false, placeholder: "Q3 2026" },
      { key: "specific_initiative", label: "Specific Initiative", type: "text", required: false },
      { key: "event_timing", label: "Event Timing", type: "text", required: false }
    ],
    psychologyExplanation: "We value things more when they're less available. Limited spots, time pressure, and waitlist mentions create urgency and FOMO (fear of missing out).",
    whenToUse: "When you have legitimate scarcity (limited capacity). For high-value programs/offers. When urgency accelerates decision-making. Works best for qualified prospects already considering.",
    successRate: 41,
    examplePreview: {
      subject: "2 spots left: Enterprise Marketing Accelerator",
      bodySnippet: "I'll cut right to it: we're running an exclusive Enterprise Marketing Accelerator for healthcare platforms scaling into enterprise..."
    }
  },
  {
    id: "tmpl-commitment-001",
    name: "Align with Public Statements",
    influencePrinciple: "Commitment/Consistency",
    useCase: "Follow-up / Positioning Challenge",
    subject: "Following up: Your '{public_statement}' positioning",
    body: `Hi {contact_name},

I was reviewing {client_name}'s recent positioning—particularly your framing of {topic} as a "{framing}" rather than just a {alternative_framing}—and it really resonated.

You're absolutely right that this is {your_assessment}. But here's the interesting challenge: if {topic} truly is {their_claim}, then marketing it requires {implication_approach}, not just {current_approach}.

**What You've Committed To (Publicly):**
• "{quote_1}"
• "{quote_2}"
• "{quote_3}"
• "{quote_4}"

**The Marketing Implication:**
If those commitments are true (and they are), then your marketing needs to:

1. {required_change_1}
2. {required_change_2}
3. {required_change_3}
4. {required_change_4}

Most {industry} platforms are still doing {transactional_approach}. You've committed to something bigger—{transformational_approach}—but I'm not seeing the full execution match the vision yet.

**Specific Gap:** Your {specific_example} is positioned as {current_state}, not a {desired_state}. The {asset_type} is {current_state_2}, not {desired_state_2}. The {deliverable} shows {current_metric}, not {desired_metric}.

I'd love to show you what "{transformational_approach}" actually looks like for {industry} platforms—specifically how to {specific_outcome}.

Would that be valuable? Happy to do a 30-minute session walking through the framework.

Best,
{your_name}
{your_title}, Dataart
{email} | {linkedin}

P.S. I'm not criticizing—you're ahead of {percentage} of {industry} providers. Just pointing out the gap between your stated vision and current execution. Easy to close.`,
    variables: [
      { key: "contact_name", label: "Contact Name", type: "text", required: true },
      { key: "client_name", label: "Client Name", type: "text", required: true },
      { key: "public_statement", label: "Their Public Statement", type: "text", required: true, placeholder: "patient trust is our competitive advantage" },
      { key: "topic", label: "Topic", type: "text", required: true, placeholder: "HIPAA compliance" },
      { key: "framing", label: "Framing", type: "text", required: true, placeholder: "strategic differentiator" },
      { key: "alternative_framing", label: "Alternative Framing", type: "text", required: true, placeholder: "legal requirement" },
      { key: "your_assessment", label: "Your Assessment", type: "text", required: true },
      { key: "their_claim", label: "Their Claim", type: "text", required: true },
      { key: "implication_approach", label: "Implication Approach", type: "text", required: true, placeholder: "trust-first positioning" },
      { key: "current_approach", label: "Current Approach", type: "text", required: true, placeholder: "feature listing" },
      { key: "quote_1", label: "Public Quote 1", type: "textarea", required: true },
      { key: "quote_2", label: "Public Quote 2", type: "textarea", required: true },
      { key: "quote_3", label: "Public Quote 3", type: "textarea", required: false },
      { key: "quote_4", label: "Public Quote 4", type: "textarea", required: false },
      { key: "required_change_1", label: "Required Change 1", type: "textarea", required: true },
      { key: "required_change_2", label: "Required Change 2", type: "textarea", required: true },
      { key: "required_change_3", label: "Required Change 3", type: "textarea", required: true },
      { key: "required_change_4", label: "Required Change 4", type: "textarea", required: false },
      { key: "industry", label: "Industry", type: "text", required: true },
      { key: "transactional_approach", label: "Transactional Approach", type: "text", required: true, placeholder: "feature-based selling" },
      { key: "transformational_approach", label: "Transformational Approach", type: "text", required: true, placeholder: "trust-based positioning" },
      { key: "specific_example", label: "Specific Example", type: "text", required: true, placeholder: "compliance page" },
      { key: "current_state", label: "Current State", type: "text", required: true, placeholder: "checkbox list" },
      { key: "desired_state", label: "Desired State", type: "text", required: true, placeholder: "trust narrative" },
      { key: "asset_type", label: "Asset Type", type: "text", required: false, placeholder: "homepage hero" },
      { key: "current_state_2", label: "Current State 2", type: "text", required: false },
      { key: "desired_state_2", label: "Desired State 2", type: "text", required: false },
      { key: "deliverable", label: "Deliverable", type: "text", required: false },
      { key: "current_metric", label: "Current Metric", type: "text", required: false },
      { key: "desired_metric", label: "Desired Metric", type: "text", required: false },
      { key: "specific_outcome", label: "Specific Outcome", type: "text", required: true },
      { key: "your_name", label: "Your Name", type: "text", required: true },
      { key: "your_title", label: "Your Title", type: "text", required: true },
      { key: "email", label: "Your Email", type: "text", required: true },
      { key: "linkedin", label: "Your LinkedIn", type: "text", required: false },
      { key: "percentage", label: "Percentage", type: "text", required: false, placeholder: "85%" }
    ],
    psychologyExplanation: "We align with our previous commitments and stated positions. Pointing out the gap between their public vision and current execution creates cognitive dissonance they want to resolve.",
    whenToUse: "When prospect has made public statements/commitments. When there's a visible gap between vision and execution. Works best with thought leaders and mission-driven companies.",
    successRate: 44,
    examplePreview: {
      subject: "Following up: Your 'patient trust is our competitive advantage' positioning",
      bodySnippet: "I was reviewing Maplewood's recent positioning—particularly your framing of HIPAA compliance as a strategic differentiator..."
    }
  },
  {
    id: "tmpl-unity-001",
    name: "Fellow Mission-First Approach",
    influencePrinciple: "Unity",
    useCase: "First Contact / Relationship Building",
    subject: "Fellow {shared_identity}: The {shared_challenge} paradox",
    body: `Hi {contact_name},

I need to talk to someone who gets it.

You're facing what I call "The {shared_identity}'s Paradox":

**The Paradox:**
✅ You started {origin_story} (mission work)
✅ {stakeholder} now want {growth_pressure} (necessary for scale)
✅ But {growth_tactic} often requires tactics that feel... {concern}
✅ And your team's soul—the "{core_value}" DNA—starts to wonder: _Are we losing ourselves?_

I've lived this. {number_of_times} times.

As a {your_role} at {number} {company_type} companies, I've navigated this exact tension. Here's what I learned:

**The False Choice:**
Most people think it's either/or:
• EITHER stay {value_1} (but can't scale)
• OR go {value_2} (but lose your soul)

**The Truth:**
There's a third path. Call it "{middle_path}." You CAN {achieve_both}. But it requires specific {approach_type} approaches that most {role_plural} miss.

**What Works:**
• {strategy_1}
• {strategy_2}
• {strategy_3}
• {strategy_4}

I'd love to share the specific playbook with you. Not as vendor to buyer, but as one {shared_identity} to another. We're in a small club—people who care about {metric_1} AND {metric_2}.

{meeting_option_1}? Or {meeting_option_2} if that's easier?

We'll figure this out together.

Best,
{your_name}
{your_title}, Dataart
Fellow {shared_identity}
{email} | {linkedin}

P.S. Bring your hardest question about {core_tension}. I promise an honest answer from someone who's been there.`,
    variables: [
      { key: "contact_name", label: "Contact Name", type: "text", required: true },
      { key: "shared_identity", label: "Shared Identity", type: "text", required: true, placeholder: "mission-first marketers" },
      { key: "shared_challenge", label: "Shared Challenge", type: "text", required: true, placeholder: "growth vs. mission" },
      { key: "origin_story", label: "Their Origin Story", type: "textarea", required: true, placeholder: "to improve patient care" },
      { key: "stakeholder", label: "Stakeholder", type: "text", required: true, placeholder: "boards and investors" },
      { key: "growth_pressure", label: "Growth Pressure", type: "text", required: true, placeholder: "40% YoY growth" },
      { key: "growth_tactic", label: "Growth Tactic", type: "text", required: true, placeholder: "aggressive sales tactics" },
      { key: "concern", label: "Concern", type: "text", required: true, placeholder: "transactional" },
      { key: "core_value", label: "Their Core Value", type: "text", required: true, placeholder: "patient-first" },
      { key: "number_of_times", label: "Number of Times", type: "text", required: false, placeholder: "3" },
      { key: "your_role", label: "Your Role", type: "text", required: false, placeholder: "VP Marketing" },
      { key: "number", label: "Number", type: "text", required: false, placeholder: "5" },
      { key: "company_type", label: "Company Type", type: "text", required: false, placeholder: "mission-driven" },
      { key: "value_1", label: "Value 1", type: "text", required: true, placeholder: "authentic" },
      { key: "value_2", label: "Value 2", type: "text", required: true, placeholder: "aggressive" },
      { key: "middle_path", label: "Middle Path", type: "text", required: true, placeholder: "Principled Growth" },
      { key: "achieve_both", label: "Achieve Both", type: "text", required: true, placeholder: "scale revenue while deepening mission impact" },
      { key: "approach_type", label: "Approach Type", type: "text", required: true, placeholder: "positioning" },
      { key: "role_plural", label: "Role Plural", type: "text", required: true, placeholder: "CMOs" },
      { key: "strategy_1", label: "Strategy 1", type: "textarea", required: true },
      { key: "strategy_2", label: "Strategy 2", type: "textarea", required: true },
      { key: "strategy_3", label: "Strategy 3", type: "textarea", required: true },
      { key: "strategy_4", label: "Strategy 4", type: "textarea", required: false },
      { key: "metric_1", label: "Metric 1", type: "text", required: true, placeholder: "revenue" },
      { key: "metric_2", label: "Metric 2", type: "text", required: true, placeholder: "patient outcomes" },
      { key: "meeting_option_1", label: "Meeting Option 1", type: "text", required: false, placeholder: "Coffee next week" },
      { key: "meeting_option_2", label: "Meeting Option 2", type: "text", required: false, placeholder: "Zoom call" },
      { key: "your_name", label: "Your Name", type: "text", required: true },
      { key: "your_title", label: "Your Title", type: "text", required: true },
      { key: "email", label: "Your Email", type: "text", required: true },
      { key: "linkedin", label: "Your LinkedIn", type: "text", required: false },
      { key: "core_tension", label: "Core Tension", type: "text", required: true, placeholder: "mission vs. margins" }
    ],
    psychologyExplanation: "We favor those we share identity with (we, not them). Articulating their unspoken struggle and positioning yourself as 'one of us' creates deep connection and trust.",
    whenToUse: "When you genuinely share identity/background. With mission-driven organizations facing growth tension. When relationship depth matters more than speed. Works powerfully with founders/leaders wrestling with scale.",
    successRate: 61,
    examplePreview: {
      subject: "Fellow mission-first marketers: The growth vs. mission paradox",
      bodySnippet: "I need to talk to someone who gets it. You're facing what I call The Mission-First Marketer's Paradox..."
    }
  },
  {
    id: "tmpl-instant-influence-001",
    name: "Multi-Principle Combination",
    influencePrinciple: "Instant Influence",
    useCase: "High-Priority First Contact",
    subject: "{contact_name}—Fellow {connection} with gift + urgent opportunity",
    body: `Hi {contact_name},

Three things, because I know you're busy:

**1. The Gift (Reciprocation):**
I put together a {resource_name} specifically for {client_name}. No cost, no strings. Includes:
✅ {deliverable_1}
✅ {deliverable_2}
✅ {deliverable_3}

Download here: {link} (Whether we ever talk or not)

**2. The Research (Authority + Social Proof):**
I just completed a study with {number} {industry} platforms on {research_topic}. Finding: {key_stat} fail at {challenge} because they {common_mistake}.

The {success_percentage} who cracked it? They all did these {number_of_tactics} things (which {client_name} isn't doing yet):
• {tactic_1}
• {tactic_2}
• {tactic_3}
• {tactic_4}

Full research report: {research_link}

**3. The Urgency (Scarcity + Commitment):**
Given your public commitment to "{public_commitment}" and {stakeholder}'s {mandate}, I'm seeing a strategic gap between vision and execution.

I'm running an exclusive {program_name} in {timeframe} ({total_spots} {industry} platforms, {spots_remaining} spots left, waitlist of {waitlist_count}). Based on your {positioning} and {event_timing}, you should be in this cohort.

**But here's the constraint:** Decision needed by **{deadline}** or I release your spot. We can only work deeply with {total_spots} companies, and timing matters for {strategic_reason}.

**My commitment to you (Commitment/Consistency + Unity):**
As a fellow {shared_identity} working with {client_type}, I'm invested in {client_name}'s success whether you become a client or not. The playbook above is proof of that.

But if you want to {desired_outcome_1} while {desired_outcome_2}, let's talk this week.

Worth 20 minutes to explore fit?

Best,
{your_name}
{your_title}, Dataart
{location} | {email} | {phone}

**Fellow {shared_identity} Club:**
• Previously scaled {company_1} {revenue_1} ({description_1})
• Previously scaled {company_2} {revenue_2} ({description_2})
• Currently working with {number_current_clients} {industry} platforms (including {notable_client})

P.S. I'm in {their_city} visiting {personal_reason} {dates}. Coffee at {local_spot} if you prefer meeting in person? I'll buy, and we can figure out if this makes sense.`,
    variables: [
      { key: "contact_name", label: "Contact Name", type: "text", required: true },
      { key: "client_name", label: "Client Name", type: "text", required: true },
      { key: "connection", label: "Connection Type", type: "text", required: true, placeholder: "Duke alum" },
      { key: "resource_name", label: "Free Resource Name", type: "text", required: true },
      { key: "deliverable_1", label: "Deliverable 1", type: "text", required: true },
      { key: "deliverable_2", label: "Deliverable 2", type: "text", required: true },
      { key: "deliverable_3", label: "Deliverable 3", type: "text", required: true },
      { key: "link", label: "Resource Link", type: "text", required: false, placeholder: "[LINK]" },
      { key: "number", label: "Number of Platforms", type: "text", required: true, placeholder: "15" },
      { key: "industry", label: "Industry", type: "text", required: true },
      { key: "research_topic", label: "Research Topic", type: "text", required: true },
      { key: "key_stat", label: "Key Statistic", type: "text", required: true, placeholder: "78%" },
      { key: "challenge", label: "Challenge", type: "text", required: true },
      { key: "common_mistake", label: "Common Mistake", type: "text", required: true },
      { key: "success_percentage", label: "Success Percentage", type: "text", required: true, placeholder: "22%" },
      { key: "number_of_tactics", label: "Number of Tactics", type: "text", required: true, placeholder: "4" },
      { key: "tactic_1", label: "Tactic 1", type: "text", required: true },
      { key: "tactic_2", label: "Tactic 2", type: "text", required: true },
      { key: "tactic_3", label: "Tactic 3", type: "text", required: true },
      { key: "tactic_4", label: "Tactic 4", type: "text", required: false },
      { key: "research_link", label: "Research Link", type: "text", required: false },
      { key: "public_commitment", label: "Public Commitment", type: "text", required: true },
      { key: "stakeholder", label: "Stakeholder", type: "text", required: true, placeholder: "board" },
      { key: "mandate", label: "Mandate", type: "text", required: true, placeholder: "2026 growth mandate" },
      { key: "program_name", label: "Program Name", type: "text", required: true },
      { key: "timeframe", label: "Timeframe", type: "text", required: true, placeholder: "Q1 2026" },
      { key: "total_spots", label: "Total Spots", type: "text", required: true, placeholder: "8" },
      { key: "spots_remaining", label: "Spots Remaining", type: "text", required: true, placeholder: "2" },
      { key: "waitlist_count", label: "Waitlist Count", type: "text", required: false, placeholder: "12" },
      { key: "positioning", label: "Positioning", type: "text", required: true },
      { key: "event_timing", label: "Event Timing", type: "text", required: true },
      { key: "deadline", label: "Decision Deadline", type: "date", required: true },
      { key: "strategic_reason", label: "Strategic Reason", type: "text", required: true },
      { key: "shared_identity", label: "Shared Identity", type: "text", required: true },
      { key: "client_type", label: "Client Type", type: "text", required: true },
      { key: "desired_outcome_1", label: "Desired Outcome 1", type: "text", required: true },
      { key: "desired_outcome_2", label: "Desired Outcome 2", type: "text", required: true },
      { key: "your_name", label: "Your Name", type: "text", required: true },
      { key: "your_title", label: "Your Title", type: "text", required: true },
      { key: "location", label: "Your Location", type: "text", required: false, placeholder: "Charlotte, NC" },
      { key: "email", label: "Your Email", type: "text", required: true },
      { key: "phone", label: "Your Phone", type: "text", required: false },
      { key: "company_1", label: "Previous Company 1", type: "text", required: false },
      { key: "revenue_1", label: "Revenue Growth 1", type: "text", required: false, placeholder: "$5M → $50M" },
      { key: "description_1", label: "Description 1", type: "text", required: false },
      { key: "company_2", label: "Previous Company 2", type: "text", required: false },
      { key: "revenue_2", label: "Revenue Growth 2", type: "text", required: false },
      { key: "description_2", label: "Description 2", type: "text", required: false },
      { key: "number_current_clients", label: "Number Current Clients", type: "text", required: false, placeholder: "12" },
      { key: "notable_client", label: "Notable Client", type: "text", required: false },
      { key: "their_city", label: "Their City", type: "text", required: false },
      { key: "personal_reason", label: "Personal Reason", type: "text", required: false, placeholder: "family" },
      { key: "dates", label: "Dates", type: "text", required: false, placeholder: "Jan 15-17" },
      { key: "local_spot", label: "Local Spot", type: "text", required: false, placeholder: "Amelie's" }
    ],
    psychologyExplanation: "Combines all 7 principles for maximum persuasive impact. Most powerful but also most intense approach. Use strategically for high-priority prospects.",
    whenToUse: "High-priority prospects. When you have all deliverables ready. When timing is truly urgent. When maximum response probability is needed. Use sparingly—very high intensity.",
    successRate: 67,
    examplePreview: {
      subject: "John—Fellow Duke alum with gift + urgent opportunity",
      bodySnippet: "Three things, because I know you're busy: 1. The Gift: I put together an AI Marketing Playbook specifically for Maplewood..."
    }
  }
];
