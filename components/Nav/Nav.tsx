const NavMenu: string[] = [
  "Home",
  "Services",
  "Reviews",
  "Contact",
  "About Us",
];

const Nav = () => {
  return (
    <nav className="left-0 z-20 w-full py-15">
      <ul className="flex space-x-5 justify-center">
        {NavMenu.map((title, index) => (
          <li
            className="cursor-pointer hover:text-green-500 transition-all duration-300"
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
