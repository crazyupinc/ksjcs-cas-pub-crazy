import type { NextPage } from "next";

const FeeOrder: NextPage = () => {
  return (
    <div className="w-[1920px] bg-bg-colors-white max-w-full flex flex-col items-start justify-start p-5 box-border text-left text-sm text-text-title-small font-headings-headling-2">
      <div className="self-stretch flex flex-col items-center justify-start">
        <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-10 gap-[40px] md:pb-5 md:box-border mq420:pb-5 mq420:box-border">
          <div className="w-full flex flex-col items-center justify-center gap-[8px] max-w-[900px]">
            <div className="self-stretch flex flex-col items-center justify-center py-[3px] px-0 gap-[6px] text-text-text-small-light border-b-[1px] border-solid border-bg-light-border">
              <div className="self-stretch relative leading-[20px] text-center sm:text-sm mq420:text-smi">
                <span>{`납부 내역 확인은 `}</span>
                <span className="text-button-colors-dark-sky">{`마이페이지 > 납부내역`}</span>
                <span>{` 에서 확인 할 수 있습니다. `}</span>
              </div>
              <b className="self-stretch relative text-xl leading-[28px] flex text-text-colors-gray items-center h-[50px] shrink-0 sm:text-xl mq420:text-lg">
                납부 항목
              </b>
              <div className="self-stretch relative text-xs leading-[16px] text-semantic-warning sm:text-xs mq420:text-xs">
                준회원, 정회원, 평생회원은 가입비 선택 시 동일한 회원의 연회비만
                선택 가능, 기관회원은 연회비만 선택 가능합니다.
              </div>
            </div>
            <div className="self-stretch bg-colors-blue-50 box-border overflow-hidden flex flex-col items-start justify-center min-w-[200px] border-[1px] border-solid border-bg-light-border sm:flex-col sm:items-start sm:justify-center">
              <div className="self-stretch flex flex-row items-center justify-start py-4 px-5 sm:flex sm:flex-row mq420:pl-0 mq420:pr-0 mq420:box-border">
                <div className="flex-1 flex flex-row items-center justify-start py-0.5 px-0 gap-[20px] md:gap-[8px] mq420:flex-col">
                  <div className="flex flex-col items-start justify-center gap-[3px] mq420:self-stretch mq420:w-auto mq420:pl-4 mq420:box-border">
                    <b className="self-stretch relative leading-[20px] md:w-[200px] mq420:text-sm">
                      가입비(준회원)
                    </b>
                    <div className="self-stretch relative leading-[20px] text-text-text-small-light">
                      최초 학회 가입 시
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-end justify-center text-text-text-small-light mq420:pr-4 mq420:box-border mq420:flex-[unset] mq420:self-stretch">
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative leading-[20px]">
                        <span>
                          <span>금액</span>
                          <span className="text-text-text-small-light">{` `}</span>
                        </span>
                        <b className="text-button-colors-dark-sky">50,000 원</b>
                      </div>
                      <div className="w-4 relative rounded-border-radius-full bg-bg-colors-white box-border h-4 border-[1px] border-solid border-bg-light-border" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-colors-blue-50 box-border overflow-hidden flex flex-col items-start justify-center min-w-[200px] border-[1px] border-solid border-bg-light-border sm:flex-col sm:items-start sm:justify-center">
              <div className="self-stretch flex flex-row items-center justify-start py-4 px-5 sm:flex sm:flex-row mq420:pl-0 mq420:pr-0 mq420:box-border">
                <div className="flex-1 flex flex-row items-center justify-start py-0.5 px-0 gap-[20px] md:gap-[8px] mq420:flex-col">
                  <div className="flex flex-col items-start justify-center gap-[3px] mq420:self-stretch mq420:w-auto mq420:pl-4 mq420:box-border">
                    <b className="self-stretch relative leading-[20px] md:w-[200px] mq420:text-sm">
                      가입비(정회원)
                    </b>
                    <div className="self-stretch relative leading-[20px] text-text-text-small-light">
                      최초 학회 가입 시
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-end justify-center text-text-text-small-light mq420:pr-4 mq420:box-border mq420:flex-[unset] mq420:self-stretch">
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative leading-[20px]">
                        <span>
                          <span>금액</span>
                          <span className="text-text-text-small-light">{` `}</span>
                        </span>
                        <b className="text-button-colors-dark-sky">50,000 원</b>
                      </div>
                      <div className="w-4 relative rounded-border-radius-full bg-bg-colors-white box-border h-4 border-[1px] border-solid border-bg-light-border" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-colors-blue-50 box-border overflow-hidden flex flex-col items-start justify-center min-w-[200px] border-[1px] border-solid border-bg-light-border sm:flex-col sm:items-start sm:justify-center">
              <div className="self-stretch flex flex-row items-center justify-start py-4 px-5 sm:flex sm:flex-row mq420:pl-0 mq420:pr-0 mq420:box-border">
                <div className="flex-1 flex flex-row items-center justify-start py-0.5 px-0 gap-[20px] md:gap-[8px] mq420:flex-col">
                  <div className="flex flex-col items-start justify-center gap-[3px] mq420:self-stretch mq420:w-auto mq420:pl-4 mq420:box-border">
                    <b className="self-stretch relative leading-[20px] md:w-[200px] mq420:text-sm">
                      가입비(평생회원)
                    </b>
                    <div className="self-stretch relative leading-[20px] text-text-text-small-light">
                      최초 학회 가입 시
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-end justify-center text-text-text-small-light mq420:pr-4 mq420:box-border mq420:flex-[unset] mq420:self-stretch">
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative leading-[20px]">
                        <span>
                          <span>금액</span>
                          <span className="text-text-text-small-light">{` `}</span>
                        </span>
                        <b className="text-button-colors-dark-sky">50,000 원</b>
                      </div>
                      <div className="w-4 relative rounded-border-radius-full bg-bg-colors-white box-border h-4 border-[1px] border-solid border-bg-light-border" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-colors-blue-50 box-border overflow-hidden flex flex-col items-start justify-center min-w-[200px] border-[1px] border-solid border-bg-light-border sm:flex-col sm:items-start sm:justify-center">
              <div className="self-stretch flex flex-row items-center justify-start py-4 px-5 sm:flex sm:flex-row mq420:pl-0 mq420:pr-0 mq420:box-border">
                <div className="flex-1 flex flex-row items-center justify-start py-0.5 px-0 gap-[20px] md:gap-[8px] mq420:flex-col">
                  <div className="flex flex-col items-start justify-center gap-[3px] mq420:self-stretch mq420:w-auto mq420:pl-4 mq420:box-border">
                    <b className="self-stretch relative leading-[20px] md:w-[200px] mq420:text-sm">
                      연회비(준회원)
                    </b>
                    <div className="w-[104px] relative leading-[20px] text-text-text-small-light hidden">
                      최초 학회 가입 시
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-end justify-center text-text-text-small-light mq420:pr-4 mq420:box-border mq420:flex-[unset] mq420:self-stretch">
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative leading-[20px]">
                        <span>
                          <span>금액</span>
                          <span className="text-text-text-small-light">{` `}</span>
                        </span>
                        <b className="text-button-colors-dark-sky">30,000 원</b>
                      </div>
                      <div className="w-4 relative rounded-border-radius-full bg-bg-colors-white box-border h-4 border-[1px] border-solid border-bg-light-border" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-colors-blue-50 box-border overflow-hidden flex flex-col items-start justify-center min-w-[200px] border-[1px] border-solid border-bg-light-border sm:flex-col sm:items-start sm:justify-center">
              <div className="self-stretch flex flex-row items-center justify-start py-4 px-5 sm:flex sm:flex-row mq420:pl-0 mq420:pr-0 mq420:box-border">
                <div className="flex-1 flex flex-row items-center justify-start py-0.5 px-0 gap-[20px] md:gap-[8px] mq420:flex-col">
                  <div className="flex flex-col items-start justify-center gap-[3px] mq420:self-stretch mq420:w-auto mq420:pl-4 mq420:box-border">
                    <b className="self-stretch relative leading-[20px] md:w-[200px] mq420:text-sm">
                      연회비(정회원)
                    </b>
                    <div className="w-[104px] relative leading-[20px] text-text-text-small-light hidden">
                      최초 학회 가입 시
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-end justify-center text-text-text-small-light mq420:pr-4 mq420:box-border mq420:flex-[unset] mq420:self-stretch">
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative leading-[20px]">
                        <span>
                          <span>금액</span>
                          <span className="text-text-text-small-light">{` `}</span>
                        </span>
                        <b className="text-button-colors-dark-sky">50,000 원</b>
                      </div>
                      <div className="w-4 relative rounded-border-radius-full bg-bg-colors-white box-border h-4 border-[1px] border-solid border-bg-light-border" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-colors-blue-50 box-border overflow-hidden flex flex-col items-start justify-center min-w-[200px] border-[1px] border-solid border-bg-light-border sm:flex-col sm:items-start sm:justify-center">
              <div className="self-stretch flex flex-row items-center justify-start py-4 px-5 sm:flex sm:flex-row mq420:pl-0 mq420:pr-0 mq420:box-border">
                <div className="flex-1 flex flex-row items-center justify-start py-0.5 px-0 gap-[20px] md:gap-[8px] mq420:flex-col">
                  <div className="flex flex-col items-start justify-center gap-[3px] mq420:self-stretch mq420:w-auto mq420:pl-4 mq420:box-border">
                    <b className="self-stretch relative leading-[20px] md:w-[200px] mq420:text-sm">
                      평생회비(평생회원)
                    </b>
                    <div className="w-[104px] relative leading-[20px] text-text-text-small-light hidden">
                      최초 학회 가입 시
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-end justify-center text-text-text-small-light mq420:pr-4 mq420:box-border mq420:flex-[unset] mq420:self-stretch">
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative leading-[20px]">
                        <span>
                          <span>금액</span>
                          <span className="text-text-text-small-light">{` `}</span>
                        </span>
                        <b className="text-button-colors-dark-sky">
                          300,000 원
                        </b>
                      </div>
                      <div className="w-4 relative rounded-border-radius-full bg-bg-colors-white box-border h-4 border-[1px] border-solid border-bg-light-border" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-colors-blue-50 box-border overflow-hidden flex flex-col items-start justify-center min-w-[200px] border-[1px] border-solid border-bg-light-border sm:flex-col sm:items-start sm:justify-center">
              <div className="self-stretch flex flex-row items-center justify-start py-4 px-5 sm:flex sm:flex-row mq420:pl-0 mq420:pr-0 mq420:box-border">
                <div className="flex-1 flex flex-row items-center justify-start py-0.5 px-0 gap-[20px] md:gap-[8px] mq420:flex-col">
                  <div className="flex flex-col items-start justify-center gap-[3px] mq420:self-stretch mq420:w-auto mq420:pl-4 mq420:box-border">
                    <b className="self-stretch relative leading-[20px] md:w-[200px] mq420:text-sm">
                      연회회비(기관회원)
                    </b>
                    <div className="w-[104px] relative leading-[20px] text-text-text-small-light hidden">
                      최초 학회 가입 시
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-end justify-center text-text-text-small-light mq420:pr-4 mq420:box-border mq420:flex-[unset] mq420:self-stretch">
                    <div className="flex flex-row items-center justify-start gap-[8px]">
                      <div className="relative leading-[20px]">
                        <span>
                          <span>금액</span>
                          <span className="text-text-text-small-light">{` `}</span>
                        </span>
                        <b className="text-button-colors-dark-sky">
                          1,000,000 원
                        </b>
                      </div>
                      <div className="w-4 relative rounded-border-radius-full bg-bg-colors-white box-border h-4 border-[1px] border-solid border-bg-light-border" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch relative text-right flex items-center h-16 shrink-0 text-11xl text-button-colors-dark-sky sm:text-lg mq420:text-lg">
              <span>
                <span className="text-base leading-[24px] font-headings-headling-2 text-text-colors-gray">
                  결제금액 총
                </span>
                <b>
                  <span className="text-xl leading-[28px]">{` `}</span>
                </b>
                <b>
                  <span className="leading-[36px]">0</span>
                </b>
                <span className="text-base leading-[24px] text-text-colors-gray">
                  {" "}
                  원
                </span>
              </span>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center max-w-[900px] text-xl text-text-colors-gray">
            <div className="w-full flex flex-col items-center justify-center gap-[24px] max-w-[900px]">
              <b className="self-stretch relative leading-[28px] sm:text-lg mq420:text-lg">
                납부자 정보
              </b>
              <div className="w-full bg-bg-colors-white box-border flex flex-col items-start justify-start max-w-[1300px] text-sm text-text-title-small border-t-[1px] border-solid border-text-hint-text">
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-center min-w-[200px] hover:bg-bg-light lg:bg-bg-colors-white sm:flex-col">
                  <div className="self-stretch flex flex-row items-center justify-start py-2.5 px-5 border-b-[1px] border-solid border-bg-light-border sm:flex sm:flex-row sm:pl-2 sm:pr-2 sm:box-border mq420:pl-2 mq420:pr-2 mq420:box-border">
                    <div className="flex-1 flex flex-row items-center justify-start py-0.5 px-0 gap-[140px] md:gap-[100px] sm:flex-col sm:gap-[8px] mq420:gap-[8px]">
                      <div className="flex flex-row items-center justify-start py-2 px-4 sm:bg-bg-light-border sm:self-stretch sm:w-auto sm:items-center sm:justify-center sm:pl-2 sm:pr-2 sm:box-border mq420:pl-2 mq420:pr-2 mq420:box-border">
                        <div className="relative inline-block min-w-[100px] sm:text-center sm:w-[60px] mq420:text-smi mq420:w-[60px]">
                          <span className="leading-[20px]">납부자명 </span>
                          <b className="text-base leading-[24px] text-semantic-error">
                            *
                          </b>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start text-base text-dark-gray sm:flex-[unset] sm:self-stretch mq420:min-w-[100px]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                          <div className="w-[340px] relative leading-[24px] hidden">
                            Email
                          </div>
                          <div className="self-stretch rounded-default-border-raius bg-bg-colors-white flex flex-row items-center justify-start py-2.5 px-3.5 gap-[10px] border-[1px] border-solid border-bg-light-border mq420:p-1.5 mq420:box-border">
                            <img
                              className="w-[18px] relative h-[18px] overflow-hidden shrink-0 hidden"
                              alt=""
                              src="/icon5.svg"
                            />
                            <input
                              className="[border:none] [outline:none] font-headings-headling-2 text-sm bg-[transparent] flex-1 relative leading-[20px] text-text-dark-gray text-left overflow-hidden text-ellipsis whitespace-nowrap"
                              placeholder="납부자명을 입력해주세요."
                              type="password"
                            />
                          </div>
                          <div className="w-[340px] relative leading-[24px] text-gray hidden mq420:text-2xs">
                            은행 송금시 "받는 분 통장 표시"란에 입금자명과
                            동일하게 입력해주세요.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-center min-w-[200px] hover:bg-bg-light lg:bg-bg-colors-white sm:flex-col">
                  <div className="self-stretch flex flex-row items-center justify-start py-2.5 px-5 border-b-[1px] border-solid border-bg-light-border sm:flex sm:flex-row sm:pl-2 sm:pr-2 sm:box-border mq420:pl-2 mq420:pr-2 mq420:box-border">
                    <div className="flex-1 flex flex-row items-center justify-start py-0.5 px-0 gap-[140px] md:gap-[100px] sm:flex-col sm:gap-[8px] mq420:gap-[8px]">
                      <div className="flex flex-row items-center justify-start py-2 px-4 sm:bg-bg-light-border sm:self-stretch sm:w-auto sm:items-center sm:justify-center sm:pl-2 sm:pr-2 sm:box-border mq420:pl-2 mq420:pr-2 mq420:box-border">
                        <div className="relative inline-block min-w-[100px] sm:text-center sm:w-[60px] mq420:text-smi mq420:w-[60px]">
                          <span className="leading-[20px]">이메일 </span>
                          <b className="text-base leading-[24px] text-semantic-error">
                            *
                          </b>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start text-base text-dark-gray sm:flex-[unset] sm:self-stretch mq420:min-w-[100px]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                          <div className="w-[340px] relative leading-[24px] hidden">
                            Email
                          </div>
                          <div className="self-stretch rounded-default-border-raius bg-bg-colors-white flex flex-row items-center justify-start py-2.5 px-3.5 gap-[10px] border-[1px] border-solid border-bg-light-border mq420:p-1.5 mq420:box-border">
                            <img
                              className="w-[18px] relative h-[18px] overflow-hidden shrink-0 hidden"
                              alt=""
                              src="/icon5.svg"
                            />
                            <input
                              className="[border:none] [outline:none] font-headings-headling-2 text-sm bg-[transparent] flex-1 relative leading-[20px] text-text-dark-gray text-left overflow-hidden text-ellipsis whitespace-nowrap"
                              placeholder="이메일을 입력해주세요."
                              type="password"
                            />
                          </div>
                          <div className="w-[340px] relative leading-[24px] text-gray hidden mq420:text-2xs">
                            은행 송금시 "받는 분 통장 표시"란에 입금자명과
                            동일하게 입력해주세요.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-center min-w-[200px] hover:bg-bg-light lg:bg-bg-colors-white sm:flex-col">
                  <div className="self-stretch flex flex-row items-center justify-start py-2.5 px-5 border-b-[1px] border-solid border-bg-light-border sm:flex sm:flex-row sm:pl-2 sm:pr-2 sm:box-border mq420:pl-2 mq420:pr-2 mq420:box-border">
                    <div className="flex-1 flex flex-row items-center justify-start py-0.5 px-0 gap-[140px] md:gap-[100px] sm:flex-col sm:gap-[8px] mq420:gap-[8px]">
                      <div className="flex flex-row items-center justify-start py-2 px-4 sm:bg-bg-light-border sm:self-stretch sm:w-auto sm:items-center sm:justify-center">
                        <div className="relative inline-block min-w-[100px] sm:text-center sm:w-[60px] mq420:text-smi mq420:w-[60px]">
                          <span className="leading-[20px]">휴대폰 </span>
                          <b className="text-base leading-[24px] text-semantic-error">
                            *
                          </b>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start text-base text-dark-gray sm:flex-[unset] sm:self-stretch mq420:min-w-[100px]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                          <div className="w-[340px] relative leading-[24px] hidden">
                            Email
                          </div>
                          <div className="self-stretch rounded-default-border-raius bg-bg-colors-white flex flex-row items-center justify-start py-2.5 px-3.5 gap-[10px] border-[1px] border-solid border-bg-light-border mq420:p-1.5 mq420:box-border">
                            <img
                              className="w-[18px] relative h-[18px] overflow-hidden shrink-0 hidden"
                              alt=""
                              src="/icon5.svg"
                            />
                            <input
                              className="[border:none] [outline:none] font-headings-headling-2 text-sm bg-[transparent] flex-1 relative leading-[20px] text-text-dark-gray text-left overflow-hidden text-ellipsis whitespace-nowrap"
                              placeholder="휴대폰 번호를 입력해주세요."
                              type="password"
                            />
                          </div>
                          <div className="w-[340px] relative leading-[24px] text-gray hidden mq420:text-2xs">
                            송금일자를 정확히 입력해주시기 바랍니다.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-center min-w-[200px] hover:bg-bg-light sm:flex-col">
                  <div className="self-stretch flex flex-row items-center justify-start py-2.5 px-5 border-b-[1px] border-solid border-bg-light-border sm:flex sm:flex-row sm:pl-2 sm:pr-2 sm:box-border mq420:pl-2 mq420:pr-2 mq420:box-border">
                    <div className="flex-1 flex flex-row items-center justify-start py-0.5 px-0 gap-[140px] md:gap-[100px] sm:flex-col sm:gap-[8px] mq420:gap-[8px]">
                      <div className="flex flex-row items-center justify-start py-2 px-4 sm:bg-bg-light-border sm:self-stretch sm:w-auto sm:items-center sm:justify-center mq420:pl-2 mq420:pr-2 mq420:box-border">
                        <div className="relative inline-block min-w-[100px] sm:text-center sm:w-[60px] mq420:text-smi mq420:w-[60px]">
                          <span className="leading-[20px]">결제수단 </span>
                          <b className="text-base leading-[24px] text-semantic-error">
                            *
                          </b>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[8px] text-text-text-small-light">
                        <div className="w-4 relative rounded-border-radius-full bg-bg-colors-white box-border h-4 border-[1px] border-solid border-bg-light-border" />
                        <div className="relative leading-[20px]">
                          무통장 입금
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-2 px-7 bg-button-colors-dark-sky rounded-md overflow-hidden flex flex-row items-center justify-center hover:bg-royalblue">
            <div className="relative text-sm leading-[20px] font-headings-headling-2 text-bg-colors-white text-center">
              납부 신청
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeeOrder;