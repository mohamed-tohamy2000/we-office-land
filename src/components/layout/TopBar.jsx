import { HiMiniMapPin, HiOutlinePhone } from "react-icons/hi2";
import { siteConfig } from "../../data/site";

export default function TopBar() {
  return (
    <div className="border-b border-white/20 bg-[#17342e] text-sm text-white">
      <div className="container-shell flex flex-col gap-2 py-3 md:flex-row md:items-center md:justify-between">
        {/* تعريف سريع بطبيعة المتجر وتخصصه */}
        <p className="font-semibold text-white/90">
          أثاث مكتبي فاخر للمكاتب التنفيذية، الاستقبال، وغرف الاجتماعات.
        </p>

        <div className="flex flex-wrap items-center gap-4 text-white/80">
          
          {/* رقم الهاتف قابل للنقر للاتصال المباشر */}
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center gap-2 hover:text-white transition"
          >
            <HiOutlinePhone />
            <span dir="ltr">{siteConfig.phoneDisplay}</span>
          </a>

          {/* العنوان يفتح موقع المعرض الفعلي على الخريطة */}
          <a
            href={siteConfig.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-white transition"
          >
            <HiMiniMapPin />
            {siteConfig.address}
          </a>

        </div>
      </div>
    </div>
  );
}
