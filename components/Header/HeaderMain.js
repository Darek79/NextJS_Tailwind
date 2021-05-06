import {Hamburger} from "./Hamburger/Hamburger";
import {Logo} from "./Logo/Logo";
import {Basket} from "./Basket/Basket";
import {Aside} from "./Sidebar/Sidebar";
import SidebarCategory from "./Sidebar/SideBarCategory";
import SideBarItem from "./Sidebar/SideBarItem";
import {useState} from "react";
import IsVisible from "./../Hooks/IsonScreen";
import {CheckResize} from "./../../components/Hooks/helperFn";
import {DesktopBar} from "./../Header/DesktopBar/DesktopBar";

export const HeaderMain = () => {
  const [isVisible, nodeRef] = IsVisible({
    threshold: 0.5,
  });
  const isBigger = CheckResize(980);
  const [openAside, setStatusAside] = useState(false);
  function openSideBar() {
    setStatusAside((p) => !p);
  }
  return (
    <header className='flex h-14 w-full justify-center'>
      {isVisible ? (
        <Aside
          openAside={openAside}
          closeAside={openSideBar}
          nodeRef={nodeRef}>
          <SidebarCategory />
          <SideBarItem />
        </Aside>
      ) : undefined}
      <Logo />
      {!isBigger ? <DesktopBar /> : undefined}
      <Basket />
      {isVisible ? (
        <Hamburger fnOpenSideBar={openSideBar} />
      ) : undefined}
    </header>
  );
};

{
  /* <SidebarCategory />
<SideBarItem /> */
}
