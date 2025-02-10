import { cn } from "@/utils";

import Member1 from "@/assets/images/members/members-1.jpg";
import Member2 from "@/assets/images/members/members-2.jpg";
import Member3 from "@/assets/images/members/members-3.jpg";

const membersData = [
  { name: "Jonas Joestar", role: "Lead Vocalist", image: Member1 },
  { name: "John Smith", role: "Lead Guitarist", image: Member2 },
  { name: "Jeremy James", role: "Lead Drummer", image: Member3 },
];

export default function CountDown() {
  return (
    <>
      <section
        className={cn(
          "bg-blue flex flex-col gap-y-10 p-4 sm:p-8 md:p-12 lg:p-16",
          "bg-[linear-gradient(to_top,#0a214e90,#0a214e40),url(showcase.jpg)] bg-cover bg-center",
        )}
      >
        <h2
          className={cn(
            "relative z-[1] self-center px-1 text-center text-2xl font-black uppercase sm:text-4xl sm:font-medium",
            "after after:bg-golden after:bottom-0.5 after:left-0 after:-z-[1] after:h-3 after:w-full after:blur-sm",
          )}
        >
          Upcoming Tour
        </h2>

        <p className="text-center text-lg lg:text-2xl">
          Friday to Sunday Aug 18 to 20, 2027
        </p>
      </section>

      <section className="bg-blue flex flex-col gap-y-10 p-4 sm:p-8 md:p-12 lg:p-16">
        <h2
          className={cn(
            "relative z-[1] self-center px-1 text-center text-2xl font-black uppercase sm:text-4xl sm:font-medium",
            "after after:bg-golden after:bottom-0.5 after:left-0 after:-z-[1] after:h-3 after:w-full after:blur-sm",
          )}
        >
          Band Members
        </h2>

        <div className="grid gap-6 sm:grid-cols-3 sm:gap-8">
          {membersData.map((member) => (
            <div key={member.name} className="bg-golden space-y-5 pb-4 pl-4">
              <figure>
                <img src={member.image} alt="" />
              </figure>

              <div>
                <h6 className="text-slate text-xl font-bold uppercase">
                  {member.name}
                </h6>
                <p className="text-lg">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
