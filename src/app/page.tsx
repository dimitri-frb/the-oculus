import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  {
    title: "Free Content",
    desc: "Faction focuses, meta breakdowns, and strategy guides. AI-dubbed in multiple languages.",
  },
  {
    title: "Premium Library",
    desc: "Tournament reports, masterclasses, and advanced tactics from world champions.",
  },
  {
    title: "Group Coaching",
    desc: "Live sessions with top players. Meta analysis, list reviews, and tournament prep.",
  },
  {
    title: "Private Coaching",
    desc: "1-on-1 sessions tailored to your faction, your level, and your goals.",
  },
  {
    title: "Gamified Progress",
    desc: "Earn XP, unlock ranks, and collect achievements as you improve your game.",
  },
  {
    title: "Multi-Language",
    desc: "Every video auto-dubbed with AI in studio quality. Learn in your language.",
  },
];

const tiers = [
  {
    name: "Free",
    price: "0",
    desc: "Start learning",
    features: ["All free content", "Community access", "Gamified profile", "Achievement system"],
    highlighted: false,
  },
  {
    name: "Premium",
    price: "9.99",
    desc: "Full access",
    features: ["Everything in Free", "Masterclasses", "Tournament reports", "Priority booking", "Exclusive Discord"],
    highlighted: true,
  },
  {
    name: "Coaching",
    price: "59",
    desc: "Per session",
    features: ["Group sessions from \u20ac59", "1-on-1 from \u20ac99", "World champion 1-on-1: \u20ac149", "Personalized feedback"],
    highlighted: false,
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="min-h-[90vh] flex items-center justify-center px-6">
          <div className="max-w-3xl mx-auto text-center pt-14">
            <p className="text-accent-gold text-[13px] font-medium tracking-wide uppercase mb-6">
              By a 2x World Champion
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-[72px] font-semibold text-text-primary leading-[1.05] tracking-tight mb-6">
              Your Warhammer
              <br />
              coaching platform.
            </h1>
            <p className="text-text-secondary text-lg sm:text-xl leading-relaxed max-w-xl mx-auto mb-10">
              Learn from the best. Master your faction. Rise through the ranks
              — from Neophyte to Warmaster.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/dashboard"
                className="bg-text-primary text-bg-primary px-8 py-3 rounded-full text-[15px] font-medium hover:bg-accent-hover transition-colors"
              >
                Start for free
              </Link>
              <Link
                href="/content"
                className="border border-border text-text-primary px-8 py-3 rounded-full text-[15px] font-medium hover:border-border-hover transition-colors"
              >
                Browse content
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-border">
          <div className="max-w-4xl mx-auto px-6 py-12 grid grid-cols-3 gap-8 text-center">
            {[
              { val: "2x", label: "World Champion" },
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

        {/* Features */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-xl mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary tracking-tight mb-4">
                Everything you need to compete.
              </h2>
              <p className="text-text-secondary">
                From free guides to world-champion coaching — your complete
                competitive 40K toolkit.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
              {features.map((f) => (
                <div key={f.title} className="bg-bg-primary p-8">
                  <h3 className="text-text-primary font-medium text-[15px] mb-2">
                    {f.title}
                  </h3>
                  <p className="text-text-secondary text-[13px] leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ranks */}
        <section className="py-24 px-6 bg-bg-secondary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary tracking-tight mb-4">
              Rise through the ranks.
            </h2>
            <p className="text-text-secondary mb-16 max-w-lg mx-auto">
              Every video, every session, every achievement earns XP.
              Unlock perks and free coaching as you progress.
            </p>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
              {[
                { rank: "Neophyte", xp: "0" },
                { rank: "Battle Brother", xp: "500" },
                { rank: "Veteran", xp: "1.5K" },
                { rank: "Sergeant", xp: "3K" },
                { rank: "Lieutenant", xp: "5K" },
                { rank: "Captain", xp: "8K" },
                { rank: "Chapter Master", xp: "12K" },
                { rank: "Warmaster", xp: "20K" },
              ].map((r, i) => (
                <div key={r.rank} className="text-center">
                  <div className="w-10 h-10 rounded-full bg-bg-primary border border-border mx-auto mb-2 flex items-center justify-center text-[11px] font-semibold text-accent-gold">
                    {i + 1}
                  </div>
                  <div className="text-text-primary text-[11px] font-medium leading-tight">
                    {r.rank}
                  </div>
                  <div className="text-text-tertiary text-[10px] mt-0.5">{r.xp}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary tracking-tight mb-4">
                Simple pricing.
              </h2>
              <p className="text-text-secondary">
                Start free. Upgrade when you&apos;re ready.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`p-8 ${tier.highlighted ? "bg-bg-secondary" : "bg-bg-primary"}`}
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
        <section className="py-32 px-6 text-center bg-bg-secondary">
          <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary tracking-tight mb-4">
            Ready to level up?
          </h2>
          <p className="text-text-secondary mb-8">
            Join players worldwide on their path to competitive mastery.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex bg-text-primary text-bg-primary px-8 py-3 rounded-full text-[15px] font-medium hover:bg-accent-hover transition-colors"
          >
            Create your profile — it&apos;s free
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
