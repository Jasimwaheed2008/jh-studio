import Reveal from "./Reveal";
import { team } from "@/lib/data";

export default function Team() {
  return (
    <section id="team" className="mx-auto max-w-site px-[22px] py-5 pb-[72px]">
      <Reveal>
        <h2 className="mb-2.5 text-[clamp(30px,4.4vw,46px)] font-bold">The team</h2>
        <p className="mb-9 text-muted">You talk directly to the people who do the work.</p>
      </Reveal>
      <div className="grid gap-5 md:grid-cols-2">
        {team.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1}>
            <div className="flex items-center gap-[18px] rounded-[22px] border-[1.5px] border-ink bg-white p-[26px]">
              {/* Real photo lagana ho to is div ki jagah <Image src="/jasim.jpg" ... /> use karo */}
              <div className="anim-float grid h-20 w-20 flex-none place-items-center rounded-full font-display text-[32px] font-extrabold text-white"
                style={{ background: p.color, animationDelay: `${-i * 2}s` }}>
                {p.letter}
              </div>
              <div>
                <h3 className="text-[25px] font-bold">{p.name}</h3>
                <p className="mt-1 text-[15px] text-muted">{p.role}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
