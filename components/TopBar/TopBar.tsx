import Image from "next/image";

const TopBar = () => {
  return (
    <div className="container mx-auto gap-10 p-3 flex justify-evenly items-center border">
      <div className="flex justify-center items-center">
        <Image
          src="/logo/zenscape-logo.png"
          alt="Zenscape Logo"
          width={50}
          height={50}
        />
        <h1 className="text-2xl italic font-bold">Zenscape</h1>
      </div>

      <input
        type="search"
        className=" bg-white rounded-full p-3 placeholder:text-slate-400 w-full"
        placeholder="Search Products..."
      />
      <div className="flex gap-1">
        <p>Sign In</p>
        <p>€0.00</p>
      </div>
    </div>
  );
};

export default TopBar;
