import type { NextPage } from "next";

export type MainContent2Type = {
  className?: string;
};

const MainContent2: NextPage<MainContent2Type> = ({ className = "" }) => {
  return (
    <div
      className={`w-full bg-button-colors-white max-w-full flex flex-col items-center justify-start py-[110px] px-5 box-border gap-[36px] text-center text-17xl text-text-colors-gray font-sub-banner-title ${className}`}
    >
      <div className="flex flex-row items-start justify-center gap-[2px] sm:flex-col sm:items-center sm:justify-center">
        <b className="relative leading-[40px] sm:text-7xl mq420:text-5xl">{`사이버 커뮤니케이션 `}</b>
        <b className="relative leading-[40px] sm:text-7xl mq420:text-5xl">
          학회 소식
        </b>
      </div>
      <div className="flex flex-row items-center justify-start gap-[12px] border-b-[1px] border-solid border-bg-light-border">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-center justify-center">
          <b className="self-stretch flex-1 relative text-sm leading-[20px] flex font-sub-banner-title text-text-dark-gray text-center items-center justify-center">
            공지사항
          </b>
          <div className="self-stretch relative bg-button-colors-dark-sky h-0.5" />
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-center justify-center">
          <div className="self-stretch flex-1 relative text-sm leading-[20px] font-sub-banner-title text-text-gray text-center flex items-center justify-center">
            주요행사
          </div>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-col items-center justify-center">
          <div className="self-stretch flex-1 relative text-sm leading-[20px] font-sub-banner-title text-text-gray text-center flex items-center justify-center">
            회원동정
          </div>
        </button>
      </div>
      <div className="w-full flex flex-row items-start justify-center gap-[18px] max-w-[1300px] text-sm text-button-colors-white md:flex-col md:items-center md:justify-center md:pl-10 md:pr-10 md:box-border mq420:pl-0 mq420:pr-0 mq420:box-border">
        <div className="w-[420px] flex flex-col items-start justify-start py-5 px-0 box-border gap-[18px] min-w-[300px] md:self-stretch md:w-auto">
          <div className="rounded-2xl bg-colors-cyan-800 flex flex-row items-center justify-center py-0.5 px-2">
            <div className="relative leading-[20px] mq420:text-xs">
              주요행사
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-[16px] max-w-[420px] text-left text-xs text-text-text-small-light md:max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="relative leading-[16px]">2023-12-03</div>
              <b className="w-full relative text-base leading-[24px] inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-[420px] md:max-w-full mq420:text-smi">
                [기획세미나] 정부광고제도 합리화를 위한 법제 및 집행 개선 방안
                (유튜브 중계 링크 포함)
              </b>
            </div>
            <div className="w-full relative text-sm leading-[20px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] max-w-[420px] md:max-w-full">
              일정표는 첨부된 PDF 파일을 통해 확인 부탁 드립니다. 정부광고제도
              합리화를 위한 법제 및 집행 개선 방안 (유튜브 중계 링크 포함).
              정부광고제도 합리화를 위한 법제 및 집행 개선 방안 (유튜브 중계
              링크 포함)
            </div>
          </div>
        </div>
        <div className="w-[420px] flex flex-col items-start justify-start py-5 px-0 box-border gap-[18px] min-w-[300px] md:self-stretch md:w-auto">
          <div className="rounded-2xl bg-colors-cyan-800 flex flex-row items-center justify-center py-0.5 px-2">
            <div className="relative leading-[20px] mq420:text-xs">
              주요행사
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-[16px] max-w-[420px] text-left text-xs text-text-text-small-light md:max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="relative leading-[16px]">2023-12-03</div>
              <b className="w-full relative text-base leading-[24px] inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-[420px] md:max-w-full mq420:text-smi">
                [기획세미나] 정부광고제도 합리화를 위한 법제 및 집행 개선 방안
                (유튜브 중계 링크 포함)
              </b>
            </div>
            <div className="w-full relative text-sm leading-[20px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] max-w-[420px] md:max-w-full">
              일정표는 첨부된 PDF 파일을 통해 확인 부탁 드립니다. 정부광고제도
              합리화를 위한 법제 및 집행 개선 방안 (유튜브 중계 링크 포함).
              정부광고제도 합리화를 위한 법제 및 집행 개선 방안 (유튜브 중계
              링크 포함)
            </div>
          </div>
        </div>
        <div className="w-[420px] flex flex-col items-start justify-start py-5 px-0 box-border gap-[18px] min-w-[300px] md:self-stretch md:w-auto">
          <div className="rounded-2xl bg-colors-cyan-800 flex flex-row items-center justify-center py-0.5 px-2">
            <div className="relative leading-[20px] mq420:text-xs">
              주요행사
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-[16px] max-w-[420px] text-left text-xs text-text-text-small-light md:max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="relative leading-[16px]">2023-12-03</div>
              <b className="w-full relative text-base leading-[24px] inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-[420px] md:max-w-full mq420:text-smi">
                [기획세미나] 정부광고제도 합리화를 위한 법제 및 집행 개선 방안
                (유튜브 중계 링크 포함)
              </b>
            </div>
            <div className="w-full relative text-sm leading-[20px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] max-w-[420px] md:max-w-full">
              일정표는 첨부된 PDF 파일을 통해 확인 부탁 드립니다. 정부광고제도
              합리화를 위한 법제 및 집행 개선 방안 (유튜브 중계 링크 포함).
              정부광고제도 합리화를 위한 법제 및 집행 개선 방안 (유튜브 중계
              링크 포함)
            </div>
          </div>
        </div>
      </div>
      <button className="cursor-pointer py-1.5 px-4 bg-[transparent] rounded-xl overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-button-colors-dark-sky hover:bg-gainsboro-100">
        <div className="relative text-xs leading-[16px] font-sub-banner-title text-button-colors-dark-sky text-center mq420:text-2xs">
          더보기
        </div>
      </button>
    </div>
  );
};

export default MainContent2;
