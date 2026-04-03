import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import FloatingWhatsAppButton from "../common/FloatingWhatsAppButton";
import Footer from "./Footer";
import IntroLoader from "./IntroLoader";
import Navbar from "./Navbar";
import TopBar from "./TopBar";

export default function AppShell() {
  const location = useLocation();
  const [loaderClosing, setLoaderClosing] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    const closeTimer = window.setTimeout(() => setLoaderClosing(true), 1500);
    const removeTimer = window.setTimeout(() => setShowLoader(false), 2150);

    document.body.style.overflow = "hidden";

    return () => {
      window.clearTimeout(closeTimer);
      window.clearTimeout(removeTimer);
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    if (!showLoader) {
      document.body.style.overflow = "auto";
    }
  }, [showLoader]);

  return (
    <div className="page-shell">
      {showLoader && <IntroLoader closing={loaderClosing} />}
      <TopBar />
      <Navbar />
      <Outlet />
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
