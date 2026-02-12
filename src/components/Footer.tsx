import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-10 px-6 border-t border-border/50 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-40 
        bg-primary/10 blur-3xl opacity-40" />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center gap-6">

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/rituharsh9436"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary 
            transition-all duration-300 hover:scale-110 
            hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.6)]"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/harsh-bhardwaj-8a76a8295/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary 
            transition-all duration-300 hover:scale-110 
            hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.6)]"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="mailto:rituharsh9436@gmail.com"
            className="text-muted-foreground hover:text-primary 
            transition-all duration-300 hover:scale-110 
            hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.6)]"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Divider Line */}
        <div className="w-20 h-[2px] bg-primary rounded-full shadow-[0_0_12px_rgba(99,102,241,0.6)]" />

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-sm text-muted-foreground text-center"
        >
          © {new Date().getFullYear()} Harsh Bhardwaj. Built with passion.
        </motion.p>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="mt-2 text-muted-foreground hover:text-primary 
          transition-all duration-300 flex items-center gap-2 
          hover:scale-105"
        >
          <ArrowUp size={16} />
          <span className="text-xs">Back to top</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
