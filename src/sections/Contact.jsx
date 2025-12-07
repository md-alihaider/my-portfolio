import { useState } from "react";
import { PERSONAL_INFO } from "../utils/data";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSending(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      message,
      to_name: PERSONAL_INFO.name,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.");
      })
      .finally(() => setIsSending(false));
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-4 md:px-8"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <Toaster position="bottom-right" />

      {/* Subtle background glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full blur-[140px] opacity-10 animate-pulse-slow pointer-events-none -z-10"
        style={{ backgroundColor: "var(--primary)" }}
      ></div>

      <div className="max-w-6xl mx-auto w-full animate-fade-in">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--text)" }}
          >
            Get In <span style={{ color: "var(--primary)" }}>Touch</span>
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: "var(--text-muted)" }}
          >
            Have a project or idea? Let's connect and bring it to life together.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* LEFT: CONTACT INFO */}
          <div className="space-y-10 mt-4 animate-fade-up-slow">
            <h3
              className="text-2xl font-bold mb-8"
              style={{ color: "var(--text)" }}
            >
              Contact Information
            </h3>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start gap-5 group">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center transition-all active:scale-95 sm:hover:scale-110 shadow-sm"
                  style={{
                    backgroundColor: "var(--bg-light)",
                    color: "var(--primary)",
                  }}
                >
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p
                    className="text-sm font-bold uppercase tracking-wider mb-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Email :
                  </p>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-lg font-medium transition-colors sm:hover:text-(--primary)"
                    style={{ color: "var(--text)" }}
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-5 group">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center transition-all active:scale-95 sm:hover:scale-110 shadow-sm"
                  style={{
                    backgroundColor: "var(--bg-light)",
                    color: "var(--primary)",
                  }}
                >
                  <FaLinkedin className="w-6 h-6" />
                </div>
                <div>
                  <p
                    className="text-sm font-bold uppercase tracking-wider mb-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    LinkedIn :
                  </p>
                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    className="text-lg font-medium transition-colors sm:hover:text-(--primary)"
                    style={{ color: "var(--text)" }}
                  >
                    {PERSONAL_INFO.name}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-5 group">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center transition-all active:scale-95 sm:hover:scale-110 shadow-sm"
                  style={{
                    backgroundColor: "var(--bg-light)",
                    color: "var(--primary)",
                  }}
                >
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p
                    className="text-sm font-bold uppercase tracking-wider mb-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Location :
                  </p>
                  <span
                    className="text-lg font-medium"
                    style={{ color: "var(--text)" }}
                  >
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 animate-fade-up-slower">
              <h4
                className="text-lg font-bold mb-5"
                style={{ color: "var(--text)" }}
              >
                Connect With Me
              </h4>

              <div className="flex gap-4">
                {Object.entries(PERSONAL_INFO.socials).map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all active:scale-95 sm:hover:scale-110 shadow-md sm:hover:shadow-lg"
                    style={{
                      backgroundColor: "var(--bg-light)",
                      color: "var(--text)",
                    }}
                  >
                    {key === "github" && <FaGithub className="w-5 h-5" />}
                    {key === "linkedin" && <FaLinkedin className="w-5 h-5" />}
                    {key === "instagram" && <FaInstagram className="w-5 h-5" />}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: FORM CARD */}
          <div
            className="p-8 md:p-10 rounded-3xl shadow-xl animate-fade-up"
            style={{
              backgroundColor: "var(--bg-light)",
              border: `1px solid var(--border)`,
            }}
          >
            <h3
              className="text-2xl font-bold mb-8 text-center"
              style={{ color: "var(--text)" }}
            >
              Send a Message
            </h3>

            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label
                  className="block text-sm font-bold mb-2 pl-1"
                  style={{ color: "var(--text)" }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Ali Haider..."
                  className="w-full px-5 py-3 rounded-xl outline-none transition-all active:scale-[0.99] focus:ring-2 focus:ring-opacity-50"
                  style={{
                    backgroundColor: "var(--bg)",
                    border: `1px solid var(--border-muted)`,
                    color: "var(--text)",
                  }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/* Email */}
              <div className="mt-6">
                <label
                  className="block text-sm font-bold mb-2 pl-1"
                  style={{ color: "var(--text)" }}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="xyz@gmail.com"
                  className="w-full px-5 py-3 rounded-xl outline-none transition-all active:scale-[0.99] focus:ring-2 focus:ring-opacity-50"
                  style={{
                    backgroundColor: "var(--bg)",
                    border: `1px solid var(--border-muted)`,
                    color: "var(--text)",
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Message */}
              <div className="mt-6">
                <label
                  className="block text-sm font-bold mb-2 pl-1"
                  style={{ color: "var(--text)" }}
                >
                  Your Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Hello! I'd like to talk about..."
                  className="w-full px-5 py-3 rounded-xl outline-none transition-all active:scale-[0.99] focus:ring-2 focus:ring-opacity-50 resize-none"
                  style={{
                    backgroundColor: "var(--bg)",
                    border: `1px solid var(--border-muted)`,
                    color: "var(--text)",
                  }}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full py-3.5 rounded-full font-bold text-base transition-all active:scale-[0.97] sm:hover:-translate-y-1 flex items-center justify-center gap-2 mt-8 shadow-lg sm:hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: "var(--primary)",
                  color: "#fff",
                }}
              >
                {isSending ? (
                  <>
                    Sending... <Loader2 className="w-4 h-4 animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4 ml-1" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
