import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border-subtle mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded bg-accent-gold flex items-center justify-center">
                <span className="text-bg-primary font-bold text-sm font-[Cinzel]">S</span>
              </div>
              <span className="font-[Cinzel] text-lg font-bold text-accent-gold">
                The Strategium
              </span>
            </div>
            <p className="text-text-secondary text-sm max-w-md">
              Your personal war council. Learn from world champions, master your
              faction, and climb the ranks in the most immersive Warhammer 40K
              coaching platform ever built.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-text-primary mb-3 text-sm uppercase tracking-wider">
              Platform
            </h4>
            <div className="space-y-2">
              <Link href="/content" className="block text-text-secondary hover:text-accent-gold text-sm transition-colors">Free Content</Link>
              <Link href="/content" className="block text-text-secondary hover:text-accent-gold text-sm transition-colors">Premium Library</Link>
              <Link href="/coaching" className="block text-text-secondary hover:text-accent-gold text-sm transition-colors">Group Sessions</Link>
              <Link href="/coaching" className="block text-text-secondary hover:text-accent-gold text-sm transition-colors">1-on-1 Coaching</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-text-primary mb-3 text-sm uppercase tracking-wider">
              Community
            </h4>
            <div className="space-y-2">
              <a href="#" className="block text-text-secondary hover:text-accent-gold text-sm transition-colors">Discord</a>
              <a href="#" className="block text-text-secondary hover:text-accent-gold text-sm transition-colors">YouTube</a>
              <a href="#" className="block text-text-secondary hover:text-accent-gold text-sm transition-colors">Instagram</a>
              <a href="#" className="block text-text-secondary hover:text-accent-gold text-sm transition-colors">Twitter / X</a>
            </div>
          </div>
        </div>
        <div className="border-t border-border-subtle mt-8 pt-8 text-center text-text-muted text-xs">
          &copy; {new Date().getFullYear()} The Strategium. All rights reserved. Not affiliated with Games Workshop.
        </div>
      </div>
    </footer>
  );
}
