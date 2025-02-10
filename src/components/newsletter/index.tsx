export default function Newsletter() {
  return (
    <section className="bg-blue flex flex-col gap-y-10 p-4 sm:p-8 md:p-12 lg:p-16">
      <div className="border-golden flex flex-col gap-y-5 border p-4 lg:mx-auto lg:w-2/4 lg:border-4 lg:border-dashed lg:border-white lg:p-8">
        <h3 className="text-center text-lg uppercase sm:text-2xl sm:font-semibold">
          Subscribe for free downloads <br />
          and band news updates
        </h3>
        <form className="flex flex-col gap-4 md:flex-row md:items-center">
          <input
            className="bg-golden p-3 outline-none placeholder:text-white/60 sm:grow"
            type="email"
            placeholder="Email Address"
          />
          <input
            className="border-golden border-2 p-2 sm:px-6"
            type="submit"
            value="Subscribe"
          />
        </form>
      </div>
    </section>
  );
}
