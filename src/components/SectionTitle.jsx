import {TitleDecoLeftLg,TitleDecoRightLg,TitleDecoLeftSm,TitleDecoRightSm} from "../components/svg-icons/SectionTitleIcon"
const SectionTitle = ({ title,fontColor="text-Primary-700",iconColor="text-Primary-400" }) => {
  return (
    <>
      <div className="w-full flex justify-center items-center gap-4">
        <TitleDecoLeftSm className={`w-14 h-1.5 object-cover block ${iconColor} md:hidden lg:hidden `}/>
        <TitleDecoLeftLg className={`w-25 h-1.5 object-cover hidden ${iconColor} md:block lg:block`}/>
        <h2 className={`h4-bold-spacing ${fontColor} md:h2-spacing lg:h2-spacing lg:font-semibold`}>
          {title}
        </h2>
        <TitleDecoRightSm className={`w-14 h-1.5 object-cover block ${iconColor} md:hidden lg:hidden`} />
        <TitleDecoRightLg className={`w-25 h-1.5 object-cover hidden ${iconColor} md:block lg:block`}/>
      </div>
    </>
  );
};
export default SectionTitle;
