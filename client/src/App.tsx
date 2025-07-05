import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./components/AboutUs/AboutUs";
import Specialities from "./components/Specialities/Specialities";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import BannerHome from "./components/BannerHome/BannerHome";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <BannerHome />
      <Specialities />
      <AboutUs />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;