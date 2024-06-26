import type { NextPage } from "next";

const Index1: NextPageIndex1Type = () => {
  return (
    <div className="w-full relative bg-button-colors-white overflow-hidden flex flex-col items-start justify-start p-[2.5rem] box-border gap-[1.25rem] text-left text-[2.25rem] text-black font-sub-banner-title">
      <b className="self-stretch relative leading-[2.5rem]">index</b>
      <a
        className="self-stretch relative [text-decoration:underline] leading-[2.5rem] font-bold text-[inherit]"
        href="http://localhost:3000/skeleton-sub"
        target="_blank"
      >
        http://localhost:3000/skeleton-sub
      </a>
      <a
        className="self-stretch relative [text-decoration:underline] leading-[2.5rem] font-bold text-[inherit]"
        href="http://localhost:3000/skeleton-sub-example"
        target="_blank"
      >
        http://localhost:3000/skeleton-sub-example
      </a>
      <a
        className="self-stretch relative [text-decoration:underline] leading-[2.5rem] font-bold text-[inherit]"
        href="http://localhost:3000/header-layout"
        target="_blank"
      >
        http://localhost:3000/header-layout
      </a>
    </div>
  );
};

export default Index1;
