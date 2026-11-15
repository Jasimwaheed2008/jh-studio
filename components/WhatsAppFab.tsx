import { WhatsAppIcon } from "./Icons";
import { wa } from "@/lib/config";

export default function WhatsAppFab() {
  return (
    <a href={wa("Hi JH Studio, I want to ask about your services.")} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
      className="anim-pulse fixed right-[18px] z-50 grid h-[62px] w-[62px] place-items-center rounded-full bg-wa text-white shadow-lg"
      style={{ bottom: "calc(18px + env(safe-area-inset-bottom, 0px))" }}>
      <WhatsAppIcon className="h-[34px] w-[34px]" />
    </a>
  );
}
