import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-4 md:py-6 lg:py-8">
      <div className="relative h-14 w-36">
        <Image
          loading="eager"
          src="/static/images/travigo.svg"
          alt="Travigo logo"
          layout="fill"
        />
      </div>

      <button className="rounded-full bg-indigo-500 px-5 py-3 font-medium text-white focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 active:bg-indigo-600">
        Create account
      </button>
    </div>
  );
};

export default Navbar;
