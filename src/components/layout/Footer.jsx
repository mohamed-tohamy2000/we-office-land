import { HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { siteConfig } from "../../data/site";

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#161511] text-white">
      <div className="container-shell section-space grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="section-kicker text-sm font-bold text-[#d4bd93]">WE OFFICE LAND</p>
          <h3 className="text-3xl font-extrabold">أثاث مكتبي مصمم ليُظهر قوة المساحة وأناقتها.</h3>
          <p className="max-w-xl text-white/70">
            نطوّر بيئات العمل من مكاتب المديرين إلى مناطق الاستقبال والاجتماعات بتفاصيل تعكس الاحتراف والراحة.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-bold text-[#f3e4c7]">روابط سريعة</h4>
          <div className="flex flex-col gap-3 text-white/70">
            <NavLink to="/">الرئيسية</NavLink>
            <NavLink to="/about">من نحن</NavLink>
            <NavLink to="/categories">الأقسام</NavLink>
            <NavLink to="/cart">السلة</NavLink>
            <NavLink to="/contact">تواصل معنا</NavLink>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-bold text-[#f3e4c7]">بيانات التواصل</h4>
          <div className="space-y-3 text-white/70">
            <p className="inline-flex items-center gap-2">
              <HiOutlinePhone />
              {siteConfig.phoneDisplay}
            </p>
            <p className="inline-flex items-center gap-2">
              <HiOutlineEnvelope />
              {siteConfig.email}
            </p>
            <p>{siteConfig.address}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/50">
        © 2026 {siteConfig.brandName}. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
