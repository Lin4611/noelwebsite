import quoteLeft from '../assets/imgs/icon/quote-left.svg';
import quoteRight from '../assets/imgs/icon/quote-right.svg';
import highlight from '../assets/imgs/icon/mark.svg';

function PortfolioPage(){
    return(
        <>
             <section className="w-full bg-Primary-100">
                <div
                    className="
                    relative
                    max-w-[840px] lg:max-w-[670px]
                    mx-auto px-3
                    py-16 lg:py-24
                    pt-26
                    ">
                    <img
                    src={quoteLeft}
                    alt=""
                    aria-hidden
                    className="  absolute top-10 left-1/2 lg:left-0.5 -translate-x-1/2 w-16 h-16"
                    />
                    


                   <div className="w-full flex justify-center lg:justify-start">
                    {/* 這層控制寬度 */}
                    <div className="max-w-[300px] lg:w-auto lg:max-w-none text-center lg:text-left text-Primary-700">

                        <p className="fs-5-regular">
                        讓使用者在觀賞與使用的旅程中，發現
                        <span className="relative inline-block mx-1">
                            <span className="relative z-10">設計的價值</span>
                            <img
                            src={highlight}
                            alt="highlight icon"
                            aria-hidden
                            className="
                                pointer-events-none
                                absolute left-0 bottom-0
                                w-full
                                scale-x-110 scale-y-130
                                -translate-y-1
                                origin-bottom"/>
                        </span>
                        </p>

                        <p className="fs-5-regular leading-relaxed mt-4">
                        而我在設計與開發的過程中，看見
                        <span className="relative inline-block mx-1">
                            <span className="relative z-10">自己的價值</span>
                            <img
                            src={highlight}
                            alt="highlight icon"
                            aria-hidden
                            className="
                                pointer-events-none
                                absolute left-0 bottom-0
                                w-full
                                scale-x-110 scale-y-130
                                -translate-y-1
                                origin-bottom"/>
                                <img
                                src={quoteRight}
                                alt=""
                                aria-hidden
                                className="hidden lg:block absolute  w-16 h-16"
                                />
                        </span>
                        </p>

                    </div>
                    </div>

                    {/* 2B / 2C 經驗區塊 */}
                    <div
                    className="
                        mt-10
                        flex flex-col lg:flex-row
                        lg:justify-center lg:gap-24
                        text-center lg:text-left
                        text-Primary-700">
                    {/* 2B */}
                    <div className="mb-5 lg:mb-0 lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="w-[235px]">
                        <p className="fs-6 font-normal mb-2 text-Primary-600">
                            <span className="inline-block text-center">
                            2B經驗
                            <span className="block mx-auto mt-1 w-6 h-0.5 bg-Primary-400" />
                            </span>
                        </p>
                        <p className="fs-6-regular text-Primary-700 mt-2">
                            內部監控系統、庫存系統、採購系統、行銷整合系統
                        </p>
                        </div>
                    </div>

                    {/* 2C */}
                    <div className="lg:w-1/2 flex justify-center lg:justify-start">
                        <div className="w-[235px]">
                        <p className="fs-6 font-normal mb-2 text-Primary-600">
                            <span className="inline-block text-center">
                            2C經驗
                            <span className="block mx-auto mt-1 w-6 h-0.5 bg-Primary-400" />
                            </span>
                        </p>
                        <p className="fs-6-regular text-Primary-700 mt-2">
                            跨國美妝保養電商、個人品牌網站、醫美網站、電子商務
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default PortfolioPage;