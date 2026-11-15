import Reveal from "./Reveal";
import { faq } from "@/lib/data";

export default function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-site px-[22px] py-5 pb-[72px]">
      <Reveal><h2 className="mb-6 text-[clamp(30px,4.4vw,46px)] font-bold">Questions</h2></Reveal>
      {faq.map((f) => (
        <Reveal key={f.q}>
          <details className="mb-2.5 rounded-[14px] border-[1.5px] border-line bg-white px-5 py-4">
            <summary className="cursor-pointer font-bold">{f.q}</summary>
            <p className="mt-2.5 text-muted">{f.a}</p>
          </details>
        </Reveal>
      ))}
    </section>
  );
}
