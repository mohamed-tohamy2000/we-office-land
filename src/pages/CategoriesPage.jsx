import { useRef } from "react";
import SectionHeading from "../components/common/SectionHeading";
import CategoryCard from "../components/store/CategoryCard";
import categories from "../data/categories";
import useGsapReveal from "../hooks/useGsapReveal";

export default function CategoriesPage() {
  const gridRef = useRef(null);
  useGsapReveal(gridRef, { target: "[data-reveal-item]", y: 56 });

  return (
    <section className="section-space">
      <div className="container-shell">
        <SectionHeading
          eyebrow="All Categories"
          title="كل أقسام We Office Land في عرض واحد واضح وسهل التصفح."
          description="اختر الفئة الأقرب إلى طبيعة المساحة: مكاتب الإدارة، التشغيل، الاستقبال، أو حلول الجلوس والاجتماعات."
        />
        <div ref={gridRef} className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
