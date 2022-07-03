import Nav from "../components/header/nav";
import Footer from "../components/footer/footer";

const LayoutNav = (props) => {
  return (
    <>
      <Nav />
      {props.children}
      <Footer />
    </>
  );
};

export default LayoutNav;
