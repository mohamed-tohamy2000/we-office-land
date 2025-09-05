import { FaGem, FaShieldAlt, FaTruck, FaLifeRing } from "react-icons/fa";

export default function Features() {
  const features = [
    { icon: <FaGem />, title: "تصاميم مبتكرة", desc: "قطع فريدة وعصرية تواكب أحدث اتجاهات التصميم العالمية." },
    { icon: <FaShieldAlt />, title: "جودة لا تُضاهى", desc: "نستخدم أجود المواد لنضمن منتجات تدوم طويلاً." },
    { icon: <FaTruck />, title: "توصيل وتركيب", desc: "خدمة توصيل وتركيب احترافية لضمان راحتكم الكاملة." },
    { icon: <FaLifeRing />, title: "دعم فني متميز", desc: "فريقنا مستعد لتقديم المشورة والمساعدة في أي وقت." },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-blue-600 text-3xl md:text-4xl font-bold mb-12">لماذا تختارنا؟</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((f, i) => (
            <div key={i} className="p-6">
              <div className="bg-blue-100 text-blue-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-5 text-3xl">
                {f.icon}
              </div>
              <h3 className="text-blue-600 text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
