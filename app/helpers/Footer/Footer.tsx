import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="p-10 text-center text-sm text-muted-foreground border-t border-border/80"
    >
      <p className="text-sm">alessandro &copy;{currentYear}</p>
    </footer>
  );
};

export default Footer;
