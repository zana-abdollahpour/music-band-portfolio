import Header from "@/components/hero";
import Albums from "@/components/albums";
import Promotion from "@/components/promotion";
import Discography from "@/components/discography";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Albums />
        <Promotion />
        <Discography />
      </main>
    </>
  );
}
