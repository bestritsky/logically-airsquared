import { Target, TrendingUp, Shield, Users, Lightbulb, AlertCircle, CheckCircle2, XCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <header className="bg-gradient-to-br from-primary to-coral-dark rounded-2xl p-8 md:p-12 mb-8 shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-status-red"></div>
              <div className="w-3 h-3 rounded-full bg-status-yellow"></div>
              <div className="w-3 h-3 rounded-full bg-status-green"></div>
            </div>
          </div>
          
          <div className="font-mono text-sm text-white/80 mb-2">$ orchestrating_intelligence.exe</div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-3">
            THE AI MAESTRO → CLIENT ENGAGEMENT
          </h1>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            IMMEDIATE ACTION PLAN
          </h2>
          <div className="text-xl text-white/90 mb-6 font-mono">
            Strategic Intelligence Framework - Transformation Orchestration Strategy
          </div>
          <div className="font-mono text-sm text-white/70">
            By: <strong className="text-white">Henry Bestritsky</strong> | Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </div>

          {/* Meta Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Engagement Value", value: "$75K-$250K" },
              { label: "Timeline", value: "6-12 Months" },
              { label: "Success Rate", value: "80-90%*" },
              { label: "Strategy Type", value: "AI Wedge" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                <div className="text-sm text-white/70 mb-1 font-mono">{item.label}</div>
                <div className="text-2xl font-bold text-white font-heading">{item.value}</div>
              </div>
            ))}
          </div>
        </header>

        {/* Top 5 Opportunities */}
        <section className="mb-12">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
            <Target className="text-primary" />
            Top 5 Strategic Opportunities (Ranked by Viability)
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Opportunity 1 */}
            <div className="bg-card rounded-xl p-6 shadow-md border-l-4 border-primary hover:shadow-xl transition-all hover:scale-[1.02]">
              <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold mb-4 font-mono">
                HIGHEST PRIORITY
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                1. AI Strategy Workshop
              </h3>
              <div className="text-4xl font-bold text-primary mb-2 font-heading">$75K → $150K → $225K</div>
              <div className="text-sm text-muted-foreground mb-4 font-mono">Year 1 → Year 2 → Year 3</div>
              
              <div className="bg-accent/10 rounded-full h-6 mb-4 overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-coral-dark h-full flex items-center justify-center text-white text-xs font-bold font-mono" style={{ width: '90%' }}>
                  90% Win Rate*
                </div>
              </div>

              <p className="mb-2 font-mono text-sm"><strong className="text-primary">Timeline:</strong> 6 months to first payment</p>
              <p className="text-sm italic mb-4 font-mono text-muted">*With executive champion alignment</p>

              <h4 className="font-heading font-bold text-primary mb-2">Why It Works:</h4>
              <ul className="space-y-2 text-sm font-mono text-muted-foreground">
                <li>• Strategic not tactical engagement</li>
                <li>• Executive-level visibility</li>
                <li>• Natural expansion pathway</li>
                <li>• Proven ROI framework</li>
              </ul>
            </div>

            {/* Opportunity 2 */}
            <div className="bg-card rounded-xl p-6 shadow-md border-l-4 border-accent hover:shadow-xl transition-all hover:scale-[1.02]">
              <div className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold mb-4 font-mono">
                YEAR 2 EXPANSION
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                2. AI Implementation Support
              </h3>
              <div className="text-4xl font-bold text-primary mb-2 font-heading">$50K-$80K</div>
              <div className="text-sm text-muted-foreground mb-4 font-mono">Annual Recurring</div>
              
              <div className="bg-accent/10 rounded-full h-6 mb-4 overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-coral-dark h-full flex items-center justify-center text-white text-xs font-bold font-mono" style={{ width: '85%' }}>
                  85% Win Rate
                </div>
              </div>

              <p className="mb-4 font-mono text-sm"><strong className="text-primary">Timeline:</strong> 8-12 months from start</p>

              <h4 className="font-heading font-bold text-primary mb-2">Why It Works:</h4>
              <ul className="space-y-2 text-sm font-mono text-muted-foreground">
                <li>• Natural follow-on service</li>
                <li>• Addresses strategy execution gap</li>
                <li>• Continuous value delivery</li>
                <li>• Lower sales friction</li>
              </ul>
            </div>

            {/* Opportunity 3 */}
            <div className="bg-card rounded-xl p-6 shadow-md border-l-4 border-accent hover:shadow-xl transition-all hover:scale-[1.02]">
              <div className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold mb-4 font-mono">
                YEAR 2-3 GROWTH
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                3. Custom AI Solution Development
              </h3>
              <div className="text-4xl font-bold text-primary mb-2 font-heading">$60K-$100K</div>
              <div className="text-sm text-muted-foreground mb-4 font-mono">Per Project</div>
              
              <div className="bg-accent/10 rounded-full h-6 mb-4 overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-coral-dark h-full flex items-center justify-center text-white text-xs font-bold font-mono" style={{ width: '80%' }}>
                  80% Win Rate
                </div>
              </div>

              <p className="mb-4 font-mono text-sm"><strong className="text-primary">Timeline:</strong> After strategy proof of concept</p>

              <h4 className="font-heading font-bold text-primary mb-2">Why It Works:</h4>
              <ul className="space-y-2 text-sm font-mono text-muted-foreground">
                <li>• Builds on established trust</li>
                <li>• High-value deliverables</li>
                <li>• Competitive advantage creation</li>
                <li>• Portfolio expansion opportunity</li>
              </ul>
            </div>

            {/* Opportunity 4 */}
            <div className="bg-card rounded-xl p-6 shadow-md border-l-4 border-muted hover:shadow-xl transition-all hover:scale-[1.02]">
              <div className="inline-block bg-muted text-white px-3 py-1 rounded-full text-xs font-bold mb-4 font-mono">
                EASY ADD-ON
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                4. AI Training & Upskilling
              </h3>
              <div className="text-4xl font-bold text-primary mb-2 font-heading">$25K-$40K</div>
              <div className="text-sm text-muted-foreground mb-4 font-mono">Annual Program</div>
              
              <div className="bg-accent/10 rounded-full h-6 mb-4 overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-coral-dark h-full flex items-center justify-center text-white text-xs font-bold font-mono" style={{ width: '85%' }}>
                  85% Win Rate
                </div>
              </div>

              <p className="mb-4 font-mono text-sm"><strong className="text-primary">Timeline:</strong> Year 2 expansion</p>

              <h4 className="font-heading font-bold text-primary mb-2">Why It Works:</h4>
              <ul className="space-y-2 text-sm font-mono text-muted-foreground">
                <li>• Low cost, high perceived value</li>
                <li>• Organization-wide impact</li>
                <li>• Supports solution adoption</li>
                <li>• Minimal delivery overhead</li>
              </ul>
            </div>

            {/* Opportunity 5 */}
            <div className="bg-card rounded-xl p-6 shadow-md border-l-4 border-muted hover:shadow-xl transition-all hover:scale-[1.02]">
              <div className="inline-block bg-muted text-white px-3 py-1 rounded-full text-xs font-bold mb-4 font-mono">
                EXECUTIVE VISIBILITY
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                5. AI Readiness Assessment
              </h3>
              <div className="text-4xl font-bold text-primary mb-2 font-heading">$20K-$35K</div>
              <div className="text-sm text-muted-foreground mb-4 font-mono">One-Time Engagement</div>
              
              <div className="bg-accent/10 rounded-full h-6 mb-4 overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-coral-dark h-full flex items-center justify-center text-white text-xs font-bold font-mono" style={{ width: '75%' }}>
                  75% Win Rate
                </div>
              </div>

              <p className="mb-4 font-mono text-sm"><strong className="text-primary">Timeline:</strong> Entry point or Year 2</p>

              <h4 className="font-heading font-bold text-primary mb-2">Why It Works:</h4>
              <ul className="space-y-2 text-sm font-mono text-muted-foreground">
                <li>• C-suite engagement tool</li>
                <li>• Low-risk entry point</li>
                <li>• Gateway to larger projects</li>
                <li>• Fast turnaround time</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What NOT to Sell */}
        <section className="mb-12">
          <div className="bg-destructive/10 border-l-4 border-destructive rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-heading font-bold text-destructive mb-4 flex items-center gap-2">
              <XCircle />
              What You're NOT Selling (Instant Failure)
            </h3>
            <ul className="space-y-2 font-mono text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <XCircle className="text-destructive flex-shrink-0 mt-0.5" size={16} />
                <span>$500K+ comprehensive AI transformation - Too expensive, triggers procurement hell</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="text-destructive flex-shrink-0 mt-0.5" size={16} />
                <span>Full AI platform replacement - Too risky, wrong timing</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="text-destructive flex-shrink-0 mt-0.5" size={16} />
                <span>Complete tech stack overhaul - Too complex for initial engagement</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="text-destructive flex-shrink-0 mt-0.5" size={16} />
                <span>Anything requiring board approval upfront - Political minefield</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="text-destructive flex-shrink-0 mt-0.5" size={16} />
                <span>Unproven experimental technology - Trust killer</span>
              </li>
            </ul>
          </div>
        </section>

        {/* The Wedge Strategy */}
        <section className="mb-12">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
            <TrendingUp className="text-primary" />
            The Orchestration Strategy
          </h2>

          <div className="bg-primary/5 border-l-4 border-primary rounded-xl p-6 shadow-md mb-6">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              The Only Real Play: Start Strategic, Expand Systematically
            </h3>
            <p className="font-mono text-muted-foreground mb-4">
              You CANNOT walk in with a $500K comprehensive AI transformation proposal. You'll trigger procurement delays and lose to price-focused competitors. Instead:
            </p>
            <ol className="space-y-3 font-mono text-sm text-muted-foreground ml-4">
              <li className="flex gap-3">
                <strong className="text-primary flex-shrink-0">Year 1:</strong>
                <span>Deliver $75K AI Strategy Workshop (executive-approved, fast decision)</span>
              </li>
              <li className="flex gap-3">
                <strong className="text-primary flex-shrink-0">Year 2:</strong>
                <span>Prove value, add Implementation Support ($60K) + Training ($30K)</span>
              </li>
              <li className="flex gap-3">
                <strong className="text-primary flex-shrink-0">Year 3:</strong>
                <span>Expand to Custom Solutions ($80K) + Assessment ($25K)</span>
              </li>
            </ol>
            <div className="mt-6 p-4 bg-card rounded-lg border border-primary/20">
              <p className="font-mono text-lg">
                <strong className="text-primary font-heading">3-Year Total Revenue:</strong> 
                <span className="text-3xl font-bold text-primary ml-3 font-heading">$520K</span>
              </p>
              <p className="font-mono text-sm text-muted-foreground mt-2">
                vs. $0 from failed $500K pitch
              </p>
            </div>
          </div>

          {/* Command Execution */}
          <div className="bg-card rounded-xl p-6 shadow-md border border-border">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-status-red"></div>
                <div className="w-3 h-3 rounded-full bg-status-yellow"></div>
                <div className="w-3 h-3 rounded-full bg-status-green"></div>
              </div>
            </div>
            <div className="font-mono text-sm space-y-2 text-muted-foreground">
              <div>$ pattern_recognition --enabled</div>
              <div className="text-status-green">✓ Strategic entry points identified</div>
              <div>$ value_orchestration --execute</div>
              <div className="text-status-green">✓ Expansion pathways mapped</div>
              <div>$ transformation_conducting --mode=systematic</div>
              <div className="text-status-green">✓ Revenue trajectory optimized</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-br from-primary to-coral-dark rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-heading font-bold text-white mb-6">
              Ready to Orchestrate Your Next Engagement?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-bold font-heading hover:bg-cream transition-all hover:scale-105 shadow-md">
                START WEEK 1: INTELLIGENCE GATHERING
              </button>
              <button className="bg-white/10 backdrop-blur-md border-2 border-white text-white px-8 py-4 rounded-lg font-bold font-heading hover:bg-white/20 transition-all">
                EXPORT ACTION PLAN
              </button>
            </div>
            <div className="mt-6 font-mono text-sm text-white/80">
              $ orchestrating_intelligence.exe --status=ready
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center font-mono text-sm text-muted-foreground">
          <p>The AI Maestro | Henry Bestritsky</p>
          <p className="mt-1 italic">Orchestrating Intelligence, Conducting Transformation</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
