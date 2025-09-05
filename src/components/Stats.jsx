import CountUp from "react-countup";

export default function Stats() {
  const stats = [
    { number: 250, suffix: "+", label: "عميل سعيد" },
    { number: 500, suffix: "+", label: "مشروع مكتمل" },
    { number: 15, suffix: "+", label: "سنة خبرة" },
    { number: 50, suffix: "+", label: "فريق عمل" },
  ];

  return (
    <section id="stats" className="py-20 bg-blue-400 text-white">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <div key={i}>
            <h3 className="text-4xl font-bold">
              <CountUp end={s.number} duration={2.5} />{s.suffix}
            </h3>
            <p className="mt-2">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
