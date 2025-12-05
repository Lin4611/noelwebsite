import { useState, useEffect } from "react";
import logo from "../assets/imgs/logo/logo.png";
import menu from "../assets/imgs/icon/menu-icon.svg";
import close from "../assets/imgs/icon/close-icon.svg";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white">
        <div
          className={
            "w-full " +
            (isOpen ? "border-b border-Primary-200" : "")
          }
        >

          <div className="max-w-[1296px] mx-auto px-4 md:px-0">
            
            <div className="flex items-center w-full h-14 sm:h-24">
              <div className="flex items-center justify-between w-full sm:hidden">
                <Link to="/">
                  <div className="flex items-center w-[74px] h-[33px]  shrink-0">
                    <img src={logo} className="w-auto" alt="logo" />
                  </div>
                </Link>

                <button
                  type="button"
                  className="hover:scale-125 flex items-center w-10 h-10 shrink-0"
                  onClick={() => setIsOpen((open) => !open)}
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                  {isOpen ? (
                    <img src={close} className="w-auto" alt="close menu" />
                  ) : (
                    <img src={menu} className="w-auto" alt="open menu" />
                  )}
                </button>
              </div>

              <div className="hidden sm:flex items-center justify-start w-full">

                <Link to="/">
                  <div className="flex items-center w-[90px]  shrink-0 cursor-pointer sm:mr-15 md:mr-50 xl:mr-[325px]">
                    <img src={logo} className="w-auto" alt="logo" />
                  </div>
                </Link>
                
           
                <nav className="flex items-center gap-10 fs-6-regular ">
                  <Link to="/">
                    <NavItem
                      label="首頁"
                      active={activeNav === "home"}
                      onClick={() => setActiveNav("home")}
                    />
                  </Link>
                  <Link to="/portfolio">
                    <NavItem
                      label="作品集"
                      active={activeNav === "works"}
                      onClick={() => setActiveNav("works")}
                    />
                  </Link>
                  <Link to="/services">
                    <NavItem
                      label="服務項目"
                      active={activeNav === "services"}
                      onClick={() => setActiveNav("services")}
                    />
                  </Link>
                  <Link to="/blog">
                    <NavItem
                      label="部落格"
                      active={activeNav === "blog"}
                      onClick={() => setActiveNav("blog")}
                    />
                  </Link>

                  <NavItem
                    label="聯絡我"
                    active={activeNav === "contact"}
                    onClick={() => setActiveNav("contact")}
                  />
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-x-0 top-14 bottom-0 z-30 bg-black/40 sm:hidden">
          <div className="bg-white">
            <nav className="flex flex-col items-center py-10 gap-8 space-y-1 text-xl">
              <Link to="/">
                <NavItem
                  label="首頁"
                  active={activeNav === "home"}
                  onClick={() => setActiveNav("home")}
                />
              </Link>
              <Link to="/portfolio">
                <NavItem
                  label="作品集"
                  active={activeNav === "works"}
                  onClick={() => setActiveNav("works")}
                />
              </Link>
              <Link to="/services">
                <NavItem
                  label="服務項目"
                  active={activeNav === "services"}
                  onClick={() => setActiveNav("services")}
                />
              </Link>
              <Link to="/blog">
                <NavItem
                  label="部落格"
                  active={activeNav === "blog"}
                  onClick={() => setActiveNav("blog")}
                />
              </Link>

              <NavItem
                label="聯絡我"
                active={activeNav === "contact"}
                onClick={() => setActiveNav("contact")}
              />
            </nav>
          </div>
        </div>
      )}
    </>
  );
}


function NavItem({ label, active, onClick }) {
  return (
    <a type="button" onClick={onClick} className="relative fs-6-regular text-Primary-900 hover:scale-110">
      <span className={active ? "fs-6" : ""}>{label}</span>

      {active && (
        <>
          <span className="absolute -top-1 -left-2 w-2 h-2 border-t border-l border-gray-500" />
          <span className="absolute -top-1 -right-2 w-2 h-2 border-t border-r border-gray-500" />
          <span className="absolute -bottom-1 -left-2 w-2 h-2 border-b border-l border-gray-500" />
          <span className="absolute -bottom-1 -right-2 w-2 h-2 border-b border-r border-gray-500" />
        </>
      )}
    </a>
  );
}

export default Header;