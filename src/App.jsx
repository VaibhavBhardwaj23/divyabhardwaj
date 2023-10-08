import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AboutSection from "./section/AboutSection";
import Form from "./section/Form";
import Hero from "./section/Hero";
import ReviewsSection from "./section/ReviewsSection";
import StepsSection from "./section/StepsSection";
import WhyMeSection from "./section/WhyMeSection";

function App() {
  return (
    <main style={{ padding: "1em 0.3em 0" }}>
      <NavBar />
      <Hero />
      <AboutSection />
      <ReviewsSection/>
      <WhyMeSection/>
      <StepsSection/>
      <Form/>
      <Footer/>
    </main>
  );
}

export default App;
