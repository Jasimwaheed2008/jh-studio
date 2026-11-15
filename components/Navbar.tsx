"use client";
import { useState } from "react";
import Logo from "./Logo";
import { WhatsAppIcon } from "./Icons";
import { CFG, wa } from "@/lib/config";

const links = [
  ["Services", "#services"],
  ["Work", "#work"],
  ["Process", "#process"],
  ["Team", "#team"],
  ["FAQ", "#faq"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-[68px] max-w-site items-center justify-between px-[22px]">
        <a href="#top" className="flex items-center gap-2.5 font-display text-[21px] font-extrabold">
          <Logo size={38} /> {CFG.name}
        </a>
        <nav className="hidden gap-6 font-medium text-muted md:flex" aria-label="Main">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="hover:text-ink">{l}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={wa("Hi JH Studio, I want a quote.")} target="_blank" rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-xl bg-wa px-5 py-3 font-bold text-white transition hover:-translate-y-0.5 sm:inline-flex">
            <WhatsAppIcon className="h-5 w-5" /> WhatsApp us
          </a>
          <button className="rounded-xl border-[1.5px] border-ink px-3 py-2 font-bold md:hidden" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-menu" className="border-t border-line bg-paper px-[22px] pb-4 md:hidden" aria-label="Mobile">
          {links.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="block border-b border-line py-3 font-medium">{l}</a>
          ))}
          <a href={wa("Hi JH Studio, I want a quote.")} target="_blank" rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-wa px-5 py-3 font-bold text-white">
            <WhatsAppIcon className="h-5 w-5" /> WhatsApp us
          </a>
        </nav>
      )}
    </header>
  );
}
