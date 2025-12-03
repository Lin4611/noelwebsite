import hero_sm from "../assets/imgs/hero-image/hero-sm.png"
import hero_lg from "../assets/imgs/hero-image/hero-lg.png"

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
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default HomePage;