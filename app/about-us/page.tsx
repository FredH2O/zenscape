import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="bg-emerald-50 text-slate-600 py-20">
      <div className="max-w-6xl mx-auto py-5 space-y-3 flex flex-col justify-center items-center">
        <h1 className="text-5xl text-center">About Us</h1>
        <p className="text-lg text-center px-5 max-w-4xl pb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, atque
          quidem ipsum culpa necessitatibus eaque minima similique neque quam
          hic. Et dolor impedit odio provident. Ipsum laudantium accusantium
          consequatur error?
        </p>

        <div className="relative lg:grid-cols-2 grid-cols-1 grid place-items-center px-3">
          <div className="static lg:absolute lg:top-30 lg:right-20 lg:z-10 rounded-xl lg:w-1/2 lg:px-10 lg:bg-slate-600/90 p-3 lg:text-white py-15">
            <h2 className="text-4xl text-center pb-3">
              We&apos;re here to get as many people to building our{" "}
              <span className="text-emerald-400 font-semibold italic text-shadow-lg">
                future
              </span>
              .
            </h2>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              porro earum voluptate ad corporis beatae laudantium natus quam at
              voluptatum fugiat perferendis, officiis dolor, dolorem unde
              libero. Laboriosam, dolorem rerum?
            </p>
          </div>

          <div className="relative overflow-hidden rounded">
            <Image
              className="h-[300px] object-cover"
              src="/images/about-us-1.jpg"
              alt="Community volunteers for keeping our place greener."
              width={500}
              height={250}
            />
            <Image
              src="/images/about-us-2.jpg"
              alt="Teaching our kids at an early stage."
              width={500}
              height={250}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
