import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p className="text-text-primary font-medium text-sm mb-1">The Oculus</p>
            <p className="text-text-tertiary text-xs max-w-xs">
              World-champion Warhammer 40K coaching. From Neophyte to Warmaster.
            </p>
          </div>
          <div className="flex gap-12 text-xs">
            <div className="space-y-2">
              <p className="text-text-secondary font-medium">Platform</p>
              <Link href="/content" className="block text-text-tertiary hover:text-text-secondary transition-colors">Content</Link>
              <Link href="/coaching" className="block text-text-tertiary hover:text-text-secondary transition-colors">Coaching</Link>
              <Link href="/dashboard" className="block text-text-tertiary hover:text-text-secondary transition-colors">Profile</Link>
            </div>
            <div className="space-y-2">
              <p className="text-text-secondary font-medium">Community</p>
              <a href="#" className="block text-text-tertiary hover:text-text-secondary transition-colors">Discord</a>
              <a href="#" className="block text-text-tertiary hover:text-text-secondary transition-colors">YouTube</a>
              <a href="#" className="block text-text-tertiary hover:text-text-secondary transition-colors">Twitter / X</a>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 text-text-tertiary text-[11px]">
          &copy; {new Date().getFullYear()} The Oculus. Not affiliated with Games Workshop.
        </div>
      </div>
    </footer>
  );
}
