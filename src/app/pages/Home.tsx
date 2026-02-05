import React, { useState } from "react";
import { Navbar } from "@/app/components/Navbar";
import { Hero } from "@/app/components/Hero";
import { ConsultancySection } from "@/app/components/ConsultancySection";
import { NextLabSection } from "@/app/components/NextLabSection";
import { Footer } from "@/app/components/Footer";
import { Preloader } from "@/app/components/Preloader";
import { AnimatePresence } from "motion/react";

export const Home = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <Preloader onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div
        className={loading ? "h-screen overflow-hidden" : ""}
      >
        <Hero />
        <ConsultancySection />
        <NextLabSection />
      </div>
    </>
  );
};
