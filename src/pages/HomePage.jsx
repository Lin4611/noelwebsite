import hero_sm from '../assets/imgs/hero-image/hero-sm.png';
import hero_lg from '../assets/imgs/hero-image/hero-lg.png';
import ig_icon from '../assets/imgs/icon/instagram.svg';
import facebook_icon from '../assets/imgs/icon/facebook.svg';
import youtube_icon from '../assets/imgs/icon/youtube.svg';
import highlight from '../assets/imgs/icon/mark.svg';

function HomePage() {
    return (
        <>
            <section>
                <div>
                    <div>
                        <img alt="hero_img" className="w-full" src={hero_sm} />
                    </div>

                    <div>
                        <div className="flex flex-col items-center text-center mt-10 ">
                            <h1 className='h2 text-Primary-700 mb-6'>Hi！我是 Noel</h1>
                            <p className='fs-5-regular text-Primary-600 mb-2'>
                                <span className="block sm:inline">具有 10 年經驗的</span>
                                <span className="inline-flex items-baseline whitespace-nowrap">

                                    <span className="relative inline-block ">
                                        <span className="relative z-10">資深 UI 設計師</span>
                                        <img
                                            src={highlight}
                                            alt=""
                                            aria-hidden
                                            className="pointer-events-none absolute left-0 bottom-0 w-full scale-110 scale-y-120 -translate-y-1"
                                        />
                                    </span>

                                    <span className="mx-2">兼</span>


                                    <span className="relative inline-block ">
                                        <span className="relative z-10">前端工程師</span>
                                        <img
                                            src={highlight}
                                            alt=""
                                            aria-hidden
                                            className="pointer-events-none absolute left-0 bottom-0 w-full scale-x-110 scale-y-160 -translate-y-1"
                                        />
                                    </span>
                                </span>
                            </p>
                            <p className='fs-5-regular text-Primary-600 mb-4'>
                                <span className="block sm:inline">技術雙修並行，</span>
                                <span className="block sm:inline">熱衷於優化使用者的網頁體驗</span>
                            </p>
                            <p className='fs-6-regular text-Primary-400 mb-6'>
                                <span className="block sm:inline">WEB DEVELOPMENT / BRANDING /</span>
                                <span className="block sm:inline ">UI / UX / APP DESIGN</span>
                            </p>
                            <div className='flex gap-4'>
                                <a href="#" className='aspect-square w-10'>
                                    <img src={ig_icon} />
                                </a>
                                <a href="#" className='aspect-square w-10'>
                                    <img src={facebook_icon} />
                                </a>
                                <a href="#" className='aspect-square w-10'>
                                    <img src={youtube_icon} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default HomePage;