"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CONTENT_ITEMS } from "@/lib/data";

const filters = ["All", "Faction Focus", "Masterclass", "Tournament Report", "Strategy"];

export default function ContentPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? CONTENT_ITEMS
      : CONTENT_ITEMS.filter((c) => c.type === activeFilter);

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10">
            <h1 className="font-[Cinzel] text-3xl sm:text-4xl font-bold text-text-primary mb-3">
              Content Library
            </h1>
            <p className="text-text-secondary max-w-2xl">
              Free and premium content from world champions. Every video is
              AI-dubbed in multiple languages for studio-quality learning in your
              native tongue.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeFilter === f
                    ? "bg-accent-gold text-bg-primary"
                    : "bg-bg-card border border-border-subtle text-text-secondary hover:text-text-primary hover:border-accent-gold/50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="bg-bg-card border border-border-subtle rounded-xl overflow-hidden card-hover group cursor-pointer"
              >
                {/* Thumbnail placeholder */}
                <div className="relative aspect-video bg-bg-primary flex items-center justify-center">
                  <div className="text-text-muted text-5xl">
                    {item.type === "Faction Focus"
                      ? "🏴"
                      : item.type === "Masterclass"
                      ? "🎓"
                      : item.type === "Tournament Report"
                      ? "🏆"
                      : "🧠"}
                  </div>
                  {/* Premium badge */}
                  {item.premium && (
                    <div className="absolute top-3 right-3 bg-accent-gold text-bg-primary text-xs font-bold px-2 py-1 rounded">
                      PREMIUM
                    </div>
                  )}
                  {/* Duration */}
                  <div className="absolute bottom-3 right-3 bg-black/70 text-text-primary text-xs px-2 py-1 rounded">
                    {item.duration}
                  </div>
                  {/* Play overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-accent-gold/0 group-hover:bg-accent-gold/90 flex items-center justify-center transition-all scale-75 group-hover:scale-100">
                      <svg
                        className="w-6 h-6 text-bg-primary opacity-0 group-hover:opacity-100 transition-opacity ml-0.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  {/* Type badge */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-accent-gold text-xs font-medium bg-accent-gold/10 px-2 py-0.5 rounded">
                      {item.type}
                    </span>
                    <span className="text-accent-green text-xs font-medium">
                      +{item.xpReward} XP
                    </span>
                  </div>

                  <h3 className="text-text-primary font-semibold mb-2 line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Coach */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-accent-gold/20 flex items-center justify-center text-xs">
                      {item.coach === "Sacco" ? "S" : "G"}
                    </div>
                    <span className="text-text-secondary text-sm">
                      {item.coach}
                    </span>
                    <span className="text-text-muted text-xs">
                      {item.coachTitle}
                    </span>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between text-text-muted text-xs">
                    <div className="flex items-center gap-1">
                      <span>{item.views.toLocaleString()} views</span>
                    </div>
                    <div className="flex gap-1">
                      {item.languages.map((lang) => (
                        <span
                          key={lang}
                          className="bg-bg-primary px-1.5 py-0.5 rounded text-text-muted"
                        >
                          {lang}
                        </span>
                      ))}
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
