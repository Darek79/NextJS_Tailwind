import {DesktopItem} from "./DesktopItem";
export const DesktopBar = () => {
  return (
    <div className='desktop_bar_default'>
      <DesktopItem title='MEN' url='/category/men' />
      <DesktopItem title='WOMAN' url='/category/women' />
      <DesktopItem title='KIDS' url='/category/kids' />
      <DesktopItem title='SALE' url='/category/sale' />
      <DesktopItem
        title='COLLECTION'
        url='/category/collection'
      />
    </div>
  );
};
