import { useMemo, useState } from "react";
import { HiArrowLeft, HiOutlineChatBubbleOvalLeftEllipsis, HiOutlineShoppingBag } from "react-icons/hi2";
import { Link, useParams } from "react-router-dom";
import Breadcrumbs from "../components/common/Breadcrumbs";
import ProductGallery from "../components/store/ProductGallery";
import ProductGrid from "../components/store/ProductGrid";
import QuantitySelector from "../components/store/QuantitySelector";
import { useCart } from "../context/CartContext";
import categories from "../data/categories";
import products from "../data/products";
import { formatCurrency } from "../utils/formatters";
import { generateInquiryLink } from "../utils/whatsapp";

export default function ProductPage() {
  const { slug } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const product = products.find((item) => item.slug === slug);

  const category = categories.find((item) => item.slug === product?.categorySlug);
  const relatedProducts = useMemo(
    () => products.filter((item) => item.categorySlug === product?.categorySlug && item.slug !== product?.slug).slice(0, 3),
    [product]
  );

  if (!product) {
    return (
      <section className="section-space">
        <div className="container-shell">
          <div className="premium-card p-8 text-center">
            <h1 className="mb-3 text-3xl font-bold">المنتج غير موجود</h1>
            <Link to="/categories" className="btn-primary">
              <HiArrowLeft />
              العودة إلى الأقسام
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="section-space">
        <div className="container-shell">
          <Breadcrumbs
            items={[
              { label: "الرئيسية", to: "/" },
              { label: "الأقسام", to: "/categories" },
              { label: category?.name || product.category, to: `/category/${product.categorySlug}` },
              { label: product.name },
            ]}
          />

          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <ProductGallery images={product.images} alt={product.name} />

            <div className="premium-card space-y-6 p-6 md:p-8">
              <div className="space-y-3">
                <span className="badge-chip">{product.category}</span>
                <h1 className="text-4xl font-extrabold">{product.name}</h1>
                <p className="text-lg leading-8 text-muted">{product.description}</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[22px] bg-white/75 p-4">
                  <p className="text-sm text-muted">السعر</p>
                  <p className="text-3xl font-extrabold">{formatCurrency(product.price)}</p>
                  {product.oldPrice && <p className="text-sm text-muted line-through">{formatCurrency(product.oldPrice)}</p>}
                </div>
                <div className="rounded-[22px] bg-white/75 p-4">
                  <p className="text-sm text-muted">الحالة</p>
                  <p className="text-xl font-bold">{product.availability}</p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[22px] border border-[var(--line)] bg-white/60 p-4">
                  <p className="mb-3 font-bold">المميزات</p>
                  <ul className="space-y-2 text-sm text-muted">
                    {product.features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[22px] border border-[var(--line)] bg-white/60 p-4">
                  <p className="mb-3 font-bold">المواصفات</p>
                  <ul className="space-y-2 text-sm text-muted">
                    {product.specifications.map((specification) => (
                      <li key={specification}>• {specification}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[22px] bg-white/75 p-4">
                  <p className="mb-2 font-bold">الأبعاد</p>
                  <p className="text-sm text-muted">{product.dimensions}</p>
                </div>
                <div className="rounded-[22px] bg-white/75 p-4">
                  <p className="mb-2 font-bold">الخامات</p>
                  <p className="text-sm text-muted">{product.materials.join("، ")}</p>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <QuantitySelector quantity={quantity} onChange={setQuantity} />
                <div className="grid flex-1 gap-3 sm:grid-cols-2">
                  <button type="button" className="btn-primary w-full" onClick={() => addToCart(product, quantity)}>
                    <HiOutlineShoppingBag />
                    أضف إلى السلة
                  </button>
                  <a href={generateInquiryLink(product.name)} target="_blank" rel="noreferrer" className="btn-ghost w-full">
                    <HiOutlineChatBubbleOvalLeftEllipsis />
                    استفسار واتساب
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-white/40">
        <div className="container-shell">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <p className="section-kicker mb-2 text-sm font-extrabold uppercase">Related Products</p>
              <h2 className="text-3xl font-extrabold">منتجات مرتبطة من نفس الفئة</h2>
            </div>
            <Link to={`/category/${product.categorySlug}`} className="btn-ghost">
              <HiArrowLeft />
              عرض الفئة
            </Link>
          </div>
          <ProductGrid products={relatedProducts} />
        </div>
      </section>
    </>
  );
}
