import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// context
import { useUser } from "@/context/UserContextProvider";

// hook
import useOutsideClick from "@/hooks/useOutsideClick";

// icon
import UserIcon from "@/public/svg/user-icon.svg";
import DashboardIcon from "@/public/svg/dashboard.svg";
import LogoutIcon from "@/public/svg/logout.svg";

// function
import { truncateString } from "@/helper/functions";

// types
import { UserData } from "@/types";

const ProfileContent = () => {
  // ** state
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // ** ref
  const profileRef = useRef<HTMLDivElement>(null);

  // ** context
  const { user, setUser } = useUser();

  // ** hooks
  useOutsideClick(profileRef, "profile", () => setIsOpen(false));

  // ** handler
  const logoutHandler = () => {
    // ...
  };

  return (
    <div className="relative z-50">
      <ProfileIcon setIsOpen={setIsOpen} />
      <div
        className={`${
          isOpen
            ? "transition-opacity duration-300 opacity-100"
            : "transition-opacity duration-300 opacity-0"
        } border border-[#C3D4E966] absolute top-12 right-1 rounded-lg min-w-max overflow-hidden bg-white shadow-lg`}
        style={{ transitionProperty: "opacity" }}
        ref={profileRef}
      >
        <ProfileDetails user={user} logoutHandler={logoutHandler} />
      </div>
    </div>
  );
};

export default ProfileContent;

function ProfileIcon({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      id="profile"
      onClick={() => setIsOpen((prevState) => !prevState)}
      className="hover:shadow-md cursor-pointer duration-200 border border-[#C3D4E966] rounded-full p-2"
    >
      <Image
        src={UserIcon}
        width={24}
        height={24}
        alt="user icon"
        id="profile"
      />
    </div>
  );
}

function ProfileDetails({
  user,
  logoutHandler,
}: {
  user: UserData | null;
  logoutHandler: () => void;
}) {
  return (
    <>
      <div className="flex items-center gap-2 py-2 px-4">
        <div className="border border-[#C3D4E966] rounded-full p-2">
          <Image src={UserIcon} width={24} height={24} alt="avatar" />
        </div>
        <div>
          <h1 className="text-base font-semibold text-secondinary-500">
            {truncateString(user?.username, 15)}
          </h1>
          <h1 className="xs:text-sm xs:font-medium text-xs font-bold text-secondinary-400">
            {truncateString(user?.email, 27)}
          </h1>
        </div>
      </div>
      <div className="w-full h-[0.01rem] bg-secondinary-100"></div>
      <div className="py-2 px-2">
        <Link
          href="/dashboard"
          className="inline-block w-full font-semibold text-secondinary-500 text-sm p-2 py-3 duration-200 rounded-xl hover:bg-slate-200"
        >
          <span className="flex items-center">
            <Image
              src={DashboardIcon}
              width={23}
              height={23}
              alt="avatar"
              className="mr-2"
            />
            Dashboard
          </span>
        </Link>
        <button
          onClick={logoutHandler}
          className="w-full mt-3 flex items-center duration-200 p-2 py-3 rounded-xl hover:bg-slate-200 font-semibold text-secondinary-500 text-sm"
        >
          <Image
            src={LogoutIcon}
            width={23}
            height={23}
            alt="avatar"
            className="mr-2"
          />
          Logout
        </button>
      </div>
    </>
  );
}
