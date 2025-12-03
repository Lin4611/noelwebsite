import hero_sm from '../assets/imgs/hero-image/hero-sm.png';
import hero_lg from '../assets/imgs/hero-image/hero-lg.png';
import ig_icon from '../assets/imgs/icon/instagram.svg';
import facebook_icon from '../assets/imgs/icon/facebook.svg';
import youtube_icon from '../assets/imgs/icon/youtube.svg';

function HomePage(){
    return(
        <>
        <section>
            <div>
                <div>
                    <img alt="hero_img" className="w-full" src={hero_sm}/>
                </div>

                <div>
                    <div className="flex flex-col items-center text-center">
                        <h1>Hi！我是 Noel</h1>
                        <p>
                            <span className="block sm:inline">具有 10 年經驗的</span>
                            <span className="block sm:inline">資深 UI 設計師兼前端工程師</span>
                        </p>
                        <p>
                            <span className="block sm:inline">技術雙修並行，</span>
                            <span className="block sm:inline">熱衷於優化使用者的網頁體驗</span>
                        </p>
                        <p>
                            <span className="block sm:inline">WEB DEVELOPMENT / BRANDING /</span>
                            <span className="block sm:inline">UI / UX / APP DESIGN</span> 
                        </p>
                        <div className='flex'>
                            <a href="#">
                                <img src={ig_icon}  />
                            </a>
                            <a href="#">
                                <img src={facebook_icon}  />
                            </a>
                            <a href="#">
                                <img src={youtube_icon}  />
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