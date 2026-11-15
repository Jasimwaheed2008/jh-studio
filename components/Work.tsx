import Reveal from "./Reveal";

function Browser({ bg, title, sub, children }: { bg: string; title: string; sub: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-[18px] border-[1.5px] border-ink bg-white transition duration-200 hover:rotate-[0.6deg] hover:scale-[1.03]">
      <div className="flex gap-1.5 border-b-[1.5px] border-ink px-3 py-2.5">
        {[0, 1, 2].map((i) => <i key={i} className="h-2.5 w-2.5 rounded-full bg-ink/25" />)}
      </div>
      <div className="grid h-[150px] content-start gap-2 p-3.5" style={{ background: bg }}>{children}</div>
      <p className="border-t-[1.5px] border-ink px-3.5 py-3 text-[15px]">
        <b>{title}</b>
        <small className="block text-muted">{sub}</small>
      </p>
    </div>
  );
}
const bar = <div className="h-3.5 w-3/5 rounded-md bg-ink" />;
const line = (w = "100%") => <div className="h-2 rounded bg-ink/20" style={{ width: w }} />;

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-site px-[22px] py-5 pb-[72px]">
      <Reveal>
        <h2 className="mb-2.5 text-[clamp(30px,4.4vw,46px)] font-bold">Sample work</h2>
        <p className="mb-9 max-w-[56ch] text-muted">Demo projects that show our style. Real client work will replace these.</p>
      </Reveal>
      <div className="grid gap-5 md:grid-cols-3">
        <Reveal>
          <Browser bg="#DFF7EC" title="Restaurant website" sub="Menu, gallery, online orders">
            {bar}{line()}{line("80%")}<div className="h-[50px] rounded-[10px] bg-mint" />
          </Browser>
        </Reveal>
        <Reveal delay={0.08}>
          <Browser bg="#FFE3EC" title="Shopify clothing store" sub="Products, cart, payments">
            {bar}{line()}
            <div className="grid grid-cols-3 gap-2">
              <div className="h-[50px] rounded-[10px] bg-pink" /><div className="h-[50px] rounded-[10px] bg-sun" /><div className="h-[50px] rounded-[10px] bg-cobalt" />
            </div>
          </Browser>
        </Reveal>
        <Reveal delay={0.16}>
          <Browser bg="#DCEEFF" title="Sales dashboard" sub="Power BI and Excel reports">
            {bar}
            <div className="flex h-20 items-end gap-2">
              <div className="h-[40%] flex-1 rounded-[10px] bg-cobalt" /><div className="h-[75%] flex-1 rounded-[10px] bg-cobalt" />
              <div className="h-[55%] flex-1 rounded-[10px] bg-sun" /><div className="h-[95%] flex-1 rounded-[10px] bg-cobalt" />
            </div>
          </Browser>
        </Reveal>
      </div>
    </section>
  );
}
