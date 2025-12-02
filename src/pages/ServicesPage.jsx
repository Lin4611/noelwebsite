import deco_left_sm from "../assets/imgs/icon/title deco-left-sm.svg";
import deco_right_sm from "../assets/imgs/icon/title deco-right-sm.svg";
const ServicesPage = () => {
  return (<>
    <main className="max-w-[375px] w-full mx-auto lg:max-w-[1920px]">
      <section className="w-full flex py-10">
        <div className="w-full flex justify-center items-center gap-4">
            <img src={deco_left_sm} alt="services" className="w-14 h-1.5 object-cover" />
          <h2 className="h4-bold-spacing text-Primary-700">服務項目</h2>
          <img src={deco_right_sm} alt="services" className="w-14 h-1.5 object-cover"/>
        </div>
      </section>
    </main>
  </>);
};
export default ServicesPage;
