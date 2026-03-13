import { siteConfig } from "../../data/site";
import { formatCurrency } from "../../utils/formatters";

export default function InvoicePreview({ customer, items, totals }) {
  return (
    <div className="premium-card space-y-5 p-6">
      <div className="pattern-divider pb-4">
        <p className="section-kicker text-sm font-extrabold uppercase">Invoice Preview</p>
        <h3 className="text-2xl font-bold">معاينة الفاتورة</h3>
      </div>

      <div className="grid gap-4 text-sm md:grid-cols-2">
        <div>
          <p className="mb-1 font-bold">اسم المتجر</p>
          <p className="text-muted">{siteConfig.brandName}</p>
        </div>
        <div>
          <p className="mb-1 font-bold">العميل</p>
          <p className="text-muted">{customer.name || "لم يتم إدخال الاسم بعد"}</p>
        </div>
        <div>
          <p className="mb-1 font-bold">الهاتف</p>
          <p className="text-muted">{customer.phone || "-"}</p>
        </div>
        <div>
          <p className="mb-1 font-bold">المدينة</p>
          <p className="text-muted">{customer.city || "-"}</p>
        </div>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="flex items-start justify-between gap-4 rounded-[20px] border border-[var(--line)] bg-white/70 p-4">
            <div>
              <p className="font-bold">{item.name}</p>
              <p className="text-sm text-muted">الكمية: {item.quantity}</p>
            </div>
            <p className="font-bold">{formatCurrency(item.price * item.quantity)}</p>
          </div>
        ))}
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-muted">الإجمالي الفرعي</span>
          <strong>{formatCurrency(totals.subtotal)}</strong>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted">الإجمالي النهائي</span>
          <strong>{formatCurrency(totals.estimatedTotal)}</strong>
        </div>
      </div>
    </div>
  );
}
