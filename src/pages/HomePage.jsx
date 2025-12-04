import hero_sm from '../assets/imgs/hero-image/hero-sm.png';
import hero_lg from '../assets/imgs/hero-image/hero-lg.png';
import ig_icon from '../assets/imgs/icon/instagram.svg';
import facebook_icon from '../assets/imgs/icon/facebook.svg';
import youtube_icon from '../assets/imgs/icon/youtube.svg';
import highlight from '../assets/imgs/icon/mark.svg';
import SectionTitle from '../components/SectionTitle';
import Star_travel_img from '../assets/imgs/homepage-work1/homepage-work1.png';
import arror_icon from '../assets/imgs/icon/arrow-forward.svg';

const star_travel_bg = "bg-[url('../assets/imgs/homepage-work1/homepage-work1-bg.png')]";
const financial_bg_sm = "bg-[url('../assets/imgs/homepage-work2/homepage-work2-sm.png')]";
const financial_bg_lg = "lg:bg-[url('../assets/imgs/homepage-work2/homepage-work2-lg.png')]";


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

            <div className='mt-10 mb-10'>
                <SectionTitle title={"作品介紹"} />
            </div>
            
            <section
                className={`relative w-full bg-cover bg-center ${star_travel_bg} h-[390px] lg:h-[800px] `}>
                <div className="absolute inset-0 bg-Primary-700/40 z-0" />

                <div className=" relative z-10 max-w-[1296px] mx-auto px-4 h-full flex items-end justify-center lg:justify-between lg:items-center">
                    <div className="flex justify-center w-full lg:w-auto lg:justify-start lg:self-end">
                        <img className="w-[295px] lg:w-[600px] xl:w-[714px]  aspect-295/297 "
                            src={Star_travel_img}
                            alt="star travel img"/>
                    </div>

                    {/* 右側桌面版卡片 (lg:flex) */}
                    <div className="hidden lg:flex lg:flex-1 justify-end">
                        <div className="w-full max-w-[526px] h-[400px] rounded-3xl bg-Primary-50/10 backdrop-blur-sm px-10 pt-20 flex flex-col">
                            <div className='border-b border-Primary-200 mb-10'>
                                <h2 className="h3 text-Primary-50 mb-2">
                                    星際旅行訂票平台
                                </h2>

                                <p className="fs-6-regular text-Primary-50 mb-6">
                                    悠遊宇宙的夢想，從這裡開始實現
                                </p>

                                <ul className="flex flex-wrap  gap-2 mb-6">
                                    <li className="flex items-center justify-center rounded-3xl bg-Primary-50 px-3 py-1 fs-6-regular text-Primary-700">
                                        網頁設計
                                    </li>
                                    <li className="flex items-center justify-center rounded-3xl bg-Primary-50 px-3  fs-6-regular text-Primary-700">
                                        響應式設計
                                    </li>
                                    <li className="flex items-center justify-center rounded-3xl bg-Primary-50 px-3  fs-6-regular text-Primary-700">
                                        Bootstrap
                                    </li>
                                </ul>
                            </div>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-Primary-900 px-8 py-4.5 h5 text-Primary-50  hover:scale-105 mx-auto"
                            >
                                完整介紹
                                <img src={arror_icon} alt="" className="w-6 h-6 invert" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <div
                className="lg:hidden mx-auto px-4">
                <div className=" bg-Primary-50 pt-6  rounded-b-3xl flex flex-col items-center">
                    <h2 className='h5 text-Primary-800 mb-2'>星際旅行訂票平台</h2>
                    <p className='fs-6-regular text-Primary-600 mb-4'>悠遊宇宙的夢想，從這裡開始實現</p>
                    <ul className="flex  justify-center gap-2 mb-5">
                        <li className="flex items-center justify-center rounded-3xl bg-Primary-200 px-3 py-1 fs-6-regular  text-Primary-700">
                            網頁設計
                        </li>
                        <li className="flex items-center justify-center rounded-3xl bg-Primary-200 px-3  fs-6-regular  text-Primary-700">
                            響應式設計
                        </li>
                        <li className="flex items-center justify-center rounded-3xl bg-Primary-200 px-3  fs-6-regular  text-Primary-700">
                            Bootstrap
                        </li>
                    </ul>

                    <a href="#" className="inline-flex items-center justify-center gap-2 rounded-lg bg-Primary-900 px-4 py-2  fs-6 text-Primary-50 mb-12">
                        完整介紹
                        <img src={arror_icon} className="w-6 h-6 invert" />
                    </a>
                </div>
            </div>

            <section
                className={`relative w-full bg-cover bg-center ${financial_bg_sm} ${financial_bg_lg} h-[390px] lg:h-[800px] `}>


                <div className=" relative z-10 max-w-[1296px] mx-auto px-4 h-full flex items-end justify-center lg:justify-between lg:items-center">
 


                    <div className="hidden lg:flex lg:flex-1 justify-end">
                        <div className="w-full max-w-[526px] h-[400px] rounded-3xl bg-Primary-50/10 backdrop-blur-sm px-10 pt-20 flex flex-col">
                            <div className='border-b border-Primary-200 mb-10'>
                                <h2 className="h3 text-Primary-50 mb-2">
                                    星際旅行訂票平台
                                </h2>

                                <p className="fs-6-regular text-Primary-50 mb-6">
                                    悠遊宇宙的夢想，從這裡開始實現
                                </p>

                                <ul className="flex flex-wrap  gap-2 mb-6">
                                    <li className="flex items-center justify-center rounded-3xl bg-Primary-50 px-3 py-1 fs-6-regular text-Primary-700">
                                        網頁設計
                                    </li>
                                    <li className="flex items-center justify-center rounded-3xl bg-Primary-50 px-3  fs-6-regular text-Primary-700">
                                        響應式設計
                                    </li>
                                    <li className="flex items-center justify-center rounded-3xl bg-Primary-50 px-3  fs-6-regular text-Primary-700">
                                        Bootstrap
                                    </li>
                                </ul>
                            </div>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center gap-2 rounded-lg bg-Primary-900 px-8 py-4.5 h5 text-Primary-50  hover:scale-105 mx-auto"
                            >
                                完整介紹
                                <img src={arror_icon} alt="" className="w-6 h-6 invert" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <div
                className="lg:hidden mx-auto px-4">
                <div className=" bg-Primary-50 pt-6  rounded-b-3xl flex flex-col items-center">
                    <h2 className='h5 text-Primary-800 mb-2'>理財App</h2>
                    <p className='fs-6-regular text-Primary-600 mb-4 text-center'>連動帳戶與行動支付，讓 AI 提供您最好的理財建議</p>
                    <ul className="flex  justify-center gap-2 mb-5">
                        <li className="flex items-center justify-center rounded-3xl bg-Primary-200 px-3 py-1 fs-6-regular  text-Primary-700">
                            APP設計
                        </li>
                        <li className="flex items-center justify-center rounded-3xl bg-Primary-200 px-3  fs-6-regular  text-Primary-700">
                            iOS
                        </li>
                        <li className="flex items-center justify-center rounded-3xl bg-Primary-200 px-3  fs-6-regular  text-Primary-700">
                            React
                        </li>
                    </ul>

                    <a href="#" className="inline-flex items-center justify-center gap-2 rounded-lg bg-Primary-900 px-4 py-2  fs-6 text-Primary-50 mb-12">
                        完整介紹
                        <img src={arror_icon} className="w-6 h-6 invert" />
                    </a>
                </div>
            </div>
        </>
    );
}

export default HomePage;