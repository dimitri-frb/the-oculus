import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  {
    icon: "🎬",
    title: "Free Content",
    description:
      "Faction focuses, strategy breakdowns, and community content — all free. AI-dubbed in multiple languages.",
  },
  {
    icon: "🏆",
    title: "Premium Masterclasses",
    description:
      "Deep-dive tournament reports, faction masterclasses, and advanced tactics from world champions.",
  },
  {
    icon: "🫂",
    title: "Group Coaching",
    description:
      "Live sessions with top players. Meta breakdowns, list reviews, and tournament prep in small groups.",
  },
  {
    icon: "🎯",
    title: "1-on-1 Coaching",
    description:
      "Personal sessions tailored to your level, faction, and goals. Like having a world champion in your corner.",
  },
  {
    icon: "📈",
    title: "Gamified Progress",
    description:
      "Earn XP, unlock ranks, collect achievements. Your Warhammer journey visualized and rewarded.",
  },
  {
    icon: "🌍",
    title: "AI-Dubbed Content",
    description:
      "Every video auto-dubbed in multiple languages with studio quality. Learn in your language.",
  },
];

const pricingTiers = [
  {
    name: "Recruit",
    price: "Free",
    period: "",
    description: "Start your journey",
    features: [
      "Access to all free content",
      "Faction focus videos",
      "Community features",
      "Gamified profile & XP",
      "Achievement system",
    ],
    cta: "Join Free",
    highlighted: false,
  },
  {
    name: "Veteran",
    price: "9.99",
    period: "/month",
    description: "Unlock the full arsenal",
    features: [
      "Everything in Recruit",
      "Premium masterclasses",
      "Tournament reports",
      "Advanced tactics library",
      "Priority group session access",
      "Exclusive Discord channels",
    ],
    cta: "Go Premium",
    highlighted: true,
  },
  {
    name: "Coaching",
    price: "From 59",
    period: "/session",
    description: "Train with champions",
    features: [
      "Group sessions (59-99\u20ac)",
      "1-on-1 with world champ (149\u20ac)",
      "1-on-1 with guest coaches (99\u20ac)",
      "Personalized feedback",
      "Massive XP rewards",
      "Free coaching with achievements!",
    ],
    cta: "Book a Session",
    highlighted: false,
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,168,67,0.08)_0%,_transparent_60%)]" />

          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-red/5 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-24">
            <div className="inline-flex items-center gap-2 bg-bg-card/80 border border-border-subtle rounded-full px-4 py-2 mb-8">
              <span className="text-accent-gold text-sm font-medium">
                Founded by a 2x World Champion
              </span>
            </div>

            <h1 className="font-[Cinzel] text-5xl sm:text-6xl md:text-7xl font-bold text-text-primary leading-tight mb-6">
              Your Personal
              <br />
              <span className="rank-shimmer">War Council</span>
            </h1>

            <p className="text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              The most immersive Warhammer 40K coaching platform. Learn from
              world champions, master your faction, and climb the ranks — from
              Neophyte to Warmaster.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center bg-accent-gold text-bg-primary px-8 py-4 rounded-lg text-lg font-bold hover:bg-accent-gold-light transition-colors glow-gold"
              >
                Start Your Crusade
              </Link>
              <Link
                href="/content"
                className="inline-flex items-center justify-center border border-border-subtle text-text-primary px-8 py-4 rounded-lg text-lg font-medium hover:border-accent-gold hover:text-accent-gold transition-colors"
              >
                Browse Free Content
              </Link>
            </div>

            {/* Social proof */}
            <div className="mt-16 flex flex-wrap justify-center gap-8 text-text-muted text-sm">
              <div className="flex items-center gap-2">
                <span className="text-accent-gold font-bold text-2xl">2x</span>
                <span>World Champion Coach</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-gold font-bold text-2xl">50+</span>
                <span>Hours of Content</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-gold font-bold text-2xl">20+</span>
                <span>Factions Covered</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-[Cinzel] text-3xl sm:text-4xl font-bold text-text-primary mb-4">
                Everything You Need to Dominate
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                From free faction guides to world-champion coaching. Your
                complete toolkit for competitive Warhammer 40K.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="bg-bg-card border border-border-subtle rounded-xl p-6 card-hover"
                >
                  <div className="text-3xl mb-4">{f.icon}</div>
                  <h3 className="text-text-primary font-semibold text-lg mb-2">
                    {f.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How the Rank System Works */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-[Cinzel] text-3xl sm:text-4xl font-bold text-text-primary mb-4">
                Rise Through the Ranks
              </h2>
              <p className="text-text-secondary max-w-xl mx-auto">
                Every video watched, every session attended, every achievement
                unlocked earns you XP. Climb from Neophyte to Warmaster.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { rank: "Neophyte", icon: "🛡️", xp: "0" },
                { rank: "Battle Brother", icon: "⚔️", xp: "500" },
                { rank: "Veteran", icon: "🎖️", xp: "1,500" },
                { rank: "Sergeant", icon: "🗡️", xp: "3,000" },
                { rank: "Lieutenant", icon: "🏅", xp: "5,000" },
                { rank: "Captain", icon: "👑", xp: "8,000" },
                { rank: "Chapter Master", icon: "🔥", xp: "12,000" },
                { rank: "Warmaster", icon: "⭐", xp: "20,000" },
              ].map((r, i) => (
                <div
                  key={r.rank}
                  className="bg-bg-card border border-border-subtle rounded-lg p-4 text-center card-hover"
                >
                  <div className="text-3xl mb-2">{r.icon}</div>
                  <div className="text-text-primary font-semibold text-sm">
                    {r.rank}
                  </div>
                  <div className="text-text-muted text-xs mt-1">
                    {r.xp} XP
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-text-muted text-sm mt-8">
              Unlock free coaching sessions, exclusive content, and special
              perks as you rank up!
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-24 bg-bg-secondary">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-[Cinzel] text-3xl sm:text-4xl font-bold text-text-primary mb-4">
                Choose Your Path
              </h2>
              <p className="text-text-secondary max-w-xl mx-auto">
                Start free and upgrade when you are ready. Every path leads to
                glory.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`rounded-xl p-8 card-hover ${
                    tier.highlighted
                      ? "bg-bg-card border-2 border-accent-gold glow-gold-subtle"
                      : "bg-bg-card border border-border-subtle"
                  }`}
                >
                  {tier.highlighted && (
                    <div className="text-accent-gold text-xs font-bold uppercase tracking-wider mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="font-[Cinzel] text-xl font-bold text-text-primary mb-1">
                    {tier.name}
                  </h3>
                  <p className="text-text-muted text-sm mb-4">
                    {tier.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-text-primary">
                      {tier.price.startsWith("From") ? "" : "\u20ac"}
                      {tier.price}
                    </span>
                    <span className="text-text-muted text-sm">
                      {tier.period}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-text-secondary text-sm"
                      >
                        <span className="text-accent-gold mt-0.5">
                          &#10003;
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/dashboard"
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                      tier.highlighted
                        ? "bg-accent-gold text-bg-primary hover:bg-accent-gold-light"
                        : "border border-border-subtle text-text-primary hover:border-accent-gold hover:text-accent-gold"
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-[Cinzel] text-3xl sm:text-4xl font-bold text-text-primary mb-6">
              Ready to Start Your Crusade?
            </h2>
            <p className="text-text-secondary text-lg mb-10">
              Join thousands of players leveling up their game. Your journey
              from Neophyte to Warmaster begins here.
            </p>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center bg-accent-gold text-bg-primary px-10 py-4 rounded-lg text-lg font-bold hover:bg-accent-gold-light transition-colors glow-gold"
            >
              Create Your Profile — It&apos;s Free
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
