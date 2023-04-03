import { Link } from "react-router-dom";

export default function MainMenu() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  );
}
