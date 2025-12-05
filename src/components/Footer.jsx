import { useState } from 'react';
import logo from '../assets/imgs/logo/logo.png';
import { ListIcon, IgIcon, FbIcon } from './svg-icons/FooterIcons.jsx';

const bg_sm = "bg-[url('../assets/imgs/footer/footer-bg-sm.png')]";
const bg_lg = "sm:bg-[url('../assets/imgs/footer/footer-bg-lg.png')]";

function Footer() {
  const [activeLink, setActiveLink] = useState('form'); 

  return (
    <footer className={`w-full  bg-center ${bg_sm} px-3 ${bg_lg}`}>
      {/* 上面文字區 */}
      <div className="max-w-[1296px] mx-auto px-3 sm:flex sm:justify-between sm:items-center ">
      <div className="pt-10 w-full flex flex-col items-center sm:items-start sm:pt-0">
        <img src={logo} alt="footerLogo" className="w-30 h-auto shrink-0 mb-6" />
        <p className="fs-6-regular text-Primary-700 mb-6 sm:text-left leading-6.5 sm:fs-5-regular">
          若有數位產品設計和開發相關問題
          <br />
          歡迎填寫表單，或直接與我聯絡！
        </p>
        <p className="fs-6-regular text-Primary-500 sm:fs-5-regular">service@hexschool.com</p>
      </div>

      {/* 下方三個按鈕 */}
      <div className="max-w-[306px] mx-auto mt-10 flex flex-col gap-6 pb-10  sm:mx-0 sm:w-[306px] sm:shrink-0 sm:mt-20 sm:mb-20 sm:pb-0">
        {/* 1. 填寫表單 */}
        <button
          type="button"
          onClick={() => setActiveLink('form')}
          className={`flex items-center rounded-lg border py-[3px] pl-6 transition-colors sm:py-[7px] sm:hover:scale-105
            ${activeLink === 'form'
              ? 'bg-Primary-900 border-black'
              : 'bg-Primary-50 border-Primary-400'}`}
        >
          <div className="aspect-square w-14 flex items-center justify-center">
                <ListIcon
                className={`
                    w-[38px] h-[38px] transition
                    ${activeLink === 'form' ? 'text-Primary-50' : 'text-Primary-600'}
                `}
                />
          </div>
          <p
            className={`fs-5-regular ml-2 transition
              ${activeLink === 'form' ? 'text-Primary-50' : 'text-Primary-700'}`}
          >
            填寫表單
          </p>
        </button>

        {/* 2. IG */}
        <button
          type="button"
          onClick={() => setActiveLink('ig')}
          className={`flex items-center rounded-lg border py-1 pl-6 transition-colors sm:py-[7px] sm:hover:scale-105
            ${activeLink === 'ig'
              ? 'bg-Primary-900 border-Primary-900'
              : 'bg-Primary-50 border-Primary-400'}`}
        >
          <div className="aspect-square w-14 flex items-center justify-center">
            <IgIcon
                className={`
                    w-[38px] h-[38px] transition
                    ${activeLink === 'ig' ? 'text-Primary-50' : 'text-Primary-600'}
                `}
            />
          </div>
          <p
            className={`fs-5-regular ml-2 transition
              ${activeLink === 'ig' ? 'text-Primary-50' : 'text-Primary-700'}`}
          >
            hexschool_demo
          </p>
        </button>

        {/* 3. FB */}
        <button
          type="button"
          onClick={() => setActiveLink('fb')}
          className={`flex items-center rounded-lg border py-1 pl-6 transition-colors sm:py-[7px] sm:hover:scale-105
            ${activeLink === 'fb'
              ? 'bg-Primary-900 border-Primary-900'
              : 'bg-Primary-50 border-Primary-400'}`}
        >
          <div className="aspect-square w-14 flex items-center justify-center">
            <FbIcon
            className={`
                w-[38px] h-[38px] transition
                ${activeLink === 'fb' ? 'text-Primary-50' : 'text-Primary-600'}
            `}
            />
          </div>
          <p
            className={`fs-5-regular ml-2 transition
              ${activeLink === 'fb' ? 'text-Primary-50' : 'text-Primary-700'}`}
          >
            hexschoolTW
          </p>
        </button>
      </div>
      </div>
    </footer>
  );
}

export default Footer;