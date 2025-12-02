import { PERSONAL_INFO } from "../utils/data";

const Footer = () => (
  <footer
    className="py-6 text-center text-sm"
    style={{ backgroundColor: "var(--bg-light)", color: "var(--text-muted)" }}
  >
    <p>
      Copyright © {new Date().getFullYear()} by {PERSONAL_INFO.name}. All
      rights reserved.
    </p>
  </footer>
);

export default Footer;

