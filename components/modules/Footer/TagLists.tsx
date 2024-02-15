import { TagListsProps } from "@/types";

function TagLists({ title, li_1, li_2, li_3, li_4 }: TagListsProps) {
  return (
    <ul>
      <li className="text-xl text-secondinary-500 font-semibold mb-4">
        {title}
      </li>
      <li className="cursor-pointer text-secondinary-300 text-base font-medium my-4 hover:text-secondinary-400 duration-200">
        {li_1}
      </li>
      <li className="cursor-pointer text-secondinary-300 text-base font-medium my-4 hover:text-secondinary-400 duration-200">
        {li_2}
      </li>
      <li className="cursor-pointer text-secondinary-300 text-base font-medium my-4 hover:text-secondinary-400 duration-200">
        {li_3}
      </li>
      <li className="cursor-pointer text-secondinary-300 text-base font-medium my-4 hover:text-secondinary-400 duration-200">
        {li_4}
      </li>
    </ul>
  );
}

export default TagLists;
