"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { COACHING_SESSIONS } from "@/lib/data";

export default function CoachingPage() {
  const [tab, setTab] = useState<"group" | "private">("group");

  const sessions = COACHING_SESSIONS.filter((s) => s.type === tab);

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-10">
            <h1 className="text-3xl font-semibold text-text-primary tracking-tight mb-2">
              Coaching
            </h1>
            <p className="text-text-secondary text-[15px]">
              Train with world champions and top competitive players.
            </p>
          </div>

          <div className="flex gap-1 bg-bg-card rounded-full p-1 w-fit mb-10">
            {(["group", "private"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-2 rounded-full text-[13px] font-medium transition-colors ${
                  tab === t
                    ? "bg-text-primary text-bg-primary"
                    : "text-text-tertiary hover:text-text-secondary"
                }`}
              >
                {t === "group" ? "Group Sessions" : "Private"}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {sessions.map((s) => (
              <div key={s.id} className="border border-border rounded-xl p-6 hover-lift">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-accent-gold text-[10px] font-medium uppercase tracking-wider">
                        {s.type === "group" ? "Group" : "1-on-1"}
                      </span>
                      <span className="text-text-tertiary text-[10px]">+{s.xpReward} XP</span>
                    </div>
                    <h2 className="text-text-primary text-lg font-medium mb-2">{s.title}</h2>
                    <p className="text-text-secondary text-[13px] mb-4 leading-relaxed">
                      {s.description}
                    </p>
                    <p className="text-text-tertiary text-[12px]">
                      {s.coach} &middot; {s.coachTitle}
                    </p>
                    {s.type === "group" && s.date && (
                      <p className="text-text-tertiary text-[12px] mt-1">
                        {new Date(s.date).toLocaleDateString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                        })}{" "}
                        at {s.time} &middot; {s.spotsTotal! - s.spotsTaken!} spots left
                      </p>
                    )}
                  </div>
                  <div className="sm:text-right shrink-0 flex flex-col items-start sm:items-end justify-between">
                    <div>
                      <span className="text-2xl font-semibold text-text-primary">&euro;{s.price}</span>
                      <span className="text-text-tertiary text-[12px] ml-1">
                        {s.type === "group" ? "/session" : "/hour"}
                      </span>
                    </div>
                    <button className="mt-4 bg-text-primary text-bg-primary px-6 py-2.5 rounded-full text-[13px] font-medium hover:bg-accent-hover transition-colors">
                      {s.type === "group" ? "Reserve" : "Book"}
                    </button>
                    {s.type === "group" && (
                      <div className="mt-2 w-24">
                        <div className="w-full h-1 bg-bg-card rounded-full overflow-hidden">
                          <div
                            className="h-full bg-accent-gold rounded-full"
                            style={{ width: `${(s.spotsTaken! / s.spotsTotal!) * 100}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center border border-accent-gold-border rounded-xl p-8 bg-accent-gold-subtle">
            <h3 className="text-text-primary font-medium text-lg mb-2">Earn free sessions</h3>
            <p className="text-text-secondary text-[13px] max-w-md mx-auto">
              Reach <span className="text-accent-gold font-medium">Captain</span> for a free group session.
              Hit <span className="text-accent-gold font-medium">Chapter Master</span> for a free 1-on-1.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
