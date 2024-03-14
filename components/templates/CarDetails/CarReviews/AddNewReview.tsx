import React, { Fragment, useState } from "react";

// modal
import { Dialog, Transition } from "@headlessui/react";

// reating
import ReactStars from "react-stars";

// svg
import Close from "@/public/svg/close.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import { useUser } from "@/context/UserContextProvider";

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  submitNewReview: (e: React.FormEvent) => Promise<void>;
  reviewValues: {
    rating: number;
    comment: string;
  };
  setReviewValues: React.Dispatch<
    React.SetStateAction<{
      rating: number;
      comment: string;
    }>
  >;
}

const AddNewReview = ({
  isModalOpen,
  setIsModalOpen,
  submitNewReview,
  reviewValues,
  setReviewValues,
}: Props) => {
  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsModalOpen((prevState) => !prevState)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="div"
                  className="flex items-center justify-between text-lg font-medium leading-6 text-gray-900"
                >
                  <h2 className="font-semibold">Add New Review</h2>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-50 p-1 text-sm font-medium text-blue-900 hover:bg-blue-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={() => setIsModalOpen((prevState) => !prevState)}
                  >
                    <Image
                      width={24}
                      height={24}
                      src={Close}
                      className="w-6 h-6"
                      alt="close"
                    />
                  </button>
                </Dialog.Title>
                <form onSubmit={submitNewReview}>
                  <div className="flex flex-col mt-4">
                    <label className="font-semibold" htmlFor="review">
                      Comment
                    </label>
                    <textarea
                      value={reviewValues.comment}
                      onChange={(e) =>
                        setReviewValues({
                          ...reviewValues,
                          comment: e.target.value,
                        })
                      }
                      placeholder="Your comment"
                      className="mt-2 font-medium rounded-lg focus:ring-0 border-1 h-[8rem]"
                      name="review"
                      id="review"
                    ></textarea>
                  </div>
                  <div className=" mt-4">
                    <label className="font-semibold" htmlFor="position">
                      Rate
                    </label>
                    <div className="flex items-center justify-center">
                      <ReactStars
                        className="mt-0"
                        value={reviewValues.rating}
                        count={5}
                        onChange={(r) =>
                          setReviewValues({ ...reviewValues, rating: r })
                        }
                        size={40}
                        half={false}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mt-6 bg-secondinary-200 py-2 rounded-lg font-semibold hover:text-white hover:bg-primary-500 w-full duration-200"
                  >
                    Send
                  </button>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AddNewReview;
