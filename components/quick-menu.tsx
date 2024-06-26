import type { NextPage } from "next";

export type QuickMenuType = {
  className?: string;
};

const QuickMenu: NextPage<QuickMenuType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1920px] bg-colors-cyan-950 max-w-full flex flex-row items-center justify-center py-10 px-5 box-border min-h-[30px] text-left text-base text-button-colors-white font-noto-sans-kr ${className}`}
    >
      <div className="w-[1300px] flex flex-row items-start justify-between max-w-[1300px] sm:h-auto sm:flex-row sm:flex-wrap sm:items-start sm:justify-center sm:pb-0 sm:box-border">
        <div className="flex flex-col items-center justify-start py-1.5 px-2 gap-[12px]">
          <div className="w-[85px] rounded-81xl bg-button-colors-white h-[85px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[17px] px-[18px] box-border mq420:w-[60px] mq420:h-[60px]">
            <img
              className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
              alt=""
              src="/iconuserxxl.svg"
            />
          </div>
          <b className="relative tracking-[-0.2px] leading-[18px] mq420:text-smi">
            회원가입안내
          </b>
        </div>
        <div className="flex flex-col items-center justify-start py-1.5 px-2 gap-[12px]">
          <div className="w-[85px] rounded-81xl bg-button-colors-white h-[85px] overflow-hidden shrink-0 flex flex-row items-center justify-center p-[17px] box-border mq420:w-[60px] mq420:h-[60px]">
            <img
              className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
              alt=""
              src="/iconcalendarxxl.svg"
            />
          </div>
          <b className="relative tracking-[-0.2px] leading-[18px] mq420:text-smi">
            주요행사
          </b>
        </div>
        <div className="flex flex-col items-center justify-start py-1.5 px-2 gap-[12px]">
          <div className="w-[85px] rounded-81xl bg-button-colors-white h-[85px] overflow-hidden shrink-0 flex flex-row items-center justify-center p-[17px] box-border mq420:w-[60px] mq420:h-[60px]">
            <img
              className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
              alt=""
              src="/iconmonitorxxl.svg"
            />
          </div>
          <b className="relative tracking-[-0.2px] leading-[18px] mq420:text-smi">
            공모안내
          </b>
        </div>
        <div className="flex flex-col items-center justify-start py-1.5 px-1 gap-[12px]">
          <div className="w-[85px] rounded-81xl bg-button-colors-white h-[85px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[18px] px-[17px] box-border mq420:w-[60px] mq420:h-[60px] mq420:[transform:rotate(0deg)]">
            <img
              className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
              alt=""
              src="/iconawardxxl.svg"
            />
          </div>
          <b className="relative tracking-[-0.2px] leading-[18px] mq420:text-smi">
            학술대회 자료집
          </b>
        </div>
        <div className="flex flex-col items-center justify-start py-1.5 px-2 gap-[12px]">
          <div className="w-[85px] rounded-81xl bg-button-colors-white h-[85px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[18px] px-[17px] box-border mq420:w-[60px] mq420:h-[60px]">
            <img
              className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
              alt=""
              src="/iconbookopenxxl.svg"
            />
          </div>
          <b className="relative tracking-[-0.2px] leading-[18px] mq420:text-smi">
            세미나 자료집
          </b>
        </div>
      </div>
    </div>
  );
};

export default QuickMenu;
