import { FaFacebook, FaInstagram, FaLinkedin, FaSpotify } from "react-icons/fa";

const informationLinks = [
  "Search",
  "Advice",
  "Privacy Policy",
  "Refund Policy",
  "Shipping Policy",
  "Terms of Service",
  "Copyrights",
];

const adviceLinks = [
  "Potted vs Bareroot",
  "How to plant a tree",
  "Fruit Tree Rootstocks",
  "Pruning Apple Trees",
  "Resources",
];

const socialLinks = [
  {
    id: 1,
    icon: <FaFacebook />,
    href: "https://www.facebook.com/",
    color: "text-blue-500",
  },
  {
    id: 2,
    icon: <FaInstagram />,
    href: "https://www.instagram.com/",
    color: "text-pink-500",
  },
  {
    id: 3,
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/",
    color: "text-cyan-500",
  },
  {
    id: 4,
    icon: <FaSpotify />,
    href: "https://open.spotify.com/",
    color: "text-green-500",
  },
];

const Footer = () => {
  return (
    <footer className="bg-slate-600 text-white border-slate-900 border-t-2">
      <div className="grid grid-cols-3 max-w-7xl mx-auto">
        <div className="gap-5 flex flex-col justify-start p-20">
          <p className="font-semibold">
            Zenscape has been supplying plants by mail order since 1986 and
            selling online since 2016.
          </p>
          <address>
            Zenscape
            <br />
            Kealkill
            <br />
            Bantry
            <br />
            Co Offaly
            <br />
            Ireland
            <br />
            O11 J891
          </address>
          <address className="not-italic text-sm leading-relaxed">
            <a
              href="mailto:info@zenscape.ie"
              className="hover:text-blue-600 underline"
            >
              info@zenscape.ie
            </a>
            <br />
            <a href="tel:+3531231231" className="text-blue-600 underline">
              Tel: +353 (0)11 23123
            </a>
            <br />
            Office Hours: Mon to Sat 10am to 4pm
          </address>
        </div>
        <div className="gap-5 flex flex-col justify-start p-20">
          <h3 className="text-2xl">Information</h3>
          <ul className="space-y-1">
            {informationLinks.map((link) => (
              <li
                className="text-slate-400 hover:text-slate-100 transition-all duration-150 ease-in-out"
                key={link}
              >
                <a href="#"> {link} </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="gap-5 flex flex-col justify-start p-20">
          <h3 className="text-2xl">Gardening Advice</h3>
          <ul>
            {adviceLinks.map((link) => (
              <li
                className="text-slate-400 hover:text-slate-100 transition-all duration-150 ease-in-out"
                key={link}
              >
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
          <div className="flex gap-3 text-2xl">
            {socialLinks.map((link) => (
              <div key={link.id}>
                <a target="_blank" className={`${link.color}`} href={link.href}>
                  {link.icon}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-500/70 p-5 text-center">
        <a
          href="https://github.com/FredH2O"
          target="_blank"
          className="hover:text-emerald-500 transition-all duration-150 italic text-sm"
        >
          &copy;Fred{`${new Date().getFullYear()}`}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
