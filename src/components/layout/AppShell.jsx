import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import FloatingWhatsAppButton from "../common/FloatingWhatsAppButton";
import Footer from "./Footer";
import Navbar from "./Navbar";
import TopBar from "./TopBar";

export default function AppShell() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="page-shell">
      <TopBar />
      <Navbar />
      <Outlet />
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
