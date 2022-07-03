import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <p>&copy; 2022 Voyage en Famille</p>
      <Link to="/faq">FAQ</Link>
    </footer>
  );
};

export default Footer;
