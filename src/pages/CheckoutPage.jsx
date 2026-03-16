import { useMemo, useState } from "react";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/common/Breadcrumbs";
import CheckoutForm from "../components/store/CheckoutForm";
import InvoicePreview from "../components/store/InvoicePreview";
import { useCart } from "../context/CartContext";
import { createWhatsAppLink, generateOrderMessage } from "../utils/whatsapp";

const initialForm = {
  name: "",
  phone: "",
  city: "",
  address: "",
  notes: "",
};

const requiredFields = ["name", "phone", "city", "address"];

export default function CheckoutPage() {
  const { items, subtotal, estimatedTotal } = useCart();
  const [formValues, setFormValues] = useState(initialForm);
  const [showErrors, setShowErrors] = useState(false);

  const totals = useMemo(() => ({ subtotal, estimatedTotal }), [estimatedTotal, subtotal]);
  const orderMessage = useMemo(() => generateOrderMessage(formValues, items, totals), [formValues, items, totals]);
  const whatsappLink = createWhatsAppLink(orderMessage);
  const missingFields = requiredFields.filter((field) => !formValues[field].trim());
  const isFormValid = missingFields.length === 0;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((current) => ({ ...current, [name]: value }));
  };

  const handleWhatsAppClick = (event) => {
    if (isFormValid) {
      return;
    }

    event.preventDefault();
    setShowErrors(true);
  };

  if (items.length === 0) {
    return (
      <section className="section-space">
        <div className="container-shell">
          <div className="premium-card p-8 text-center">
            <h1 className="mb-3 text-3xl font-extrabold">لا يمكن إتمام الطلب بدون منتجات</h1>
            <Link to="/categories" className="btn-primary">
              العودة للتسوق
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-space">
      <div className="container-shell">
        <Breadcrumbs items={[{ label: "الرئيسية", to: "/" }, { label: "السلة", to: "/cart" }, { label: "إتمام الطلب" }]} />
        <div className="mb-8">
          <h1 className="mb-3 text-4xl font-extrabold">إتمام الطلب / الفاتورة</h1>
          <p className="max-w-3xl text-lg text-muted">
            لا يوجد دفع إلكتروني حاليًا. بمجرد مراجعة بيانات العميل والطلب، سيتم فتح رسالة واتساب جاهزة لإرسالها إلى المتجر.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          <CheckoutForm values={formValues} onChange={handleChange} showErrors={showErrors} />
          <div className="space-y-6">
            <InvoicePreview customer={formValues} items={items} totals={totals} />
            {!isFormValid && showErrors && (
              <p className="rounded-[18px] border border-[var(--danger)] bg-[rgba(161,61,45,0.08)] px-4 py-3 text-sm font-semibold text-[var(--danger)]">
                من فضلك املأ الاسم ورقم الهاتف والمدينة والعنوان أولًا قبل إرسال الطلب عبر واتساب.
              </p>
            )}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              onClick={handleWhatsAppClick}
              aria-disabled={!isFormValid}
              className={`btn-primary w-full ${!isFormValid ? "cursor-not-allowed opacity-70" : ""}`}
            >
              <HiOutlineChatBubbleOvalLeftEllipsis />
              إرسال الطلب عبر واتساب
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
