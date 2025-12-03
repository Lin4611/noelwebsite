import hero_sm from '../assets/imgs/hero-image/hero-sm.png';
import hero_lg from '../assets/imgs/hero-image/hero-lg.png';
import ig_icon from '../assets/imgs/icon/instagram.svg';
import facebook_icon from '../assets/imgs/icon/facebook.svg';
import youtube_icon from '../assets/imgs/icon/youtube.svg';
import highlight from '../assets/imgs/icon/mark.svg';
import SectionTitle from "../components/SectionTitle";


function HomePage() {
    return (
        <>
            <section className="w-full bg-Primary-50">

                <div className="max-w-[1296px] mx-auto   ">

                    <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6 ">
                        {/* 右邊圖（手機時在上方，所以 order-1 / order-2） */}
                        <div className="order-1 lg:order-2 w-full lg:flex-1 lg:mr-[calc(50%-50vw)] ">
                            <picture>
                                <source srcSet={hero_lg} media="(min-width: 1024px)" />
                                <img
                                    alt="hero img"
                                    className="w-full h-auto object-cover lg:h-full"
                                    src={hero_sm}
                                />
                            </picture>
                        </div>

                        <div className="order-2 lg:order-1 lg:max-w-[430px] mt-10 lg:mt-0 lg:ml-3">
                            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                                <h1 className="h2 text-Primary-700 mb-6 lg:font-semibold lg:text-[40px] ">Hi！我是 Noel</h1>


                                <p className="fs-5-regular text-Primary-600 mb-2">
                                    <span className="block text-center lg:inline lg:text-left">
                                        具有 10 年經驗的
                                    </span>

                                    <span className="mt-1 flex justify-center lg:inline-flex lg:justify-start lg:ml-2">
                                        <span className="inline-flex flex-wrap min-[270px]:whitespace-nowrap">
                                            <span className="relative inline-block">
                                                <span className="relative z-10">資深 UI 設計師</span>
                                                <img
                                                    src={highlight}
                                                    alt=""
                                                    aria-hidden
                                                    className="pointer-events-none absolute left-0 bottom-0 w-full scale-x-110 scale-y-130 -translate-y-1 origin-bottom"
                                                />
                                            </span>

                                            <span className="mx-2">兼</span>

                                            {/* 前端工程師 */}
                                            <span className="relative inline-block">
                                                <span className="relative z-10">前端工程師</span>
                                                <img
                                                    src={highlight}
                                                    alt=""
                                                    aria-hidden
                                                    className="pointer-events-none absolute left-0 bottom-0 w-full scale-x-110 scale-y-160 -translate-y-1 origin-bottom"
                                                />
                                            </span>
                                        </span>
                                    </span>
                                </p>


                                <p className="fs-5-regular text-Primary-600 mb-4">
                                    <span className="block lg:inline">技術雙修並行，</span>
                                    <span className="block lg:inline">熱衷於優化使用者的網頁體驗</span>
                                </p>


                                <p className="fs-6-regular text-Primary-400 mb-6 lg:mb-15">
                                    <span className="block lg:inline">
                                        WEB DEVELOPMENT / BRANDING /
                                    </span>
                                    <span className="block lg:inline"> UI / UX / APP DESIGN</span>
                                </p>


                                <div className="flex gap-4 mb-4 lg:mb-0">
                                    <a
                                        href="#"
                                        aria-label="Noel Instagram"
                                        className="aspect-square w-10 flex items-center justify-center lg:w-14"
                                    >
                                        <img src={ig_icon} alt="Instagram" className="w-full h-full" />
                                    </a>
                                    <a
                                        href="#"
                                        aria-label="Noel Facebook"
                                        className="aspect-square w-10 flex items-center justify-center lg:w-14"
                                    >
                                        <img src={facebook_icon} alt="Facebook" className="w-full h-full" />
                                    </a>
                                    <a
                                        href="#"
                                        aria-label="Noel Youtube"
                                        className="aspect-square w-10 flex items-center justify-center lg:w-14"
                                    >
                                        <img src={youtube_icon} alt="Youtube" className="w-full h-full" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <SectionTitle title={"服務項目"} />
            </section>


        </>
    );
}

export default HomePage;