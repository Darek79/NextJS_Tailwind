import {Hamburger} from "./Hamburger/Hamburger";
import {Logo} from "./Logo/Logo";
import {Basket} from "./Basket/Basket";
import {Aside} from "./Sidebar/Sidebar";
import SidebarCategory from "./Sidebar/SideBarCategory";
import SideBarItem from "./Sidebar/SideBarItem";
import {useState} from "react";
export const HeaderMain = () => {
  const [openAside, setStatusAside] = useState(
    false
  );
  function openSideBar() {
    setStatusAside((p) => !p);
  }
  return (
    <div className='flex h-14 w-full'>
      <Aside
        openAside={openAside}
        closeAside={openSideBar}>
        <SidebarCategory />
        <SideBarItem />
      </Aside>
      <Hamburger fnOpenSideBar={openSideBar} />
      <Logo />
      <Basket />
    </div>
  );
};

{
  /* <SidebarCategory />
<SideBarItem /> */
}