import {
  MenuAlt2Icon,
  SearchIcon,
} from "@heroicons/react/solid";

export const Hamburger = ({fnOpenSideBar}) => {
  return (
    <div
      className='h-full flex-grow flex items-center'
      onClick={fnOpenSideBar}>
      <MenuAlt2Icon className='h-3/4 w-auto ' />
      <SearchIcon className='h-3/4 w-auto px-2' />
    </div>
  );
};
