import Link from "next/link";
import React from "react";
import Image from "next/image";

// context
import { useUser } from "@/context/UserContextProvider";

// icons
import LoginIcon from "@/public/svg/login.svg";
import ProfileContent from "./ProfileContent";

const Profile = () => {
  // ** context
  const { user } = useUser();

  return (
    <div className="">
      {user ? (
        <ProfileContent />
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
