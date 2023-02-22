import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
//import abouthome from "../components/abouthome";
import AboutImage from "../assets/building.jpg";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={AboutImage}
        width={1280}
        height={960}
        title="We create brands that make a difference."
        text="We combine customer insights with impactful content to get your brand to the top."
        buttonText="let's talk"
        url="/"
        btnClass="show"
      />
      {/*<abouthome />*/}
    </>
  );
}

export default Home;
