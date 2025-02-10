import Header from "@/components/hero";
import Albums from "@/components/albums";
import Promotion from "@/components/promotion";
import Discography from "@/components/discography";
import CountDown from "@/components/count-down";
import BandMembers from "@/components/band-members";

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
      </main>
    </>
  );
}
