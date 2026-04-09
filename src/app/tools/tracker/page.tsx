"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MOCK_STATS = {
  connected: true,
  playerName: "Battle Brother Alex",
  itcRank: 342,
  winRate: 64,
  gamesPlayed: 47,
  faction: "Aeldari",
  recentEvents: [
    {
      name: "London GT 2026",
      date: "Mar 2026",
      placement: "12th / 128",
      record: "4-1",
      faction: "Aeldari",
    },
    {
      name: "French Open 2026",
      date: "Feb 2026",
      placement: "28th / 96",
      record: "3-2",
      faction: "Aeldari",
    },
    {
      name: "Local RTT — Waaagh Club",
      date: "Jan 2026",
      placement: "1st / 24",
      record: "3-0",
      faction: "Aeldari",
    },
    {
      name: "Warzone Armageddon",
      date: "Dec 2025",
      placement: "45th / 200",
      record: "3-2",
      faction: "Aeldari",
    },
  ],
  progressData: [
    { month: "Sep", rank: 890 },
    { month: "Oct", rank: 720 },
    { month: "Nov", rank: 610 },
    { month: "Dec", rank: 540 },
    { month: "Jan", rank: 440 },
    { month: "Feb", rank: 395 },
    { month: "Mar", rank: 342 },
  ],
};

function MiniChart({ data }: { data: typeof MOCK_STATS.progressData }) {
  const max = Math.max(...data.map((d) => d.rank));
  const min = Math.min(...data.map((d) => d.rank));
  const range = max - min || 1;

  return (
    <div className="flex items-end gap-2 h-24">
      {data.map((d) => {
        const height = ((d.rank - min) / range) * 100;
        // Invert because lower rank = better
        const barHeight = 100 - height;
        return (
          <div key={d.month} className="flex-1 flex flex-col items-center gap-1">
            <div className="w-full flex flex-col justify-end h-20">
              <div
                className="w-full bg-accent-gold/20 rounded-t"
                style={{ height: `${Math.max(barHeight, 8)}%` }}
              >
                <div className="w-full bg-accent-gold rounded-t h-1" />
              </div>
            </div>
            <span className="text-text-tertiary text-[9px]">{d.month}</span>
          </div>
        );
      })}
    </div>
  );
}

export default function TrackerPage() {
  const stats = MOCK_STATS;

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-accent-gold text-[12px] font-medium uppercase tracking-wider mb-2">
              Integrated
            </p>
            <h1 className="text-3xl font-semibold text-text-primary tracking-tight mb-2">
              Tournament Tracker
            </h1>
            <p className="text-text-secondary text-[15px]">
              Link your BCP or ITC account and track your competitive journey
              over time — all in one place.
            </p>
          </div>

          {/* Connected status */}
          <div className="flex items-center gap-3 mb-10 p-3 rounded-lg bg-bg-secondary border border-border">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-text-secondary text-[13px]">
              Connected to ITC &middot; Last synced today
            </span>
          </div>

          {/* Overview stats */}
          <div className="grid grid-cols-4 gap-px bg-border rounded-xl overflow-hidden mb-10">
            {[
              { label: "ITC Rank", value: `#${stats.itcRank}` },
              { label: "Win Rate", value: `${stats.winRate}%` },
              { label: "Games Played", value: stats.gamesPlayed },
              { label: "Main Faction", value: stats.faction },
            ].map((s) => (
              <div key={s.label} className="bg-bg-primary p-5 text-center">
                <div className="text-xl font-semibold text-text-primary">
                  {s.value}
                </div>
                <div className="text-text-tertiary text-[11px] mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Rank progression chart */}
            <div>
              <h3 className="text-text-primary font-medium text-[15px] mb-4">
                Rank progression
              </h3>
              <div className="bg-bg-secondary rounded-xl p-5 border border-border">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-text-tertiary text-[11px]">
                    ITC Ranking over time
                  </span>
                  <span className="text-accent-gold text-[12px] font-medium">
                    &#8593; 548 places
                  </span>
                </div>
                <MiniChart data={stats.progressData} />
              </div>
            </div>

            {/* Recent events */}
            <div>
              <h3 className="text-text-primary font-medium text-[15px] mb-4">
                Recent events
              </h3>
              <div className="space-y-2">
                {stats.recentEvents.map((e) => (
                  <div
                    key={e.name}
                    className="flex items-center gap-4 p-3 rounded-xl border border-border"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-text-primary text-[13px] font-medium truncate">
                        {e.name}
                      </p>
                      <p className="text-text-tertiary text-[11px]">
                        {e.date} &middot; {e.faction}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-text-primary text-[13px] font-medium">
                        {e.placement}
                      </p>
                      <p className="text-text-tertiary text-[11px]">
                        {e.record}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center border border-accent-gold-border rounded-xl p-8 bg-accent-gold-subtle">
            <h3 className="text-text-primary font-medium text-lg mb-2">
              See the full picture
            </h3>
            <p className="text-text-secondary text-[13px] max-w-md mx-auto">
              Your tournament results feed directly into your Strategium profile.
              Coaches can see your history before sessions — so every minute of
              coaching is tailored to you.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
