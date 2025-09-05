import { FaArrowLeft } from "react-icons/fa";
import heroBg from "../assets/images/hero.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-cover bg-center h-[90vh] flex items-center justify-center"
       style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/60 "></div>

      {/* content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          اكتشف الفخامة والراحة  
          <br />  
          مع أثاث <span className="text-blue-400">We Office Land</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          تصميمات عصرية، جودة عالية، وتجربة عمل لا تُنسى.  
          نحن نصنع بيئات عمل تلهمك وتزيد إنتاجيتك.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="btn btn-primary flex items-center gap-2 px-6 py-3 text-lg rounded-full shadow-lg"
          >
            تصفح منتجاتنا <FaArrowLeft className="text-sm" />
          </a>
          <a
            href="#contact"
            className="btn btn-outline text-white border-white hover:bg-white hover:text-black px-6 py-3 text-lg rounded-full shadow-lg"
          >
            تواصل معنا
          </a>
        </div>
      </div>
    </section>
  );
}
