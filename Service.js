import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImage from "../assets/servives.jpg";
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImage}
        title="Design is intelligence made visible.We create brands that make a difference."
        text="Services we can help you with.  "
        btnClass="hide"
      />
    </>
  );
}

export default Service;
