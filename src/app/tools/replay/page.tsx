"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MOCK_ANALYSIS = {
  result: "Loss — 72 vs 85",
  turningPoint: "Turn 3",
  summary:
    "You were ahead on primary until Turn 3 where an aggressive push with Wraithguard left your home objective exposed. Your opponent capitalized with a deep strike charge, flipping two objectives and never looking back.",
  decisions: [
    {
      turn: 1,
      phase: "Movement",
      rating: "good" as const,
      decision: "Screened deep strike zones with Rangers",
      note: "Good defensive play — forced opponent to commit to less optimal positions.",
    },
    {
      turn: 2,
      phase: "Shooting",
      rating: "good" as const,
      decision: "Focused fire on opponent's screening unit",
      note: "Correct target priority — opened a lane for your Turn 3 play.",
    },
    {
      turn: 3,
      phase: "Movement",
      rating: "mistake" as const,
      decision: "Pushed Wraithguard 12\" forward, abandoning home objective",
      note: "This was the game-losing decision. A 6\" advance kept you in scoring range while still threatening mid-board. Overextension gave opponent the opening.",
    },
    {
      turn: 3,
      phase: "Command",
      rating: "neutral" as const,
      decision: "Used CP re-roll on charge instead of saving for defensive strat",
      note: "Debatable — the charge was important, but Feigned Retreat on Turn 4 would have saved 10 VP.",
    },
    {
      turn: 4,
      phase: "Movement",
      rating: "mistake" as const,
      decision: "Failed to screen backfield after losing home objective",
      note: "At this point you needed to play for secondary denial. Pulling back a unit would have reduced the VP gap by ~8 points.",
    },
  ],
};

export default function ReplayPage() {
  const [uploaded, setUploaded] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<typeof MOCK_ANALYSIS | null>(null);

  function handleUpload() {
    setUploaded(true);
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setResult(MOCK_ANALYSIS);
    }, 2500);
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-20 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-accent-gold text-[12px] font-medium uppercase tracking-wider mb-2">
              AI-Powered
            </p>
            <h1 className="text-3xl font-semibold text-text-primary tracking-tight mb-2">
              Match Replay Analysis
            </h1>
            <p className="text-text-secondary text-[15px]">
              Upload your game log and get an annotated breakdown of every key
              decision — what worked, what didn&apos;t, and what Sacco would have
              done differently.
            </p>
          </div>

          {/* Upload area */}
          {!uploaded && (
            <div>
              <div
                onClick={handleUpload}
                className="border-2 border-dashed border-border rounded-2xl p-16 text-center cursor-pointer hover:border-border-hover transition-colors"
              >
                <div className="text-text-tertiary text-4xl mb-4">&#8682;</div>
                <p className="text-text-primary font-medium text-[15px] mb-1">
                  Upload game log
                </p>
                <p className="text-text-tertiary text-[13px]">
                  Supports Tabletop Battles, BCP exports, or paste a text summary
                </p>
              </div>

              <div className="mt-6 text-center">
                <p className="text-text-tertiary text-[12px]">
                  Or paste your game notes below
                </p>
                <textarea
                  placeholder="Turn 1: I deployed defensively, screening with Rangers..."
                  rows={6}
                  className="mt-3 w-full bg-bg-secondary border border-border rounded-xl px-4 py-3 text-text-primary text-[13px] leading-relaxed placeholder:text-text-tertiary focus:outline-none focus:border-border-hover resize-none"
                />
                <button
                  onClick={handleUpload}
                  className="mt-3 bg-text-primary text-bg-primary px-6 py-2.5 rounded-full text-[13px] font-medium hover:bg-accent-hover transition-colors"
                >
                  Analyze game
                </button>
              </div>
            </div>
          )}

          {/* Loading */}
          {analyzing && (
            <div className="text-center py-16">
              <div className="inline-flex items-center gap-3 text-text-secondary text-[13px]">
                <div className="w-4 h-4 border-2 border-text-tertiary border-t-accent-gold rounded-full animate-spin" />
                Analyzing decision tree across {5} turns...
              </div>
            </div>
          )}

          {/* Results */}
          {result && !analyzing && (
            <div className="space-y-8">
              {/* Summary */}
              <div className="bg-bg-secondary rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-text-primary font-semibold text-lg">
                    {result.result}
                  </div>
                  <span className="text-text-tertiary text-[12px]">
                    Turning point: {result.turningPoint}
                  </span>
                </div>
                <p className="text-text-secondary text-[13px] leading-relaxed">
                  {result.summary}
                </p>
              </div>

              {/* Decision tree */}
              <div>
                <h3 className="text-text-primary font-medium text-[15px] mb-4">
                  Key decisions
                </h3>
                <div className="space-y-3">
                  {result.decisions.map((d, i) => (
                    <div
                      key={i}
                      className={`p-4 rounded-xl border ${
                        d.rating === "mistake"
                          ? "border-red-200 bg-red-50/50"
                          : d.rating === "good"
                          ? "border-green-200 bg-green-50/50"
                          : "border-border bg-bg-primary"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-text-tertiary text-[11px] font-medium">
                          T{d.turn} &middot; {d.phase}
                        </span>
                        <span
                          className={`text-[10px] font-medium uppercase tracking-wider ${
                            d.rating === "mistake"
                              ? "text-red-500"
                              : d.rating === "good"
                              ? "text-green-600"
                              : "text-text-tertiary"
                          }`}
                        >
                          {d.rating === "mistake"
                            ? "Key mistake"
                            : d.rating === "good"
                            ? "Good play"
                            : "Debatable"}
                        </span>
                      </div>
                      <p className="text-text-primary text-[13px] font-medium mb-1">
                        {d.decision}
                      </p>
                      <p className="text-text-secondary text-[12px] leading-relaxed">
                        {d.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-text-tertiary text-[11px]">
                Want deeper analysis? Book a replay review session with Sacco or
                a guest coach.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
