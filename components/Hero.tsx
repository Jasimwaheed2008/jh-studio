"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import { WhatsAppIcon } from "./Icons";
import { heroWords } from "@/lib/data";
import { wa } from "@/lib/config";

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % heroWords.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <div id="top" className="mx-auto grid max-w-site items-center gap-8 px-[22px] pb-[70px] pt-14 md:grid-cols-[1.2fr_1fr]">
      <div>
        <h1 className="text-[clamp(40px,6.2vw,70px)] font-extrabold">
          We build your
          <br />
          <span className="relative inline-block min-h-[1.1em] text-cobalt">
            <AnimatePresence mode="wait">
              <motion.span key={heroWords[i]} className="inline-block"
                initial={{ opacity: 0, y: 14, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.35 }}>
                {heroWords[i]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>
        <p className="mb-7 mt-5 max-w-[46ch] text-[19px] text-muted">
          Websites, Android apps, Shopify stores, dashboards, ads and design. Two people, one team, fast replies and fair prices.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href={wa("Hi JH Studio, I want a free quote.")} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-wa px-6 py-3.5 font-bold text-white transition hover:-translate-y-1 hover:-rotate-1">
            <WhatsAppIcon className="h-5 w-5" /> Get a free quote
          </a>
          <a href="#services" className="inline-flex items-center rounded-xl border-[1.5px] border-ink bg-white px-6 py-3.5 font-bold transition hover:-translate-y-1 hover:-rotate-1">
            See services
          </a>
        </div>
      </div>
      <div className="relative h-[280px] md:h-[380px]" aria-hidden="true">
        <div className="anim-float absolute left-[30px] top-10 h-[230px] w-[230px] rounded-full bg-cobalt" />
        <div className="anim-float absolute right-5 top-2.5 h-[120px] w-[120px] rounded-full bg-sun [animation-delay:-2s]" />
        <div className="anim-float absolute bottom-8 left-0 h-[90px] w-[90px] rounded-full bg-pink [animation-delay:-4s]" />
        <div className="anim-float absolute bottom-14 right-12 h-[60px] w-[60px] rounded-full bg-mint [animation-delay:-1s]" />
        <div className="anim-swing absolute left-1/2 top-1/2 -ml-[95px] -mt-[95px] drop-shadow-[0_18px_20px_rgba(16,27,52,.25)]">
          <Logo size={190} />
        </div>
      </div>
    </div>
  );
}
