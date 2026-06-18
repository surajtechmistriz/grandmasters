import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "sonner";

import { lazy, Suspense } from "react";
import HomePage from "./pages/HomePage";

const PastEdition = lazy(() => import("./pages/Past-Editions"));
const EditionOverview = lazy(() => import("./pages/PastEvent-Detail"));
const AudienceProfile = lazy(() => import("./pages/AudienceProfile"));
const AboutUs = lazy(() => import("./pages/About-Us"));
const OfficialMessage = lazy(() => import("./pages/Official-Message"));
const Cart = lazy(() => import("./components/Cart"));
const SummitSecretariat = lazy(() => import("./pages/SummitSecretariat"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const EventPage = lazy(() => import("./pages/EventPage"));
const PaymentSuccess = lazy(() => import("./components/PaymentSuccess"));
const NotFound = lazy(() => import("./components/NotFound"));

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");

      setTimeout(() => {
        const element = document.getElementById(id);

        if (element) {
          const y =
            element.getBoundingClientRect().top + window.pageYOffset - 120; // navbar height + spacing

          window.scrollTo({
            top: y,
            behavior: "smooth",
          });
        }
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

      <Suspense fallback={<div>Loading...</div>}>
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
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Toaster position="bottom-right" theme="light" />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
