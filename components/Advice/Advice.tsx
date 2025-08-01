import Image from "next/image";

const addDays = (days: number) => {
  const result = new Date();
  result.setDate(result.getDate() + days);
  return result;
};

const advice = [
  {
    id: 1,
    date: addDays(-2),
    image: "/images/bamboo-advice.jpg",
    title: "Healthy Lucky Bamboos",
    alt: "How to have a healthy bamboo!",
  },
  {
    id: 2,
    date: addDays(-12),
    image: "/images/monstera-advice.jpg",
    title: "Planting Monsteras",
    alt: "Making Monsteras into real monsters.",
  },
  {
    id: 3,
    date: addDays(-25),
    image: "/images/soil.jpg",
    title: "Using The Right Soil",
    alt: "Soil for the future",
  },
  {
    id: 4,
    date: addDays(-2),
    image: "/images/watering.jpg",
    title: "Watering Just Right",
    alt: "Clean water is the key",
  },
];

const Advice = () => {
  return (
    <section className="text-slate-600 py-12 px-6">
      <h2 className="text-2xl font-bold mb-2">
        Some gardening advice for you:
      </h2>
      <p className="mb-6">
        Fine-tune your gardening skills with our latest advice on plants,
        planting, and growing.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {advice.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <Image width={500} height={300} src={item.image} alt={item.alt} />
            <div className="p-4">
              <p className="text-sm text-emerald-500 font-medium">
                {item.date.toLocaleDateString("en-IE", {
                  month: "long",
                  day: "2-digit",
                  year: "numeric",
                })}
              </p>
              <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advice;
