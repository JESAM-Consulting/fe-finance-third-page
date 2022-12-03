import React, { useEffect, useState } from "react";
import ContactModal from "../ContactModal";
import "../home/home.scss";
import ClientSection from "./clientSection";
import DeinSection from "./deinSection";
import Footer from "./footer";
import Herobanner from "./herobanner";
import KannstBanner from "./kannstBanner";
import NewsSection from "./newsSection";
import UnserSection from "./unserSection";
import WeilSection from "./weilSection";
import WirSection from "./wirSection";
export default function Home() {
  return (
    <>
      <Herobanner />
      <WeilSection />
      <DeinSection />
      <KannstBanner />
      <UnserSection />
      <ClientSection />
      <WirSection />
      <NewsSection />
      <Footer />
    </>
  );
}
