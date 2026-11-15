import Reveal from "./Reveal";
import { steps } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-site px-[22px] py-5 pb-[72px]">
      <Reveal>
        <h2 className="mb-2.5 text-[clamp(30px,4.4vw,46px)] font-bold">How we work</h2>
        <p className="mb-9 text-muted">Clear steps, no surprises.</p>
      </Reveal>
      <ol className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.t} className="list-none border-l-[3px] border-cobalt pl-4">
            <Reveal delay={i * 0.08}>
              <span className="block font-display text-[32px] font-extrabold text-cobalt">{i + 1}</span>
              <b className="block">{s.t}</b>
              <span className="text-[15px] text-muted">{s.d}</span>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
