import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// context
import { useUser } from "@/context/UserContextProvider";

// toast
import toast from "react-hot-toast";

// svg
import Menu from "@/public/svg/menu.svg";
import Logout from "@/public/svg/logout2.svg";

// constant
import { BASE_API_URL, mainMenuItems } from "@/constant";

const Sidebar = () => {
  // ** router
  const router = useRouter();

  // ** states
  const [isOpen, setIsOpen] = useState(false);

  // ** context
  const { setUser } = useUser();

  // ** handler
  const logoutHandler = async () => {
    const response = await axios.get(`${BASE_API_URL}/api/auth/signOut`);
    if (response.status === 200) {
      router.replace("/");
      toast.success(response.data.message);
      setUser(null);
    } else {
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div className="w-full lg:w-[30%] xl:w-[25%] z-10 h-auto">
        <div
          className={`bg-white rounded-br-[5rem] lg:rounded-none p-6 pr-1 w-3/4 sm:w-1/2 absolute top-0 left-0 z-30 lg:translate-x-0 lg:sticky lg:w-full ${
            isOpen ? "translate-x-0" : "translate-x-[-100%]"
          } transition-transform duration-300 ease-in-out`}
        >
          <button
            onClick={() => setIsOpen((prevState) => !prevState)}
            className={`lg:hidden absolute -z-10 -top-0 -right-12 bg-white border border-l-0 p-2 pl-10 rounded-full cursor-pointer ${
              isOpen && "border-0 pl-2"
            }`}
          >
            <Image className="w-8 h-8" src={Menu} alt="menu" />
          </button>
          <div className="h-screen flex flex-col">
            <div className="flex-grow overflow-y-auto">
              <div className="w-full">
                <h1 className="text-secondinary-200 text-xs mb-5 tracking-wider ml-4">
                  MANIN MENU
                </h1>
                <ul>
                  {mainMenuItems.map((i) => (
                    <Link
                      href="/dashboard"
                      key={i.item}
                      className="flex items-center p-4 hover:bg-primary-500 duration-300 hover:fill-white rounded-xl text-secondinary-400 font-semibold hover:text-white mb-2"
                    >
                      <Image
                        width={22}
                        height={22}
                        src={i.icon}
                        alt={i.item}
                        className="mr-3"
                      />
                      <span>{i.item}</span>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full my-8 flex-1">
              <button
                onClick={logoutHandler}
                className="flex w-full items-center p-4 hover:bg-red-500 duration-300 hover:fill-white rounded-xl text-secondinary-400 font-semibold hover:text-white mb-2"
              >
                <Image
                  width={22}
                  height={22}
                  src={Logout}
                  alt="logout"
                  className="mr-3"
                />
                <span className="">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`lg:hidden w-full absolute top-0 left-0 right-0 bg-[rgba(0,0,0,0.5)] h-full ${
          isOpen ? "block" : "hidden"
        }`}
      ></div>
    </>
  );
};

export default Sidebar;
