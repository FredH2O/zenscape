import Image from "next/image";

const Contact = () => {
  return (
    <section className="bg-emerald-50 text-slate-700 h-screen py-10">
      <div className="border max-w-6xl mx-auto p-10">
        <div className="max-w-5xl text-center">
          <Image src="" alt="" />
          <h1 className="text-5xl">We&apos;d love to hear from you</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,
            iusto? Odit hic eum voluptate porro, asperiores vel id impedit quae,
            rerum soluta fuga maxime? Quaerat, sapiente! Dignissimos amet saepe
            architecto.
          </p>
        </div>

        <div className="grid grid-cols-2 py-10">
          <div className="space-y-2 p-10">
            {/* react icon here */}
            <h2 className="text-3xl">Sales Enquiries</h2>
            <p>Interested in any of our products? Talk to our experts today.</p>
            <ul className="gap-2 flex flex-col">
              <li>UK: +44 8080 123 456</li>
              <li>Dublin: +353 123 232 1234</li>
              <li>Galway: +353 345 434 1233</li>
            </ul>
          </div>

          <form
            className="space-y-3 max-w-lg flex justify-center border p-10 flex-col"
            action=""
          >
            <h2 className="text-3xl">Get in touch with us</h2>
            <div className=" flex justify-center gap-2 items-center">
              <input
                placeholder="First Name"
                type="text"
                id="firstName"
                className="border py-2 placeholder:text-xl rounded text-center"
                maxLength={20}
              />

              <input
                placeholder="Last Name"
                type="text"
                id="lastName"
                maxLength={20}
                className="border py-2 placeholder:text-xl rounded text-center"
              />
            </div>

            <label htmlFor="email"></label>
            <input
              type="email"
              placeholder="Email"
              className="border text-center py-2 rounded placeholder:text-2xl"
            />

            <textarea
              placeholder="Text message"
              rows={10}
              className="border text-start px-3 py-2 rounded placeholder:text-2xl"
            ></textarea>

            <button className="bg-blue-500 p-3 rounded text-white">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
