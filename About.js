import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImage from "../assets/about.jpg";
function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImage}
        width={1280}
        height={960}
        title="Design is intelligence made visible."
        text="Welcome to Dexze we are a full-service design and marketing agency that specializes in helping businesses reach their goals. Our team of experienced professionals provides a wide variety of services, from logo design and website development to digital marketing and advertising.
        Our team is passionate about creating beautiful, impactful brand identities and marketing strategies that help our clients stand out from the competition. We work with companies of all sizes, from small startups to large enterprises, to create tailored solutions that meet their individual needs.
        "
        btnClass="hide"
      />
    </>
  );
}

export default About;
