import Image from "next/image";

const gridImages = [
  {
    id: 1,
    image: "/images/shrub-evergreen.jpg",
    title: "Shrubs - Spring Bloom",
  },
  {
    id: 2,
    image: "/images/shrub-spring.jpg",
    title: "Shrub - Verdant Fest",
  },
  {
    id: 3,
    image: "/images/perennials.jpg",
    title: "Perennials - Light",
  },
  {
    id: 4,
    image: "/images/herbs.jpg",
    title: "Herbs - Fresh",
  },
];

const SeasonalCollection = () => {
  return (
    <section className="container m-auto text-slate-600">
      <h2 className="xl:text-4xl text-3xl text-slate-600 font-bold mb-6 xl:text-left text-center">
        Fall in love with the season 🍂
      </h2>

      <div className="relative text-2xl py-1 px-3 gap-2 grid grid-cols-2">
        {gridImages.map((collection) => (
          <div key={collection.id} className="relative">
            <Image
              className="rounded shadow-2xl w-auto h-auto"
              width={500}
              height={250}
              priority
              src={collection.image}
              alt={collection.title}
            />
            <div className="absolute bottom-0 font-bold text-slate-600 shadow text-xs md:text-lg bg-white/50 backdrop-blur-xs rounded p-2 m-2">
              <h3>{collection.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SeasonalCollection;
