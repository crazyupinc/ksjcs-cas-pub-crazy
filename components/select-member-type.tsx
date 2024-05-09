import type { NextPage } from "next";

const SelectMemberType: NextPage = () => {
  return (
    <div className="w-[1920px] bg-bg-colors-white max-w-full overflow-hidden flex flex-row items-start justify-center p-5 box-border text-center text-sm text-dark-gray font-body-text-caption-bold md:flex-col">
      <div className="self-stretch flex-1 flex flex-col items-center justify-start md:flex-[unset] md:self-stretch">
        <div className="self-stretch flex flex-col items-center justify-start py-20 px-0 gap-[36px] sm:pt-5 sm:pb-5 sm:box-border">
          <img
            className="w-[344.4px] relative h-[346px] object-cover sm:w-[300px] sm:min-w-[300px]"
            alt=""
            src="/usergroupicon@2x.png"
          />
          <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
            <div className="self-stretch h-7 relative text-5xl font-extrabold inline-block sm:text-[22px]">
              회원 유형 선택
            </div>
            <div className="self-stretch relative">
              아래에서 자신에게 해당하는 유형을 선택하고,
            </div>
            <div className="self-stretch relative">
              더 많은 혜택을 누려보세요.
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[16px]">
            <button className="cursor-pointer [border:none] py-3.5 px-7 bg-button-colors-dark-sky rounded-md overflow-hidden flex flex-row items-center justify-center hover:bg-royalblue">
              <div className="relative text-base font-body-text-caption-bold text-bg-colors-white text-center sm:text-smi">
                개인회원 가입
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-3.5 px-7 bg-button-colors-dark-sky rounded-md overflow-hidden flex flex-row items-center justify-center hover:bg-royalblue">
              <div className="relative text-base font-body-text-caption-bold text-bg-colors-white text-center sm:text-smi">
                기관회원 가입
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectMemberType;
