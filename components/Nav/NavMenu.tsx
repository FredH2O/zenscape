type NavMenuProps = {
  NavMenuArray: string[];
};

const NavMenu = ({ NavMenuArray }: NavMenuProps) => {
  return (
    <>
      {NavMenuArray.map((title, index) => (
        <li
          className="cursor-pointer hover:text-slate-500 transition-all duration-300"
          key={index}
        >
          <a href="">{title}</a>
        </li>
      ))}
    </>
  );
};

export default NavMenu;
