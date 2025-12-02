import { useState } from "react";
import { PERSONAL_INFO } from "../utils/data";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast"; // Import Toaster


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("Please fill in all fields"); // Error toast
      return;
    }

    setIsSending(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_name: PERSONAL_INFO.name,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Message sent successfully!"); // Success toast
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        toast.error("Failed to send message. Please try again."); // Error toast
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-4 md:px-8"
      style={{ backgroundColor: "var(--bg)" }}
    >
      {/* This component renders the actual toast popups */}
      <Toaster position="bottom-right" reverseOrder={false} />

      <div className="max-w-6xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-16">
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

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Side: Contact Info */}
          <div className="space-y-10 mt-4">
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
                  className="w-14 h-14 rounded-full shrink-0 flex items-center justify-center transition-all group-hover:scale-110 shadow-sm"
                  style={{
                    backgroundColor: "var(--bg-light)",
                    color: "var(--primary)",
                  }}
                >
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0 pt-1">
                  <p
                    className="text-sm font-bold uppercase tracking-wider mb-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Email :
                  </p>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-lg font-medium transition-colors hover:text-(--primary) break-all"
                    style={{ color: "var(--text)" }}
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-5 group">
                <div
                  className="w-14 h-14 rounded-full shrink-0 flex items-center justify-center transition-all group-hover:scale-110 shadow-sm"
                  style={{
                    backgroundColor: "var(--bg-light)",
                    color: "var(--primary)",
                  }}
                >
                  <FaLinkedin className="w-6 h-6" />
                </div>
                <div className="pt-1">
                  <p
                    className="text-sm font-bold uppercase tracking-wider mb-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    LinkedIn :
                  </p>
                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    className="text-lg font-medium transition-colors hover:text-(--primary)"
                    style={{ color: "var(--text)" }}
                  >
                    {PERSONAL_INFO.name}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-5 group">
                <div
                  className="w-14 h-14 rounded-full shrink-0 flex items-center justify-center transition-all group-hover:scale-110 shadow-sm"
                  style={{
                    backgroundColor: "var(--bg-light)",
                    color: "var(--primary)",
                  }}
                >
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="pt-1">
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
            <div className="pt-8">
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
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1 shadow-md hover:shadow-lg"
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

          {/* Right Side: Form Card */}
          <div
            className="p-8 md:p-10 rounded-3xl shadow-2xl transition-all hover:shadow-(--primary)/5"
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
              <div>
                <label
                  className="block text-sm font-bold mb-2 pl-1"
                  style={{ color: "var(--text)" }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Ali haider..."
                  className="w-full px-5 py-3 rounded-xl outline-none transition-all focus:ring-2 focus:ring-opacity-50"
                  style={{
                    backgroundColor: "var(--bg)",
                    border: `1px solid var(--border-muted)`,
                    color: "var(--text)",
                  }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

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
                  className="w-full px-5 py-3 rounded-xl outline-none transition-all focus:ring-2 focus:ring-opacity-50"
                  style={{
                    backgroundColor: "var(--bg)",
                    border: `1px solid var(--border-muted)`,
                    color: "var(--text)",
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

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
                  className="w-full px-5 py-3 rounded-xl outline-none transition-all focus:ring-2 focus:ring-opacity-50 resize-none"
                  style={{
                    backgroundColor: "var(--bg)",
                    border: `1px solid var(--border-muted)`,
                    color: "var(--text)",
                  }}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full py-3.5 rounded-full font-bold text-base transition-all hover:opacity-90 flex items-center justify-center gap-2 mt-8 shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
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
