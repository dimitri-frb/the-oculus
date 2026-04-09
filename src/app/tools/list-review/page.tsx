"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MOCK_FEEDBACK = {
  score: 82,
  summary:
    "Strong core with good secondary play potential. A few tweaks could push this into top-tier tournament territory.",
  strengths: [
    "Solid objective-holding units with Wraithguard",
    "Good mix of ranged and melee threats",
    "Strong command point efficiency",
  ],
  concerns: [
    "Low anti-tank output - you'll struggle into Knights and heavy vehicle lists",
    "No reliable deep strike threat - predictable deployment",
    "Support characters are over-invested for what they enable",
  ],
  suggestions: [
    "Swap one Wraithguard unit for Fire Dragons in a Wave Serpent - solves your anti-tank gap",
    "Consider Swooping Hawks for deep strike flexibility and action monkey plays",
    "Drop the Autarch upgrade - the points are better spent on a Farseer for Guide",
  ],
};

export default function ListReviewPage() {
  const [list, setList] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<typeof MOCK_FEEDBACK | null>(null);

  function handleAnalyze() {
    if (!list.trim()) return;
    setAnalyzing(true);
    setResult(null);
    // Simulate AI analysis
    setTimeout(() => {
      setAnalyzing(false);
      setResult(MOCK_FEEDBACK);
    }, 2000);
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
              List Review
            </h1>
            <p className="text-text-secondary text-[15px]">
              Paste your army list and get instant feedback based on current meta
              data and Sacco&apos;s competitive methodology.
            </p>
          </div>

          {/* Input */}
          <div className="mb-6">
            <textarea
              value={list}
              onChange={(e) => setList(e.target.value)}
              placeholder={"Paste your army list here...\n\nExample:\nAeldari - 2000pts\nStrike Force\n\nFarseer [105pts]\n- Witchblade\n- Guide, Doom\n\nWraithguard x5 [200pts]\n..."}
              rows={12}
              className="w-full bg-bg-secondary border border-border rounded-xl px-4 py-3 text-text-primary text-[13px] leading-relaxed placeholder:text-text-tertiary focus:outline-none focus:border-border-hover resize-none font-mono"
            />
          </div>

          <button
            onClick={handleAnalyze}
            disabled={!list.trim() || analyzing}
            className="bg-text-primary text-bg-primary px-6 py-2.5 rounded-full text-[13px] font-medium hover:bg-accent-hover transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {analyzing ? "Analyzing..." : "Review my list"}
          </button>

          {/* Loading */}
          {analyzing && (
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 text-text-secondary text-[13px]">
                <div className="w-4 h-4 border-2 border-text-tertiary border-t-accent-gold rounded-full animate-spin" />
                Analyzing your list against current meta data...
              </div>
            </div>
          )}

          {/* Results */}
          {result && (
            <div className="mt-12 space-y-8">
              {/* Score */}
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full border-2 border-accent-gold flex items-center justify-center">
                  <span className="text-3xl font-semibold text-text-primary">
                    {result.score}
                  </span>
                </div>
                <div>
                  <p className="text-text-primary font-medium text-lg">
                    Competitive Score
                  </p>
                  <p className="text-text-secondary text-[13px]">
                    {result.summary}
                  </p>
                </div>
              </div>

              {/* Strengths */}
              <div>
                <h3 className="text-text-primary font-medium text-[15px] mb-3">
                  Strengths
                </h3>
                <div className="space-y-2">
                  {result.strengths.map((s) => (
                    <div
                      key={s}
                      className="flex items-start gap-3 p-3 rounded-lg bg-bg-secondary text-[13px]"
                    >
                      <span className="text-green-600 mt-0.5 shrink-0">&#10003;</span>
                      <span className="text-text-secondary">{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Concerns */}
              <div>
                <h3 className="text-text-primary font-medium text-[15px] mb-3">
                  Concerns
                </h3>
                <div className="space-y-2">
                  {result.concerns.map((c) => (
                    <div
                      key={c}
                      className="flex items-start gap-3 p-3 rounded-lg bg-bg-secondary text-[13px]"
                    >
                      <span className="text-amber-500 mt-0.5 shrink-0">&#9888;</span>
                      <span className="text-text-secondary">{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suggestions */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="/the-strategium/sacco.png"
                    alt="Sacco - 2x World Champion"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <h3 className="text-text-primary font-medium text-[15px]">
                    Sacco&apos;s suggestions
                  </h3>
                </div>
                <div className="space-y-2">
                  {result.suggestions.map((s) => (
                    <div
                      key={s}
                      className="flex items-start gap-3 p-3 rounded-lg border border-accent-gold-border bg-accent-gold-subtle text-[13px]"
                    >
                      <span className="text-accent-gold mt-0.5 shrink-0">&#10148;</span>
                      <span className="text-text-secondary">{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-text-tertiary text-[11px]">
                Analysis powered by current meta data and Sacco&apos;s
                competitive framework. For deeper feedback, book a coaching
                session.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
