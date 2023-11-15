import Mine from "./components/ContentTwo/Mine";
import Hearo from "./components/contentOne/Hearo";
import Icons from "./components/contentOne/Icons";
import Scroll from "./components/contentOne/scroll/Scroll";
import Footer from "./components/footer/Footer";
import HeaderOne from "./components/header/HeaderOne";
import HeaderThree from "./components/header/HeaderThree";
import HeaderTwo from "./components/header/HeaderTwo";

const App = () => {
  return (
    <div>
      <HeaderOne />
      <HeaderTwo />
      <HeaderThree />
      <div style={{ background: "#f6f6f6" }}>
        <Hearo />
        <Icons />
        <Mine />
      </div>
      <Footer />
      <Scroll />
    </div>
  );
};

export default App;
