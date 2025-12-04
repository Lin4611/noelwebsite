import quoteLeft from '../assets/imgs/icon/quote-left.svg';
import quoteRight from '../assets/imgs/icon/quote-right.svg';
import highlight from '../assets/imgs/icon/mark.svg';
import star_travel_img from '../assets/imgs/work-image/work-image1.png'
import financial_img from '../assets/imgs/work-image/work-image2.png'
import beauty_clinic_img from '../assets/imgs/work-image/work-image3.png'
import breakfast_store_img from '../assets/imgs/work-image/work-image4.png'
import theater_img from '../assets/imgs/work-image/work-image5.png'
import chocchoc_img from '../assets/imgs/work-image/work-image6.png'

const portfolioArticles = [
    { id: 1, title: "星際旅行訂票平台",content:"悠遊宇宙的夢想，從這裡開始實現", imgUrl: star_travel_img, date: "2024/02/10", categories: ["UI/UX 新知"], },
    { id: 2, title: "理財App",content:"連動帳戶與行動支付，讓 AI 提供您最好的理財建議", imgUrl: financial_img, date: "2023/11/20", categories: ["UI/UX 新知"], },
    { id: 3, title: "醫美診所官網",content:"永保青春的秘密，從粹究開始", imgUrl: beauty_clinic_img, date: "2023/10/18", categories: ["UI/UX 新知"], },
    { id: 4, title: "美美美早餐店 POS 機 UI Design",content:"訂單送單一目瞭然，自動報表分析好輕鬆", imgUrl: breakfast_store_img, date: "2023/10/18", categories: ["UI/UX 新知"], },
    { id: 5, title: "電影院訂票系統",content:"三步驟完成訂票，電腦手機都支援", imgUrl: theater_img, date: "2023/10/18", categories: ["UI/UX 新知"], },
    { id: 6, title: "巧克巧克形象官網設計",content:"三步驟完成訂票，電腦手機都支援", imgUrl:  chocchoc_img, date: "2023/10/18", categories: ["UI/UX 新知"], },
];

function PortfolioPage(){
    return(
        <>
             <section className="w-full bg-Primary-100">
                <div
                    className="
                    relative
                    max-w-[840px] lg:max-w-[636px]
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
                                className="hidden lg:block absolute -right-22 top-2 w-16 h-16"
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