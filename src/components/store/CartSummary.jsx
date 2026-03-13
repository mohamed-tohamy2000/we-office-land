import { HiArrowLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/formatters";

export default function CartSummary({ subtotal, estimatedTotal, ctaLabel = "إتمام الطلب", ctaTo = "/checkout" }) {
  return (
    <aside className="premium-card h-fit space-y-5 p-6 lg:sticky lg:top-28">
      <h3 className="text-2xl font-bold">ملخص السلة</h3>
      <div className="space-y-4 text-muted">
        <div className="flex items-center justify-between">
          <span>الإجمالي الفرعي</span>
          <strong className="text-[var(--foreground)]">{formatCurrency(subtotal)}</strong>
        </div>
        <div className="flex items-center justify-between">
          <span>الإجمالي التقديري</span>
          <strong className="text-[var(--foreground)]">{formatCurrency(estimatedTotal)}</strong>
        </div>
      </div>
      <Link to={ctaTo} className="btn-primary w-full">
        <HiArrowLeft />
        {ctaLabel}
      </Link>
      <Link to="/categories" className="btn-ghost w-full">
        متابعة التسوق
      </Link>
    </aside>
  );
}
