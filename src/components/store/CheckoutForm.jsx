export default function CheckoutForm({ values, onChange }) {
  return (
    <div className="premium-card space-y-5 p-6">
      <div>
        <p className="section-kicker mb-2 text-sm font-extrabold uppercase">Customer Details</p>
        <h3 className="text-2xl font-bold">بيانات العميل</h3>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="font-bold">الاسم</span>
          <input className="input-shell" name="name" value={values.name} onChange={onChange} placeholder="الاسم الكامل" />
        </label>
        <label className="space-y-2">
          <span className="font-bold">رقم الهاتف</span>
          <input className="input-shell" name="phone" value={values.phone} onChange={onChange} placeholder="01xxxxxxxxx" />
        </label>
        <label className="space-y-2">
          <span className="font-bold">المدينة</span>
          <input className="input-shell" name="city" value={values.city} onChange={onChange} placeholder="القاهرة" />
        </label>
        <label className="space-y-2">
          <span className="font-bold">العنوان</span>
          <input className="input-shell" name="address" value={values.address} onChange={onChange} placeholder="الحي، الشارع، رقم المبنى" />
        </label>
      </div>
      <label className="space-y-2">
        <span className="font-bold">ملاحظات</span>
        <textarea className="textarea-shell" name="notes" value={values.notes} onChange={onChange} placeholder="أي تفاصيل إضافية بخصوص الطلب أو التوصيل" />
      </label>
    </div>
  );
}
