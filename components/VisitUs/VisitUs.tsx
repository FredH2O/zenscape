import Image from "next/image";
import AnimatedQuote from "../AnimatedIcon/AnimatedQuote";

const visitUs = [
  {
    id: 1,
    title: "Visit the Greenery",
    description: "Check our map location and opening hours.",
    image: "/images/greenery.jpg",
  },
  {
    id: 2,
    title: "Chill in the Café",
    description: "Café opening hours.",
    image: "/images/cafe.jpg",
  },
  {
    id: 3,
    title: "Peace Of Mind",
    description:
      "Step into a quiet corner of calm. Surrounded by greens, it’s more than a shop — it’s a breath of fresh air.",
    image: null,
  },
];

const VisitUs = () => {
  return (
    <section className="space-y-5 py-10 px-3">
      <h2 className="text-4xl md:text-5xl font-bold text-slate-600">
        Plan you adventure - visit us in Offaly
      </h2>
      <p className="font-bold text-slate-600">
        Enjoy a wander around the greenery. Then treat yourself to a cup of
        coffee and something nice to ear in our café.{" "}
      </p>
      <div className="relative grid md:grid-cols-3 grid-cols-1 gap-5 ">
        {visitUs.map((item) => (
          <div
            key={item.id}
            className="relative md:min-h-[300px] min-h-[600px]"
          >
            {item.image && (
              <Image
                src={item.image}
                alt={item.title}
                className="rounded-2xl"
                width={500}
                height={500}
              />
            )}
            <div
              className={`absolute rounded-2xl space-y-3 text-center ${
                item.image ? "bg-black/40" : "bg-emerald-500 text-slate-700"
              }  p-5 inset-0 flex flex-col justify-center items-center`}
            >
              {!item.image && <AnimatedQuote />}
              <h3 className="text-4xl">{item.title}</h3>
              <p className="">{item.description}</p>
              {!item.image && <AnimatedQuote />}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisitUs;
