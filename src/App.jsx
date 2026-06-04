import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import PastEdition from "./pages/Past-Editions";
import EditionOverview from "./pages/PastEvent-Detail";
import AudienceProfile from "./pages/AudienceProfile";
import AboutUs from "./pages/About-Us";
import OfficialMessage from "./pages/Official-Message";
import Cart from "./components/Cart";
import SummitSecretariat from "./pages/SummitSecretariat";
import CheckoutPage from "./pages/CheckoutPage";
import EventPage from "./pages/EventPage";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");

      const scrollToElement = () => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };

      setTimeout(scrollToElement, 200);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/past-edition" element={<PastEdition />} />
        <Route path="/past-event-detail" element={<EditionOverview />} />
        <Route path="/audience-profile" element={<AudienceProfile />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/official-message" element={<OfficialMessage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/summit-secretariat" element={<SummitSecretariat />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/events" element={<EventPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
