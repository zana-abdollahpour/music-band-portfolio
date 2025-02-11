import { cn } from "@/utils";

const contactData = [
  {
    department: "Booking",
    contactName: "Jane Doe",
    email: "booking@lamusica.com",
  },
  {
    department: "Press",
    contactName: "John Smith",
    email: "press@lamusica.com",
  },
  {
    department: "Info",
    contactName: "Steve Alavi",
    email: "info@lamusica.com",
  },
] as const;

export default function Footer() {
  return (
    <footer
      className={cn(
        "bg-blue flex flex-col gap-y-10 p-4 sm:p-8 md:p-12 lg:p-16",
        "bg-[linear-gradient(to_top,#0a214e90,#0a214e40),url(footer.jpg)] bg-cover bg-center",
      )}
    >
      <h2
        className={cn(
          "relative z-[1] self-center px-1 text-center text-2xl font-black uppercase sm:text-4xl sm:font-medium",
          "after after:bg-golden after:bottom-0.5 after:left-0 after:-z-[1] after:h-3 after:w-full after:blur-sm",
        )}
      >
        Stay in Touch
      </h2>

      <div className="*:border-golden grid gap-5 *:space-y-2 *:border *:p-6 *:text-center *:backdrop-blur-md sm:grid-cols-3">
        {contactData.map((contact) => (
          <div key={contact.email}>
            <h3 className="text-lg font-bold">{contact.department}</h3>
            <h5 className="text-lg uppercase">{contact.contactName}</h5>
            <a
              href={contact.email}
              className="decoration-golden underline decoration-2"
            >
              {contact.email}
            </a>
          </div>
        ))}
      </div>
    </footer>
  );
}
