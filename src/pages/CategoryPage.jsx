import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/common/Breadcrumbs";
import SectionHeading from "../components/common/SectionHeading";
import ProductGrid from "../components/store/ProductGrid";
import categories from "../data/categories";
import products from "../data/products";

const SORT_OPTIONS = {
  featured: "المميزة",
  latest: "الأحدث",
  low: "السعر من الأقل للأعلى",
  high: "السعر من الأعلى للأقل",
};

export default function CategoryPage() {
  const { slug } = useParams();
  const category = categories.find((item) => item.slug === slug);

  const categoryProducts = useMemo(() => products.filter((product) => product.categorySlug === slug), [slug]);
  const [sortBy, setSortBy] = useState("featured");
  const [search, setSearch] = useState("");
  const [material, setMaterial] = useState("");
  const [color, setColor] = useState("");
  const [availability, setAvailability] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  const materialOptions = useMemo(
    () => [...new Set(categoryProducts.flatMap((product) => product.materials))],
    [categoryProducts]
  );
  const colorOptions = useMemo(() => [...new Set(categoryProducts.map((product) => product.color))], [categoryProducts]);

  const filteredProducts = useMemo(() => {
    const result = categoryProducts
      .filter((product) => product.name.includes(search) || product.description.includes(search))
      .filter((product) => (material ? product.materials.includes(material) : true))
      .filter((product) => (color ? product.color === color : true))
      .filter((product) => (availability ? product.availability === availability : true));

    switch (sortBy) {
      case "low":
        return [...result].sort((a, b) => a.price - b.price);
      case "high":
        return [...result].sort((a, b) => b.price - a.price);
      case "latest":
        return [...result].sort((a, b) => b.id - a.id);
      default:
        return [...result].sort((a, b) => Number(b.featured) - Number(a.featured));
    }
  }, [availability, categoryProducts, color, material, search, sortBy]);

  if (!category) {
    return (
      <section className="section-space">
        <div className="container-shell">
          <div className="premium-card p-8 text-center">
            <h1 className="mb-3 text-3xl font-bold">القسم غير موجود</h1>
            <p className="text-muted">لم أجد هذا القسم ضمن البيانات الحالية.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-space">
      <div className="container-shell">
        <Breadcrumbs items={[{ label: "الرئيسية", to: "/" }, { label: "الأقسام", to: "/categories" }, { label: category.name }]} />

        <div className="premium-card mb-8 grid gap-8 overflow-hidden p-4 md:grid-cols-[0.9fr_1.1fr] md:p-6">
          <img src={category.image} alt={category.name} className="h-80 w-full rounded-[24px] object-cover" />
          <div className="flex flex-col justify-center space-y-4">
            <span className="badge-chip">{category.productCount} منتج</span>
            <h1 className="text-4xl font-extrabold">{category.name}</h1>
            <p className="text-lg leading-8 text-muted">{category.description}</p>
          </div>
        </div>

        <div className="mb-8 grid gap-4 xl:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <input className="input-shell" placeholder="ابحث داخل القسم" value={search} onChange={(event) => setSearch(event.target.value)} />
          <select className="select-shell" value={sortBy} onChange={(event) => setSortBy(event.target.value)}>
            {Object.entries(SORT_OPTIONS).map(([value, label]) => (
              <option key={value} value={value}>
                ترتيب: {label}
              </option>
            ))}
          </select>
          <select className="select-shell" value={material} onChange={(event) => setMaterial(event.target.value)}>
            <option value="">الخامة</option>
            {materialOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <select className="select-shell" value={color} onChange={(event) => setColor(event.target.value)}>
            <option value="">اللون</option>
            {colorOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <select className="select-shell" value={availability} onChange={(event) => setAvailability(event.target.value)}>
            <option value="">التوفر</option>
            <option value="متوفر">متوفر</option>
            <option value="حسب الطلب">حسب الطلب</option>
          </select>
        </div>

        <SectionHeading
          eyebrow="Category Products"
          title={`منتجات ${category.name}`}
          description="اعرض المنتجات، رتبها، وابدأ الطلب مباشرة من السلة أو عبر واتساب."
          align="right"
        />

        {filteredProducts.length === 0 ? (
          <div className="premium-card p-8 text-center">
            <p className="text-lg text-muted">لا توجد نتائج تطابق هذه الفلاتر حاليًا.</p>
          </div>
        ) : (
          <>
            <ProductGrid products={filteredProducts.slice(0, visibleCount)} />
            {visibleCount < filteredProducts.length && (
              <div className="mt-8 text-center">
                <button type="button" className="btn-primary" onClick={() => setVisibleCount((count) => count + 3)}>
                  تحميل المزيد
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
