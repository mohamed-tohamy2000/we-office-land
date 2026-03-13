import { useLayoutEffect, useRef } from "react";
import { HiArrowLeft, HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import heroImage from "../../assets/images/hero.jpg";
import { createWhatsAppLink } from "../../utils/whatsapp";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;

    const resetTilt = () => {
      if (image) {
        gsap.to(image, { rotateX: 0, rotateY: 0, duration: 0.6, ease: "power3.out" });
      }
    };

    const handlePointer = (event) => {
      if (!image) {
        return;
      }

      const bounds = image.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;

      gsap.to(image, {
        rotateY: x * -10,
        rotateX: y * 10,
        transformPerspective: 1000,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();
      timeline
        .from("[data-hero-badge]", { y: 24, opacity: 0, duration: 0.5, ease: "power3.out" })
        .from("[data-hero-title]", { y: 44, opacity: 0, duration: 0.7, ease: "power3.out" }, "-=0.2")
        .from("[data-hero-copy]", { y: 30, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
        .from("[data-hero-actions] > *", { y: 24, opacity: 0, stagger: 0.12, duration: 0.45, ease: "power3.out" }, "-=0.25")
        .from("[data-hero-card]", { y: 46, opacity: 0, scale: 0.96, duration: 0.85, ease: "power3.out" }, "-=0.55");
    }, sectionRef);

    section?.addEventListener("mousemove", handlePointer);
    section?.addEventListener("mouseleave", resetTilt);

    return () => {
      ctx.revert();
      section?.removeEventListener("mousemove", handlePointer);
      section?.removeEventListener("mouseleave", resetTilt);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden section-space ambient-grid">
      <div className="hero-orb hero-orb-primary" />
      <div className="hero-orb hero-orb-secondary" />
      <div className="container-shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10 space-y-6">
          <span data-hero-badge className="badge-chip">
            تجربة شراء أثاث مكتبي أكثر فخامة ووضوحًا
          </span>
          <h1 data-hero-title className="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
            حلول أثاث مكتبي راقية تصنع حضورًا أقوى للمكاتب التنفيذية ومساحات العمل الحديثة.
          </h1>
          <p data-hero-copy className="max-w-2xl text-lg leading-8 text-muted">
            في We Office Land نقدم كراسي المديرين والموظفين، مكاتب الاستقبال، محطات العمل، جلسات الانتظار، وطاولات الاجتماعات
            بتفاصيل تعكس الثقة والراحة وجودة التنفيذ.
          </p>
          <div data-hero-actions className="flex flex-col gap-3 sm:flex-row">
            <Link to="/categories" className="btn-primary">
              <HiArrowLeft />
              تصفح المنتجات
            </Link>
            <a
              href={createWhatsAppLink("مرحبًا، أرغب في التواصل بخصوص أثاث مكتبي من We Office Land.")}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              <HiOutlineChatBubbleOvalLeftEllipsis />
              تواصل واتساب
            </a>
          </div>
          <div className="grid gap-4 pt-4 sm:grid-cols-3">
            <div className="premium-card px-4 py-5">
              <p className="text-3xl font-extrabold">8+</p>
              <p className="text-sm text-muted">فئات مكتبية متخصصة</p>
            </div>
            <div className="premium-card px-4 py-5">
              <p className="text-3xl font-extrabold">16+</p>
              <p className="text-sm text-muted">منتجًا جاهزًا للعرض والطلب</p>
            </div>
            <div className="premium-card px-4 py-5">
              <p className="text-3xl font-extrabold">100%</p>
              <p className="text-sm text-muted">تركيز على الأثاث المكتبي فقط</p>
            </div>
          </div>
        </div>

        <div ref={imageRef} data-hero-card className="hero-media relative">
          <div className="premium-card overflow-hidden p-3">
            <div className="relative overflow-hidden rounded-[24px]">
              <img src={heroImage} alt="We Office Land premium office furniture" className="h-[560px] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
              <div className="absolute bottom-0 right-0 left-0 p-6 text-white">
                <p className="mb-2 text-sm font-semibold text-white/80">Executive Workspace</p>
                <h2 className="text-2xl font-bold">تفاصيل فاخرة للمكاتب التنفيذية والاستقبال والاجتماعات</h2>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-3 max-w-xs rounded-[24px] bg-white/82 p-5 shadow-2xl backdrop-blur-xl">
            <p className="text-sm font-extrabold text-[var(--primary-dark)]">مجموعة هذا الموسم</p>
            <p className="mt-2 text-sm leading-7 text-muted">
              تكوينات مكاتب مديرين واستقبال مصممة لإبراز فخامة العلامة داخل بيئة العمل.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
