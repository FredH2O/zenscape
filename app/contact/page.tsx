"use client";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

const contactDetails = [
  {
    area: "UK",
    number: "+44 7272 828 383",
  },
  {
    area: "Ireland",
    number: "+44 7272 828 383",
  },
  {
    area: "Philippines",
    number: "+44 7272 828 383",
  },
  {
    area: "India",
    number: "+44 7272 828 383",
  },
  {
    area: "China",
    number: "+44 7272 828 383",
  },
  {
    area: "USA",
    number: "+44 7272 828 383",
  },
  {
    area: "Brazil",
    number: "+44 7272 828 383",
  },
  {
    area: "Cambodia",
    number: "+44 7272 828 383",
  },
];

const Contact = () => {
  const [sent, setSent] = useState<boolean>();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    console.log("message sent!");
  };

  return (
    <section className="relative bg-emerald-50 text-slate-700 h-full py-10">
      {sent && (
        <div className="relative w-full h-screen">
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed h-full w-full justify-center flex items-center transition-all duration-75 ease-in bg-emerald-500 z-50 text-white"
          >
            <p>message sent!</p>
          </motion.div>
        </div>
      )}
      <div className="relative w-full text-center flex flex-col justify-center items-center">
        {/* sent notification */}

        <div className="relative w-full z-0 h-[200px]">
          <Image
            className="object-cover"
            src="/images/form-background.jpg"
            fill
            sizes="100vw"
            alt="Leaves to calm the mind."
          />
        </div>

        <div className="absolute top-0 z-5 inset-0 bg-black/60 w-full"></div>
        <div className="absolute z-10 top-0 text-white max-w-5xl min-h-full flex flex-col justify-center px-5">
          <h1 className="md:text-5xl text-3xl pb-3">
            We&apos;d love to hear from you
          </h1>
          <p className="lg:text-lg text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,
            iusto? Odit hic eum voluptate porro, asperiores vel id impedit quae,
            rerum soluta fuga maxime? Quaerat, sapiente! Dignissimos amet saepe
            architecto.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-2 flex justify-center items-center">
        <div className="grid lg:grid-cols-2 py-10">
          <div className="space-y-2 p-10">
            {/* react icon here */}
            <h2 className="text-3xl font-semibold">Sales Enquiries</h2>
            <p className="italic">
              Interested in any of our products? Talk to our experts today.
            </p>
            <ul className="gap-2 flex flex-col">
              {contactDetails.map((contact) => (
                <li key={contact.area}>
                  <span className="font-bold">{contact.area}</span>:{" "}
                  {contact.number}
                </li>
              ))}
            </ul>
          </div>

          <form
            className="max-w-lg bg-emerald-200/40 rounded flex justify-center lg:p-10 p-5 flex-col"
            action=""
            onSubmit={handleSubmit}
          >
            <h2 className="text-3xl font-semibold">Get in touch with us</h2>
            <p className="italic">Let us know what&apos;s on your mind</p>

            <div className="flex flex-col gap-3 py-3">
              <div className=" flex justify-center gap-3 items-center">
                <input
                  aria-label="First Name"
                  placeholder="First Name"
                  type="text"
                  id="firstName"
                  className="border py-2 w-full placeholder:text-xl rounded text-center"
                  maxLength={20}
                />

                <input
                  aria-label="Last Name"
                  placeholder="Last Name"
                  type="text"
                  id="lastName"
                  maxLength={20}
                  className="border py-2 w-full placeholder:text-xl rounded text-center"
                />
              </div>

              <input
                aria-label="Email"
                type="email"
                placeholder="Email"
                className="border text-center py-2 rounded placeholder:text-2xl"
              />

              <textarea
                aria-label="Message"
                placeholder="Text message"
                rows={10}
                className="border text-start px-3 py-2 rounded placeholder:text-2xl"
              ></textarea>

              <button className="bg-emerald-500 hover:bg-emerald-600 cursor-pointer p-3 rounded text-white">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
