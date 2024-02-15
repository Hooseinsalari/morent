import Link from "next/link";
import React from "react";
import TagLists from "./TagLists";

const Footer = () => {
  return (
    <div className="bg-white px-6 md:px-16 py-10">
      <div className="flex flex-col gap-x-10 md:flex-row items-start justify-between w-full">
        <div>
          <Link
            href="/"
            className="text-primary-500 font-bold text-2xl md:text-3xl md:mr-7"
          >
            MORENT
          </Link>

          <p className="text-secondinary-300 font-medium text-xs md:text-sm mt-4">
            Our vision is to provide convenience
            <br /> and help increase your sales business.
          </p>
        </div>

        <div className="flex items-center flex-wrap gap-14 justify-start md:justify-end mt-14 md:mt-0">
          <TagLists
            title="About"
            li_1="How it works"
            li_2="Featured"
            li_3="Partnership"
            li_4="Bussiness Relation"
          />
          <TagLists
            title="Socials"
            li_1="Discord"
            li_2="Instagram"
            li_3="Twitter"
            li_4="Facebook"
          />
          <TagLists
            title="Community"
            li_1="Blog"
            li_2="Podcast"
            li_3="Events"
            li_4="Invite a friend"
          />
        </div>
      </div>

      <div className="border-t mt-8 pt-8 flex flex-col-reverse md:flex-row items-center justify-between gap-4">
        <h4 className="text-secondinary-500 text-xs sm:text-sm font-semibold">
          ©2024 MORENT. All rights reserved to{" "}
          <a
            target="_blank"
            href="https://github.com/Hooseinsalari"
            className="font-extrabold"
          >
            Hossein Salari
          </a>
        </h4>
        <div className="text-secondinary-500 text-sm font-semibold flex items-center justify-between gap-6">
          <h2>Privacy & Policy</h2>
          <h2>Terms & Condition</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
