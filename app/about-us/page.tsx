import Image from "next/image";

const AboutUs = () => {
  return (
    <section>
      <div className="container mx-auto my-5 space-y-3 flex flex-col justify-center items-center">
        <h1 className="text-5xl text-center">About Us</h1>
        <p className="text-lg text-center max-w-4xl pb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, atque
          quidem ipsum culpa necessitatibus eaque minima similique neque quam
          hic. Et dolor impedit odio provident. Ipsum laudantium accusantium
          consequatur error?
        </p>

        <div className="lg:grid-cols-2 grid-cols-1 grid place-items-center">
          <div className="px-10">
            <h2 className="text-4xl text-center pb-3">
              We&apos;re here to get as many people to building our future.
            </h2>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              porro earum voluptate ad corporis beatae laudantium natus quam at
              voluptatum fugiat perferendis, officiis dolor, dolorem unde
              libero. Laboriosam, dolorem rerum?
            </p>
          </div>

          <div className="relative overflow-hidden">
            <Image
              className="h-[300px] object-cover"
              src="/images/about-us-1.jpg"
              alt=""
              width={500}
              height={250}
            />
            <Image
              src="/images/about-us-2.jpg"
              alt=""
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
