import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GanttChart } from "lucide-react";
import LineIcon from "../../icons/SheetLineIcon";
import Link from "next/link";
import { scrollToSection } from "@/lib/utils";

const MobileSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <GanttChart className="md:hidden" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="flex items-center">
            <LineIcon />
            <SheetClose asChild>
              <h3 className="text-xl font-semibold tracking-tight cursor-pointer">
                alessandro
              </h3>
            </SheetClose>
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col items-start mt-4 gap-4 text-base ml-4">
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
          <SheetClose>
            <span
              className="cursor-pointer transition-colors hover:text-foreground/80 text-foreground/60"
              onClick={() => {
                scrollToSection("contact");
              }}
            >
              Contact
            </span>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSheet;
