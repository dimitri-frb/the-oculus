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
      <div className="flex justify-between text-xs text-text-muted mb-1">
        <span>{current.toLocaleString()} XP</span>
        <span>{nextLevel.toLocaleString()} XP</span>
      </div>
      <div className="w-full h-3 bg-bg-primary rounded-full overflow-hidden border border-border-subtle">
        <div
          className="h-full bg-gradient-to-r from-accent-gold to-accent-gold-light rounded-full xp-bar-animated"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string | number;
  icon: string;
}) {
  return (
    <div className="bg-bg-card border border-border-subtle rounded-xl p-4 text-center">
      <div className="text-2xl mb-1">{icon}</div>
      <div className="text-2xl font-bold text-text-primary">{value}</div>
      <div className="text-text-muted text-xs mt-1">{label}</div>
    </div>
  );
}

export default function Dashboard() {
  const user = MOCK_USER;
  const currentRank = user.rank;
  const nextRank = RANKS[currentRank.level] || RANKS[RANKS.length - 1];
  const prevRankXp = currentRank.xpRequired;

  const unlockedAchievements = user.achievements.filter((a) => a.unlocked);
  const lockedAchievements = user.achievements.filter((a) => !a.unlocked);

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Profile Header */}
          <div className="bg-bg-card border border-border-subtle rounded-2xl p-6 sm:p-8 mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-gold to-accent-gold-light flex items-center justify-center text-3xl glow-gold-subtle shrink-0">
                {currentRank.icon}
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                  <h1 className="text-2xl font-bold text-text-primary">
                    {user.name}
                  </h1>
                  <span className="inline-flex items-center gap-1 bg-accent-gold/10 text-accent-gold px-3 py-1 rounded-full text-sm font-medium w-fit">
                    {currentRank.icon} {currentRank.title}
                  </span>
                </div>
                <p className="text-text-secondary text-sm mb-4">
                  Main Faction:{" "}
                  <span className="text-text-primary font-medium">
                    {user.faction}
                  </span>{" "}
                  &middot; Joined{" "}
                  {new Date(user.joinDate).toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <XPBar
                  current={user.xp}
                  nextLevel={nextRank.xpRequired}
                  prevLevel={prevRankXp}
                />
                <p className="text-text-muted text-xs mt-2">
                  {(nextRank.xpRequired - user.xp).toLocaleString()} XP to{" "}
                  <span className="text-accent-gold">{nextRank.title}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <StatCard label="Videos Watched" value={user.videosWatched} icon="🎬" />
            <StatCard label="Sessions Attended" value={user.sessionsAttended} icon="🫂" />
            <StatCard label="Day Streak" value={user.streakDays} icon="🔥" />
            <StatCard label="Achievements" value={`${unlockedAchievements.length}/${user.achievements.length}`} icon="🏅" />
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Achievements */}
            <div className="lg:col-span-2">
              <h2 className="font-[Cinzel] text-xl font-bold text-text-primary mb-4">
                Achievements
              </h2>

              {/* Unlocked */}
              <div className="space-y-3 mb-6">
                {unlockedAchievements.map((a) => (
                  <div
                    key={a.id}
                    className="bg-bg-card border border-accent-gold/30 rounded-xl p-4 flex items-center gap-4"
                  >
                    <div className="text-3xl shrink-0">{a.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-text-primary font-semibold text-sm">
                        {a.title}
                      </div>
                      <div className="text-text-muted text-xs">
                        {a.description}
                      </div>
                    </div>
                    <div className="text-accent-gold font-bold text-sm shrink-0">
                      +{a.xp} XP
                    </div>
                  </div>
                ))}
              </div>

              {/* Locked */}
              <h3 className="text-text-muted text-sm font-medium mb-3 uppercase tracking-wider">
                Locked
              </h3>
              <div className="space-y-3">
                {lockedAchievements.map((a) => (
                  <div
                    key={a.id}
                    className="bg-bg-card/50 border border-border-subtle rounded-xl p-4 flex items-center gap-4 opacity-50"
                  >
                    <div className="text-3xl shrink-0 grayscale">{a.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-text-secondary font-semibold text-sm">
                        {a.title}
                      </div>
                      <div className="text-text-muted text-xs">
                        {a.description}
                      </div>
                    </div>
                    <div className="text-text-muted font-bold text-sm shrink-0">
                      +{a.xp} XP
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Rank Progress */}
              <h2 className="font-[Cinzel] text-xl font-bold text-text-primary mb-4">
                Rank Progression
              </h2>
              <div className="bg-bg-card border border-border-subtle rounded-xl p-4 mb-8">
                <div className="space-y-3">
                  {RANKS.map((r) => {
                    const isCurrentOrPast = user.xp >= r.xpRequired;
                    const isCurrent = r.level === currentRank.level;
                    return (
                      <div
                        key={r.level}
                        className={`flex items-center gap-3 p-2 rounded-lg ${
                          isCurrent
                            ? "bg-accent-gold/10 border border-accent-gold/30"
                            : ""
                        }`}
                      >
                        <span
                          className={`text-xl ${
                            isCurrentOrPast ? "" : "grayscale opacity-40"
                          }`}
                        >
                          {r.icon}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div
                            className={`text-sm font-medium ${
                              isCurrentOrPast
                                ? "text-text-primary"
                                : "text-text-muted"
                            }`}
                          >
                            {r.title}
                          </div>
                          <div className="text-text-muted text-xs">
                            {r.xpRequired.toLocaleString()} XP
                          </div>
                        </div>
                        {isCurrent && (
                          <span className="text-accent-gold text-xs font-bold">
                            YOU
                          </span>
                        )}
                        {isCurrentOrPast && !isCurrent && (
                          <span className="text-accent-green text-xs">
                            &#10003;
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick Actions */}
              <h2 className="font-[Cinzel] text-xl font-bold text-text-primary mb-4">
                Quick Actions
              </h2>
              <div className="space-y-3">
                <a
                  href="/content"
                  className="block bg-bg-card border border-border-subtle rounded-xl p-4 hover:border-accent-gold transition-colors"
                >
                  <div className="text-sm font-semibold text-text-primary">
                    Continue Learning
                  </div>
                  <div className="text-text-muted text-xs">
                    Pick up where you left off
                  </div>
                </a>
                <a
                  href="/coaching"
                  className="block bg-bg-card border border-border-subtle rounded-xl p-4 hover:border-accent-gold transition-colors"
                >
                  <div className="text-sm font-semibold text-text-primary">
                    Book a Session
                  </div>
                  <div className="text-text-muted text-xs">
                    Group or 1-on-1 coaching
                  </div>
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
