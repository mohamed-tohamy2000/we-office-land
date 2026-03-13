import { HiArrowLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="premium-card p-10 text-center">
          <h1 className="mb-3 text-4xl font-extrabold">الصفحة غير موجودة</h1>
          <p className="mb-6 text-muted">يمكنك العودة إلى الرئيسية أو تصفح أقسام الأثاث المكتبي الحالية.</p>
          <Link to="/" className="btn-primary">
            <HiArrowLeft />
            العودة للرئيسية
          </Link>
        </div>
      </div>
    </section>
  );
}
