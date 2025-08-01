"use client";
import Image from "next/image";
import { easeInOut, motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 1, ease: easeInOut }}
      className="py-12 px-6 bg-white"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <Image
          src="/images/owner.jpg"
          alt="Blake Cross standing in a greenhouse"
          width={500}
          height={400}
          priority
          className="rounded-xl shadow-md"
        />
        <div>
          <h2 className="text-2xl font-bold mb-4 text-black">
            Bringing plants to nature lovers all over{" "}
            <span className="text-emerald-500/90">Ireland</span>.
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Hello, I&apos;m <strong>Blake Cross</strong>, the proud owner of
            Zenscape.. a legacy rooted in love and soil. This humble haven began
            with my grandparents, blossomed through my parents, and now thrives
            in my hands. Whether you&apos;re looking to add a lucky bamboo to
            your windowsill or dream of building a lush greenhouse, we&apos;re
            here to grow with you.. every step of the way.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
