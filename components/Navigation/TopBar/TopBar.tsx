import Image from "next/image";
import UserAction from "../UserAction/UserAction";

const TopBar = () => {
  return (
    <div className="px-5 py-4 bg-emerald-50">
      <div className="container mx-auto flex flex-row justify-evenly items-center gap-10">
        <div className="md:flex justify-center items-center hidden">
          <Image
            src="/logo/zenscape-logo.png"
            alt="Zenscape Logo"
            width={50}
            height={50}
          />
          <h1 className="text-2xl italic font-bold text-slate-600">Zenscape</h1>
        </div>

        <div className="flex justify-center items-center md:w-[50%] w-full">
          <input
            type="search"
            className=" bg-slate-500/50 rounded-l-full active:bg-green-500 text-white px-5 py-2.5 placeholder:text-white w-full"
            placeholder="Search Products..."
          />
          <button className="bg-green-500/90 text-white hover:bg-green-500/50 transition-all ease-in-out duration-100 py-2.5 cursor-pointer px-3 rounded-r-full">
            Search
          </button>
        </div>

        <UserAction className={"hidden md:flex"} />
      </div>
    </div>
  );
};

export default TopBar;
