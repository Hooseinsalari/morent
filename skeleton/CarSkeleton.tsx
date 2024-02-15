import Skeleton from "react-loading-skeleton";

interface CarSkeletonProps {
  cards: number;
}

const CarSkeleton = ({ cards }: CarSkeletonProps) => {
  return Array(cards)
    .fill(0)
    .map((_, index) => (
      <div key={index} className="bg-white rounded-lg px-3 py-4 mt-5 w-full">
        <div className="mb-4">
          <Skeleton height={20} width={150} />
          <Skeleton height={16} width={100} />
        </div>
        <div className="flex items-center justify-between sm:flex-col sm:mt-10">
          <div className="w-2/3 sm:w-full mr-2 h-32 flex items-center justify-center">
            <Skeleton height={150} width={180} />
          </div>
          <div className="sm:flex sm:mt-12 sm:w-full justify-between md:items-center">
            <div className="flex items-center mb-4">
              <Skeleton height={12} width={30} />
            </div>
            <div className="flex items-center mb-4">
              <Skeleton height={12} width={50} />
            </div>
            <div className="flex items-center mb-4">
              <Skeleton height={12} width={70} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-5 sm:mt-3">
          <Skeleton height={20} width={60} />
          <Skeleton height={30} width={80} />
        </div>
      </div>
    ));
};

export default CarSkeleton;
