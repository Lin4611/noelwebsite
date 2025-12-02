import { useState } from 'react';
import logo from '../assets/imgs/logo/logo.png';
import menu from '../assets/imgs/icon/menu-icon.svg';
import close from '../assets/imgs/icon/close-icon.svg';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

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
            <div
                className={
                    "fixed inset-x-0 top-14 bottom-0 z-40 bg-black/40 sm:hidden " +
                    "transition-all duration-300 ease-out " +
                    (isOpen
                        ? "opacity-100  pointer-events-auto"
                        : "opacity-0  pointer-events-none")
                }
            >
                <div
                    className={
                        "bg-white transition-all duration-300 ease-out " +
                        (isOpen ? "translate-y-0" : "-translate-y-2")
                    }
                >
                    <nav className="flex flex-col items-center py-12 space-y-10 text-xl">
                        <button className="px-6 py-2 border border-black/60">
                            <span className="font-bold">首頁</span>
                        </button>
                        <button>作品集</button>
                        <button>服務項目</button>
                        <button>部落格</button>
                        <button>聯絡我</button>
                    </nav>
                </div>
            </div>

            {/* 下面只是測試區塊 */}
            <div className="w-full h-[2000px] bg-cyan-400" />
        </>
    );
}

export default Header;