"use client";

import { Github, Moon, Sun, Linkedin } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center gap-8">
          <h3 className="text-2xl font-semibold tracking-tight">alessandro</h3>

          <nav className="flex items-center gap-4 text-sm">
            <Link
              href="https://www.tiktok.com/@careershifterrj?is_from_webapp=1&sender_device=pc"
              target="_blank"
            >
              <span className="transition-colors hover:text-foreground/80 text-foreground/60">
                Videos
              </span>
            </Link>
            <Link
              href="/mate-resume.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="transition-colors hover:text-foreground/80 text-foreground/60">
                Resume
              </span>
            </Link>
            <Link href="/#">
              <span className="transition-colors hover:text-foreground/80 text-foreground/60">
                Contact
              </span>
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link href="https://github.com/rjimaw7" target="_blank">
            <Github className="cursor-pointer" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/alessandro-mate-jr-15b369168/"
            target="_blank"
          >
            <Linkedin className="cursor-pointer" />
          </Link>
          <Sun
            className="cursor-pointer dark:hidden"
            onClick={() => setTheme("dark")}
          />
          <Moon
            className="cursor-pointer hidden dark:inline-flex"
            onClick={() => setTheme("light")}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
