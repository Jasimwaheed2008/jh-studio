const items = ["Websites", "Android apps", "Shopify", "Power BI", "Excel", "Word", "Graphics", "Ads"];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="-mx-5 -rotate-[1.2deg] overflow-hidden whitespace-nowrap bg-ink py-3.5 text-white" aria-hidden="true">
      <div className="anim-run inline-block font-display text-[22px] font-bold">
        {[...row, ...row].map((t, i) => (
          <span key={i} className="mx-[22px]">
            {t} <span className="ml-[22px] text-sun">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
