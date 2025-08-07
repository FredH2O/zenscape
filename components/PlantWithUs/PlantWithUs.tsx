import Image from "next/image";

const PlantWithUs = () => {
  return (
    <section className="text-slate-700 px-5">
      <div className="flex rounded-md overflow-hidden flex-col lg:flex-row">
        <Image
          className="object-cover w-full h-[600px]"
          width={500}
          height={250}
          src="/images/plant-with-us.jpg"
          alt="Our team are dedicated for the future."
        />
        <div className="bg-emerald-500/20 flex flex-col space-y-5 text-center justify-center items-center md:p-10 lg:p-15 p-5">
          <div>
            <h2 className="lg:text-5xl text-4xl font-bold">
              Plant a Tree — Nurture the Future
            </h2>
            <h3 className="text-xl mt-2 mb-4 text-gray-700/50 font-semibold">
              A Fundraising Initiative for a Greener Tomorrow
            </h3>
          </div>

          <p className="leading-relaxed text-lg text-gray-600">
            With a contribution of just €10, you can become part of a lasting
            legacy. We will plant a native tree in County Offaly on your behalf
            — a gesture of renewal that supports the environment and invests in
            the well-being of future generations. Together, let’s grow a future
            our children can thrive in.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlantWithUs;
