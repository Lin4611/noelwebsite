import { useState } from 'react';
import logo from '../assets/imgs/logo/logo.png';
import formIcon from '../assets/imgs/icon/instagram.svg';
import igIcon from '../assets/imgs/icon/instagram.svg';
import facebookIcon from '../assets/imgs/icon/facebook.svg';

const bg_sm = "bg-[url('../assets/imgs/footer/footer-bg-sm.png')]";

function Footer() {
  const [activeLink, setActiveLink] = useState('form'); // form / ig / fb

  return (
    <footer className={`w-full h-[538px] bg-cover ${bg_sm} px-3`}>
      {/* 上面文字區 */}
      <div className="pt-10 w-full flex flex-col items-center">
        <img src={logo} alt="footerLogo" className="h-auto shrink-0 mb-6" />
        <p className="fs-6-regular text-Primary-700 mb-6">
          若有數位產品設計和開發相關問題
          <br />
          歡迎填寫表單，或直接與我聯絡！
        </p>
        <p className="fs-6-regular text-Primary-500">service@hexschool.com</p>
      </div>

      {/* 下方三個按鈕 */}
      <div className="max-w-[306px] mx-auto mt-10 flex flex-col gap-6">
        {/* 1. 填寫表單 */}
        <button
          type="button"
          onClick={() => setActiveLink('form')}
          className={`flex items-center rounded-lg border py-[3px] pl-6 transition-colors
            ${activeLink === 'form'
              ? 'bg-Primary-900 border-black'
              : 'bg-Primary-50 border-Primary-400'}`}
        >
          <div className="aspect-square w-14 flex items-center justify-center">
            <img
              src={formIcon}
              alt=""
              className={`w-[38px] transition ${activeLink === 'form' ? 'invert' : ''}`}
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
          className={`flex items-center rounded-lg border py-1 pl-6 transition-colors
            ${activeLink === 'ig'
              ? 'bg-Primary-900 border-Primary-900'
              : 'bg-Primary-50 border-Primary-400'}`}
        >
          <div className="aspect-square w-14 flex items-center justify-center">
            <img
              src={igIcon}
              alt=""
              className={`w-[38px] transition ${activeLink === 'ig' ? 'invert' : ''}`}
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
          className={`flex items-center rounded-lg border py-1 pl-6 transition-colors
            ${activeLink === 'fb'
              ? 'bg-Primary-900 border-Primary-900'
              : 'bg-Primary-50 border-Primary-400'}`}
        >
          <div className="aspect-square w-14 flex items-center justify-center">
            <img
              src={facebookIcon}
              alt=""
              className={`w-[38px] transition ${activeLink === 'fb' ? 'invert' : ''}`}
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
    </footer>
  );
}

export default Footer;