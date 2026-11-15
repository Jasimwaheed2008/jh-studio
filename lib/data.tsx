import type { ReactNode } from "react";

export type Service = { title: string; text: string; bg: string; icon: ReactNode };

export const services: Service[] = [
  {
    title: "Websites",
    text: "Fast, mobile-friendly websites and web apps with admin panels.",
    bg: "#DFF7EC",
    icon: (<><rect fill="#fff" x="6" y="12" width="52" height="40" rx="6" /><path d="M6 24h52" /><path d="M16 38l-5 5 5 5M48 38l5 5-5 5M35 34l-6 18" /></>),
  },
  {
    title: "Android apps",
    text: "Apps for your shop, service or idea, ready for Play Store.",
    bg: "#E6E3FF",
    icon: (<><rect fill="#fff" x="18" y="6" width="28" height="52" rx="6" /><path d="M28 12h8M25 26h14M25 34h14" /><circle cx="32" cy="50" r="2" /></>),
  },
  {
    title: "Shopify stores",
    text: "Store setup, theme, products and payments so you sell from day one.",
    bg: "#FFF2C7",
    icon: (<><path fill="#fff" d="M10 22h44l-4 32H14z" /><path d="M22 22v-4a10 10 0 0 1 20 0v4M26 34c0 4 3 6 6 6s6-2 6-6" /></>),
  },
  {
    title: "Power BI",
    text: "Turn your sales sheets into clear charts you read at a glance.",
    bg: "#DCEEFF",
    icon: (<><path d="M8 54h48" /><rect fill="#fff" x="12" y="30" width="10" height="24" rx="2" /><rect fill="#fff" x="27" y="18" width="10" height="36" rx="2" /><rect fill="#fff" x="42" y="8" width="10" height="46" rx="2" /></>),
  },
  {
    title: "Excel",
    text: "Formulas, reports, invoices and automatic sheets that save hours.",
    bg: "#EAF7C9",
    icon: (<><rect fill="#fff" x="8" y="8" width="48" height="48" rx="6" /><path d="M8 22h48M8 36h48M24 8v48M40 8v48" /></>),
  },
  {
    title: "Word documents",
    text: "Clean, formatted reports, CVs, letters and proposals.",
    bg: "#FFE8D3",
    icon: (<><path fill="#fff" d="M14 6h28l10 10v42H14z" /><path d="M42 6v10h10M22 28h22M22 36h22M22 44h14" /></>),
  },
  {
    title: "Graphic design",
    text: "Logos, social posts, banners, flyers and full brand kits.",
    bg: "#FFE3EC",
    icon: (<><circle fill="#fff" cx="32" cy="32" r="24" /><circle cx="22" cy="26" r="3" /><circle cx="34" cy="20" r="3" /><circle cx="44" cy="30" r="3" /><path d="M32 56c-6 0-5-8 1-8s8-6 2-10" /></>),
  },
  {
    title: "Ads",
    text: "Facebook, Instagram and Google ads set up, tracked and improved.",
    bg: "#D9F3FF",
    icon: (<><path fill="#fff" d="M8 26v12h10l22 12V14L18 26z" /><path d="M48 24c4 4 4 12 0 16M54 18c8 8 8 20 0 28" /></>),
  },
];

export const heroWords = ["website", "Android app", "Shopify store", "dashboard", "logo and design", "ad campaign"];

export const steps = [
  { t: "Tell us", d: "Share your idea on WhatsApp or the form." },
  { t: "Quote", d: "Price and delivery time in writing within a day." },
  { t: "Build", d: "You see progress and give feedback as we go." },
  { t: "Deliver", d: "Launch, handover and support after delivery." },
];

export const team = [
  { name: "Jasim", letter: "J", role: "founder. Websites, apps and Shopify.", color: "#2B50F0" },
  { name: "Huzaifa", letter: "H", role: "Co-founder. Design, ads and reports.", color: "#FF5C8A" },
];

export const faq = [
  { q: "How much does a project cost?", a: "It depends on the work. Message us what you need and we send a price in writing within a day." },
  { q: "How long does it take?", a: "A simple website takes a few days. Apps and bigger stores take longer, and we tell you the time before we start." },
  { q: "Do you offer support after delivery?", a: "Yes. We fix problems after launch and can handle updates for you." },
  { q: "Can I ask for just one small thing?", a: "Yes. A logo, an Excel sheet or a single ad is fine." },
];
