import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Specializations from "./components/Specializations";
import Blog from "./components/Blog";
import Presentations from "./components/Presentations";
import Contact from "./components/Contact";
// import Footer from "./components/Footer.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Specializations />
      <Blog />
      <Presentations />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
