import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "sonner";

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
import NotFound from "./components/NotFound";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");

      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 200);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname, location.hash]);

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
        <Route path="/:slug" element={<EditionOverview />} />
        <Route path="/audience-profile" element={<AudienceProfile />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/official-message/:slug" element={<OfficialMessage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/summit-secretariat" element={<SummitSecretariat />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Toaster position="bottom-right" theme="light" />
      <Footer />
    </BrowserRouter>
  );
}

export default App;