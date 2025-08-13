import Image from "next/image";

const Contact = () => {
  return (
    <section className="bg-emerald-50 text-slate-700 h-screen">
      <div>
        <div>
          <Image src="" alt="" />
          <h1>We&apos;d love to hear from you</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,
            iusto? Odit hic eum voluptate porro, asperiores vel id impedit quae,
            rerum soluta fuga maxime? Quaerat, sapiente! Dignissimos amet saepe
            architecto.
          </p>
        </div>

        <div>
          {/* react icon here */}
          <h2>Sales Enquiries</h2>
          <p>Interested in any of our products? Talk to our experts today.</p>
          <ul>
            <li>UK: +44 8080 123 456</li>
            <li>Dublin: +353 123 232 1234</li>
            <li>Galway: +353 345 434 1233</li>
          </ul>
        </div>

        <div>
          <form action="">
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                className="border"
                maxLength={20}
              />

              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                maxLength={20}
                className="border"
              />
            </div>

            <label htmlFor="email"></label>
            <input type="email" />

            <textarea placeholder="Text message" className="border"></textarea>

            <button>Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
