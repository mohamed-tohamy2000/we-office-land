import { useMemo, useRef } from "react";
import { HiArrowLeft, HiCheckBadge, HiMiniStar, HiSparkles } from "react-icons/hi2";
import { Link } from "react-router-dom";
import CTASection from "../components/common/CTASection";
import SectionHeading from "../components/common/SectionHeading";
import HeroSection from "../components/home/HeroSection";
import CategoryCard from "../components/store/CategoryCard";
import ProductGrid from "../components/store/ProductGrid";
import categories from "../data/categories";
import products from "../data/products";
import useGsapReveal from "../hooks/useGsapReveal";

const trustPoints = [
  "تشكيلات متخصصة للمكاتب التنفيذية والتشغيلية",
  "تصميمات تجمع الراحة بالحضور البصري الراقي",
  "إمكانية الطلب مباشرة عبر واتساب بسرعة ووضوح",
];

const testimonials = [
  {
    name: "شركة Axis Consulting",
    quote: "التفاصيل في مكاتب المديرين والاستقبال أعطت انطباعًا أقوى كثيرًا مما كنا نبحث عنه.",
  },
  {
    name: "مركز Business Hub",
    quote: "التنفيذ متوازن بين الفخامة والعملية، خصوصًا في محطات العمل وغرفة الاجتماعات.",
  },
  {
    name: "عيادات Prime Care",
    quote: "قسم الانتظار والاستقبال أصبح أكثر أناقة وراحة للزوار بدون مبالغة في التصميم.",
  },
];

export default function HomePage() {
  const categoriesRef = useRef(null);
  const productsRef = useRef(null);
  const sectionsRef = useRef(null);

  useGsapReveal(categoriesRef, { target: "[data-reveal-item]" });
  useGsapReveal(productsRef, { target: "[data-reveal-item]", y: 56 });
  useGsapReveal(sectionsRef, { target: "[data-block]", y: 42 });

  const featuredProducts = useMemo(() => products.filter((product) => product.featured).slice(0, 6), []);

  return (
    <>
      <HeroSection />

      <section className="section-space">
        <div className="container-shell grid gap-4 lg:grid-cols-3">
          {["Best for managers", "Best for startups", "Reception lounge"].map((collection) => (
            <div key={collection} className="premium-card p-6">
              <p className="mb-2 text-sm font-extrabold uppercase text-[var(--primary-dark)]">{collection}</p>
              <h3 className="mb-2 text-2xl font-bold">
                {collection === "Best for managers" && "مختارات المديرين والمكاتب التنفيذية"}
                {collection === "Best for startups" && "حلول ذكية للمكاتب التشغيلية والشركات الناشئة"}
                {collection === "Reception lounge" && "تجهيزات استقبال ترفع جودة الانطباع الأول"}
              </h3>
              <p className="text-muted">
                مجموعات مُنسّقة لتسهيل اختيار الأثاث المناسب حسب طبيعة العمل والمساحة المستهدفة.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section ref={categoriesRef} className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Featured Categories"
            title="أقسام مصممة خصيصًا للمكاتب الحديثة، الإدارة العليا، والاستقبال."
            description="كل فئة مبنية لتخدم وظيفة واضحة داخل بيئة العمل مع إحساس بصري أكثر رقيًا واتزانًا."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {categories.slice(0, 4).map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/categories" className="btn-ghost">
              <HiArrowLeft />
              عرض جميع الأقسام
            </Link>
          </div>
        </div>
      </section>

      <section ref={productsRef} className="section-space bg-white/40">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Featured Products"
            title="منتجات مختارة تمنح بيئة العمل حضورًا احترافيًا أكثر فخامة."
            description="مزيج من الكراسي، المكاتب، الاستقبال، والاجتماعات بعرض تفصيلي وسريع الشراء."
          />
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      <section ref={sectionsRef} className="section-space">
        <div className="container-shell grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div data-block className="premium-card p-8">
            <SectionHeading
              eyebrow="Why Choose Us"
              title="لماذا يختارنا أصحاب الأعمال والإدارات التنفيذية؟"
              description="لأننا لا نعرض أثاثًا عامًا، بل حلولًا تخدم صورة المكان وراحة الاستخدام اليومي."
              align="right"
            />
            <div className="space-y-4">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-[20px] bg-white/70 p-4">
                  <HiCheckBadge className="mt-1 text-2xl text-[var(--primary)]" />
                  <p className="text-muted">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div data-block className="grid gap-6">
            <div className="premium-card p-8">
              <p className="mb-3 inline-flex items-center gap-2 text-sm font-extrabold uppercase text-[var(--primary-dark)]">
                <HiSparkles />
                Before / After
              </p>
              <h3 className="mb-3 text-3xl font-bold">من مساحة تقليدية إلى بيئة عمل أكثر هيبة وتنظيمًا.</h3>
              <p className="text-muted">
                نركز على تكامل المشهد المكتبي بالكامل: مكتب المدير، استقبال العملاء، مناطق الانتظار، ومحطات العمل الجماعية.
              </p>
            </div>
            <div className="premium-card p-8">
              <p className="mb-3 inline-flex items-center gap-2 text-sm font-extrabold uppercase text-[var(--primary-dark)]">
                <HiMiniStar />
                Trust & Testimonials
              </p>
              <div className="space-y-4">
                {testimonials.map((item) => (
                  <div key={item.name} className="rounded-[20px] border border-[var(--line)] bg-white/75 p-4">
                    <p className="mb-2 font-bold">{item.name}</p>
                    <p className="text-sm leading-7 text-muted">{item.quote}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
