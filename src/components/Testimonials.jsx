export default function Testimonials() {
  const testimonials = [
    {
      text: "الجودة والتصميم فاقا توقعاتنا. لقد ساعدنا أثاثكم على تجديد بيئة العمل بالكامل وأصبح الموظفون أكثر حماسًا وإنتاجية.",
      name: "أحمد منصور",
      role: "مدير شركة تكنولوجيا",
      img: "https://placehold.co/100x100/e2e8f0/475569?text=أ",
    },
    {
      text: "خدمة عملاء ممتازة وفريق محترف ساعدنا في اختيار القطع المناسبة لمكتبنا الجديد. نوصي بهم بشدة.",
      name: "سارة إبراهيم",
      role: "مؤسسة شركة استشارات",
      img: "https://placehold.co/100x100/e2e8f0/475569?text=س",
    },
    {
      text: "التزام بالمواعيد وجودة في التركيب. كانت تجربة رائعة من البداية إلى النهاية. شكرًا لكم.",
      name: "خالد الغامدي",
      role: "صاحب مكتب محاماة",
      img: "https://placehold.co/100x100/e2e8f0/475569?text=خ",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-blue-600 text-3xl md:text-4xl font-bold text-center mb-12 section-title">
          ماذا يقول عملاؤنا؟
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gray-100 p-8 rounded-xl shadow-sm text-center md:text-right"
            >
              <p className="text-gray-600 italic mb-6">"{t.text}"</p>
              <div className="flex items-center justify-center md:justify-start">
                <img
                  className="w-14 h-14 rounded-full mr-4 object-cover"
                  src={t.img}
                  alt={t.name}
                />
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
