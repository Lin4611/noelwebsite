import hero_sm from '../assets/imgs/hero-image/hero-sm.png';
import hero_lg from '../assets/imgs/hero-image/hero-lg.png';
import ig_icon from '../assets/imgs/icon/instagram.svg';
import facebook_icon from '../assets/imgs/icon/facebook.svg';
import youtube_icon from '../assets/imgs/icon/youtube.svg';
import highlight from '../assets/imgs/icon/mark.svg';
import SectionTitle from '../components/SectionTitle';
import Star_travel_img from '../assets/imgs/homepage-work1/homepage-work1.png';
import arror_icon from '../assets/imgs/icon/arrow-forward.svg';
import beauty_clinic_img from '../assets/imgs/homepage-work3/homepage-work3.png';
import visual_design_icon from "../assets/imgs/icon/service-item-visual.svg";
import ui_icon from "../assets/imgs/icon/service-item-ui.svg";
import html_css_icon from "../assets/imgs/icon/service-item-html&css.svg";
import front_end_icon from "../assets/imgs/icon/service-item-front-end.svg";



const star_travel_bg = "bg-[url('../assets/imgs/homepage-work1/homepage-work1-bg.png')]";
const financial_bg_sm = "bg-[url('../assets/imgs/homepage-work2/homepage-work2-sm.png')]";
const financial_bg_lg = "lg:bg-[url('../assets/imgs/homepage-work2/homepage-work2-lg.png')]";
const beauty_clinic_bg = "bg-[url('../assets/imgs/homepage-work3/homepage-work3-bg.png')]";
const home_service_bg = "lg:bg-[url('../assets/imgs/homepage-service/homepage-services-bg.png')]";

