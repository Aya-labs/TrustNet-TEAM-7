import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {

    
    return (
      <div>
        <div className="container mx-auto">
          <header className="flex items-center justify-center h-20">
            {" "}
            <Image src="/" alt="Trustnet Logo" width={40} height={56} className="absolute left-0" ></Image>
            <h1 className="trust text-2xl font-semibold absolute left-10 "> Trustnet </h1>

            <Link
             href={"/app/Overview"}>
                <button className="launchb bg-#034748 py-2 px-6 rounded-lg absolute right-20 bg-center">
                    Launch Dapp
                </button>
            </Link>
          </header>
        </div>
      </div>
    );
  };
  
  export default Navbar;