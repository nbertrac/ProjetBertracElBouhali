import { Link } from "react-router-dom";
import Navbar from "../compoments/navbar/Navbar";
import Destination from "../compoments/destination/Destination";
import datas from "../data/destination.json"
export default function Home() {

  return (
    <>
      <Navbar></Navbar>
      <h1>Home</h1>
      

      <div className="wrapper">
      <Link to="/details0"><Destination data={datas[0]}/></Link>
      <Link to="/details1"><Destination data={datas[1]}/></Link>
      <Link to="/details2"><Destination data={datas[2]}/></Link>
      <Link to="/details3"><Destination data={datas[3]}/></Link>
      </div> 
    </>
  );
}
