import { FaTicket } from "react-icons/fa6";

import { cn } from "@/utils";

import TourList from "@/assets/images/tours/tours-list.jpg";

const toursData = [
  { date: "10 Jan", location: "Washington DC, USA", arena: "Capital Arena" },
  { date: "24 May", location: "Houston, TX, USA", arena: "Arena Theatre" },
  { date: "28 Oct", location: "Chicago, IL, USA", arena: "United Center" },
  { date: "21 Dec", location: "Melbourne, AU", arena: "Rod Laver Arena" },
] as const;

export default function UpcomingTours() {
  return (
    <section className="bg-blue flex flex-col gap-y-10 p-4 sm:p-8 md:p-12 lg:p-16">
      <h2
        className={cn(
          "relative z-[1] self-center px-1 text-center text-2xl font-black uppercase sm:text-4xl sm:font-medium",
          "after after:bg-golden after:bottom-0.5 after:left-0 after:-z-[1] after:h-3 after:w-full after:blur-sm",
        )}
      >
        Upcoming Tours
      </h2>

      <figure className="space-y-4">
        <img className="w-full" src={TourList} alt="" />
        <figcaption className="text-center text-lg">
          The American Tour
        </figcaption>
      </figure>

      <div className="space-y-6">
        <div className="border-golden divide-golden divide-y border *:flex *:justify-between *:p-4 sm:*:px-6">
          {toursData.map((tour) => (
            <div key={tour.arena}>
              <p className="font-bold md:text-xl">{tour.date}</p>

              <div>
                <h6 className="text-golden text-xs md:text-xl">
                  {tour.location}
                </h6>
                <h6 className="text-golden text-xs md:text-xl">{tour.arena}</h6>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row-reverse sm:items-center">
                <a
                  className="border-golden flex items-center gap-x-2 border-2 px-3 py-1 text-xs md:gap-x-4 md:border-white md:px-6 md:text-lg"
                  href="#"
                >
                  <FaTicket className="text-xs md:text-lg" />
                  <span>VIP</span>
                </a>

                <a
                  className="bg-golden text-blue flex items-center gap-x-2 px-3 py-1 text-xs md:gap-x-4 md:border-2 md:border-white md:px-6 md:text-lg"
                  href="#"
                >
                  <FaTicket className="text-xs md:text-lg md:text-white" />
                  <span>Buy Ticket</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
