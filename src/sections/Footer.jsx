import { PERSONAL_INFO } from "../utils/data";

const Footer = () => (
  <footer
    className="py-6 text-center text-sm animate-fade-in"
    style={{ backgroundColor: "var(--bg-light)", color: "var(--text-muted)" }}
  >
    <p>
      © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
    </p>
  </footer>
);

export default Footer;
