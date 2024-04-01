import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

// type
import { CarInterface } from "@/types";

// router
import { useRouter } from "next/router";

// type
type SearchResultsType = [] | CarInterface[];

const SearchBarResults = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}) => {
  // ** state
  const [searchResults, setSearchResults] = useState<SearchResultsType>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // ** router
  const { pathname } = useRouter();

  // ** useEffect
  useEffect(() => {
    setSearch("");
  }, [pathname]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/cars/search?name=${search}`
        );

        setSearchResults(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [search]);

  if (!searchResults?.length && isLoading && search.length >= 3) {
    return (
      <div className="absolute bg-white shadow-sm border z-[999] w-full top-12 right-0 rounded-lg md:rounded-3xl p-2 text-center">
        <h1 className="my-4 font-semibold">Loading</h1>
      </div>
    );
  }

  if (!searchResults?.length && !isLoading && search.length >= 3) {
    return (
      <div className="absolute bg-white shadow-sm border z-[999] w-full top-12 right-0 rounded-lg md:rounded-3xl p-2 text-center">
        <h1 className="my-4 font-semibold">Nothing found</h1>
      </div>
    );
  }

  return (
    <>
      {searchResults?.length && !isLoading && search.length >= 3 ? (
        <div className="absolute bg-white shadow-sm border z-[999] w-full top-12 right-0 rounded-lg md:rounded-3xl p-2">
          {searchResults.map((car) => (
            <Link
              className="inline-block w-full my-4 sm:flex sm:flex-row sm:items-center sm:justify-between"
              key={car._id}
              href={`/vehicles/${car._id}`}
            >
              <div className="w-full sm:flex">
                <Image
                  src={car.image}
                  alt="car-image"
                  className="w-3/5 sm:w-1/4 sm:mr-2"
                  width={800}
                  height={800}
                />

                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <h1 className="text-sm text-secondinary-500 font-bold sm:text-base">
                      {car.name}
                    </h1>
                    <h2 className="text-xs text-secondinary-300 font-semibold">
                      {car.type}
                    </h2>
                  </div>

                  <h3 className="text-xs text-secondinary-500 font-semibold sm:hidden">
                    ${car.price.toFixed(2)}
                  </h3>
                </div>
              </div>

              <h3 className="text-secondinary-500 font-semibold hidden sm:block">
                ${car.price.toFixed(2)}
              </h3>
            </Link>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default SearchBarResults;
