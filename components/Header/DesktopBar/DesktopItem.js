import Link from "next/link";
import {useState} from "react";
export const DesktopItem = ({url = "#", title}) => {
  const [isOpen, setOpen] = useState(false);

  function showList() {
    setOpen((p) => !p);
  }
  function hideList() {
    setOpen((p) => !p);
  }
  return (
    <>
      <Link href={url}>
        <section
          className='w-26 flex flex-col px-4 cursor-pointer relative'
          onMouseEnter={showList}>
          <p className='m-auto'>{title}</p>
        </section>
      </Link>
      <div className='absolute bottom-0 bg-50 w-screen h-1/2'>
        <ul className=''>
          <li>test</li>
        </ul>
      </div>
    </>
  );
};
