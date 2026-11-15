import Reveal from "./Reveal";
import { services } from "@/lib/data";
import { wa } from "@/lib/config";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-site px-[22px] py-[72px]">
      <Reveal>
        <h2 className="mb-2.5 text-[clamp(30px,4.4vw,46px)] font-bold">Everything in one place</h2>
        <p className="mb-9 max-w-[56ch] text-muted">Pick one service or a full package. Tap any card to ask about it on WhatsApp.</p>
      </Reveal>
      <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={(i % 4) * 0.07}>
            <div style={{ background: s.bg }}
              className="group flex h-full flex-col gap-2.5 rounded-[22px] border-[1.5px] border-ink p-6 transition duration-200 hover:-translate-x-1 hover:-translate-y-1.5 hover:-rotate-1 hover:shadow-[8px_10px_0_#101B34]">
              <svg viewBox="0 0 64 64" fill="none" stroke="#101B34" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                className="h-16 w-16 transition duration-300 group-hover:rotate-[-8deg] group-hover:scale-110" aria-hidden="true">
                {s.icon}
              </svg>
              <h3 className="text-[22px] font-bold">{s.title}</h3>
              <p className="flex-1 text-[15px] text-[#3b455a]">{s.text}</p>
              <a href={wa(`Hi JH Studio, I need ${s.title}.`)} target="_blank" rel="noopener noreferrer" className="text-[15px] font-bold hover:underline">
                Ask on WhatsApp ↗
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
