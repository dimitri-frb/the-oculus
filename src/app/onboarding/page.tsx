"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FACTIONS } from "@/lib/data";

const LEVELS = [
  { id: "beginner", label: "Beginner", desc: "Just getting started with 40K" },
  { id: "casual", label: "Casual", desc: "I play for fun, want to improve" },
  { id: "competitive", label: "Competitive", desc: "I attend tournaments regularly" },
  { id: "top", label: "Top Player", desc: "I place well at GTs and majors" },
];

const GOALS = [
  { id: "learn-rules", label: "Learn the rules better" },
  { id: "build-lists", label: "Build better army lists" },
  { id: "win-more", label: "Win more games" },
  { id: "tournament", label: "Prepare for tournaments" },
  { id: "master-faction", label: "Master my faction" },
  { id: "fun", label: "Have more fun playing" },
];

const STEPS = ["Name", "Faction", "Level", "Goals", "Ready"];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [faction, setFaction] = useState("");
  const [level, setLevel] = useState("");
  const [goals, setGoals] = useState<string[]>([]);

  function next() {
    if (step < STEPS.length - 1) setStep(step + 1);
  }
  function back() {
    if (step > 0) setStep(step - 1);
  }
  function toggleGoal(id: string) {
    setGoals((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );
  }

  const canProceed =
    step === 0
      ? name.trim().length > 0
      : step === 1
      ? faction.length > 0
      : step === 2
      ? level.length > 0
      : step === 3
      ? goals.length > 0
      : true;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      {/* Progress */}
      <div className="w-full max-w-md mb-12">
        <div className="flex items-center justify-between mb-2">
          {STEPS.map((s, i) => (
            <div
              key={s}
              className={`flex items-center justify-center w-8 h-8 rounded-full text-[11px] font-semibold transition-colors ${
                i < step
                  ? "bg-accent-gold text-white"
                  : i === step
                  ? "bg-text-primary text-bg-primary"
                  : "bg-bg-card text-text-tertiary border border-border"
              }`}
            >
              {i < step ? "✓" : i + 1}
            </div>
          ))}
        </div>
        <div className="w-full h-1 bg-bg-card rounded-full overflow-hidden">
          <div
            className="h-full bg-text-primary rounded-full transition-all duration-500"
            style={{ width: `${(step / (STEPS.length - 1)) * 100}%` }}
          />
        </div>
      </div>

      <div className="w-full max-w-md">
        {/* Step 0: Name */}
        {step === 0 && (
          <div>
            <h1 className="text-2xl font-semibold text-text-primary tracking-tight mb-2">
              What should we call you?
            </h1>
            <p className="text-text-secondary text-[14px] mb-8">
              Pick a name for your Oculus profile.
            </p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your battle name..."
              autoFocus
              className="w-full bg-bg-secondary border border-border rounded-xl px-4 py-3 text-text-primary text-[15px] placeholder:text-text-tertiary focus:outline-none focus:border-border-hover"
              onKeyDown={(e) => e.key === "Enter" && canProceed && next()}
            />
          </div>
        )}

        {/* Step 1: Faction */}
        {step === 1 && (
          <div>
            <h1 className="text-2xl font-semibold text-text-primary tracking-tight mb-2">
              What&apos;s your main faction?
            </h1>
            <p className="text-text-secondary text-[14px] mb-8">
              We&apos;ll tailor content, tools, and coaching to your army.
            </p>
            <div className="grid grid-cols-2 gap-2 max-h-[400px] overflow-y-auto pr-1">
              {FACTIONS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFaction(f)}
                  className={`px-3 py-2.5 rounded-xl text-[13px] font-medium text-left transition-all ${
                    faction === f
                      ? "bg-text-primary text-bg-primary"
                      : "bg-bg-secondary border border-border text-text-secondary hover:border-border-hover"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Level */}
        {step === 2 && (
          <div>
            <h1 className="text-2xl font-semibold text-text-primary tracking-tight mb-2">
              Where are you at?
            </h1>
            <p className="text-text-secondary text-[14px] mb-8">
              This helps us recommend the right content and coaches.
            </p>
            <div className="space-y-2">
              {LEVELS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => setLevel(l.id)}
                  className={`w-full px-4 py-4 rounded-xl text-left transition-all ${
                    level === l.id
                      ? "bg-text-primary text-bg-primary"
                      : "bg-bg-secondary border border-border hover:border-border-hover"
                  }`}
                >
                  <p
                    className={`font-medium text-[14px] ${
                      level === l.id ? "text-bg-primary" : "text-text-primary"
                    }`}
                  >
                    {l.label}
                  </p>
                  <p
                    className={`text-[12px] mt-0.5 ${
                      level === l.id ? "text-bg-primary/70" : "text-text-tertiary"
                    }`}
                  >
                    {l.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Goals */}
        {step === 3 && (
          <div>
            <h1 className="text-2xl font-semibold text-text-primary tracking-tight mb-2">
              What are your goals?
            </h1>
            <p className="text-text-secondary text-[14px] mb-8">
              Pick as many as you like. We&apos;ll build your path around them.
            </p>
            <div className="space-y-2">
              {GOALS.map((g) => (
                <button
                  key={g.id}
                  onClick={() => toggleGoal(g.id)}
                  className={`w-full px-4 py-3 rounded-xl text-left text-[14px] font-medium transition-all ${
                    goals.includes(g.id)
                      ? "bg-text-primary text-bg-primary"
                      : "bg-bg-secondary border border-border text-text-secondary hover:border-border-hover"
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Ready */}
        {step === 4 && (
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-bg-card border border-border mx-auto mb-6 flex items-center justify-center">
              <img
                src="/the-oculus/sacco.png"
                alt="Sacco"
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <h1 className="text-2xl font-semibold text-text-primary tracking-tight mb-2">
              Welcome, {name}.
            </h1>
            <p className="text-text-secondary text-[14px] mb-2">
              {faction} &middot;{" "}
              {LEVELS.find((l) => l.id === level)?.label}
            </p>
            <p className="text-text-secondary text-[14px] mb-8 max-w-sm mx-auto">
              Your personalized journey starts now. Content, tools, and coaching
              recommendations - all tailored to you.
            </p>
            <button
              onClick={() => router.push("/the-oculus/dashboard")}
              className="bg-text-primary text-bg-primary px-8 py-3 rounded-full text-[15px] font-medium hover:bg-accent-hover transition-colors"
            >
              Enter The Oculus
            </button>
          </div>
        )}

        {/* Navigation */}
        {step < 4 && (
          <div className="flex items-center justify-between mt-10">
            <button
              onClick={back}
              className={`text-text-tertiary text-[13px] hover:text-text-secondary transition-colors ${
                step === 0 ? "invisible" : ""
              }`}
            >
              Back
            </button>
            <button
              onClick={next}
              disabled={!canProceed}
              className="bg-text-primary text-bg-primary px-6 py-2.5 rounded-full text-[13px] font-medium hover:bg-accent-hover transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
