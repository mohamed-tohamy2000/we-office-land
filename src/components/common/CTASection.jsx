import { HiArrowLeft, HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { createWhatsAppLink } from "../../utils/whatsapp";

export default function CTASection() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="premium-card relative overflow-hidden px-6 py-8 md:px-10 md:py-12">
          <div className="hero-orb hero-orb-primary" />
          <div className="hero-orb hero-orb-secondary" />
          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="section-kicker text-sm font-extrabold uppercase">Ready To Furnish</p>
              <h3 className="text-3xl font-extrabold md:text-4xl">
                جهز مكتبك التنفيذي أو مساحة العمل بالكامل بخطوة واحدة أكثر أناقة.
              </h3>
              <p className="text-muted">
                فريقنا يساعدك في اختيار التكوين المناسب للمكاتب، الكراسي، الاستقبال، والاجتماعات مع عرض سعر واضح وسريع.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/categories" className="btn-primary">
                <HiArrowLeft />
                تصفح المنتجات
              </Link>
              <a href={createWhatsAppLink("مرحبًا، أرغب في تنسيق عرض أثاث مكتبي كامل.")} target="_blank" rel="noreferrer" className="btn-ghost">
                <HiOutlineChatBubbleOvalLeftEllipsis />
                تواصل واتساب
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
