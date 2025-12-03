import SectionTitle from "../components/SectionTitle";
import article_vr_pre_pic from "../assets/imgs/article-image/article-image1.png";
import article_figma_dev_next_pic from "../assets/imgs/article-image/article-image2.png";
import article_figma_dev_pre_pic from "../assets/imgs/article-image/article-image3.png";
import article_vr_research_pic from "../assets/imgs/article-image/article-image4.png";
import article_team_meeting_pic from "../assets/imgs/article-image/article-image5.png";
import article_coffee_pic from "../assets/imgs/article-image/article-image6.png";
import { useState } from "react";
const blogArticles = [
  {
    id: 1,
    imgUrl: article_vr_pre_pic,
    date: "2024/02/10",
    category: "UI/UX 新知",
    title: "Vision Pro 登場！Vision Pro UI/UX 設計重點大公開 (上)",
    desription:
      "Vision Pro 終於在 2024 年 2 月正式開賣，距離正式發表的 2023 年 6 月，已有半年時間。這半年間，各種質疑聲不斷冒出，例如「太貴了，這是做給投資家看的產品，不能真的大量生產」、「續航力明顯不足，電池太重，不利於隨身攜帶使用」、「隔絕現實世界，會更加深世代或人際關係的隔閡」。",
  },
  {
    id: 2,
    imgUrl: article_figma_dev_next_pic,
    date: "2023/11/20",
    category: "UI/UX 新知",
    title: "給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (下)",
    desription:
      "延續上一篇針對 Dev Mode 介紹這一篇要說的就是最複雜的「右側面板」啦！右側面板預設有兩個分頁：Inspect（偵測）, Plugins（外掛），預設開啟 Inspect。 右側面板也可以顯示 Comment，但需要先在左側面板上方點擊 對話 icon，才可以在右側面板看到所有留言紀錄。",
  },
  {
    id: 3,
    imgUrl: article_figma_dev_pre_pic,
    date: "2023/10/18",
    category: "UI/UX 新知",
    title: "Vision Pro 登場！Vision Pro UI/UX 設計重點大公開 (上)",
    desription:
      "身為工程師，除了精進開發技術、學習新框架、看更多的範例、刷更多的題，為了與其他團隊成員有效合作，也需要學習使用其他協作軟體，例如 Trello, Notion。 而如果是要跟設計師合作，目前最主要的就是使用 Figma了！Figma 是現在最主流的 UIUX 設計軟體，自從開創了「協作功能」之後，幾乎就是把 Adobe XD 和 Sketch 遠遠甩在後頭！",
  },
  {
    id: 4,
    imgUrl: article_vr_research_pic,
    date: "2023/09/20",
    category: "數位產品設計",
    title: "虛擬實境 (VR) 介面設計對使用者沈浸感影響的研究",
    desription:
      "在當今數位科技的快速發展下，虛擬實境（VR）技術日益受到關注。VR技術為使用者提供了身臨其境的體驗，並在多個領域中得到應用，如遊戲、教育、醫療等。然而，要實現真正的沈浸感需要考慮多個因素，其中介面設計是至關重要的一環。本研究旨在探討不同介面設計對使用者在虛擬環境中的沈浸感的影響，以期為優化VR技術的使用者體驗提供參考。",
  },
  {
    id: 5,
    imgUrl: article_team_meeting_pic,
    date: "2023/08/10",
    category: "數位產品設計",
    title: "想打到目標受眾？先讓設計師跟你都瞭解他們痛在哪！",
    desription:
      "一個準備完整的案主，會在發案之前，先準備好這個設計案的目標、受眾、主要功能、參考資料，然後交給設計師參考、發想、研究、使用。有些產品的目標受眾很明確，譬如一個比價 App，受眾目標的特徵可能有：年齡層廣、會使用線上購物、手機使用時間長。 但可以比價的東西實在太多了，若五花八門的商品都要拉進去，設計上需要建立非常多的目錄階層、制定非常多種的產品詳細頁面版型等等。...",
  },
  {
    id: 6,
    imgUrl: article_coffee_pic,
    date: "2023/07/03",
    category: "前端開發",
    title: "React vs. Vue，哪種前端框架比較好用？從三大面向談起",
    desription:
      "在當今快速發展的前端開發領域中，React和Vue被廣泛認為是兩個最受歡迎和強大的前端框架之一。然而，對於開發人員來說，選擇適合自己的框架可能是一個具有挑戰性的決定。本文將從三個主要面向探討React和Vue：開發效率、性能和生態系統。通過深入比較和分析這些方面，我們將試圖回答一個關鍵問題：React和Vue中哪種前端框架更加適用？這將有助於開發人員更好地理解兩者之間的優勢和劣勢，並在實際應用中做出明智...",
  },
];
const BlogPage = () => {
  const [category, setCategory] = useState("all");
  const filterBlogArticles =
    category === "all"
      ? [...blogArticles]
      : blogArticles.filter((blogarticle) => blogarticle.category === category);
  return (
    <>
      <main className="w-full mx-auto pt-10 pb-20 flex flex-col items-center justify-center gap-10">
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <SectionTitle title={"部落格"} />
          <p className="fs-6 text-Primary-500 font-normal">
            不定期分享技術文章
          </p>
        </div>
        <ul className="w-full flex items-center gap-8 px-3 py-5 overflow-x-auto whitespace-nowrap [scrollbar-width:none] bg-Primary-100 lg:hidden">
          <li
            className={`fs-6 font-normal whitespace-nowrap ${
              category === "all"
                ? " border-b border-Primary-800"
                : "border-none text-Primary-600"
            }`}
          >
            <button type="button" onClick={() => setCategory("all")}>
              全部文章
            </button>
          </li>
          <li
            className={`fs-6 font-normal whitespace-nowrap ${
              category === "UI/UX 新知"
                ? " border-b border-Primary-800"
                : "border-none text-Primary-600"
            }`}
          >
            <button type="button" onClick={() => setCategory("UI/UX 新知")}>
              UI/UX 新知
            </button>
          </li>
          <li
            className={`fs-6 font-normal whitespace-nowrap ${
              category === "數位產品設計"
                ? " border-b border-Primary-800"
                : "border-none text-Primary-600"
            }`}
          >
            <button type="button" onClick={() => setCategory("數位產品設計")}>
              數位產品設計
            </button>
          </li>
          <li
            className={`fs-6 font-normal whitespace-nowrap ${
              category === "平面設計"
                ? " border-b border-Primary-800"
                : "border-none text-Primary-600"
            }`}
          >
            <button type="button" onClick={() => setCategory("平面設計")}>
              平面設計
            </button>
          </li>
          <li
            className={`fs-6 font-normal whitespace-nowrap ${
              category === "前端開發"
                ? " border-b border-Primary-800"
                : "border-none text-Primary-600"
            }`}
          >
            <button type="button" onClick={() => setCategory("前端開發")}>
              前端開發
            </button>
          </li>
        </ul>
        <section className="w-full gap-6 flex lg:max-w-[1296px]">
          <section className="w-full flex flex-col items-center justify-center gap-10 px-[34.5px]">
            {filterBlogArticles.length === 0 ? (
              <h2 className="h2-spacing text-Primary-700">此分類目前沒文章 </h2>
            ) : (
              filterBlogArticles.map((blogarticle) => (
                <div className="w-full flex flex-col gap-4 justify-center bg-Primary-50 lg:flex-row lg:items-start lg:justify-start" key={blogarticle.id}>
                  <img
                    src={blogarticle.imgUrl}
                    alt={blogarticle.title}
                    className="w-[306px] h-[220px] object-cover border border-Primary-200 rounded-lg"
                  />
                  <div className="w-full flex flex-col items-center justify-center gap-4 px-2 max-w-[306px] sm:max-w-full">
                    <div className="w-full flex items-center justify-between sm:justify-start sm:gap-4">
                      <p className="fs-6 font-normal text-Primary-600">
                        {blogarticle.date}
                      </p>
                      <div className="flex items-center justify-center bg-Primary-200 rounded-2xl px-3 py-1">
                        <p className="fs-6 text-Primary-700">
                          {blogarticle.category}
                        </p>
                      </div>
                    </div>
                    <div className="w-full flex flex-col gap-3">
                      <h2 className="h5 text-Primary-700 font-semibold">
                        {blogarticle.title}
                      </h2>
                      <p className="fs-6 text-Primary-700 font-normal line-clamp-3 lg:line-clamp-none">
                        {blogarticle.desription}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </section>
          <ul className="hidden w-full flex-col items-center gap-8 px-3 py-5 bg-Primary-100 max-w-[306px] rounded-lg lg:flex">
            <li 
              className={`fs-6 font-normal whitespace-nowrap ${
                category === "all"
                  ? " border-b border-Primary-800"
                  : "border-none text-Primary-600"
              }`}
            >
              <button type="button" onClick={() => setCategory("all")}>
                全部文章
              </button>
            </li>
            <li
              className={`fs-6 font-normal whitespace-nowrap ${
                category === "UI/UX 新知"
                  ? " border-b border-Primary-800"
                  : "border-none text-Primary-600"
              }`}
            >
              <button type="button" onClick={() => setCategory("UI/UX 新知")}>
                UI/UX 新知
              </button>
            </li>
            <li
              className={`fs-6 font-normal whitespace-nowrap ${
                category === "數位產品設計"
                  ? " border-b border-Primary-800"
                  : "border-none text-Primary-600"
              }`}
            >
              <button type="button" onClick={() => setCategory("數位產品設計")}>
                數位產品設計
              </button>
            </li>
            <li
              className={`fs-6 font-normal whitespace-nowrap ${
                category === "平面設計"
                  ? " border-b border-Primary-800"
                  : "border-none text-Primary-600"
              }`}
            >
              <button type="button" onClick={() => setCategory("平面設計")}>
                平面設計
              </button>
            </li>
            <li
              className={`fs-6 font-normal whitespace-nowrap ${
                category === "前端開發"
                  ? " border-b border-Primary-800"
                  : "border-none text-Primary-600"
              }`}
            >
              <button type="button" onClick={() => setCategory("前端開發")}>
                前端開發
              </button>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};
export default BlogPage;
