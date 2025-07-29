import Image from "next/image";

const BrowseOurRange = () => {
  return (
    <section className="relative text-slate-700 max-w-7xl">
      <div className="grid lg:grid-cols-2 lg:rounded-2xl rounded-none px-3 xl:px-0">
        <Image
          className="lg:rounded-l-2xl  shadow-black rounded-t-2xl lg:rounded-r-none lg:h-[700px] h-[500px] object-cover"
          priority
          src="/images/browse-image.jpg"
          alt="Browse Image"
          width={1000}
          height={1000}
        />
        <div className="bg-emerald-500/20 shadow-black shadow-2xl text-center lg:rounded-tr-2xl lg:rounded-br-2xl lg:rounded-b-none rounded-b-2xl flex flex-col justify-center items-center px-10 py-10 space-y-10">
          <h2 className="text-4xl">Choose the right plants for your garden.</h2>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
            eligendi, expedita nisi fugiat quibusdam id consequatur eos
            deleniti, labore neque dicta! Voluptate est vero numquam officiis
            obcaecati suscipit blanditiis autem?
          </p>
          <button className="bg-emerald-500 border-b-2 border-black/30 hover:translate-y-0.5 ease-in-out duration-100 px-6 py-3 rounded-full text-white text-sm">
            Browse Our Range
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrowseOurRange;
