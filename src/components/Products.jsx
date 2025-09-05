import sofi from "../assets/images/sofi office.jpg";
import manger from "../assets/images/manger office.png";
import meeting from "../assets/images/meeting office.png";
import chair from "../assets/images/char manger.png";
import malti from "../assets/images/malti office.jpg";
import conter from "../assets/images/conter.png";


export default function Products() {
   const products = [
    { title: "طقم الانتريهات", img: sofi },
    { title: "المكاتب", img: manger },
    { title: "طاولات الاجتماعات", img: meeting },
    { title: "كراسي", img: chair },
    { title: "خلايا عمل", img: malti },
    { title: "مكاتب استقبال", img: conter },
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className=" text-blue-600 text-3xl md:text-4xl font-bold text-center mb-16 ">
          تصفح أقسامنا
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <a
              key={i}
              href="#"
              className="group block text-center"
            >
              <div className="relative overflow-hidden rounded-2xl border-2 border-gray-200 group-hover:border-blue-500 transition-all duration-300 shadow-lg group-hover:shadow-xl p-2 bg-white">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-72 object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mt-4 text-gray-800 group-hover:text-blue-600 transition-colors">
                {p.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
