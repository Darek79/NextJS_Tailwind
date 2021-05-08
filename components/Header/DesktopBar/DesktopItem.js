import Link from "next/link";
import {useState, useEffect, useRef} from "react";
import {DesktopCategories} from "./DesktopCategories";
export const DesktopItem = ({url = "#", title}) => {
  const [isOpen, setOpen] = useState(false);
  function showList() {
    setOpen(true);
  }
  function hideList() {
    setOpen(false);
  }

  return (
    <>
      <Link href={url}>
        <section
          className='desktop_item_default'
          onMouseEnter={showList}
          onMouseLeave={hideList}>
          <p className='m-auto'>{title}</p>
          <DesktopCategories
            open={isOpen}
            test={title}
            closeWhenLeave={hideList}
          />
        </section>
      </Link>
    </>
  );
};
