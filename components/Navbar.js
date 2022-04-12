import React from "react";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-4 md:py-6 lg:py-8">
      <Link href="/">
        <a className="relative h-14 w-36">
          <Image
            loading="eager"
            src="/static/images/travigo.svg"
            alt="Travigo logo"
            layout="fill"
          />
        </a>
      </Link>

      <button className="rounded-full bg-indigo-500 px-5 py-3 font-medium text-white focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-indigo-600">
        Create account
      </button>
    </div>
  );
};

export default Navbar;
