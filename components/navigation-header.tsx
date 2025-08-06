"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function NavigationHeader() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("inicio");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para cambiar el estilo de la navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detectar la sección activa basada en la URL o scroll
  useEffect(() => {
    if (pathname === "/") {
      // En la página principal, detectar sección por scroll
      const handleScroll = () => {
        const sections = ["inicio", "sobre-mi", "proyectos", "contacto"];
        const scrollPosition = window.scrollY + 200;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;

            if (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + offsetHeight
            ) {
              setActiveSection(section);
              break;
            }
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Ejecutar una vez al cargar

      return () => window.removeEventListener("scroll", handleScroll);
    } else if (pathname.includes("/proyecto")) {
      setActiveSection("proyectos");
    }
  }, [pathname]);

  const navigationItems = [
    { name: "Inicio", href: "/", id: "inicio" },
    { name: "Sobre Mi", href: "/#sobre-mi", id: "sobre-mi" },
    { name: "Proyectos", href: "/#proyectos", id: "proyectos" },
    { name: "Contacto", href: "/#contacto", id: "contacto" },
  ];

  const handleNavClick = (id: string, href: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false); // Cerrar menú móvil al hacer clic

    if (href.startsWith("/#")) {
      // Si es un enlace a una sección, hacer scroll suave
      const sectionId = href.substring(2);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Desktop Navigation - ESTILO ORIGINAL */}
      <motion.header
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md rounded-full px-8 py-3 border border-white/20 shadow-lg hidden md:flex"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center space-x-8">
          <nav className="flex space-x-8">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <div key={item.name} className="relative">
                  <Link
                    href={item.href}
                    onClick={() => handleNavClick(item.id, item.href)}
                    className="relative block"
                  >
                    <motion.span
                      className={`font-semibold text-lg cursor-pointer transition-colors duration-300 ${
                        isActive
                          ? "text-gray-900"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                    >
                      {item.name}
                    </motion.span>
                  </Link>

                  {/* Punto indicador debajo del elemento activo */}
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gray-900 rounded-full"
                      layoutId="activeIndicator"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </div>
              );
            })}
          </nav>

          <motion.div
            whileHover={{
              scale: 1.05,
              backgroundColor: "#9b51e0",
              borderRadius: "36px",
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
            className="overflow-hidden"
          >
            <a
              href="/CV_MilagrosDziuban_2025.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gray-800 hover:bg-purple-600 text-white px-6 py-2 font-medium rounded-[32px]">
                Descargar CV
              </Button>
            </a>
          </motion.div>
        </div>
      </motion.header>

      {/* Mobile Navigation */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-white/95 backdrop-blur-md border-b border-gray-200 md:hidden"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center">
            <motion.div
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#9b51e0",
                transition: { duration: 0.2 },
              }}
            >
              <span className="text-white text-sm font-bold">M</span>
            </motion.div>
          </Link>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full text-gray-900"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <nav className="py-6">
                {navigationItems.map((item, index) => {
                  const isActive = activeSection === item.id;

                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => handleNavClick(item.id, item.href)}
                        className="block"
                      >
                        <motion.div
                          className={`px-6 py-4 text-center transition-colors duration-200 ${
                            isActive ? "bg-purple-50" : "hover:bg-gray-50"
                          }`}
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span
                            className={`font-semibold text-lg ${
                              isActive ? "text-purple-600" : "text-gray-700"
                            }`}
                          >
                            {item.name}
                          </span>
                        </motion.div>
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Mobile CTA Button */}
                <motion.div
                  className="px-6 pt-4 mt-4 border-t border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="w-full bg-gray-800 hover:bg-purple-600 text-white py-3 rounded-full font-medium">
                      Descargar CV
                    </Button>
                  </motion.div>
                </motion.div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
