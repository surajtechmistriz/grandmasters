import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./pages/Footer";

import HomePage from "./pages/HomePage";
import PastEdition from "./pages/Past-Editions";
import EditionOverview from "./pages/PastEvent-Detail";
import AudienceProfile from "./pages/AudienceProfile";
import AboutUs from "./pages/About-Us";
import OfficialMessage from "./pages/Official-Message";
import Cart from "./components/Cart";
import SummitSecretariat from "./pages/SummitSecretariat";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/past-edition" element={<PastEdition />} />
        <Route path="/past-event-detail" element={<EditionOverview />} />
        <Route path="/audience-profile"  element={<AudienceProfile/>} />
        <Route path="/about-us"  element={<AboutUs/>} />
        <Route path="/official-message"  element={<OfficialMessage/>} />
        <Route path="/cart"  element={<Cart/>} />
        <Route path="/summit-secretariat"  element={<SummitSecretariat/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;