import { HiArrowLeft, HiOutlineChatBubbleOvalLeftEllipsis, HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useCart } from "../../context/CartContext";
import { formatCurrency } from "../../utils/formatters";
import { generateInquiryLink } from "../../utils/whatsapp";
import useTiltEffect from "../../hooks/useTiltEffect";

export default function ProductCard({ product }) {
  const cardRef = useRef(null);
  const { addToCart } = useCart();
  useTiltEffect(cardRef, 7);

  return (
    <article ref={cardRef} className="premium-card group flex h-full flex-col overflow-hidden p-3" data-reveal-item>
      <div className="relative overflow-hidden rounded-[24px]">
        <img src={product.images[0]} alt={product.name} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {product.isNew && <span className="badge-chip">جديد</span>}
          {product.isBestseller && <span className="badge-chip">الأكثر طلبًا</span>}
          {product.featured && <span className="badge-chip">مميز</span>}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="space-y-2">
          <p className="text-sm font-bold text-[var(--primary-dark)]">{product.category}</p>
          <h3 className="line-clamp-2 text-2xl font-bold">{product.name}</h3>
          <p className="line-clamp-3 text-sm leading-7 text-muted">{product.description}</p>
        </div>

        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-2xl font-extrabold">{formatCurrency(product.price)}</p>
            {product.oldPrice && <p className="text-sm text-muted line-through">{formatCurrency(product.oldPrice)}</p>}
          </div>
          <p className={`text-sm font-bold ${product.availability === "متوفر" ? "text-[#1b6d57]" : "text-[var(--danger)]"}`}>
            {product.availability}
          </p>
        </div>

        <div className="mt-auto grid gap-3">
          <button type="button" className="btn-primary w-full" onClick={() => addToCart(product, 1)}>
            <HiOutlineShoppingBag />
            أضف إلى السلة
          </button>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link to={`/product/${product.slug}`} className="btn-ghost">
              <HiArrowLeft />
              التفاصيل
            </Link>
            <a href={generateInquiryLink(product.name)} target="_blank" rel="noreferrer" className="btn-ghost">
              <HiOutlineChatBubbleOvalLeftEllipsis />
              واتساب
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
