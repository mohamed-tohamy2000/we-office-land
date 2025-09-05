import logo from "../assets/images/logo.png";
import { useState } from "react";
import { IoCloseSharp, IoMenu } from "react-icons/io5";
export default function Header() {
   const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-blue-600">
          <img
            style={{ width: "180px", height: "auto" }}
            src={logo}
            alt="We Office Land Logo"
          />
        </a>
        <div className="hidden md:flex justify-between items-center space-x-8 space-x-reverse">
          <a
            href="#features"
            className="text-gray-600 hover:text-blue-600 transition duration-300"
          >
            المميزات
          </a>
          <a
            href="#products"
            className="text-gray-600 hover:text-blue-600 transition duration-300"
          >
            منتجاتنا
          </a>
          <a
            href="#testimonials"
            className="text-gray-600 hover:text-blue-600 transition duration-300"
          >
            آراء العملاء
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-blue-600 transition duration-300 ml-8"
          >
            تواصل معنا
          </a>
        </div>
        <a
          href="#contact"
          className="hidden md:block bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 shadow-md"
        >
          اطلب استشارة
        </a>
        <button
        className="md:hidden text-gray-950 text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <IoCloseSharp /> : <IoMenu />}
      </button>

      {/* المنيو الجانبية في الموبايل */}
        {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-800 flex flex-col items-center py-6 gap-4 md:hidden">
          <a href="#features" onClick={() => setIsOpen(false)}>المميزات</a>
          <a href="#products" onClick={() => setIsOpen(false)}>منتجاتنا</a>
          <a href="#testimonials" onClick={() => setIsOpen(false)}>آراء العملاء</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>تواصل معنا</a>
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
            اطلب استشارة
          </button>
        </div>
      )}
      </nav>
    </header>
  );
}
