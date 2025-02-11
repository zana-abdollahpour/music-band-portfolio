import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Header from "@/components/hero";
import Albums from "@/components/albums";
import Promotion from "@/components/promotion";
import Discography from "@/components/discography";
import CountDown from "@/components/count-down";
import BandMembers from "@/components/band-members";
import UpcomingTours from "@/components/upcoming-tours";
import Newsletter from "@/components/newsletter";
import Presale from "@/components/presale";
import Gallery from "@/components/gallery";
import Footer from "@/components/footer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <main>
      <Albums />
      <Promotion />
      <Discography />
      <CountDown />
      <BandMembers />
      <UpcomingTours />
      <Newsletter />
      <Presale />
      <Gallery />
    </main>
    <Footer />
  </StrictMode>,
);
