"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { COACHING_SESSIONS } from "@/lib/data";

export default function CoachingPage() {
  const [tab, setTab] = useState<"group" | "private">("group");

  const groupSessions = COACHING_SESSIONS.filter((s) => s.type === "group");
  const privateSessions = COACHING_SESSIONS.filter((s) => s.type === "private");
  const sessions = tab === "group" ? groupSessions : privateSessions;

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-20 pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10">
            <h1 className="font-[Cinzel] text-3xl sm:text-4xl font-bold text-text-primary mb-3">
              Coaching Sessions
            </h1>
            <p className="text-text-secondary max-w-2xl">
              Train directly with world champions and top competitive players.
              Group sessions for shared learning, or private sessions for
              personalized coaching.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-8">
            <button
              onClick={() => setTab("group")}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors ${
                tab === "group"
                  ? "bg-accent-gold text-bg-primary"
                  : "bg-bg-card border border-border-subtle text-text-secondary hover:text-text-primary"
              }`}
            >
              Group Sessions
            </button>
            <button
              onClick={() => setTab("private")}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors ${
                tab === "private"
                  ? "bg-accent-gold text-bg-primary"
                  : "bg-bg-card border border-border-subtle text-text-secondary hover:text-text-primary"
              }`}
            >
              Private Coaching
            </button>
          </div>

          {/* Sessions */}
          <div className="space-y-6">
            {sessions.map((session) => (
              <div
                key={session.id}
                className="bg-bg-card border border-border-subtle rounded-xl p-6 sm:p-8 card-hover"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  <div className="flex-1">
                    {/* Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-accent-gold text-xs font-medium bg-accent-gold/10 px-2 py-0.5 rounded">
                        {session.type === "group"
                          ? "Group Session"
                          : "1-on-1 Coaching"}
                      </span>
                      <span className="text-accent-green text-xs font-medium">
                        +{session.xpReward} XP
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-text-primary mb-2">
                      {session.title}
                    </h2>

                    <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                      {session.description}
                    </p>

                    {/* Coach info */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-full bg-accent-gold/20 flex items-center justify-center text-sm font-bold text-accent-gold">
                        {session.coach === "Sacco" ? "S" : "V"}
                      </div>
                      <div>
                        <div className="text-text-primary text-sm font-medium">
                          {session.coach}
                        </div>
                        <div className="text-text-muted text-xs">
                          {session.coachTitle}
                        </div>
                      </div>
                    </div>

                    {/* Date / spots for group */}
                    {session.type === "group" && (
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-1 text-text-secondary">
                          <span>&#128197;</span>
                          <span>
                            {new Date(session.date!).toLocaleDateString(
                              "en-US",
                              {
                                weekday: "long",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                          </span>
                          <span className="text-text-muted">
                            at {session.time}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-text-secondary">
                          <span>&#128101;</span>
                          <span>
                            {session.spotsTaken}/{session.spotsTotal} spots taken
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Price & CTA */}
                  <div className="sm:text-right shrink-0">
                    <div className="text-3xl font-bold text-text-primary mb-1">
                      {session.price}&euro;
                    </div>
                    <div className="text-text-muted text-xs mb-4">
                      {session.type === "group" ? "per session" : "per hour"}
                    </div>
                    <button className="bg-accent-gold text-bg-primary px-6 py-3 rounded-lg font-semibold hover:bg-accent-gold-light transition-colors w-full sm:w-auto">
                      {session.type === "group" ? "Reserve Spot" : "Book Now"}
                    </button>
                    {session.type === "group" && (
                      <div className="mt-2">
                        {/* Spots bar */}
                        <div className="w-full h-1.5 bg-bg-primary rounded-full overflow-hidden">
                          <div
                            className="h-full bg-accent-gold rounded-full"
                            style={{
                              width: `${
                                (session.spotsTaken! / session.spotsTotal!) * 100
                              }%`,
                            }}
                          />
                        </div>
                        <div className="text-text-muted text-xs mt-1">
                          {session.spotsTotal! - session.spotsTaken!} spots left
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievement unlock callout */}
          <div className="mt-12 bg-bg-card border border-accent-gold/30 rounded-xl p-6 text-center glow-gold-subtle">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-[Cinzel] text-lg font-bold text-text-primary mb-2">
              Earn Free Coaching Sessions
            </h3>
            <p className="text-text-secondary text-sm max-w-lg mx-auto">
              Reach the rank of <span className="text-accent-gold font-bold">Captain</span> (8,000 XP) and unlock a free group coaching session.
              Hit <span className="text-accent-gold font-bold">Chapter Master</span> (12,000 XP) for a free 1-on-1 with a guest coach!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
