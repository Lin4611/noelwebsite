import { useState } from 'react';
import logo from '../assets/imgs/logo/logo.png';
import menu from '../assets/imgs/icon/menu-icon.svg';
import close from '../assets/imgs/icon/close-icon.svg';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeNav, setActiveNav] = useState('home'); // 先預設首頁選中

    return (
        <>
            {/* 依 isOpen 決定要不要置頂 */}
            <header
                className={
                    'w-full bg-white ' +
                    (isOpen ? 'fixed top-0 left-0 right-0 z-50' : 'relative z-10')
                }
            >
                <div className={`w-full h-14 mx-auto px-3 `+
                    (isOpen? 'border-b border-Primary-200':'')
                }>
                    <div className="flex items-center justify-between h-full ">
                        <div className="flex items-center w-[74px] h-[33px] shrink-0 sm:hidden">
                            <img src={logo} className="w-auto" alt="logo" />
                        </div>

                        <button
                            className="hover:scale-125 flex items-center w-10 h-10 shrink-0 sm:hidden"
                            onClick={() => setIsOpen(open => !open)}
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        >
                            {isOpen ? (
                                <img src={close} className="w-auto" alt="close menu" />
                            ) : (
                                <img src={menu} className="w-auto" alt="open menu" />
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* 漢堡選單內容：從 header 底下開始 */}
            {isOpen && (
        <div className="fixed inset-x-0 top-14 bottom-0 z-40 bg-black/40 sm:hidden">
          <div className="bg-white">
            <nav className="flex flex-col items-center py-10 gap-8 space-y-1 text-xl">
              <NavItem
                label="首頁"
                active={activeNav === 'home'}
                onClick={() => setActiveNav('home')}
              />
              <NavItem
                label="作品集"
                active={activeNav === 'works'}
                onClick={() => setActiveNav('works')}
              />
              <NavItem
                label="服務項目"
                active={activeNav === 'services'}
                onClick={() => setActiveNav('services')}
              />
              <NavItem
                label="部落格"
                active={activeNav === 'blog'}
                onClick={() => setActiveNav('blog')}
              />
              <NavItem
                label="聯絡我"
                active={activeNav === 'contact'}
                onClick={() => setActiveNav('contact')}
              />
            </nav>
          </div>
        </div>
      )}

            {/* 下面只是測試區塊 */}
            <div className="w-full h-[2000px] bg-cyan-400" />
        </>
    );
}

function NavItem({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative  fs-5-regular "
    >
      <span className={active ? "fs-5" : ""}>{label}</span>

      {active && (
        <>
          {/* 左上角 */}
          <span className="absolute -top-1 -left-2 w-2 h-2 border-t border-l border-gray-500" />
          {/* 右上角 */}
          <span className="absolute -top-1 -right-2 w-2 h-2 border-t border-r border-gray-500" />
          {/* 左下角 */}
          <span className="absolute -bottom-1 -left-2 w-2 h-2 border-b border-l border-gray-500" />
          {/* 右下角 */}
          <span className="absolute -bottom-1 -right-2 w-2 h-2 border-b border-r border-gray-500" />
        </>
      )}
    </button>
  );
}

export default Header;