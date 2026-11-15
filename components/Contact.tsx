"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "./Icons";
import { CFG, wa } from "@/lib/config";
import { services } from "@/lib/data";

export default function Contact() {
  const [name, setName] = useState("");
  const [service, setService] = useState(services[0].title);
  const [msg, setMsg] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(wa(`Hi JH Studio, I am ${name}. I need: ${service}. ${msg}`), "_blank", "noopener,noreferrer");
  };
  const field = "w-full rounded-xl border-0 bg-white px-3.5 py-3 text-ink";
  const soc = "grid h-[52px] w-[52px] place-items-center rounded-2xl text-white transition hover:-translate-y-1.5 hover:-rotate-6";

  return (
    <section id="contact" className="mx-auto max-w-site px-[22px] py-5 pb-16">
      <Reveal>
        <div className="grid gap-9 rounded-[30px] bg-ink p-7 text-white md:grid-cols-2 md:p-12">
          <div>
            <h2 className="mb-3 text-[clamp(30px,4.4vw,46px)] font-bold">Let’s build yours</h2>
            <p className="text-[#C7CEDE]">Fill the form and it opens WhatsApp with your message ready. Or follow us on social media.</p>
            <div className="mt-6 flex gap-3">
              <a href={wa("Hi JH Studio")} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={soc} style={{ background: "#1FAF55" }}><WhatsAppIcon className="h-[26px] w-[26px]" /></a>
              <a href={CFG.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={soc} style={{ background: "linear-gradient(45deg,#F9A826,#E1306C,#833AB4)" }}><InstagramIcon className="h-[26px] w-[26px]" /></a>
              <a href={CFG.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={soc} style={{ background: "#1877F2" }}><FacebookIcon className="h-[26px] w-[26px]" /></a>
            </div>
          </div>
          <form onSubmit={submit} className="grid gap-3">
            <div>
              <label htmlFor="n" className="text-sm text-[#C7CEDE]">Your name</label>
              <input id="n" required value={name} onChange={(e) => setName(e.target.value)} className={field} />
            </div>
            <div>
              <label htmlFor="s" className="text-sm text-[#C7CEDE]">Service</label>
              <select id="s" value={service} onChange={(e) => setService(e.target.value)} className={field}>
                {services.map((s) => <option key={s.title}>{s.title}</option>)}
                <option>Something else</option>
              </select>
            </div>
            <div>
              <label htmlFor="m" className="text-sm text-[#C7CEDE]">What do you need?</label>
              <textarea id="m" required value={msg} onChange={(e) => setMsg(e.target.value)} className={`${field} min-h-[100px] resize-y`} />
            </div>
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-wa px-6 py-3.5 font-bold text-white transition hover:-translate-y-1">
              <WhatsAppIcon className="h-5 w-5" /> Send on WhatsApp
            </button>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
