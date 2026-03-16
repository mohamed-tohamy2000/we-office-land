export default function CheckoutForm({ values, onChange, showErrors = false }) {
  const inputClass = (fieldName) =>
    `input-shell ${showErrors && !values[fieldName].trim() ? "border-[var(--danger)] bg-[rgba(161,61,45,0.04)]" : ""}`;

  return (
    <div className="premium-card space-y-5 p-6">
      <div>
        <p className="section-kicker mb-2 text-sm font-extrabold uppercase">Customer Details</p>
        <h3 className="text-2xl font-bold">بيانات العميل</h3>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="font-bold">الاسم</span>
          <input className={inputClass("name")} name="name" value={values.name} onChange={onChange} placeholder="الاسم الكامل" />
        </label>
        <label className="space-y-2">
          <span className="font-bold">رقم الهاتف</span>
          <input className={inputClass("phone")} name="phone" value={values.phone} onChange={onChange} placeholder="01xxxxxxxxx" />
        </label>
        <label className="space-y-2">
          <span className="font-bold">المدينة</span>
          <input className={inputClass("city")} name="city" value={values.city} onChange={onChange} placeholder="القاهرة" />
        </label>
        <label className="space-y-2">
          <span className="font-bold">العنوان</span>
          <input className={inputClass("address")} name="address" value={values.address} onChange={onChange} placeholder="الحي، الشارع، رقم المبنى" />
        </label>
      </div>
      <label className="space-y-2">
        <span className="font-bold">ملاحظات</span>
        <textarea className="textarea-shell" name="notes" value={values.notes} onChange={onChange} placeholder="أي تفاصيل إضافية بخصوص الطلب أو التوصيل" />
      </label>
    </div>
  );
}
