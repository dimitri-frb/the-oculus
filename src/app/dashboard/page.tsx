import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MOCK_USER, RANKS } from "@/lib/data";

function XPBar({
  current,
  nextLevel,
  prevLevel,
}: {
  current: number;
  nextLevel: number;
  prevLevel: number;
}) {
  const progress = ((current - prevLevel) / (nextLevel - prevLevel)) * 100;
  return (
    <div className="w-full">
      <div className="flex justify-between text-[11px] text-text-tertiary mb-1.5">
        <span>{current.toLocaleString()} XP</span>
        <span>{nextLevel.toLocaleString()} XP</span>
      </div>
      <div className="w-full h-1.5 bg-bg-card rounded-full overflow-hidden">
        <div
          className="h-full bg-accent-gold rounded-full xp-bar-animated"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
    </div>
  );
}

export default function Dashboard() {
  const user = MOCK_USER;
  const currentRank = user.rank;
  const nextRank = RANKS[currentRank.level] || RANKS[RANKS.length - 1];

  const unlocked = user.achievements.filter((a) => a.unlocked);
  const locked = user.achievements.filter((a) => !a.unlocked);

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-20 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          {/* Profile */}
          <div className="flex flex-col sm:flex-row items-start gap-6 mb-12">
            <div className="w-16 h-16 rounded-full bg-bg-card border border-border flex items-center justify-center text-2xl shrink-0">
              {currentRank.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-2xl font-semibold text-text-primary tracking-tight">
                  {user.name}
                </h1>
                <span className="text-accent-gold text-[12px] font-medium bg-accent-gold-subtle px-2.5 py-0.5 rounded-full">
                  {currentRank.title}
                </span>
              </div>
              <p className="text-text-tertiary text-[13px] mb-4">
                {user.faction} &middot; Joined{" "}
                {new Date(user.joinDate).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </p>
              <div className="max-w-sm">
                <XPBar
                  current={user.xp}
                  nextLevel={nextRank.xpRequired}
                  prevLevel={currentRank.xpRequired}
                />
                <p className="text-text-tertiary text-[11px] mt-1.5">
                  {(nextRank.xpRequired - user.xp).toLocaleString()} XP to{" "}
                  <span className="text-accent-gold font-medium">{nextRank.title}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-px bg-border rounded-xl overflow-hidden mb-12">
            {[
              { label: "Videos", value: user.videosWatched },
              { label: "Sessions", value: user.sessionsAttended },
              { label: "Day Streak", value: user.streakDays },
              { label: "Achievements", value: `${unlocked.length}/${user.achievements.length}` },
            ].map((s) => (
              <div key={s.label} className="bg-bg-primary p-5 text-center">
                <div className="text-xl font-semibold text-text-primary">{s.value}</div>
                <div className="text-text-tertiary text-[11px] mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Achievements */}
            <div className="lg:col-span-3">
              <h2 className="text-lg font-semibold text-text-primary tracking-tight mb-4">
                Achievements
              </h2>
              <div className="space-y-2 mb-6">
                {unlocked.map((a) => (
                  <div
                    key={a.id}
                    className="flex items-center gap-4 p-3 rounded-xl bg-accent-gold-subtle border border-accent-gold-border"
                  >
                    <span className="text-xl shrink-0">{a.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-text-primary text-[13px] font-medium">{a.title}</p>
                      <p className="text-text-tertiary text-[11px]">{a.description}</p>
                    </div>
                    <span className="text-accent-gold text-[12px] font-medium shrink-0">
                      +{a.xp}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-text-tertiary text-[11px] uppercase tracking-wider font-medium mb-2">
                Locked
              </p>
              <div className="space-y-2">
                {locked.map((a) => (
                  <div
                    key={a.id}
                    className="flex items-center gap-4 p-3 rounded-xl border border-border opacity-40"
                  >
                    <span className="text-xl shrink-0 grayscale">{a.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-text-secondary text-[13px] font-medium">{a.title}</p>
                      <p className="text-text-tertiary text-[11px]">{a.description}</p>
                    </div>
                    <span className="text-text-tertiary text-[12px] font-medium shrink-0">
                      +{a.xp}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rank Sidebar */}
            <div className="lg:col-span-2">
              <h2 className="text-lg font-semibold text-text-primary tracking-tight mb-4">
                Rank Progression
              </h2>
              <div className="space-y-1">
                {RANKS.map((r) => {
                  const reached = user.xp >= r.xpRequired;
                  const isCurrent = r.level === currentRank.level;
                  return (
                    <div
                      key={r.level}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] ${
                        isCurrent ? "bg-accent-gold-subtle border border-accent-gold-border" : ""
                      }`}
                    >
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-semibold border ${
                          reached
                            ? "border-accent-gold text-accent-gold"
                            : "border-border text-text-tertiary"
                        }`}
                      >
                        {r.level}
                      </div>
                      <span className={`flex-1 ${reached ? "text-text-primary" : "text-text-tertiary"}`}>
                        {r.title}
                      </span>
                      {isCurrent && (
                        <span className="text-accent-gold text-[10px] font-semibold uppercase tracking-wider">
                          Current
                        </span>
                      )}
                      {reached && !isCurrent && (
                        <span className="text-text-tertiary text-[11px]">&#10003;</span>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 space-y-2">
                <a href="/content" className="block p-3 rounded-xl border border-border hover:border-border-hover transition-colors">
                  <p className="text-text-primary text-[13px] font-medium">Continue learning</p>
                  <p className="text-text-tertiary text-[11px]">Pick up where you left off</p>
                </a>
                <a href="/coaching" className="block p-3 rounded-xl border border-border hover:border-border-hover transition-colors">
                  <p className="text-text-primary text-[13px] font-medium">Book a session</p>
                  <p className="text-text-tertiary text-[11px]">Group or private coaching</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
