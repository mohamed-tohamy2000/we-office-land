import { useEffect, useRef, useState } from "react";
import { HiOutlineShoppingBag, HiOutlineSquares2X2 } from "react-icons/hi2";
import { IoClose, IoMenu } from "react-icons/io5";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import logo from "../../assets/images/logo.png";
import { useCart } from "../../context/CartContext";

const navLinks = [
  { to: "/", label: "الرئيسية" },
  { to: "/about", label: "من نحن" },
  { to: "/categories", label: "الأقسام" },
  { to: "/contact", label: "تواصل معنا" },
];

export default function Navbar() {
  const navRef = useRef(null);
  const [open, setOpen] = useState(false);
  const { quantity } = useCart();

  useEffect(() => {
    const nav = navRef.current;

    gsap.fromTo(nav, { y: -80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" });

    const handleScroll = () => {
      const active = window.scrollY > 18;

      gsap.to(nav, {
        y: 0,
        backgroundColor: active ? "rgba(255,250,244,0.78)" : "rgba(255,250,244,0)",
        backdropFilter: active ? "blur(18px)" : "blur(0px)",
        boxShadow: active ? "0 18px 42px rgba(34, 24, 13, 0.12)" : "0 0 0 rgba(0,0,0,0)",
        duration: 0.25,
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const linkClass = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive ? "text-[var(--primary-dark)]" : "text-neutral-700 hover:text-[var(--primary-dark)]"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `rounded-[18px] border px-4 py-3 text-right transition-all duration-200 ${
      isActive
        ? "border-[rgba(157,123,75,0.38)] bg-[rgba(157,123,75,0.12)] text-[var(--primary-dark)]"
        : "border-[var(--line)] bg-white text-[var(--foreground)] hover:border-[rgba(157,123,75,0.28)]"
    }`;

  const mobileMenu = (
    <div className="fixed inset-0 z-[9999] bg-black/80 lg:hidden">
      <div className="mr-auto mt-4 flex min-h-[70vh] w-[88%] max-w-sm flex-col gap-8 rounded-b-[32px] border-l border-[#e8dcc9] bg-white p-6 text-[var(--foreground)] shadow-2xl">
        <div className="flex items-center justify-between">
          <img src={logo} alt="We Office Land" className="h-12 w-auto object-contain" />
          <button className="rounded-full border border-[var(--line)] bg-white p-3 text-[var(--foreground)]" onClick={() => setOpen(false)}>
            <IoClose size={22} />
          </button>
        </div>

        <div className="flex flex-col gap-4 text-lg font-semibold">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={mobileLinkClass} onClick={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-3">
          <NavLink to="/categories" className="btn-ghost h-14 w-full border-[var(--line)] bg-white text-[var(--foreground)]" onClick={() => setOpen(false)}>
            تصفح المنتجات
          </NavLink>
          <NavLink to="/cart" className="btn-primary h-14 w-full" onClick={() => setOpen(false)}>
            السلة {quantity > 0 ? `(${quantity})` : ""}
          </NavLink>
        </div>
      </div>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-transparent">
      <nav ref={navRef} className="container-shell flex items-center justify-between py-4">
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="We Office Land" className="h-20 w-auto object-contain" />
        </NavLink>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <NavLink to="/categories" className="btn-ghost">
            <HiOutlineSquares2X2 />
            تصفح المنتجات
          </NavLink>
          <NavLink to="/cart" className="relative btn-primary">
            <HiOutlineShoppingBag />
            السلة
            {quantity > 0 && (
              <span className="absolute -left-2 -top-2 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-[#17342e] px-1 text-xs font-bold text-white">
                {quantity}
              </span>
            )}
          </NavLink>
        </div>

        <button className="rounded-full border border-[var(--line)] p-3 lg:hidden" onClick={() => setOpen(true)}>
          <IoMenu size={22} />
        </button>
      </nav>

      {open && createPortal(mobileMenu, document.body)}
    </header>
  );
}
