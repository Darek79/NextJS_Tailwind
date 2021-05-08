import {DesktopItem} from "./DesktopItem";
export const DesktopBar = () => {
  return (
    <div className='desktop_bar_default'>
      <DesktopItem title='MEN' />
      <DesktopItem title='WOMAN' />
      <DesktopItem title='KIDS' />
      <DesktopItem title='SALE' />
      <DesktopItem title='COLLECTION' />
    </div>
  );
};
