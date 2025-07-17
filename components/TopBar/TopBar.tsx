import Image from "next/image";

const TopBar = () => {
  return (
    <div className="px-5 py-3 border">
      <div className="container mx-auto flex justify-evenly items-center gap-10">
        <div className="flex justify-center items-center">
          <Image
            src="/logo/zenscape-logo.png"
            alt="Zenscape Logo"
            width={50}
            height={50}
          />
          <h1 className="text-2xl italic font-bold">Zenscape</h1>
        </div>
        <div className="flex justify-center items-center w-[50%]">
          <input
            type="search"
            className=" bg-white rounded-l-full active:bg-green-500 text-black px-5 py-2.5 placeholder:text-slate-400 w-full"
            placeholder="Search Products..."
          />
          <button className="bg-green-500 border-white border py-2.5 cursor-pointer px-3 rounded-r-full">
            Button
          </button>
        </div>

        <div className="flex gap-5">
          <p>Sign In</p>
          <p>€0.00</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
