import { HiOutlineChatBubbleOvalLeftEllipsis, HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";
import CTASection from "../components/common/CTASection";
import SectionHeading from "../components/common/SectionHeading";
import { siteConfig } from "../data/site";
import { createWhatsAppLink } from "../utils/whatsapp";

export default function ContactPage() {
  return (
    <>
      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="premium-card space-y-5 p-8">
            <SectionHeading
              eyebrow="Contact"
              title="ابدأ المحادثة المناسبة لمشروعك المكتبي."
              description="يمكنك إرسال استفسار سريع أو مشاركة احتياجك لتجهيز مكتب مدير، استقبال، أو مساحة عمل كاملة."
              align="right"
            />
            <div className="space-y-4 text-muted">
              <p className="inline-flex items-center gap-3">
                <HiOutlinePhone className="text-xl text-[var(--primary)]" />
                {siteConfig.phoneDisplay}
              </p>
              <p className="inline-flex items-center gap-3">
                <HiOutlineEnvelope className="text-xl text-[var(--primary)]" />
                {siteConfig.email}
              </p>
              <a href={siteConfig.mapUrl} target="_blank" rel="noreferrer" className="hover:text-[var(--foreground)] transition">
                {siteConfig.address}
              </a>
            </div>
            <a href={createWhatsAppLink("مرحبًا، أحتاج عرض أسعار لأثاث مكتبي.")} target="_blank" rel="noreferrer" className="btn-primary w-full">
              <HiOutlineChatBubbleOvalLeftEllipsis />
              تواصل واتساب الآن
            </a>
          </div>

          <div className="premium-card p-8">
            <h3 className="mb-4 text-3xl font-bold">كيف نساعدك؟</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "تجهيز مكتب مدير كامل",
                "تنسيق مكاتب موظفين ومحطات عمل",
                "حلول استقبال وانتظار",
                "طاولات اجتماعات وغرف مجالس",
              ].map((item) => (
                <div key={item} className="rounded-[22px] bg-white/75 p-5">
                  <p className="font-bold">{item}</p>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    استشارة سريعة لاختيار التشكيل المناسب لمساحتك ونمط العمل المطلوب.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
