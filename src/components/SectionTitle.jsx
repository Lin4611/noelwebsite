import deco_left_sm from "../assets/imgs/icon/title deco-left-sm.svg";
import deco_right_sm from "../assets/imgs/icon/title deco-right-sm.svg";
import deco_left_lg from "../assets/imgs/icon/title deco-left-lg.svg";
import deco_right_lg from "../assets/imgs/icon/title deco-right-lg.svg";
const SectionTitle = ({ title,fontColor="text-Primary-700" }) => {
  return (
    <>
      <div className="w-full flex justify-center items-center gap-4">
        <img
          src={deco_left_sm}
          alt="services"
          className="w-14 h-1.5 object-cover block md:hidden lg:hidden"
        />
        <img
          src={deco_left_lg}
          alt="services"
          className="w-25 h-1.5 object-cover hidden md:block lg:block"
        />
        <h2 className={`h4-bold-spacing ${fontColor} md:h2-spacing lg:h2-spacing lg:font-semibold`}>
          {title}
        </h2>
        <img
          src={deco_right_sm}
          alt="services"
          className="w-14 h-1.5 object-cover block md:hidden lg:hidden"
        />
        <img
          src={deco_right_lg}
          alt="services"
          className="w-25 h-1.5 object-cover hidden md:block lg:block"
        />
      </div>
    </>
  );
};
export default SectionTitle;
