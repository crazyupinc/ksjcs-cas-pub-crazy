import type { NextPage } from "next";

export type DropdownCloseType = {
  className?: string;
  menuName?: string;
};

const DropdownClose: NextPage<DropdownCloseType> = ({
  className = "",
  menuName,
}) => {
  return (
    <div
      className={`w-full flex flex-col items-start justify-start text-left text-base text-text-text-small-light font-sub-banner-title ${className}`}
    >
      <div className="self-stretch bg-button-colors-white box-border h-[50.7px] flex flex-row items-center justify-start p-3.5 gap-[14px] border-[0.7px] border-solid border-colors-slate-300">
        <div className="flex-1 relative leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
          {menuName}
        </div>
        <img
          className="w-4 relative h-4 overflow-hidden shrink-0"
          alt=""
          src="/icon-chevron-down.svg"
        />
      </div>
    </div>
  );
};

export default DropdownClose;
