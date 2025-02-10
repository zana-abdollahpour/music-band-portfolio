import Header from "@/components/hero";
import Albums from "@/components/albums";
import Promotion from "@/components/promotion";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Albums />
        <Promotion />
      </main>
    </>
  );
}
