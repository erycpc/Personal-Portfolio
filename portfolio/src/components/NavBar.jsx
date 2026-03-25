import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
 
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
 
  const links = ["about", "skills", "projects", "contact"];
 
  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <span className="navbar-logo">// eric.dev</span>
 
      <div className="navbar-links">
        {links.map((link) => (
          <a key={link} href={`#${link}`}>
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;