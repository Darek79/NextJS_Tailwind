import {useEffect, useState} from "react";

import {Hamburger} from "./Hamburger/Hamburger";
import {Logo} from "./Logo/Logo";
import {Basket} from "./Basket/Basket";
import {Aside} from "./Sidebar/Sidebar";
import SidebarCategory from "./Sidebar/SideBarCategory";
import SideBarItem from "./Sidebar/SideBarItem";
import IsVisible from "./../Hooks/IsonScreen";
import {
  CheckResize,
  IsMobile,
} from "./../../components/Hooks/helperFn";
import {DesktopBar} from "./../Header/DesktopBar/DesktopBar";

export const HeaderMain = () => {
  const [isM, setM] = useState(false);
  // const [isVisible, nodeRef] = IsVisible({
  //   threshold: 0.5,
  // });
  useEffect(() => {
    if (IsMobile()) {
      setM((p) => !p);
    }
  }, []);
  // const isBigger = CheckResize(980);

  const [openAside, setStatusAside] = useState(false);
  function openSideBar() {
    setStatusAside((p) => !p);
  }
  return (
    <header className='header_default'>
      {isM && openAside ? (
        <Aside
          openAside={openAside}
          closeAside={openSideBar}
          // nodeRef={nodeRef}
        >
          <SidebarCategory />
          <SideBarItem />
        </Aside>
      ) : undefined}
      <Logo />
      {!isM ? <DesktopBar /> : undefined}
      <Basket />
      {isM ? (
        <Hamburger fnOpenSideBar={openSideBar} />
      ) : undefined}
    </header>
  );
};

{
  /* <SidebarCategory />
<SideBarItem /> */
}
