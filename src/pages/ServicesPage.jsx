import SectionTitle from "../components/SectionTitle";
import visual_design_icon from "../assets/imgs/icon/service-item-visual.svg";
import ui_icon from "../assets/imgs/icon/service-item-ui.svg";
import html_css_icon from "../assets/imgs/icon/service-item-html&css.svg";
import front_end_icon from "../assets/imgs/icon/service-item-front-end.svg";
import arrow_down_icon from "../assets/imgs/icon/arrow-downward.svg";
import price_visual_icon from "../assets/imgs/icon/price-item-visual.svg";
import pirce_ui_icon from "../assets/imgs/icon/price-item-ui.svg";
import price_frontend_icon from "../assets/imgs/icon/price-item-front-end.svg";
import casePos from "../assets/imgs/work-image/work-image4.png";
import caseBrandSite from "../assets/imgs/work-image/work-image5.png";
import caseMovie from "../assets/imgs/work-image/work-image6.png";
import caseOrange from "../assets/imgs/work-image/work-image7.png";

const servicesArray = [
  { id: 1, title: "平面設計", iconUrl: visual_design_icon },
  { id: 2, title: "UI 設計", iconUrl: ui_icon },
  { id: 3, title: "切版服務", iconUrl: html_css_icon },
  { id: 4, title: "前端開發", iconUrl: front_end_icon },
];
const processArray = [
  {
    id: 1,
    title: "初步接洽",
    content:
      "透過表單或其他社群軟體與我聯絡根據難易度與複雜度，後續可能需要電話/線上討論",
  },
  {
    id: 2,
    title: "需求釐清",
    content: "透過訪談與問卷，解析客戶需求，並針對痛點給予實際建議",
  },
  {
    id: 3,
    title: "委託簽約",
    content:
      "合約雙方用印後，即正式開始合作可提供發票或勞務報酬單，須支付 20% 訂金",
  },
  { id: 4, title: "版本呈現", content: "根據合約內容進行設計或開發" },
  {
    id: 5,
    title: "來回修正",
    content: "依據合約規定之修正次數進行，次數計算以 mail 為準",
  },
  { id: 6, title: "終版確認", content: "雙方同意後即為最終版" },
  { id: 7, title: "結案", content: "客戶簽署驗收單，並於約定日期支付尾款" },
];
const priceArray = [
  { id: 1, iconUrl: price_visual_icon, title: "平面設計", price: "6,000" },
  { id: 2, iconUrl: pirce_ui_icon, title: "UI設計", price: "15,000" },
  { id: 3, iconUrl: price_frontend_icon, title: "前端開發", price: "22,000" },
];
const customerCases = [
  {
    id: 1,
    imgUrl: casePos,
    title: "美美美早餐店 POS 機 UI Design",
    description: "訂單送單一目瞭然，自動報表分析好輕鬆",
    categories: ["UI 設計", "前端開發", "Wix"],
  },
  {
    id: 2,
    imgUrl: caseBrandSite,
    title: "巧克巧克形象官網設計",
    description: "三步驟完成訂票，電腦手機都支援",
    categories: ["UI 設計", "設計系統", "網路電商"],
  },
  {
    id: 3,
    imgUrl: caseMovie,
    title: "電影院訂票系統",
    description: "三步驟完成訂票，電腦手機都支援",
    categories: ["前端開發", "後端支援", "Vue"],
  },
  {
    id: 4,
    imgUrl: caseOrange,
    title: "2023 餉茶坊飲料旗艦店活動官網設計",
    description: "主打水果主題，冰鎮夏天暑氣",
    categories: ["網頁設計", "切版服務", "Javascript"],
  },
];
const services_bg = "bg-[url('../assets/imgs/service-bg/service-item-bg.png')]";
const process_bg =
  "bg-[url('../assets/imgs/service-bg/process-bg.png')] bg-[length:100%_100%]";
