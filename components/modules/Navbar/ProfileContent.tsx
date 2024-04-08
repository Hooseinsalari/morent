import React, { useRef, useState } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

// context
import { useUser } from "@/context/UserContextProvider";

// hooks
import useOutsideClick from "@/hooks/useOutsideClick";

// svg
import UserIcon from "@/public/svg/user-icon.svg";
import DashboardIcon from "@/public/svg/dashboard.svg";
import LogoutIcon from "@/public/svg/logout.svg";

// function
import { truncateString } from "@/helper/functions";

// toast
import toast from "react-hot-toast";

// constatn
import { BASE_API_URL } from "@/constant";

// type
import { UserData } from "@/types";

const ProfileContent = () => {
  // ** state
  const [isShowProfile, setIsShowProfile] = useState<boolean>(false);

  // ** router
  const router = useRouter();

  // ** ref
  const profileRef = useRef<HTMLDivElement>(null);

  // ** context
  const { user, setUser } = useUser();

  // ** hooks
  useOutsideClick(profileRef, "profile", () => setIsShowProfile(false));

  // ** handler
  const logoutHandler = async () => {
    const response = await axios.post(`${BASE_API_URL}/api/auth/signOut`, {
      key: "static-key",
    });

    if (response.status === 200) {
      router.replace("/");
      toast.success(response.data.message);
      setUser(null);
    } else {
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="relative z-50">
      <ProfileIcon setIsShowProfile={setIsShowProfile} />
      <Transition
        show={isShowProfile}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        className="border border-[#C3D4E966] absolute top-12 right-1 rounded-lg min-w-max overflow-hidden bg-white shadow-lg"
        ref={profileRef}
      >
        <ProfileDetails user={user!} />
        <div className="w-full h-[0.01rem] bg-secondinary-100"></div>
        <ProfileActions logoutHandler={logoutHandler} />
      </Transition>
    </div>
  );
};

export default ProfileContent;

const ProfileIcon = ({
  setIsShowProfile,
}: {
  setIsShowProfile: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      id="profile"
      onClick={() => setIsShowProfile((prevState) => !prevState)}
      className="hover:shadow-md cursor-pointer duration-200 border border-[#C3D4E966] rounded-full p-2"
    >
      <Image id="profile" src={UserIcon} alt="user" width={24} height={24} />
    </div>
  );
};

const ProfileDetails = ({ user }: { user: UserData }) => {
  return (
    <div className="flex items-center gap-2 py-2 px-4">
      <div className="border border-[#C3D4E966] rounded-full p-2">
        <Image src={UserIcon} alt="avatar" width={24} height={24} />
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
  );
};

const ProfileActions = ({
  logoutHandler,
}: {
  logoutHandler: () => Promise<void>;
}) => {
  return (
    <div className="py-2 px-2">
      <Link
        href="/dashboard"
        className="w-full flex items-center duration-200 p-2 rounded-xl hover:bg-slate-200"
      >
        <Image
          src={DashboardIcon}
          alt="dashboard"
          width={24}
          height={24}
          className="mr-1"
        />
        <span className="font-semibold text-secondinary-500 text-sm">
          Dashboard
        </span>
      </Link>
      <button
        onClick={logoutHandler}
        className="w-full mt-3 flex items-center duration-200 p-2 rounded-xl hover:bg-slate-200"
      >
        <Image
          src={LogoutIcon}
          alt="dashboard"
          width={24}
          height={24}
          className="mr-1"
        />

        <span className="font-semibold text-secondinary-500 text-sm">
          Logout
        </span>
      </button>
    </div>
  );
};
