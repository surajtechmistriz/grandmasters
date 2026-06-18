import { lazy, Suspense } from "react";

import Home from "./Home";
import Concept from "./Concept";
import ContactSection from "./Connect";
import RegisterPricing from "../components/RegisterPricing";
import SummitAgenda from "./Agenda";
import SpecialDiscounts from "../components/SpecialDiscounts";
import LazySection from "./LazySection";
// import LazySection from "../components/LazySection";
// import LazySection from "../components/LazySection";

// Lazy loaded components
const SpeakersSection = lazy(() => import("./Speak"));
const SponsorsPartners = lazy(() => import("./Sponser"));
const GetInvolved = lazy(() => import("../components/GetInvolvedForm"));
const SummitGallery = lazy(() => import("../components/SummitGallery"));
const BrandSponsorship = lazy(() => import("../components/BrandSponsor"));

const SectionLoader = () => (
  <div className="flex items-center justify-center py-12">
    <span className="text-gray-500">Loading...</span>
  </div>
);

export default function HomePage() {
  return (
    <>
      <section id="/" className="scroll-mt-24">
        <Home />
      </section>

      <section id="concept" className="scroll-mt-24">
         <LazySection height="1200px">
          <Suspense fallback={<SectionLoader />}>
        <Concept />
           </Suspense>
        </LazySection>
      </section>

      <section id="speakers" className="scroll-mt-24">
        <LazySection height="1200px">
          <Suspense fallback={<SectionLoader />}>
            <SpeakersSection />
          </Suspense>
        </LazySection>
      </section>

      <section id="agenda" className="scroll-mt-24">
        <LazySection height="1200px">
          <SummitAgenda />
        </LazySection>
      </section>

      <section id="register" className="scroll-mt-24">
        <LazySection>
          <RegisterPricing />
        </LazySection>
      </section>

      <section id="discount" className="scroll-mt-24">
        <LazySection>
          <SpecialDiscounts />
        </LazySection>
      </section>

      <section id="get-involved" className="scroll-mt-24">
        <LazySection>
          <Suspense fallback={<SectionLoader />}>
            <GetInvolved />
          </Suspense>
        </LazySection>
      </section>

      <section id="summit-gallery" className="scroll-mt-24">
        <LazySection>
          <Suspense fallback={<SectionLoader />}>
            <SummitGallery />
          </Suspense>
        </LazySection>
      </section>

      <section id="brand-sponsor" className="scroll-mt-24">
        <LazySection>
          <Suspense fallback={<SectionLoader />}>
            <BrandSponsorship />
          </Suspense>
        </LazySection>
      </section>

      <section id="sponsors" className="scroll-mt-24">
        <LazySection>
          <Suspense fallback={<SectionLoader />}>
            <SponsorsPartners />
          </Suspense>
        </LazySection>
      </section>

      <section id="connect" className="scroll-mt-24">
        <LazySection>
          <ContactSection />
        </LazySection>
      </section>
    </>
  );
}
