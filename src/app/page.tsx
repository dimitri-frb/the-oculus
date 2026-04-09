import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const journeySteps = [
  {
    step: "01",
    title: "Pick your faction",
    desc: "Tell us what you play. Your entire experience - content, coaching suggestions, meta insights - adapts to your army.",
  },
  {
    step: "02",
    title: "Learn at your pace",
    desc: "Free videos, premium masterclasses, tournament reports. All AI-dubbed in your language. Every video earns you XP.",
  },
  {
    step: "03",
    title: "Get AI feedback",
    desc: "Paste your army list for instant review. Upload game logs for decision-by-decision analysis. Powered by world-champion methodology.",
  },
  {
    step: "04",
    title: "Train with champions",
    desc: "Group sessions or 1-on-1 coaching - your tournament history and profile travel with you so every minute counts.",
  },
  {
    step: "05",
    title: "Track your rise",
    desc: "Link your BCP/ITC account. Watch your ranking climb. Earn achievements, unlock free sessions, rise through the ranks.",
  },
];

const tools = [
  {
    href: "/tools/list-review",
    label: "AI List Review",
    desc: "Paste your army list. Get strengths, weaknesses, and suggestions in seconds.",
    tag: "AI-Powered",
  },
  {
    href: "/tools/replay",
    label: "Match Replay Analysis",
    desc: "Upload a game log. Get annotated decision trees - what worked and what to fix.",
    tag: "AI-Powered",
  },
  {
    href: "/tools/tracker",
    label: "Tournament Tracker",
    desc: "Link BCP/ITC. See your rank progression, win rate, and event history in one place.",
    tag: "Integrated",
  },
];

