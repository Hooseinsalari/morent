import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";

// svg
import FilterIcon from "@/public/svg/filter-icon.svg";
import SearchIcon from "@/public/svg/search-icon.svg";
import CleanSearch from "@/public/svg/close.svg";
import { useIsShow } from "@/context/ShowFilterContextProvider";
import SearchBarResults from "./SearchBarResults";

const NavbarSearch = () => {
  // ** state
  const [search, setSearch] = useState<string>("");

  // ** router
  const { pathname } = useRouter();

  // ** context
  const { isShow, setIsShow } = useIsShow();

  return (
    <div className="flex items-center md:mr-auto md:w-1/2 gap-4 md:border md:border-[#C3D4E966] md:rounded-3xl">
      <div className="relative flex items-center border border-[#C3D4E966] rounded-[10px] p-3 w-full md:border-none">
        <Image src={SearchIcon} width={24} height={24} alt="search icon" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none ml-3 w-full font-medium border-none p-0 focus:ring-0"
          placeholder="Type your search here..."
        />
        {search.length >= 1 && (
          <Image
            className="opacity-60 cursor-pointer"
            onClick={() => setSearch("")}
            src={CleanSearch}
            width={24}
            height={24}
            alt="clear icon"
          />
        )}
        <SearchBarResults search={search} setSearch={setSearch} />
      </div>
      {pathname === "/vehicles" && (
        <button
          onClick={() => setIsShow((prevState) => !prevState)}
          className="border border-[#C3D4E966] rounded-[10px] p-3 md:hidden"
        >
          <Image width={32} height={24} src={FilterIcon} alt="filter" />
        </button>
      )}
    </div>
  );
};

export default NavbarSearch;
