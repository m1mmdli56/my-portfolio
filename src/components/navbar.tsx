import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="text-lg font-bold tracking-tighter">
          PORTFOLIO<span className="text-primary">.</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="#projects"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Layihələr
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
          </a>
          <Button size="sm">Əlaqə</Button>
        </div>
      </div>
    </nav>
  );
}
