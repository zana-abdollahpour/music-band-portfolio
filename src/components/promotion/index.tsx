import { FaTicket } from "react-icons/fa6";

export default function Promotion() {
  return (
    <section className="bg-blue flex flex-col gap-y-10 bg-[linear-gradient(to_top,#0a214e90,#0a214e40),url(upcoming-tour.jpg)] bg-cover bg-center p-4 sm:p-8 md:p-12 lg:p-16">
      <div className="flex flex-col gap-y-5">
        <h2 className="after after:bg-golden relative z-[1] self-center px-1 text-center text-2xl font-black uppercase after:bottom-0.5 after:left-0 after:-z-[1] after:h-3 after:w-full after:blur-sm sm:text-4xl sm:font-medium">
          A different kind of music
        </h2>

        <p className="text-center text-lg lg:mx-auto lg:w-2/4 lg:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          tempora nobis aliquam voluptates iusto assumenda excepturi itaque,
          commodi autem, blanditiis debitis repellendus quas placeat soluta
          atque cumque maxime vitae nihil.
        </p>
      </div>

      <div className="grid gap-5 *:border-2 *:p-4 *:text-center sm:grid-cols-2 md:grid-cols-3">
        <div className="bg-golden border-blue text-blue">
          <h6 className="mb-3 text-lg font-bold">Where</h6>
          <p>890 Fifth Avenue, Manhattan</p>
          <p>New York City</p>
        </div>

        <div className="bg-blue border-golden text-golden">
          <h6 className="mb-3 text-lg font-bold">When</h6>
          <p>Friday to Sunday</p>
          <p>Aug 18 to 20, 2027</p>
        </div>

        <button className="bg-blue flex items-center justify-center gap-x-3 border-white sm:col-span-2 md:col-auto md:self-center">
          <FaTicket />
          <span>Buy a Ticket</span>
        </button>
      </div>
    </section>
  );
}
