import { Link } from "react-router-dom";
function Nav() {
  return (
    <header className="navi">
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Nav;
