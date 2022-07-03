import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/details0">voyage 1</Link>
      <Link to="/details1">voyage 2</Link>
      <Link to="/details2">voyage 3</Link>
      <Link to="/details3">voyage 4</Link>
    </>
  );
}
