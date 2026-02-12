import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Profiles", href: "#coding-profiles" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("#about");

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(href);
    }
    setMobileOpen(false);
  };

  // Scroll detection
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(item.href);
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          className="relative w-10 h-10 flex items-center justify-center 
          rounded-full border border-primary/40 
          shadow-[0_0_20px_hsl(175_80%_50%/0.3)] 
          text-xl font-bold text-gradient
          hover:scale-105 transition-transform"
        >
          HB
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-3 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative text-sm px-4 py-1.5 rounded-full border transition-all duration-300
                  ${
                    active === item.href
                      ? "text-primary border-primary/50 shadow-[0_0_15px_hsl(175_80%_50%/0.3)]"
                      : "text-muted-foreground border-border/60 hover:text-primary hover:border-primary/40"
                  }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="https://drive.google.com/file/d/1qfp1WS_WhiaErsp7IRCeH3WeDHt0Vtah/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium 
            px-5 py-2 rounded-full 
            bg-primary/10 text-primary border border-primary/40
            shadow-[0_0_20px_hsl(175_80%_50%/0.25)]
            hover:bg-primary hover:text-white
            hover:shadow-[0_0_30px_hsl(175_80%_50%/0.4)]
            transition-all duration-300"
          >
            <Download size={14} />
            Resume
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-card/95 backdrop-blur-xl border-b border-border px-6 pb-4"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block py-2 px-3 my-1 rounded-lg border transition-all duration-300
                  ${
                    active === item.href
                      ? "text-primary border-primary/40 bg-primary/5"
                      : "text-muted-foreground border-border/60 hover:text-primary hover:border-primary/40"
                  }`}
              >
                {item.label}
              </a>
            ))}

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 mt-3 py-2 px-3 text-primary rounded-lg 
              border border-primary/40 shadow-[0_0_15px_hsl(175_80%_50%/0.25)]"
            >
              <Download size={14} />
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
