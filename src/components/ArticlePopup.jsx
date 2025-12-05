import { useEffect } from "react";
import close_icon from "../assets/imgs/icon/close-icon.svg";
import main_vision_pic from "../assets/imgs/modal-image/modal-image1.png";
import recommand_search_pic from "../assets/imgs/modal-image/modal-image2.png";
const infoArray = [
  {
    id: 1,
    imgUrl: main_vision_pic,
    title: "主視覺",
    desription: "可直接設定日期、起迄星球、張數，快速查詢可購買的票券。",
  },
  {
    id: 2,
    imgUrl: recommand_search_pic,
    title: "推薦查詢",
    desription: "給予最快起飛，以及最熱門的景點推薦，協助使用者進行選擇。",
  },
];
const ArticlePopup = ({ isOpen, onClose }) => {
  // 禁止背景滾動
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <>
      <div className="w-full max-w-[1076px] flex flex-col items-center justify-center bg-Primary-50 rounded-2xl pb-10 lg:pb-20">
        <button
          type="button"
          className="w-full flex items-end justify-end pt-8 pr-8"
          onClick={onClose}
        >
          <img
            src={close_icon}
            alt="close"
            className="w-8 h-auto aspect-square"
          />
        </button>
        <div className="w-full flex flex-col items-center justify-center gap-6 py-6">
          <div className="w-full flex flex-col gap-2 items-center justify-center">
            <h1 className="h3 leading-[42px] text-Primary-700">
              星際旅行訂票平台
            </h1>
            <p className="fs-6 font-normal text-Primary-500">
              悠遊宇宙的夢想，從這裡開始實現
            </p>
          </div>
          <div className="w-full flex flex-col gap-6 items-center justify-center px-8 lg:px-14 lg:flex-row">
            <div className="w-full max-w-[604px] lg:pr-12">
              <p className="fs-6 font-normal text-Primary-800">
                STAR TRAVEL 為 KK 公司宇宙旅行的購票網站。
              </p>
              <p className="fs-6 font-normal text-Primary-800">
                主要從地球出發，目的地包含月球、火星、水星、木星；未來太空轉運站建置完畢，將再擴增目的地土星和金星。
              </p>
            </div>
            <div className="w-full max-w-[360px]  flex flex-col gap-6 items-center justify-center pt-6 border-t border-Primary-400 lg:border-t-0 lg:border-l lg:gap-2 lg:pt-0 lg:pl-6">
              <div className="hidden w-full lg:flex items-center justify-center gap-1 lg:justify-start">
                <h3 className="fs-6 font-normal text-Primary-600">設計原則:</h3>
                <p className="fs-6 font-normal text-Primary-600">
                  宇宙旅行、深色背景、強烈視覺效果
                </p>
              </div>
              <div className="w-full flex flex-col items-center justify-center gap-1 lg:hidden">
                <h3 className="fs-6 font-normal text-Primary-600">設計原則</h3>
                <p className="fs-6 font-normal text-Primary-600">
                  宇宙旅行、深色背景、強烈視覺效果
                </p>
              </div>
              <div className="w-full flex flex-col items-center justify-center gap-1 lg:hidden">
                <h3 className="fs-6 font-normal text-Primary-600">開發方式</h3>
                <p className="fs-6 font-normal text-Primary-600">
                  Bootstrap、Javascript、RWD
                </p>
              </div>
              <div className="hidden w-full lg:flex items-center justify-center gap-1 lg:justify-start">
                <h3 className="fs-6 font-normal text-Primary-600">開發方式:</h3>
                <p className="fs-6 font-normal text-Primary-600">
                  Bootstrap、Javascript、RWD
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col py-10 gap-14 px-4 bg-Primary-100">
          {infoArray.map((info) => (
            <div className="w-full flex flex-col gap-4 items-center justify-center">
              <img
                src={info.imgUrl}
                alt={info.title}
                className="w-full max-w-[720px] h-auto object-cover rounded-lg"
              />
              <div className="w-full flex flex-col items-center justify-center gap-2">
                <h2 className="h5 text-Primary-800">{info.title}</h2>
                <p className="fs-6 font-normal text-Primary-600">
                  {info.desription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default ArticlePopup;
