import Image from "next/image";

const PlantWithUs = () => {
  return (
    <section className="text-slate-700 px-5">
      <div className="flex flex-col lg:flex-row">
        <Image
          width={500}
          height={250}
          src="/images/plant-with-us.jpg"
          alt="Our team are dedicated for the future."
        />
        <div className="border flex flex-col justify-center items-center p-5">
          <h2 className="lg:text-5xl text-4xl font-semibold">
            Plant a Tree — Nurture the Future
          </h2>
          <h3 className="text-2xl mt-2 mb-4 text-gray-700/80">
            A Fundraising Initiative for a Greener Tomorrow
          </h3>
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
