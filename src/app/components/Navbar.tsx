"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!navRef.current) return;
      if (window.scrollY > 50) {
        navRef.current.style.background = "rgba(30,58,138,0.98)";
      } else {
        navRef.current.style.background = "rgba(30,58,138,0.95)";
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  // Close sidebar on route change
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        ref={navRef}
        className="navbar fixed top-0 w-full bg-blue-900/95 backdrop-blur z-50 py-4 px-6 transition-all duration-300"
        style={{ background: "rgba(30,58,138,0.95)" }}
      >
        <div className="flex justify-between items-center max-w-6xl mx-auto relative">
          <Link
            href="/"
            className="logo text-2xl font-bold text-white z-20 relative"
          >
            Tekuvo Technologies
          </Link>
          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 items-center">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`nav-link relative font-medium transition duration-300 px-2 py-1
                    ${isActive ? "text-blue-400 font-bold" : "text-white"}
                  `}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 w-full rounded bg-blue-400 transition-all duration-300
                      ${isActive ? "opacity-100" : "opacity-0"}
                    `}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* Sidebar toggle button */}
          <button
            className="md:hidden flex items-center text-white text-3xl z-20 relative"
            aria-label="Open menu"
            onClick={() => setSidebarOpen(true)}
          >
            <FiMenu />
          </button>
        </div>
      </nav>
      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-[99] transition-opacity duration-300 ${
          sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!sidebarOpen}
        onClick={() => setSidebarOpen(false)}
      />
      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 md:hidden h-full w-72 bg-blue-900 text-white shadow-lg z-[100] transition-transform duration-300
          ${
            sidebarOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
        role="menu"
        aria-label="Mobile menu"
      >
        <div className="flex flex-col h-full">
          {/* Close button */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-blue-800">
            <span className="text-xl font-bold">Menu</span>
            <button
              className="text-3xl"
              aria-label="Close menu"
              onClick={() => setSidebarOpen(false)}
            >
              <FiX />
            </button>
          </div>
          <nav className="flex-1 flex flex-col gap-2 px-6 py-8">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-3 px-4 rounded-lg transition font-medium ${
                    isActive
                      ? "bg-blue-800 text-blue-400 font-bold"
                      : "hover:bg-blue-800 text-white"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setSidebarOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex-shrink-0 px-6 pb-8">
            <Link href="/" className="block text-gray-300 text-sm hover:text-blue-400">
              Tekuvo Technologies &copy; 2025
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}