"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CONTENT_ITEMS } from "@/lib/data";

const filters = ["All", "Faction Focus", "Masterclass", "Tournament Report", "Strategy"];

export default function ContentPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? CONTENT_ITEMS : CONTENT_ITEMS.filter((c) => c.type === active);

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <h1 className="text-3xl font-semibold text-text-primary tracking-tight mb-2">
              Content
            </h1>
            <p className="text-text-secondary text-[15px]">
              Free and premium videos. AI-dubbed in multiple languages.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-colors ${
                  active === f
                    ? "bg-text-primary text-bg-primary"
                    : "text-text-tertiary hover:text-text-secondary border border-border"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-border overflow-hidden hover-lift cursor-pointer group"
              >
                <div className="relative aspect-video bg-bg-card flex items-center justify-center">
                  <span className="text-text-tertiary text-3xl">
                    {item.type === "Faction Focus" ? "&#9876;" : item.type === "Masterclass" ? "&#9733;" : item.type === "Tournament Report" ? "&#9813;" : "&#9670;"}
                  </span>
                  {item.premium && (
                    <span className="absolute top-2.5 right-2.5 bg-text-primary text-bg-primary text-[10px] font-semibold px-2 py-0.5 rounded-full">
                      Premium
                    </span>
                  )}
                  <span className="absolute bottom-2.5 right-2.5 bg-text-primary/70 text-bg-primary text-[10px] px-2 py-0.5 rounded-full">
                    {item.duration}
                  </span>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-text-primary/0 group-hover:bg-text-primary/80 flex items-center justify-center transition-all scale-75 group-hover:scale-100">
                      <svg className="w-4 h-4 text-bg-primary opacity-0 group-hover:opacity-100 transition-opacity ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-accent-gold text-[10px] font-medium">{item.type}</span>
                    <span className="text-text-tertiary text-[10px]">+{item.xpReward} XP</span>
                    {(item as any).source && (
                      <span className="text-[10px] font-medium text-text-secondary bg-bg-card px-1.5 py-0.5 rounded-full ml-auto">
                        via {(item as any).source}
                      </span>
                    )}
                  </div>
                  <h3 className="text-text-primary text-[14px] font-medium mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-text-tertiary text-[12px]">
                      {item.coach} &middot; {item.views.toLocaleString()} views
                    </span>
                    <div className="flex gap-1">
                      {item.languages.slice(0, 3).map((l) => (
                        <span key={l} className="text-text-tertiary text-[10px] bg-bg-card px-1.5 py-0.5 rounded">
                          {l}
                        </span>
                      ))}
                      {item.languages.length > 3 && (
                        <span className="text-text-tertiary text-[10px] bg-bg-card px-1.5 py-0.5 rounded">
                          +{item.languages.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
