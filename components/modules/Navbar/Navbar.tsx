import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// components
import NavbarSearch from "./NavbarSearch";

// icons
import LoginIcon from "@/public/svg/login.svg";
import SettingIcon from "@/public/svg/setting-icon.svg";
import NotificationIcon from "@/public/svg/notification.svg";
import UserIcon from "@/public/svg/user-icon.svg";

// axios
import axios from "axios";

// context
import { useUser } from "@/context/UserContextProvider";

const Navbar = () => {
  // ** states
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // ** context
  const { user, setUser } = useUser();

  // ** useEffect
  useEffect(() => {
    const getData = async () => {
      try {
        const { data, status } = await axios.get(
          "http://localhost:3000/api/auth/me"
        );
        if (status === 200) {
          setUser(data.data);
        }
      } catch (error) {
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    if (!user) {
      getData();
    }
  }, [user, setUser]);

  return (
    <div
      className={`${
        isLoading && !user ? "blur-sm" : "blur-none"
      } flex flex-col md:flex-row bg-white md:items-center md:border-b md:border-[#C3D4E966] px-6 md:px-16 py-4`}
    >
      <div className="flex items-center justify-between mb-8 md:mb-0">
        <Link
          href="/"
          className="text-primary-500 font-bold text-2xl md:text-3xl md:mr-7"
        >
          MORENT
        </Link>
        <div className="md:hidden">
          {user && !isLoading ? (
            <div className="hover:shadow-md cursor-pointer duration-200 border border-[#C3D4E966] rounded-full p-2">
              <Image src={UserIcon} width={24} height={24} alt="profile icon" />
            </div>
          ) : (
            <Link href="/signin">
              <div className="hover:shadow-md cursor-pointer duration-200 border border-[#C3D4E966] rounded-full p-2">
                <Image
                  src={LoginIcon}
                  width={24}
                  height={24}
                  alt="login icon"
                />
              </div>
            </Link>
          )}
          {/* <ProfileContainer /> */}
        </div>
      </div>
      <NavbarSearch />
      <div className="hidden md:flex items-center justify-center gap-x-4 flex-row-reverse">
        {/* <ProfileContainer /> */}
        {user && !isLoading ? (
          <div className="hover:shadow-md cursor-pointer duration-200 border border-[#C3D4E966] rounded-full p-2">
            <Image src={UserIcon} width={24} height={24} alt="login icon" />
          </div>
        ) : (
          <Link href="/signin">
            <div className="hover:shadow-md cursor-pointer duration-200 border border-[#C3D4E966] rounded-full p-2">
              <Image src={LoginIcon} width={24} height={24} alt="login icon" />
            </div>
          </Link>
        )}
        <div className="hover:shadow-md cursor-pointer duration-200 border border-[#C3D4E966] rounded-full p-2">
          <Image src={SettingIcon} width={24} height={24} alt="setting icon" />
        </div>
        <div className="hover:shadow-md cursor-pointer duration-200 border border-[#C3D4E966] rounded-full p-2">
          <Image
            src={NotificationIcon}
            width={24}
            height={24}
            alt="notification icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
