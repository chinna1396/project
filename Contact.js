import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImage from "../assets/contact.jpg";
function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImage}
        width={1280}
        height={960}
        title="Let's have a word"
        text="Let's create the flexible website for your business ?"
        btnClass="hide"
      />
    </>
  );
}
export default Contact;
