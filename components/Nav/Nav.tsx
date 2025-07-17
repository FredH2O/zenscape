const NavMenu: string[] = [
  "Home",
  "Services",
  "Reviews",
  "Contact",
  "About Us",
];

const Nav = () => {
  return (
    <nav className=" bg-emerald-500 text-white mx-auto py-4">
      <ul className="flex gap-5 justify-center text-xl">
        {NavMenu.map((title, index) => (
          <li
            className="cursor-pointer hover:text-slate-500 transition-all duration-300"
            key={index}
          >
            <a href="">{title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