const servicesArray = [
  { id: 1, title: "平面設計", iconUrl: visual_design_icon },
  { id: 2, title: "UI 設計", iconUrl: ui_icon },
  { id: 3, title: "切版服務", iconUrl: html_css_icon },
  { id: 4, title: "前端開發", iconUrl: front_end_icon },
];
const services_bg = "bg-[url('../assets/imgs/service-bg/service-item-bg.png')]";

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
                        <img className="w-[295px] lg:w-[600px] xl:w-[714px]  aspect-295/297 " src={Star_travel_img} alt="star travel img" />
                    </div>


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
                            <a href="#" className="inline-flex items-center justify-center gap-2 rounded-lg bg-Primary-900 px-8 py-4.5 h5 text-Primary-50  hover:scale-105 mx-auto">
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
                <div className="hidden lg:block pointer-events-none absolute inset-y-0 -left-2 w-1/2 bg-black/40" />
                <div className=" relative z-10 max-w-[1296px] mx-auto px-4 h-full flex items-end justify-center lg:justify-between lg:items-center">
                    <div className="hidden lg:flex lg:flex-1 justify-start">
                        <div className="xl:w-full md:max-w-[380px] lg:max-w-[526px] h-[400px] rounded-3xl bg-Primary-50/10 backdrop-blur-sm px-10 pt-20 flex flex-col">
                            <div className='border-b border-Primary-200 mb-10'>
                                <h2 className="h3 text-Primary-50 mb-2">
                                    理財APP
                                </h2>

                                <p className="fs-6-regular text-Primary-50 mb-6">
                                    連動帳戶與行動支付，讓 AI 提供您最好的理財建議
                                </p>

                                <ul className="flex flex-wrap  gap-2 mb-6">
                                    <li className="flex items-center justify-center rounded-3xl bg-Primary-50 px-3 py-1 fs-6-regular text-Primary-700">
                                        APP設計
                                    </li>
                                    <li className="flex items-center justify-center rounded-3xl bg-Primary-50 px-3  fs-6-regular text-Primary-700">
                                        iOS
                                    </li>
                                    <li className="flex items-center justify-center rounded-3xl bg-Primary-50 px-3  fs-6-regular text-Primary-700">
                                        React
                                    </li>
                                </ul>
                            </div>
                            <a href="#" className="inline-flex items-center justify-center gap-2 rounded-lg bg-Primary-900 px-8 py-4.5 h5 text-Primary-50  hover:scale-105 mx-auto">
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

            <section
                className={`relative w-full  bg-cover   bg-position-[70%_center]  ${beauty_clinic_bg} h-[390px] lg:h-[800px] `}>
                <div className="absolute inset-0 bg-Primary-700/50 z-0" />

                <div className=" relative z-10 max-w-[1296px] mx-auto px-4 h-full flex items-center justify-center lg:justify-between ">
                    <div className="flex justify-center w-full lg:w-auto lg:justify-start ">
                        <img className="w-[295px] lg:w-[600px] xl:w-[721px]  aspect-295/210 " src={beauty_clinic_img} alt="beauty clinic img" />
                    </div>


                    <div className="hidden lg:flex lg:flex-1 justify-end">
                        <div className="w-full max-w-[526px] h-[400px] rounded-3xl bg-Primary-50/10 backdrop-blur-sm px-10 pt-20 flex flex-col">
                            <div className='border-b border-Primary-200 mb-10'>
                                <h2 className="h3 text-Primary-50 mb-2">
                                    醫美診所官網
                                </h2>

                                <p className="fs-6-regular text-Primary-50 mb-6">
                                    永保青春的秘密，從粹究開始
                                </p>

                                <ul className="flex flex-wrap  gap-2 mb-6">
                                    <li className="flex items-center justify-center rounded-3xl bg-Primary-50 px-3 py-1 fs-6-regular text-Primary-700">
                                        網頁設計
                                    </li>
                                    <li className="flex items-center justify-center rounded-3xl bg-Primary-50 px-3  fs-6-regular text-Primary-700">
                                        響應式設計
                                    </li>
                                    <li className="flex items-center justify-center rounded-3xl bg-Primary-50 px-3  fs-6-regular text-Primary-700">
                                        ＷordPress
                                    </li>
                                </ul>
                            </div>
                            <a href="#" className="inline-flex items-center justify-center gap-2 rounded-lg bg-Primary-900 px-8 py-4.5 h5 text-Primary-50  hover:scale-105 mx-auto">
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
                    <h2 className='h5 text-Primary-800 mb-2'>醫美診所官網</h2>
                    <p className='fs-6-regular text-Primary-600 mb-4'>永保青春的秘密，從粹究開始</p>
                    <ul className="flex  justify-center gap-2 mb-5">
                        <li className="flex items-center justify-center rounded-3xl bg-Primary-200 px-3 py-1 fs-6-regular  text-Primary-700">
                            網頁設計
                        </li>
                        <li className="flex items-center justify-center rounded-3xl bg-Primary-200 px-3  fs-6-regular  text-Primary-700">
                            響應式設計
                        </li>
                        <li className="flex items-center justify-center rounded-3xl bg-Primary-200 px-3  fs-6-regular  text-Primary-700">
                            ＷordPress
                        </li>
                    </ul>

                    <a href="#" className="inline-flex items-center justify-center gap-2 rounded-lg bg-Primary-900 px-4 py-2  fs-6 text-Primary-50 mb-12">
                        完整介紹
                        <img src={arror_icon} className="w-6 h-6 invert" />
                    </a>
                </div>
            </div>

            <section className={`w-full bg-Primary-100 ${home_service_bg} `}>
                <div className="max-w-[1296px] mx-auto px-4 pt-20 pb-10 xl:pt-30 ">

                    <div className="mb-10 xl:mb-20">
                    <SectionTitle title="服務項目" />
                    </div>


                    <div className="
                    grid grid-cols-1 gap-6 place-items-center pb-10 xl:pb-20
                    md:grid-cols-2
                    xl:grid-cols-4
                    ">
                    {servicesArray.map(service => (
                        <div
                        key={service.id}
                        className={`${services_bg} w-[306px] py-21 flex flex-col items-center justify-center gap-6 rounded-2xl`}
                        >
                        <img
                            src={service.iconUrl}
                            alt={service.title}
                            className="w-20 h-auto aspect-square"
                        />
                        <h3 className="h4-bold text-Primary-50">{service.title}</h3>
                        </div>
                    ))}
                    </div>


                    <div className=" mb-12 flex flex-col items-center">
                        <h3 className="h5 xl:h3 font-semibold text-center mb-6 xl:mb-20 text-Primary-700">
                            想要合作或瞭解更多？
                        </h3>

                        <a
                            href="#"
                            className="inline-flex items-center justify-center gap-2 rounded-md bg-Primary-900 px-4 py-2 xl:py-4 xl:px-8 fs-6 xl:fs-5 text-Primary-50"
                        >
                            詳細內容與合作流程
                            <img src={arror_icon} className="w-6 h-6 invert" alt="" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomePage;