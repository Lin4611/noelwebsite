import SectionTitle from "../components/SectionTitle"; 
import visual_design_icon from "../assets/imgs/icon/service-item-visual.svg";
import ui_icon from "../assets/imgs/icon/service-item-ui.svg";
import html_css_icon from "../assets/imgs/icon/service-item-html&css.svg";
import front_end_icon from "../assets/imgs/icon/service-item-front-end.svg";
const servicesArray = [
  { id: 1, title: "平面設計", iconUrl: visual_design_icon },
  { id: 2, title: "UI 設計", iconUrl: ui_icon },
  { id: 3, title: "切版服務", iconUrl: html_css_icon },
  { id: 4, title: "前端開發", iconUrl: front_end_icon },
];
const services_bg = "bg-[url('../assets/imgs/service-bg/service-item-bg.png')]";
const ServicesPage = () => {
  return (
    <>
      <main className="max-w-[375px] w-full mx-auto lg:max-w-[1920px]">
        <section className="w-full flex pt-10 pb-20 items-center justify-center gap-10 flex-col lg:py-30">
          <SectionTitle title={"服務項目"}/>
          <div className="w-full grid grid-cols-1 h-full justify-items-center gap-6 lg:grid-cols-4 lg:px-[312px]">
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
      </main>
    </>
  );
};
export default ServicesPage;
