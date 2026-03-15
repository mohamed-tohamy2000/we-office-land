import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import FloatingWhatsAppButton from "../common/FloatingWhatsAppButton";
import Footer from "./Footer";
import Navbar from "./Navbar";
import TopBar from "./TopBar";

export default function AppShell() {
  const location = useLocation();

  useEffect(() => {
    // يعيد التمرير إلى أعلى الصفحة عند تغيير الـ route.
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="page-shell">
      {/* عناصر ثابتة تظهر في جميع صفحات الموقع */}
      <TopBar />
      <Navbar />
      {/* الصفحة الحالية التي يتم حقنها من React Router */}
      <Outlet />
      <Footer />
      {/* زر واتساب ثابت لتسهيل التواصل من أي صفحة */}
      <FloatingWhatsAppButton />
    </div>
  );
}
