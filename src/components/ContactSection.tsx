import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, Phone, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "rituharsh9436@gmail.com",
    href: "mailto:rituharsh9436@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 86308 69429",
    href: "tel:+918630869429",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/rituharsh9436",
    value: "GitHub",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/harsh-bhardwaj-8a76a8295/",
    value: "LinkedIn",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const { toast } = useToast();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSfi_6eanGP8zXxeMsHdNRprl0PmEoFz0ETJkAN3XmeP6rxcDw/formResponse";
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const name = form.name.trim();
  const email = form.email.trim();
  const message = form.message.trim();

  if (!name || !email || !message) {
    toast({
      title: "All fields are required",
      description: "Please fill out all fields.",
    });
    return;
  }

  const formData = new FormData();
  formData.append("entry.1470198510", name);     // Replace with your Name entry
  formData.append("entry.1222633139", email);    // Replace with your Email entry
  formData.append("entry.22100781", message);  // Replace with your Message entry

  try {
    await fetch(GOOGLE_FORM_ACTION, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    setForm({ name: "", email: "", message: "" });

  } catch (error) {
    toast({
      title: "Submission failed",
      description: "Please try again later.",
    });
  }
};


  return (
    <section
      id="contact"
      className="relative section-padding overflow-hidden"
      ref={ref}
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-0 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl opacity-40 animate-pulse" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-gradient">Get in</span> Touch
          </h2>

          <div className="w-16 h-1 bg-primary rounded-full mb-4 shadow-[0_0_15px_rgba(99,102,241,0.6)]" />

          <p className="text-muted-foreground mb-12 max-w-lg">
            I'm open to opportunities, collaborations, and conversations.
            Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-10 items-start">

            {/* Contact Cards */}
            <div className="space-y-5">
              {contacts.map((contact, i) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={
                    contact.href.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    contact.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.12 + 0.2 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="relative group"
                >
                  {/* Glow Border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-purple-500 to-primary opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

                  <div className="relative p-5 rounded-2xl border border-border bg-card/60 backdrop-blur-xl shadow-lg group-hover:border-primary/40 group-hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all duration-300 flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <contact.icon size={20} className="text-primary" />
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground">
                        {contact.label}
                      </p>
                      <p className="text-sm text-foreground font-medium">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Send Message Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="relative group"
            >
              {/* Glow Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-purple-500 to-primary opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

              <div className="relative p-7 rounded-3xl border border-border bg-card/60 backdrop-blur-xl shadow-xl group-hover:border-primary/40 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all duration-300">
                <h3 className="text-lg font-semibold text-foreground mb-5 flex items-center gap-2">
                  <Send size={18} className="text-primary" />
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <Input
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    required
                    className="focus:ring-2 focus:ring-primary/40 transition-all"
                  />

                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    required
                    className="focus:ring-2 focus:ring-primary/40 transition-all"
                  />

                  <Textarea
                    placeholder="Your Message"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    required
                    rows={4}
                    className="focus:ring-2 focus:ring-primary/40 transition-all"
                  />

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-300"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
