import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import AboutSection from "./section/AboutSection";
import Form from "./section/Form";
import Hero from "./section/Hero";
import ReviewsSection from "./section/ReviewsSection";
import StepsSection from "./section/StepsSection";
import WhyMeSection from "./section/WhyMeSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <main style={{ padding: "1em 0.3em 0" }}>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <AboutSection />
                <ReviewsSection />
                <WhyMeSection />
                <StepsSection />
                <Form />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
