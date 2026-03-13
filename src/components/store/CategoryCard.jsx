import { HiArrowLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <article className="premium-card group overflow-hidden p-3 transition-transform duration-300 hover:-translate-y-2" data-reveal-item>
      <div className="relative overflow-hidden rounded-[24px]">
        <img src={category.image} alt={category.name} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
        <div className="absolute bottom-4 right-4">
          <span className="badge-chip">{category.productCount} منتج</span>
        </div>
      </div>
      <div className="space-y-4 p-4">
        <h3 className="text-2xl font-bold">{category.name}</h3>
        <p className="line-clamp-2 text-muted">{category.description}</p>
        <Link to={`/category/${category.slug}`} className="inline-flex items-center gap-2 font-bold text-[var(--primary-dark)]">
          عرض المنتجات
          <HiArrowLeft />
        </Link>
      </div>
    </article>
  );
}