const tiers = [
  {
    name: "Free",
    price: "0",
    desc: "Start your journey",
    features: ["All free content", "AI list review", "Gamified profile", "Community access"],
    highlighted: false,
  },
  {
    name: "Premium",
    price: "9.99",
    desc: "Full access",
    features: ["Everything in Free", "Masterclasses & reports", "Match replay analysis", "Priority booking", "Exclusive Discord"],
    highlighted: true,
  },
  {
    name: "Coaching",
    price: "59",
    desc: "Per session",
    features: ["Group sessions from \u20ac59", "1-on-1 from \u20ac99", "World champion 1-on-1: \u20ac149", "Personalized to your profile"],
    highlighted: false,
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero - personalized journey focus */}
        <section className="min-h-[90vh] flex items-center justify-center px-6">
          <div className="max-w-3xl mx-auto text-center pt-14">
            <div className="flex items-center justify-center gap-3 mb-6">
              <img
                src="/the-oculus/sacco.png"
                alt="Sacco - 2x World Champion"
                className="w-10 h-10 rounded-full object-cover"
              />
              <p className="text-accent-gold text-[13px] font-medium tracking-wide uppercase">
                By Sacco - 2x World Champion
              </p>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-[72px] font-semibold text-text-primary leading-[1.05] tracking-tight mb-6">
              Your 40K journey,
              <br />
              personalized.
            </h1>
            <p className="text-text-secondary text-lg sm:text-xl leading-relaxed max-w-xl mx-auto mb-10">
              AI-powered tools, world-champion coaching, and a gamified path
              built around your faction, your level, and your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/onboarding"
                className="bg-text-primary text-bg-primary px-8 py-3 rounded-full text-[15px] font-medium hover:bg-accent-hover transition-colors"
              >
                Start for free
              </Link>
              <Link
                href="/tools/list-review"
                className="border border-border text-text-primary px-8 py-3 rounded-full text-[15px] font-medium hover:border-border-hover transition-colors"
              >
                Try the AI list review
              </Link>
            </div>
          </div>
        </section>

        {/* Social proof strip */}
        <section className="border-y border-border">
          <div className="max-w-4xl mx-auto px-6 py-12 grid grid-cols-3 gap-8 text-center">
            {[
              { val: "2x", label: "World Champion Coach" },
              { val: "50+", label: "Hours of Content" },
              { val: "20+", label: "Factions Covered" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl sm:text-4xl font-semibold text-text-primary">{s.val}</div>
                <div className="text-text-tertiary text-[13px] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Journey - the personalized path */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="max-w-xl mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary tracking-tight mb-4">
                Built around you.
              </h2>
              <p className="text-text-secondary">
                Not a content library - a personalized training path.
                Everything adapts to your faction, your skill level, and where
                you want to go.
              </p>
            </div>
            <div className="space-y-0">
              {journeySteps.map((s, i) => (
                <div
                  key={s.step}
                  className={`flex gap-6 py-8 ${
                    i < journeySteps.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="text-accent-gold text-[13px] font-semibold tabular-nums shrink-0 pt-0.5">
                    {s.step}
                  </span>
                  <div>
                    <h3 className="text-text-primary font-medium text-[17px] mb-1">
                      {s.title}
                    </h3>
                    <p className="text-text-secondary text-[14px] leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools showcase */}
        <section className="py-24 px-6 bg-bg-secondary">
          <div className="max-w-5xl mx-auto">
            <div className="max-w-xl mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary tracking-tight mb-4">
                AI-powered tools.
              </h2>
              <p className="text-text-secondary">
                Get feedback on your lists, analyze your games, and track your
                competitive growth - all in one platform.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {tools.map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  className="group p-6 rounded-2xl border border-border bg-bg-primary hover-lift"
                >
                  <span className="text-accent-gold text-[10px] font-medium uppercase tracking-wider">
                    {t.tag}
                  </span>
                  <h3 className="text-text-primary font-medium text-lg mt-3 mb-2 group-hover:text-accent-gold transition-colors">
                    {t.label}
                  </h3>
                  <p className="text-text-secondary text-[13px] leading-relaxed">
                    {t.desc}
                  </p>
                  <span className="inline-block mt-4 text-text-tertiary text-[12px] group-hover:text-accent-gold transition-colors">
                    Try it &#8594;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Content partners */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary tracking-tight mb-4">
                The best content. All in one place.
              </h2>
              <p className="text-text-secondary max-w-lg mx-auto">
                We curate the best 40K content from across the community,
                not just ours. Your learning path pulls from every top
                source available.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  name: "The Oculus",
                  desc: "Original content by Sacco",
                  href: "#",
                  tag: "Original",
                },
                {
                  name: "Art of War 40K",
                  desc: "Meta analysis & strategy",
                  href: "https://www.youtube.com/@ArtofWar40k",
                  tag: "Partner",
                },
                {
                  name: "Fireside 40K",
                  desc: "Podcast, tools & training",
                  href: "https://www.youtube.com/@Fireside40K",
                  tag: "Partner",
                },
                {
                  name: "Auspex Tactics",
                  desc: "Rules & unit analysis",
                  href: "https://www.youtube.com/@AuspexTactics",
                  tag: "Community",
                },
              ].map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target={p.href !== "#" ? "_blank" : undefined}
                  rel={p.href !== "#" ? "noopener noreferrer" : undefined}
                  className="group p-5 rounded-2xl border border-border hover-lift text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-bg-card border border-border mx-auto mb-3 flex items-center justify-center text-[15px] font-bold text-text-primary">
                    {p.name.charAt(0)}
                  </div>
                  <span className="text-accent-gold text-[9px] font-medium uppercase tracking-wider">
                    {p.tag}
                  </span>
                  <h3 className="text-text-primary font-medium text-[14px] mt-1 mb-1 group-hover:text-accent-gold transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-text-tertiary text-[11px]">{p.desc}</p>
                </a>
              ))}
            </div>
            <p className="text-text-tertiary text-[12px] text-center mt-8">
              We surface the best content from across the community so you
              always have the most relevant, up-to-date learning path,
              regardless of the source.
            </p>
          </div>
        </section>

        {/* Ranks - brief */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary tracking-tight mb-4">
              Rise through the ranks.
            </h2>
            <p className="text-text-secondary mb-16 max-w-lg mx-auto">
              Every video, every session, every tournament result earns XP.
              Unlock free coaching and exclusive perks as you progress.
            </p>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
              {[
                "Neophyte", "Battle Brother", "Veteran", "Sergeant",
                "Lieutenant", "Captain", "Chapter Master", "Warmaster",
              ].map((r, i) => (
                <div key={r} className="text-center">
                  <div className="w-10 h-10 rounded-full bg-bg-secondary border border-border mx-auto mb-2 flex items-center justify-center text-[11px] font-semibold text-accent-gold">
                    {i + 1}
                  </div>
                  <div className="text-text-primary text-[11px] font-medium leading-tight">
                    {r}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-24 px-6 bg-bg-secondary">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary tracking-tight mb-4">
                Simple pricing.
              </h2>
              <p className="text-text-secondary">
                Start free. Upgrade when you&apos;re ready.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`p-8 rounded-2xl border ${
                    tier.highlighted
                      ? "border-text-primary bg-bg-primary"
                      : "border-border bg-bg-primary"
                  }`}
                >
                  {tier.highlighted && (
                    <p className="text-accent-gold text-[11px] font-medium uppercase tracking-wider mb-4">
                      Popular
                    </p>
                  )}
                  <h3 className="text-text-primary font-medium text-lg mb-1">
                    {tier.name}
                  </h3>
                  <p className="text-text-tertiary text-[13px] mb-6">{tier.desc}</p>
                  <div className="mb-8">
                    <span className="text-4xl font-semibold text-text-primary">
                      &euro;{tier.price}
                    </span>
                    {tier.name === "Premium" && (
                      <span className="text-text-tertiary text-sm">/mo</span>
                    )}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((f) => (
                      <li key={f} className="text-text-secondary text-[13px] flex items-center gap-2">
                        <span className="text-accent-gold text-[10px]">&#9679;</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/dashboard"
                    className={`block text-center py-2.5 rounded-full text-[13px] font-medium transition-colors ${
                      tier.highlighted
                        ? "bg-text-primary text-bg-primary hover:bg-accent-hover"
                        : "border border-border text-text-primary hover:border-border-hover"
                    }`}
                  >
                    Get started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary tracking-tight mb-4">
            Your journey starts here.
          </h2>
          <p className="text-text-secondary mb-8 max-w-md mx-auto">
            A world champion in your corner. AI tools in your pocket.
            A path built just for you.
          </p>
          <Link
            href="/onboarding"
            className="inline-flex bg-text-primary text-bg-primary px-8 py-3 rounded-full text-[15px] font-medium hover:bg-accent-hover transition-colors"
          >
            Create your profile - it&apos;s free
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
