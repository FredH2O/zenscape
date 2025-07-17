import Image from "next/image";
import {
  FaShoppingCart as ShoppingCartIcon,
  FaUser as UserIcon,
} from "react-icons/fa";

const userIcons = [
  {
    name: "Sign-in",
    icon: <UserIcon className="text-2xl" />,
  },
  {
    name: "Cart",
    icon: <ShoppingCartIcon className="text-2xl" />,
  },
];

const TopBar = () => {
  return (
    <div className="px-5 py-4 bg-emerald-50">
      <div className="container mx-auto flex justify-evenly items-center gap-10">
        <div className="flex justify-center items-center">
          <Image
            src="/logo/zenscape-logo.png"
            alt="Zenscape Logo"
            width={50}
            height={50}
          />
          <h1 className="text-2xl italic font-bold text-slate-600">Zenscape</h1>
        </div>
        <div className="flex justify-center items-center w-[50%]">
          <input
            type="search"
            className=" bg-slate-500/50 rounded-l-full active:bg-green-500 text-white px-5 py-2.5 placeholder:text-white w-full"
            placeholder="Search Products..."
          />
          <button className="bg-green-500/90 text-white hover:bg-green-500/50 transition-all ease-in-out duration-100 py-2.5 cursor-pointer px-3 rounded-r-full">
            Search
          </button>
        </div>

        <div className="flex gap-5 text-center">
          {userIcons.map((user) => (
            <button
              key={user.name}
              className="flex flex-col text-slate-600 justify-center items-center cursor-pointer"
            >
              {user.icon} {user.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
