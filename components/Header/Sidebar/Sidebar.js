import {XIcon} from "@heroicons/react/solid";
export const Aside = ({
  openAside,
  closeAside,
  children,
  base = "sm:w-full md:w-screen h-auto bg-gray-100 z-10 absolute overflow-y-scroll top-0 bottom-0",
  bg = "bg-gray-100",
  transform = "transition-all duration-350 transform-gpu translate-x-0",
  transformChg = "transition-all duration-350 transform-gpu -translate-x-full",
}) => {
  return (
    <aside
      className={
        openAside
          ? [base, bg, transform, transform].join(" ")
          : [base, bg, transform, transformChg].join(" ")
      }>
      <div className='flex justify-end h-16 w-full bg-gray-100'>
        <XIcon
          className='h-10 w-10 relative top-3 right-3'
          onClick={closeAside}
        />
      </div>

      <div className='sm:w-screen md:w-screen h-auto overflow-y-scroll'>
        {children}
      </div>
    </aside>
  );
};
