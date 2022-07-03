import { useLocation, Link } from "react-router-dom";

export default function Lost() {
  let location = useLocation();

  return (
    <>
      <h1>Page introuvable</h1>

      <Link to="/" title="Revenir sur la page principale">
        Retour sur la page d&#39;accueil
      </Link>
      <br />

      <code>
        La page : <b>{location.pathname}</b> est introuvable
      </code>
    </>
  );
}