const ServicesPage = () => {
  return (
    <>
      <main className="w-full mx-auto">
        <section className="w-full flex flex-col pt-10 pb-20 items-center justify-center gap-10 xl:py-30 xl:gap-20">
          <SectionTitle title={"服務項目"} />
          <div className="w-full grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 lg:grid-cols-2 lg:max-w-[1296px] xl:px-4 xl:grid-cols-4">
            {servicesArray.map((service) => (
              <div
                className={`${services_bg} w-[306px] py-21 flex flex-col justify-center items-center gap-6 rounded-2xl`}
                key={service.id}
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
        </section>
        <section
          className={`w-full flex flex-col py-20 items-center justify-center gap-10 ${process_bg}`}
        >
          <SectionTitle title={"服務流程"} fontColor="text-Primary-50" />
          <div className="w-full grid grid-cols-1 place-items-center gap-4 px-3 md:max-w-[655px] lg:max-w-[655px]">
            {processArray.map((process) => (
              <>
                <div
                  className="w-full grid grid-cols-1 place-items-center bg-Primary-700 border border-Primary-500 pt-6 pb-12 px-6"
                  key={process.id}
                >
                  <h2 className="number-sm text-Primary-500">{process.id}</h2>
                  <div className="w-full flex flex-col items-center justify-center gap-2">
                    <h3 className="h4-bold text-Primary-50">{process.title}</h3>
                    <p className="fs-5 text-Primary-300 font-normal">
                      {process.content}
                    </p>
                  </div>
                </div>
                {process.id !== processArray.length && (
                  <img
                    src={arrow_down_icon}
                    alt="arrow_down_icon"
                    className="w-8 h-auto aspect-square"
                  />
                )}
              </>
            ))}
          </div>
        </section>
        <section className="w-full flex flex-col gap-10 py-20 items-center justify-center lg:py-30">
          <SectionTitle title={"價格表"} />
          <div className="w-full grid grid-cols-1 gap-6 place-items-center px-[27px] lg:grid-cols-2 lg:max-w-[1296px] xl:grid-cols-3">
            {priceArray.map((priceItem) => (
              <div
                key={priceItem.id}
                className="w-full py-6 px-6 flex justify-between items-center bg-Primary-100 shadow-[0_4px_8px_rgba(0,0,0,0.08)] rounded-lg max-w-[416px]"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={priceItem.iconUrl}
                    alt={priceItem.title}
                    className="w-10 h-10"
                  />
                  <h3 className="h5 text-Primary-800">{priceItem.title}</h3>
                </div>
                <div className="max-w-[41px] w-full border border-Primary-400"></div>
                <div className="flex items-baseline gap-1">
                  <h3 className="h4-bold text-Primary-800">
                    {priceItem.price}
                  </h3>
                  <p className="fs-6 text-Primary-600">起</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="w-full flex flex-col gap-10 py-20 items-center justify-center lg:py-30">
          <SectionTitle title={"客戶案例"} />
          <div className="w-full grid grid-cols-1 place-items-center gap-12 px-3 lg:grid-cols-2 lg:max-w-[1296px] lg:gap-x-6 lg:gap-y-20">
            {customerCases.map((customercase) => (
              <div className="w-full flex flex-col gap-4 max-w-[636px]" key={customercase.id}>
                <img
                  src={customercase.imgUrl}
                  alt={customercase.title}
                  className="max-w-[636px] max-h-[400px] w-full h-auto object-cover rounded-md"
                />
                <div className="w-full flex flex-col items-center justify-center gap-4 px-4">
                  <div className="w-full flex flex-col justify-center gap-2">
                    <h4 className="h5 text-Primary-700 whitespace-nowrap">
                      {customercase.title}
                    </h4>
                    <p className="fs-6 text-Primary-500">
                      {customercase.description}
                    </p>
                  </div>
                  <div className="w-full flex items-center gap-2">
                    {customercase.categories.map((category,index)=>(
                          <div className="flex items-center justify-center bg-Primary-200 rounded-2xl px-3 py-1" key={index}>
                            <p className="fs-6 text-Primary-700">{category}</p>
                          </div>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
export default ServicesPage;
