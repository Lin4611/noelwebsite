import SectionTitle from "../components/SectionTitle";
import visual_design_icon from "../assets/imgs/icon/service-item-visual.svg";
import ui_icon from "../assets/imgs/icon/service-item-ui.svg";
import html_css_icon from "../assets/imgs/icon/service-item-html&css.svg";
import front_end_icon from "../assets/imgs/icon/service-item-front-end.svg";
import arrow_down_icon from "../assets/imgs/icon/arrow-downward.svg";
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
const services_bg = "bg-[url('../assets/imgs/service-bg/service-item-bg.png')]";
const process_bg = "bg-[url('../assets/imgs/service-bg/process-bg.png')] bg-[length:100%_100%]";
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
      </main>
    </>
  );
};
export default ServicesPage;
