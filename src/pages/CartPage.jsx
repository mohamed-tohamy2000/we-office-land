import { HiArrowLeft, HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/common/Breadcrumbs";
import CartItem from "../components/store/CartItem";
import CartSummary from "../components/store/CartSummary";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { items, subtotal, estimatedTotal, updateQuantity, removeFromCart } = useCart();

  return (
    <section className="section-space">
      <div className="container-shell">
        <Breadcrumbs items={[{ label: "الرئيسية", to: "/" }, { label: "السلة" }]} />

        {items.length === 0 ? (
          <div className="premium-card px-6 py-10 text-center">
            <HiOutlineShoppingBag className="mx-auto mb-4 text-5xl text-[var(--primary)]" />
            <h1 className="mb-3 text-3xl font-extrabold">السلة فارغة حاليًا</h1>
            <p className="mb-6 text-muted">ابدأ بإضافة المنتجات المناسبة لمكتبك أو مساحة الاستقبال ثم أرسل الطلب عبر واتساب.</p>
            <Link to="/categories" className="btn-primary">
              <HiArrowLeft />
              تصفح المنتجات
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="space-y-5">
              <h1 className="text-4xl font-extrabold">السلة</h1>
              {items.map((item) => (
                <CartItem key={item.id} item={item} onUpdate={updateQuantity} onRemove={removeFromCart} />
              ))}
            </div>
            <CartSummary subtotal={subtotal} estimatedTotal={estimatedTotal} />
          </div>
        )}
      </div>
    </section>
  );
}
