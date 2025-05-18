import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">&copy; 2024 Supersite, Powered by News API</p>
      <div className="footer__nav">
        <a href="/" className="footer__home-link">
          Home
        </a>

        <a href="/" className="footer__home-link">
          TripleTen
        </a>
      </div>
    </footer>
  );
}

export default Footer;
