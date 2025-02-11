import Header from "@/components/hero";
import Albums from "@/components/albums";
import Promotion from "@/components/promotion";
import Discography from "@/components/discography";
import CountDown from "@/components/count-down";
import BandMembers from "@/components/band-members";
import UpcomingTours from "@/components/upcoming-tours";
import Newsletter from "@/components/newsletter";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Albums />
        <Promotion />
        <Discography />
        <CountDown />
        <BandMembers />
        <UpcomingTours />
        <Newsletter />
      </main>
    </>
  );
}
