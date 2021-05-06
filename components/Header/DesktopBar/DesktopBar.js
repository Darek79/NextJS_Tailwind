import {DesktopItem} from "./DesktopItem";
export const DesktopBar = () => {
  return (
    <div className='flex w-full'>
      <DesktopItem title='MEN' />
      <DesktopItem title='WOMAN' />
      <DesktopItem title='KIDS' />
    </div>
  );
};
