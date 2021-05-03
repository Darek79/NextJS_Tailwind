import {ShoppingBagIcon} from "@heroicons/react/solid";

export const Basket = () => {
  return (
    <div className='h-full flex-none flex items-center px-2'>
      <ShoppingBagIcon className='h-3/4 w-auto' />
      <p className='text-xl'>0</p>
    </div>
  );
};
