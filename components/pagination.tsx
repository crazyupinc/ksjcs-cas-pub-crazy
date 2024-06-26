import type { NextPage } from "next";

export type PaginationType = {
  className?: string;
};

const Pagination: NextPage<PaginationType> = ({ className = "" }) => {
  return (
    <div
      className={`max-w-full flex flex-row items-start justify-center gap-[5px] text-left text-sm text-text-title-small font-sub-banner-title self-stretch ${className}`}
    >
      <div className="w-8 rounded-lg bg-button-colors-white box-border h-8 flex flex-col items-center justify-center p-2.5 border-[1px] border-solid border-bg-light-border">
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src="/iconchevronsleft.svg"
        />
      </div>
      <div className="w-8 rounded-lg bg-button-colors-white box-border h-8 flex flex-col items-center justify-center p-2.5 border-[1px] border-solid border-bg-light-border">
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src="/iconchevronleft.svg"
        />
      </div>
      <div className="w-8 rounded-lg bg-button-colors-dark-sky box-border h-8 flex flex-col items-center justify-center p-2.5 text-button-colors-white border-[1px] border-solid border-bg-light-border">
        <div className="relative leading-[20px]">1</div>
      </div>
      <div className="w-8 rounded-lg bg-button-colors-white box-border h-8 flex flex-col items-center justify-center p-2.5 border-[1px] border-solid border-bg-light-border">
        <div className="relative leading-[20px]">2</div>
      </div>
      <div className="w-8 rounded-lg bg-button-colors-white box-border h-8 flex flex-col items-center justify-center p-2.5 border-[1px] border-solid border-bg-light-border">
        <div className="relative leading-[20px]">3</div>
      </div>
      <div className="w-8 rounded-lg bg-button-colors-white box-border h-8 flex flex-col items-center justify-center p-2.5 border-[1px] border-solid border-bg-light-border">
        <div className="relative leading-[20px]">...</div>
      </div>
      <div className="w-8 rounded-lg bg-button-colors-white box-border h-8 flex flex-col items-center justify-center p-2.5 border-[1px] border-solid border-bg-light-border">
        <div className="relative leading-[20px]">10</div>
      </div>
      <div className="w-8 rounded-lg bg-button-colors-white box-border h-8 flex flex-col items-center justify-center p-2.5 border-[1px] border-solid border-bg-light-border">
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src="/iconchevronright.svg"
        />
      </div>
      <div className="w-8 rounded-lg bg-button-colors-white box-border h-8 flex flex-col items-center justify-center p-2.5 border-[1px] border-solid border-bg-light-border">
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src="/iconchevronsright.svg"
        />
      </div>
    </div>
  );
};

export default Pagination;
