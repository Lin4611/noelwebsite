import vision_pro_pic from "../assets/imgs/article-content-image/Vision Pro.png";
import oculus_rift_pic from "../assets/imgs/article-content-image/Oculus Rift.png";
import htc_vive_pic from "../assets/imgs/article-content-image/HTC Vive.png";
import playstations_vr_pic from "../assets/imgs/article-content-image/PlayStation VR.png";
import article_vr_pre_pic from "../assets/imgs/article-image/article-image1.png";
import article_uiux_future_pic from "../assets/imgs/article-image/article-image7.png";
const blogArticles = [
  {
    id: 1,
    imgUrl: article_vr_pre_pic,
    date: "2024/02/10",
    category: "UI/UX 新知",
    title: "Vision Pro 登場！Vision Pro UI/UX 設計重點大公開 (上)",
  },
  {
    id: 2,
    imgUrl: article_uiux_future_pic,
    date: "2023/07/10",
    category: "UI/UX 新知",
    title: "Vision Pro 來了！UIUX 設計師的未來在哪裡？",
  },
];
const BlogContentPage = () => {
  return (
    <>
      <main className="w-full mx-auto pb-20 flex flex-col items-center justify-center gap-10 px-3 lg:px-10">
        <ul className="w-full flex items-center gap-8 px-3 py-5 overflow-x-auto whitespace-nowrap [scrollbar-width:none] bg-Primary-100 lg:hidden">
          <li className="fs-6 font-normal whitespace-nowrap border-b border-Primary-800">
            <button type="button">全部文章</button>
          </li>
          <li className="fs-6 font-normal whitespace-nowrap text-Primary-600">
            <button type="button">UI/UX 新知</button>
          </li>
          <li className="fs-6 font-normal whitespace-nowrap text-Primary-600">
            <button type="button">數位產品設計</button>
          </li>
          <li className="fs-6 font-normal whitespace-nowrap text-Primary-600">
            <button type="button">平面設計</button>
          </li>
          <li className="fs-6 font-normal whitespace-nowrap text-Primary-600">
            <button type="button">前端開發</button>
          </li>
        </ul>
        <section className="w-full gap-[134px] flex lg:max-w-[1296px] lg:py-30">
          <section className="w-full flex flex-col items-center justify-center gap-6 px-3 lg:gap-16 lg:px-0">
            <div className="w-full flex flex-col gap-4 lg:gap-10">
              <div className="w-full flex items-center justify-between sm:justify-start sm:gap-4">
                <p className="fs-6 font-normal text-Primary-500">
                  數位產品設計
                </p>
                <p className="fs-6 font-normal text-Primary-500 hidden lg:block">/</p>
                <p className="fs-6 font-normal text-Primary-500">
                  2023/09/20 發佈
                </p>
              </div>
              <div className="w-full px-3 lg:px-15">
                <div className="w-full flex flex-col items-center justify-center gap-4 lg:gap-6">
                  <h1 className="h4-bold text-Primary-700 text-center lg:h2">
                    虛擬實境 (VR) 介面設計對使用者沈浸感影響的研究
                  </h1>
                  <h2 className="h6 text-Primary-700 lg:h4-regular ">
                    - 探索虛擬實境技術的現狀與前景 -
                  </h2>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-center gap-8">
              <p className="fs-5 font-normal text-Primary-700">
                在當今數位科技的快速發展下，虛擬實
                境（VR）技術日益受到關注。VR技術為
                使用者提供了身臨其境的體驗，並在多
                個領域中得到應用，如遊戲、教育、醫
                療等。然而，要實現真正的沈浸感需要
                考慮多個因素，其中介面設計是至關重
                要的一環。本研究旨在探討不同介面設
                計對使用者在虛擬環境中的沈浸感的影
                響，以期為優化VR技術的使用者體驗提 供參考。
              </p>
              <section className="w-full flex flex-col gap-4">
                <h3 className="h5 text-Primary-700 lg:h4-bold">大眾看法</h3>
                <p className="fs-5 font-normal text-Primary-700">
                  虛擬實境技術近年來受到越來越多人的
                  關注和接受。人們對VR技術的潛力持樂
                  觀態度，認為它能夠提供全新的體驗和
                  娛樂方式，並在教育、訓練等領域中有
                  著廣泛的應用前景。然而，也有一些人
                  擔心虛擬實境技術的成熟度和可靠性， 對其潛在風險抱有顧慮。
                </p>
              </section>
              <section className="w-full flex flex-col gap-4">
                <h3 className="h5 text-Primary-700 lg:h4-bold">現行產品</h3>
                <p className="fs-5 font-normal text-Primary-700">
                  目前市面上有許多虛擬實境產品，如 Vision Pro、Oculus Rift、HTC
                  Vive、 PlayStation VR等。這些產品在硬件性
                  能、軟件支持和使用者體驗等方面存在
                  差異，而介面設計是影響使用者體驗的
                  重要因素之一。不同的介面設計可以影
                  響使用者的操作方式、感知真實度以及 沈浸感。
                </p>
              </section>
              <div className="w-full grid grid-cols-1 gap-8 place-items-center lg:grid-cols-2">
                <figure className="max-w-[416px] w-full flex flex-col items-center justify-center gap-2">
                  <img
                    src={vision_pro_pic}
                    alt="vision pro"
                    className="w-full h-auto object-cover"
                  />
                  <figcaption className="fs-6 font-normal text-Primary-500">
                    Vision Pro
                  </figcaption>
                </figure>
                <figure className="max-w-[416px] w-full flex flex-col items-center justify-center gap-2">
                  <img
                    src={oculus_rift_pic}
                    alt="oculus rift"
                    className="w-full h-auto object-cover"
                  />
                  <figcaption className="fs-6 font-normal text-Primary-500">
                    Oculus Rift
                  </figcaption>
                </figure>
                <figure className="max-w-[416px] w-full flex flex-col items-center justify-center gap-2">
                  <img
                    src={htc_vive_pic}
                    alt="htc vive"
                    className="w-full h-auto object-cover"
                  />
                  <figcaption className="fs-6 font-normal text-Primary-500">
                    HTC Vive
                  </figcaption>
                </figure>
                <figure className="max-w-[416px] w-full flex flex-col items-center justify-center gap-2">
                  <img
                    src={playstations_vr_pic}
                    alt="PlayStation VR"
                    className="w-full h-auto object-cover"
                  />
                  <figcaption className="fs-6 font-normal text-Primary-500">
                    PlayStation VR
                  </figcaption>
                </figure>
              </div>
              <div className="w-full flex flex-col gap-4">
                <h3 className="h5 text-Primary-700 lg:h4-bold">技術創新</h3>
                <div className="w-full">
                  <p className="fs-5 font-normal text-Primary-700">
                    隨著硬件技術的不斷進步，VR設備的性
                    能和功能也在不斷提升。高解析度的顯
                    示器、感應器、追蹤技術等創新技術的
                    應用，使得虛擬實境的感知和互動性能
                    夠更加真實和流暢。然而，技術創新也
                    帶來了一些挑戰，例如圖像質量、感知
                    延遲等問題仍然存在，需要進一步解 決。
                  </p>
                  <p className="fs-5 font-normal text-Primary-700">
                    技術瓶頸：儘管虛擬實境技術取得了巨
                    大進步，但仍然存在一些技術瓶頸需要
                    克服。例如，許多使用者報告在使用VR
                    設備時出現眩暈和不適感，這與感知延
                    遲和畫面模糊等問題有關。此外，虛擬
                    實境的內容和應用也需要更多的創新和
                    豐富，以滿足不同使用者的需求。
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col gap-4">
                <h3 className="h5 text-Primary-700 lg:h4-bold">技術瓶頸</h3>
                <p className="fs-5 font-normal text-Primary-700">
                  儘管虛擬實境技術取得了巨大進步，但
                  仍然存在一些技術瓶頸需要克服。例
                  如，許多使用者報告在使用VR設備時出
                  現眩暈和不適感，這與感知延遲和畫面
                  模糊等問題有關。此外，虛擬實境的內
                  容和應用也需要更多的創新和豐富，以 滿足不同使用者的需求。
                </p>
              </div>
              <div className="w-full flex flex-col gap-4">
                <h3 className="h5 text-Primary-700 lg:h4-bold">未來展望</h3>
                <p className="fs-5 font-normal text-Primary-700">
                  未來，虛擬實境技術將繼續向前發展。
                  我們可以期待更加先進的硬件設備和更
                  加豐富多彩的虛擬內容。同時，介面設
                  計也將繼續演進，以提供更加直觀和便
                  捷的操作方式，進一步增強使用者的沈
                  浸感和參與感。總的來說，虛擬實境技
                  術的未來是充滿希望和潛力的，我們期
                  待著看到它在各個領域中的廣泛應用和 發展。
                </p>
              </div>
              <p className="fs-6 text-Primary-700 font-normal self-start">
                Noel 主筆
              </p>
            </div>
          </section>
          <ul className="hidden w-full flex-col items-start gap-8 pl-17 pt-15 px-3 py-5 bg-Primary-100 max-w-[306px] rounded-lg lg:flex">
            <li className="fs-5 font-normal whitespace-nowrap border-b border-Primary-800">
              <button type="button">全部文章</button>
            </li>
            <li className="fs-5 font-normal whitespace-nowrap text-Primary-600">
              <button type="button">UI/UX 新知</button>
            </li>
            <li className="fs-5 font-normal whitespace-nowrap text-Primary-600">
              <button type="button">數位產品設計</button>
            </li>
            <li className="fs-5 font-normal whitespace-nowrap text-Primary-600">
              <button type="button">平面設計</button>
            </li>
            <li className="fs-5 font-normal whitespace-nowrap text-Primary-600">
              <button type="button">前端開發</button>
            </li>
          </ul>
        </section>
        <div className="w-full flex flex-col items-center justify-center gap-10 px-[22.5px] border-t border-Primary-400 max-w-[1296px] pt-10 pb-20 lg:items-start">
          <h2 className="h4-bold text-Primary-700">相關文章</h2>
          <div className="w-full grid grid-cols-1 gap-10 place-items-center md:grid-cols-2 lg:grid-cols-2 lg:max-w-[856px] md:gap-4 lg:gap-4">
            {blogArticles.map((blogarticle) => (
              <div
                className="w-full flex flex-col gap-4 justify-center bg-Primary-50 items-center"
                key={blogarticle.id}
              >
                <img
                  src={blogarticle.imgUrl}
                  alt={blogarticle.title}
                  className="w-full h-[220px] object-cover border border-Primary-200 rounded-lg max-w-[416px]"
                />
                <div className="w-full flex flex-col items-center justify-center gap-4 px-2 max-w-[416px] lg:flex-col-reverse">
                  <div className="w-full flex items-center justify-between lg:flex-row-reverse">
                    <p className="fs-6 font-normal text-Primary-600">
                      {blogarticle.date}
                    </p>
                    <div className="flex items-center justify-center bg-Primary-200 rounded-2xl px-3 py-1">
                      <p className="fs-6 text-Primary-700">
                        {blogarticle.category}
                      </p>
                    </div>
                  </div>
                  <h2 className="h5 text-Primary-700 font-semibold">
                    {blogarticle.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogContentPage;
