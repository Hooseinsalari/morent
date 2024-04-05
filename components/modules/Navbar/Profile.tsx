import Link from "next/link";
import React from "react";
import Image from "next/image";

// context
import { useUser } from "@/context/UserContextProvider";

// icons
import LoginIcon from "@/public/svg/login.svg";
import UserIcon from "@/public/svg/user-icon.svg";

const Profile = () => {
  // ** context
  const { user } = useUser();

  return (
    <div className="">
      {user ? (
        <Link
          href="/dashboard"
          className="hover:shadow-md block cursor-pointer duration-200 border border-[#C3D4E966] rounded-full p-2"
        >
          <Image src={UserIcon} width={24} height={24} alt="User icon" />
        </Link>
      ) : (
        <Link
          href="/signin"
          className="hover:shadow-md block cursor-pointer duration-200 border border-[#C3D4E966] rounded-full p-2"
        >
          <Image src={LoginIcon} width={24} height={24} alt="login icon" />
        </Link>
      )}
    </div>
  );
};

export default Profile;
