import { FaWhatsapp } from "react-icons/fa";
import { createWhatsAppLink } from "../../utils/whatsapp";

export default function FloatingWhatsAppButton() {
  return (
    <a
      href={createWhatsAppLink("مرحبًا، أريد الاستفسار عن منتجات We Office Land.")}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 left-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#25d366] px-5 py-4 text-white shadow-[0_18px_35px_rgba(37,211,102,0.35)] transition-transform duration-200 hover:-translate-y-1"
    >
      <FaWhatsapp className="text-2xl" />
      <span className="hidden font-bold md:inline">واتساب</span>
    </a>
  );
}
