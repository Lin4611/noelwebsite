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
    { id: 1, title: "星際旅行訂票平台",content:"悠遊宇宙的夢想，從這裡開始實現", imgUrl: star_travel_img, categories: ["網頁設計", "響應式設計", "Bootstrap"], },
    { id: 2, title: "理財App",content:"連動帳戶與行動支付，讓 AI 提供您最好的理財建議", imgUrl: financial_img, categories: ["APP設計", "iOS", "React"], },
    { id: 3, title: "醫美診所官網",content:"永保青春的秘密，從粹究開始", imgUrl: beauty_clinic_img, categories: ["網頁設計", "響應式設計", "Bootstrap"], },
    { id: 4, title: "美美美早餐店 POS 機 UI Design",content:"訂單送單一目瞭然，自動報表分析好輕鬆", imgUrl: breakfast_store_img, categories: ["UI 設計", "前端開發", "Wix"], },
    { id: 5, title: "電影院訂票系統",content:"三步驟完成訂票，電腦手機都支援", imgUrl: theater_img, categories: ["前端開發", "後端支援", "Vue"], },
    { id: 6, title: "巧克巧克形象官網設計",content:"三步驟完成訂票，電腦手機都支援", imgUrl:  chocchoc_img, categories: ["UI設計", "設計系統", "網路電商"], },
];

function PortfolioPage(){
    return(
        <>
    <section className="w-full bg-Primary-100">
        <div
          className="
            relative
            max-w-[840px] lg:max-w-[670px]  
            mx-auto px-3
            py-12 lg:py-24
            pt-30">
          <img
            src={quoteLeft}
            alt=""
            aria-hidden
            className="absolute top-10 left-1/2 -translate-x-1/2 w-16 h-16 lg:left-20 lg:top-12 lg:-translate-x-1/2"/>
          <img
            src={quoteRight}
            alt=""
            aria-hidden
            className="hidden lg:block absolute bottom-55 right-16 w-16 h-16"
          />

          <div className="w-full flex justify-center">
            <div className="max-w-[300px] lg:max-w-[670px] text-center lg:text-center text-Primary-700">
              <p className="fs-5-regular">
                讓使用者在觀賞與使用的旅程中，發現
                <span className="relative inline-block ">
                  <span className="relative z-10">設計的價值</span>
                  <img
                    src={highlight}
                    alt="highlight icon"
                    aria-hidden
                    className="
                      pointer-events-none
                      absolute left-0 bottom-0
                      w-full
                      scale-x-120 scale-y-130
                      -translate-y-1"/>
                </span>
              </p>

              <p className="fs-5-regular leading-relaxed mt-2">
                而我在設計與開發的過程中，看見
                <span className="relative inline-block ">
                  <span className="relative z-10">自己的價值</span>
                  <img
                    src={highlight}
                    alt="highlight icon"
                    aria-hidden
                    className="
                      pointer-events-none
                      absolute left-0 bottom-0
                      w-full
                      scale-x-120 scale-y-130
                      -translate-y-1"/>
                </span>
              </p>
            </div>
          </div>

          <div className="mt-10 xl:mt-[83px]">
            <div className="relative mx-auto max-w-[235px] lg:max-w-[636px] ">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 text-center">
                <div className="text-center text-Primary-700 flex-col items-center">
                  <p className="fs-6 font-normal text-Primary-600 mb-2">
                    <span className="inline-block text-center">
                      2B經驗
                      <span className="block mx-auto mt-1 w-6 h-0.5 bg-Primary-400" />
                    </span>
                  </p>
                  <p className="fs-6-regular text-Primary-700">
                    內部監控系統、庫存系統、採購系統、行銷整合系統
                  </p>
                </div>

                <div className="text-center text-Primary-700 flex-col items-center">
                  <p className="fs-6 font-normal text-Primary-600 mb-2">
                    <span className="inline-block text-center">
                      2C經驗
                      <span className="block mx-auto mt-1 w-6 h-0.5 bg-Primary-400" />
                    </span>
                  </p>
                  <p className="fs-6-regular text-Primary-700">
                    跨國美妝保養電商、個人品牌網站、醫美網站、電子商務
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>

    <section className="w-full bg-Primary-50">
        <div className="max-w-[1296px] mx-auto px-3 pt-20 pb-12 xl:pt-30 xl:px-0 xl:pb-30">
            <div
            className="
                grid grid-cols-1 gap-12 pb-10 xl:pb-18 md:gap-6 md:grid-cols-2">
            {portfolioArticles.map((work) => (
                <article
                key={work.id}
                className="w-full bg-Primary-50  overflow-hidden mx-auto"
                >
                <img
                    src={work.imgUrl}
                    alt={work.title}
                    className="
                    w-full object-cover rounded-sm md:rounded-l-lg
                    aspect-351/224  
                    md:aspect-636/400 "/>

                <div className="px-4 pt-4 ">
                    <h3 className="h5  text-Primary-700 mb-2 md:h3">
                    {work.title}
                    </h3>

                    <p className="fs-6-regular text-Primary-500 mb-4">
                    {work.content}
                    </p>
                    <div className="flex flex-wrap gap-2">
                    {work.categories.map((category, index) => (
                        <span
                        key={index}
                        className="inline-flex items-center justify-center rounded-2xl bg-Primary-200 px-3 py-1 fs-6-regular text-Primary-700 "
                        >
                        {category}
                        </span>
                    ))}
                    </div>
                </div>
                </article>
            ))}
            </div>
            <div class="flex gap-4 justify-center">
                <button class="fs-4 w-10 h-10 flex items-center justify-center rounded-sm bg-Primary-800 text-Primary-50 xl:hover:scale-110">1</button>
                <button class="fs-4 w-10 h-10 flex items-center justify-center rounded-sm bg-Primary-50 text-Primary-700 xl:hover:scale-110">2</button>
                <button class="fs-4 w-10 h-10 flex items-center justify-center rounded-sm bg-Primary-50 text-Primary-700 xl:hover:scale-110">3</button>
            </div>
        </div>
    </section>
        </>
    );
};
export default PortfolioPage;