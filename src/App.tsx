import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { DestinationsPage } from "./pages/DestinationsPage";
import { TestimonialsPage } from "./pages/TestimonialsPage";
import { NewsPage } from "./pages/NewsPage";
import { ContactPage } from "./pages/ContactPage";
import { WhyStudyAustralia } from "./pages/AustraliaDestinationPage";
import { CanadaDestinationPage } from "./pages/CanadaDestinationPage";
import { IrelandDestinationPage } from "./pages/IrelandDestinationPage";
import { UKDestinationPage } from "./pages/UKDestinationPage";
import { USADestinationPage } from "./pages/USADestinationPage";
import { GermanyDestinationPage } from "./pages/GermanyDestinationPage";
import { NewZealandDestinationPage } from "./pages/NewZealandDestinationPage";
import { useState, useEffect } from "react";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <Layout scrolled={scrolled} />
    </BrowserRouter>
  );
}

function Layout({ scrolled }: { scrolled: boolean }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header scrolled={scrolled} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/destinations/australia" element={<WhyStudyAustralia />} />
          <Route path="/destinations/canada" element={<CanadaDestinationPage />} />
          <Route path="/destinations/ireland" element={<IrelandDestinationPage />} />
          <Route path="/destinations/uk" element={<UKDestinationPage />} />
          <Route path="/destinations/usa" element={<USADestinationPage />} />
          <Route path="/destinations/germany" element={<GermanyDestinationPage />} />
          <Route path="/destinations/newzealand" element={<NewZealandDestinationPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;