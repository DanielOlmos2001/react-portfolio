import { Link } from "react-router-dom";
import "./notFound.css";

function NotFound() {
  return (
    <section className="not-found">
      <h1>404</h1>
      <p>La página que buscas no existe.</p>
      <Link to="/" className="not-found-link">
        Volver al inicio
      </Link>
    </section>
  );
}

export default NotFound;
