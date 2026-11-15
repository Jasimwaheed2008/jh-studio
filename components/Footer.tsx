import { CFG } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-site flex-wrap justify-between gap-2.5 px-[22px] pb-24 pt-8 text-[15px] text-muted">
      <span>© {new Date().getFullYear()} {CFG.name}</span>
      <span>{CFG.founders}</span>
    </footer>
  );
}
