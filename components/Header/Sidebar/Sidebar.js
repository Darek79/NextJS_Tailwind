import {XIcon} from "@heroicons/react/solid";
export const Aside = ({
  openAside,
  closeAside,
  children,
}) => {
  return (
    <aside
      className={
        openAside
          ? "sm:w-full md:w-screen h-auto bg-gray-100 z-10 absolute top-0 overflow-y-auto transition-all duration-350 transform-gpu translate-x-0"
          : "sm:w-full md:w-screen h-auto bg-gray-100 z-10 absolute top-0 overflow-y-auto transition-all duration-350 transform-gpu -translate-x-full"
      }>
      <div className='flex justify-end h-16 w-full bg-gray-100'>
        <XIcon
          className='h-10 w-10 relative top-3 right-3'
          onClick={closeAside}
        />
      </div>

      <div className='sm:w-screen md:w-screen'>
        {children}
      </div>
    </aside>
  );
};
