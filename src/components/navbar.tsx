"use client";

import Link from "next/link";
import { Logo } from "./ui/shadcn-io/navbar-09";
import { BookOpen, HomeIcon, PhoneCallIcon, SearchIcon } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export const defaultNavigationLinks = [
  { href: "#", label: "Home", icon: HomeIcon },
  { href: "#", label: "About", icon: BookOpen },
  { href: "#", label: "Contact Us", icon: PhoneCallIcon },
];

interface CursorProps {
  position: {
    left: number;
    width: number;
    opacity: number;
  };
}

function Cursor({ position }: CursorProps) {
return (
    <motion.div
        animate={position}
        transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
            staggerChildren: 0.1
        }}
        className="absolute z-0 h-7 rounded-full bg-background md:h-12"
    />
);
}

function TypewriterText({ text, className = "" }: { text: string; className?: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100); // Typing speed
      return () => clearTimeout(timeout);
    } else {
      // Animation complete, wait 2 seconds then restart
      const resetTimeout = setTimeout(() => {
        setDisplayedText("");
        setCurrentIndex(0);
        setIsComplete(false);
      }, 3000);
      return () => clearTimeout(resetTimeout);
    }
  }, [currentIndex, text]);

  return (
    <span className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className=""
      >
        |
      </motion.span>
    </span>
  );
}

export function Navbar() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scroll-based animations
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.95)"]
  );
  const height = useTransform(scrollY, [0, 100], [120, 64]); // Increased initial height from 96 to 120px
  const backdropBlur = useTransform(scrollY, [0, 100], [0, 8]);
  const textColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 1)"]
  );
  const borderColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0.3)", "rgba(255, 255, 255, 0.5)"]
  );

  return (
    <motion.div 
      style={{
        background,
        height,
        backdropFilter: `blur(${backdropBlur}px)`,
        color: textColor,
      }}
      className="fixed top-0 left-0 right-0 z-50 max-w-screen flex items-center px-12 text-white justify-between transition-all duration-300"
    >
      <div className="gap-4 flex items-center font-splash text-2xl">
        {/* <Logo /> */}
        <TypewriterText 
          text="JK Sweets Corner" 
          className="text-white font-splash text-2xl"
        />
      </div>

      <motion.div 
        ref={containerRef}
        style={{
          borderColor,
        }}
        className="flex relative w-fit items-center rounded-full p-1"
        onMouseLeave={() => {
          setPosition(prev => ({ ...prev, opacity: 0 }));
        }}
      >
        {defaultNavigationLinks.map((link, i) => {
          const Icon = link.icon;
          return (
            <Link
              key={i}
              href={link.href ? link.href : "#"}
              className="text-background mix-blend-difference relative uppercase z-10 cursor-pointer px-3 py-1.5 md:text-base flex items-center gap-2 group"
              onMouseEnter={(e) => {
                if (!containerRef.current) return;
                const linkRect = e.currentTarget.getBoundingClientRect();
                const containerRect = containerRef.current.getBoundingClientRect();
                
                setPosition({
                  left: linkRect.left - containerRect.left,
                  width: linkRect.width,
                  opacity: 1,
                });
              }}
            >
              {link.label}
              {/* <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-background transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span> */}
            </Link>
          );
        })}
        <Cursor position={position} />
      </motion.div>
    </motion.div>
  );
}
