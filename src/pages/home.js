import { Link } from "react-router-dom";
import Navbar from "../compoments/navbar/Navbar";
import Destination from "../compoments/destination/Destination";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <h1>Home</h1>
      <Destination></Destination>
      <Link to="/details0">voyage 1</Link>
      <Link to="/details1">voyage 2</Link>
      <Link to="/details2">voyage 3</Link>
      <Link to="/details3">voyage 4</Link>
    </>
  );
}
