import Link from "next/link";
import UserAction from "../UserAction/UserAction";

export type NavItem = {
  title: string;
  link: string;
};

type NavMenuProps = {
  NavMenuArray: NavItem[];
  close?: () => void;
};

const NavMenu = ({ NavMenuArray, close }: NavMenuProps) => {
  return (
    <>
      {NavMenuArray.map((item, index) => (
        <li
          className="cursor-pointer hover:text-slate-500 transition-all duration-300"
          key={index}
        >
          <Link onClick={close} href={item.link}>
            {item.title}
          </Link>
        </li>
      ))}
      <UserAction className="flex flex-col text-left gap-5 py-3 md:hidden" />
    </>
  );
};

export default NavMenu;
