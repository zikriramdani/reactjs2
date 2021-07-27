import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import logo from "../images/logo.svg";

const Footer = () => {
  return (
    <footer>
      <a href="/" className="brand">
        <img src={logo} alt="Logo" className="brand-img" />
        Aplikasi web serderhana untuk mencari resep masakan khas indonesia
      </a>
      <ul className="scm-list">
        <li>
          <a
            className="scm-icon"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaFacebook />
          </a>
        </li>
        <li>
          <a
            className="scm-icon"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            className="scm-icon"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub />
          </a>
        </li>
      </ul>
      <p className="copyright-text">
        <small>&copy; Copyright 2021 Aplikasi web serderhana untuk mencari resep masakan khas indonesia</small>
      </p>
    </footer>
  );
};

export default Footer;
