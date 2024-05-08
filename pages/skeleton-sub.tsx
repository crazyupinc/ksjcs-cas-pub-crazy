import type { NextPage } from "next";

const SkeletonSub: NextPage = () => {
  return (
    <div className="w-full relative flex flex-col items-start justify-start">
      <div className="self-stretch bg-colors-red-300 h-[7.75rem] md:h-[4.375rem]" />
      <div className="self-stretch bg-colors-blue-300 h-[13.75rem] sm:h-[10.625rem]" />
      <div className="self-stretch bg-button-colors-white h-[31.25rem] min-h-[31.25rem]" />
      <div className="self-stretch bg-colors-green-300 h-[10rem]" />
    </div>
  );
};

export default SkeletonSub;
