import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Hero from "./components/Hero";
import Specializations from "./components/Specializations";
import Blog from "./components/Blog";
import Presentations from "./components/Presentations";
import Contact from "./components/Contact";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Content />
      <Hero />
      <Specializations />
      <Blog />
      <Presentations />
      <Contact />
    </div>
  );
};

export default Home;
