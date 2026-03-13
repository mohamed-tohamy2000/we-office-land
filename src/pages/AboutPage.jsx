import { HiArrowLeft, HiCheckBadge } from "react-icons/hi2";
import { Link } from "react-router-dom";
import CTASection from "../components/common/CTASection";
import SectionHeading from "../components/common/SectionHeading";
import CategoryCard from "../components/store/CategoryCard";
import categories from "../data/categories";

const values = [
  "تصميم مكتبي يخدم الهيبة والعملية معًا",
  "اختيارات موجهة لمكاتب المديرين والموظفين والاستقبال",
  "تجربة طلب واضحة وسريعة عبر السلة وواتساب",
];

export default function AboutPage() {
  return (
    <>
      <section className="section-space">
        <div className="container-shell grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="About We Office Land"
              title="هوية متخصصة في الأثاث المكتبي فقط، بتفاصيل ترفع قيمة المكان وتنعكس على تجربة العمل."
              description="نطوّر تشكيلاتنا لتناسب غرف المديرين، الاستقبال، الانتظار، وغرف الاجتماعات، مع رؤية تعتمد على الفخامة الواضحة دون مبالغة."
              align="right"
            />
            <p className="text-lg leading-8 text-muted">
              بدأت We Office Land بفكرة بسيطة: أن يكون الأثاث المكتبي عنصرًا استراتيجيًا في صورة الشركة وليس مجرد تجهيز وظيفي. لذلك نبني مجموعات
              تُشعر العميل أن المكان محسوب بعناية من أول نظرة.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {values.map((value) => (
                <div key={value} className="premium-card p-5">
                  <HiCheckBadge className="mb-3 text-3xl text-[var(--primary)]" />
                  <p className="text-sm leading-7 text-muted">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="premium-card space-y-6 p-8">
            <div>
              <p className="section-kicker mb-2 text-sm font-extrabold uppercase">Story</p>
              <h3 className="text-2xl font-bold">قصتنا</h3>
            </div>
            <p className="leading-8 text-muted">
              نؤمن أن المكتب التنفيذي، منطقة الانتظار، أو غرفة الاجتماع يجب أن تعكس ثقة العلامة ومكانتها. لهذا نركز على تشكيلات متخصصة في الأثاث
              المكتبي فقط بدل التنوع العام غير الدقيق.
            </p>
            <div className="rounded-[24px] bg-[var(--accent)] p-6 text-white">
              <h4 className="mb-2 text-xl font-bold">الرؤية والرسالة</h4>
              <p className="leading-8 text-white/80">
                تقديم بيئات عمل حديثة، راقية، وعملية تمنح المؤسسات حضورًا أقوى وتدعم راحة الفرق والإدارة والضيوف.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/categories" className="btn-primary">
                <HiArrowLeft />
                تصفح الأقسام
              </Link>
              <Link to="/contact" className="btn-ghost">
                تواصل معنا
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-white/40">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Category Overview"
            title="نظرة سريعة على مجالاتنا الرئيسية داخل الأثاث المكتبي."
            description="من الكراسي والمكاتب إلى الاستقبال والاجتماعات، كل فئة مصممة لمشهد مكتبي محدد."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
