import { Target, TrendingUp, XCircle } from "lucide-react";
import { Layout } from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <header className="bg-gradient-to-br from-primary to-coral-dark rounded-lg p-8 mb-8 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-status-red"></div>
            <div className="w-3 h-3 rounded-full bg-status-yellow"></div>
            <div className="w-3 h-3 rounded-full bg-status-green"></div>
          </div>
          
          <div className="font-mono text-sm text-white/80 mb-2">$ orchestrating_intelligence.exe</div>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-black mb-2">
            GASTON COUNTY → CLIENT ENGAGEMENT
          </h1>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
            IMMEDIATE ACTION PLAN
          </h2>
          <div className="text-lg text-white/90 font-mono">
            Strategic Intelligence Framework
          </div>
          <div className="font-mono text-sm text-white/70 mt-2">
            By: <strong className="text-white">Henry Bestritsky</strong>
          </div>

          {/* Meta Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
            {[
              { label: "Engagement Value", value: "$75K-$250K" },
              { label: "Timeline", value: "6-12 Months" },
              { label: "Success Rate", value: "80-90%*" },
              { label: "Strategy Type", value: "AI Wedge" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="text-xs text-white/70 mb-1 font-mono">{item.label}</div>
                <div className="text-lg font-bold text-white font-heading">{item.value}</div>
              </div>
            ))}
          </div>
        </header>

        {/* Top 5 Opportunities - Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-4 flex items-center gap-3">
            <Target className="text-primary" size={28} />
            Top 5 Strategic Opportunities (Ranked by Viability)
          </h2>

          <div className="bg-card rounded-lg shadow-sm border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary/5 border-b-2 border-primary/20">
                    <th className="text-left p-4 font-heading font-bold text-foreground">#</th>
                    <th className="text-left p-4 font-heading font-bold text-foreground">Opportunity</th>
                    <th className="text-left p-4 font-heading font-bold text-foreground">Year 1 → Year 2 → Year 3</th>
                    <th className="text-left p-4 font-heading font-bold text-foreground">Win Rate</th>
                    <th className="text-left p-4 font-heading font-bold text-foreground">Timeline</th>
                    <th className="text-left p-4 font-heading font-bold text-foreground">Key Drivers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border hover:bg-primary/5 transition-colors">
                    <td className="p-4">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold font-heading">1</div>
                    </td>
                    <td className="p-4">
                      <div className="font-heading font-bold text-foreground">AI Strategy Workshop</div>
                      <div className="text-xs text-muted-foreground mt-1 font-mono">Strategic engagement</div>
                    </td>
                    <td className="p-4 font-mono font-bold text-primary">$75K → $150K → $225K</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="bg-primary/10 rounded-full h-2 flex-1 max-w-[100px]">
                          <div className="bg-primary h-full rounded-full" style={{ width: '90%' }}></div>
                        </div>
                        <span className="font-mono text-sm font-bold text-primary">90%</span>
                      </div>
                    </td>
                    <td className="p-4 font-mono text-sm text-muted-foreground">6 months</td>
                    <td className="p-4">
                      <ul className="text-xs font-mono text-muted-foreground space-y-1">
                        <li>• Executive visibility</li>
                        <li>• Natural expansion</li>
                        <li>• Proven ROI framework</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="border-b border-border hover:bg-primary/5 transition-colors">
                    <td className="p-4">
                      <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold font-heading">2</div>
                    </td>
                    <td className="p-4">
                      <div className="font-heading font-bold text-foreground">AI Implementation Support</div>
                      <div className="text-xs text-muted-foreground mt-1 font-mono">Year 2 expansion</div>
                    </td>
                    <td className="p-4 font-mono font-bold text-primary">$50K-$80K</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="bg-primary/10 rounded-full h-2 flex-1 max-w-[100px]">
                          <div className="bg-primary h-full rounded-full" style={{ width: '85%' }}></div>
                        </div>
                        <span className="font-mono text-sm font-bold text-primary">85%</span>
                      </div>
                    </td>
                    <td className="p-4 font-mono text-sm text-muted-foreground">8-12 months</td>
                    <td className="p-4">
                      <ul className="text-xs font-mono text-muted-foreground space-y-1">
                        <li>• Follow-on service</li>
                        <li>• Execution support</li>
                        <li>• Lower sales friction</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="border-b border-border hover:bg-primary/5 transition-colors">
                    <td className="p-4">
                      <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold font-heading">3</div>
                    </td>
                    <td className="p-4">
                      <div className="font-heading font-bold text-foreground">Custom AI Solution Development</div>
                      <div className="text-xs text-muted-foreground mt-1 font-mono">Year 2-3 growth</div>
                    </td>
                    <td className="p-4 font-mono font-bold text-primary">$60K-$100K</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="bg-primary/10 rounded-full h-2 flex-1 max-w-[100px]">
                          <div className="bg-primary h-full rounded-full" style={{ width: '80%' }}></div>
                        </div>
                        <span className="font-mono text-sm font-bold text-primary">80%</span>
                      </div>
                    </td>
                    <td className="p-4 font-mono text-sm text-muted-foreground">After POC</td>
                    <td className="p-4">
                      <ul className="text-xs font-mono text-muted-foreground space-y-1">
                        <li>• Established trust</li>
                        <li>• High-value delivery</li>
                        <li>• Competitive edge</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="border-b border-border hover:bg-primary/5 transition-colors">
                    <td className="p-4">
                      <div className="w-8 h-8 rounded-full bg-muted text-white flex items-center justify-center font-bold font-heading">4</div>
                    </td>
                    <td className="p-4">
                      <div className="font-heading font-bold text-foreground">AI Training & Upskilling</div>
                      <div className="text-xs text-muted-foreground mt-1 font-mono">Easy add-on</div>
                    </td>
                    <td className="p-4 font-mono font-bold text-primary">$25K-$40K</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="bg-primary/10 rounded-full h-2 flex-1 max-w-[100px]">
                          <div className="bg-primary h-full rounded-full" style={{ width: '85%' }}></div>
                        </div>
                        <span className="font-mono text-sm font-bold text-primary">85%</span>
                      </div>
                    </td>
                    <td className="p-4 font-mono text-sm text-muted-foreground">Year 2</td>
                    <td className="p-4">
                      <ul className="text-xs font-mono text-muted-foreground space-y-1">
                        <li>• High perceived value</li>
                        <li>• Org-wide impact</li>
                        <li>• Low overhead</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="p-4">
                      <div className="w-8 h-8 rounded-full bg-muted text-white flex items-center justify-center font-bold font-heading">5</div>
                    </td>
                    <td className="p-4">
                      <div className="font-heading font-bold text-foreground">AI Readiness Assessment</div>
                      <div className="text-xs text-muted-foreground mt-1 font-mono">Executive visibility</div>
                    </td>
                    <td className="p-4 font-mono font-bold text-primary">$20K-$35K</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="bg-primary/10 rounded-full h-2 flex-1 max-w-[100px]">
                          <div className="bg-primary h-full rounded-full" style={{ width: '75%' }}></div>
                        </div>
                        <span className="font-mono text-sm font-bold text-primary">75%</span>
                      </div>
                    </td>
                    <td className="p-4 font-mono text-sm text-muted-foreground">Entry/Year 2</td>
                    <td className="p-4">
                      <ul className="text-xs font-mono text-muted-foreground space-y-1">
                        <li>• C-suite engagement</li>
                        <li>• Low-risk entry</li>
                        <li>• Fast turnaround</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* What NOT to Sell */}
        <section className="mb-8">
          <div className="bg-destructive/5 border-l-4 border-destructive rounded-lg p-6">
            <h3 className="text-xl font-heading font-bold text-destructive mb-3 flex items-center gap-2">
              <XCircle size={24} />
              What You're NOT Selling (Instant Failure)
            </h3>
            <ul className="space-y-2 font-mono text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-destructive">✗</span>
                <span>$500K+ comprehensive AI transformation - Too expensive, triggers procurement hell</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive">✗</span>
                <span>Full AI platform replacement - Too risky, wrong timing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive">✗</span>
                <span>Complete tech stack overhaul - Too complex for initial engagement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive">✗</span>
                <span>Anything requiring board approval upfront - Political minefield</span>
              </li>
            </ul>
          </div>
        </section>

        {/* The Wedge Strategy */}
        <section className="mb-8">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-4 flex items-center gap-3">
            <TrendingUp className="text-primary" size={28} />
            The Orchestration Strategy
          </h2>

          <div className="bg-primary/5 border-l-4 border-primary rounded-lg p-6">
            <h3 className="text-xl font-heading font-bold text-foreground mb-3">
              Start Strategic, Expand Systematically
            </h3>
            <p className="font-mono text-sm text-muted-foreground mb-4">
              You CANNOT walk in with a $500K comprehensive AI transformation proposal. Instead:
            </p>
            <div className="space-y-2 font-mono text-sm text-muted-foreground mb-4">
              <div className="flex gap-3">
                <strong className="text-primary">Year 1:</strong>
                <span>Deliver $75K AI Strategy Workshop</span>
              </div>
              <div className="flex gap-3">
                <strong className="text-primary">Year 2:</strong>
                <span>Add Implementation Support ($60K) + Training ($30K)</span>
              </div>
              <div className="flex gap-3">
                <strong className="text-primary">Year 3:</strong>
                <span>Expand to Custom Solutions ($80K) + Assessment ($25K)</span>
              </div>
            </div>
            <div className="mt-4 p-4 bg-card rounded-lg border border-primary/20">
              <div className="font-mono">
                <strong className="text-primary font-heading">3-Year Total:</strong> 
                <span className="text-2xl font-bold text-primary ml-2 font-heading">$520K</span>
                <span className="text-sm text-muted-foreground ml-2">vs. $0 from failed pitch</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center mb-8">
          <div className="bg-gradient-to-br from-primary to-coral-dark rounded-lg p-6">
            <h3 className="text-xl font-heading font-bold text-white mb-4">
              Ready to Orchestrate Your Next Engagement?
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-white text-primary px-6 py-3 rounded-lg font-bold font-heading hover:bg-cream transition-all">
                START WEEK 1: INTELLIGENCE GATHERING
              </button>
              <button className="bg-white/10 border-2 border-white text-white px-6 py-3 rounded-lg font-bold font-heading hover:bg-white/20 transition-all">
                EXPORT ACTION PLAN
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center font-mono text-sm text-muted-foreground">
          <p>The AI Maestro | Henry Bestritsky</p>
          <p className="mt-1 italic text-xs">Orchestrating Intelligence, Conducting Transformation</p>
        </footer>
      </div>
    </Layout>
  );
};

export default Index;
