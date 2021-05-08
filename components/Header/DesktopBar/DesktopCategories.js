import {ListItem} from "./ListItem";

const category1 = [
  "Title",
  "consetetur sadipscing elitr",
  "nonumy eirmod",
  "clita kasd gubergren",
  "nonumy",
  "Stet clita kasd",
];
const category2 = ["Title", "gubergren", "nonumy"];
const category3 = [
  "Title",
  "consetetur sadipscing elitr",
  "nonumy eirmod",
  "clita kasd gubergren",
];

export const DesktopCategories = ({
  open,
  closeWhenLeave,
}) => {
  return (
    <div
      onMouseLeave={closeWhenLeave}
      className={
        !open
          ? "desktop_categories_default desktop_categories_isClosed"
          : "desktop_categories_default desktop_categories_isOpen"
      }>
      <div
        className={!open ? "list_isClosed" : "list_isOpen"}>
        <div className='list_wrapper'>
          <ListItem category={category1} />
          <ListItem category={category2} />
          <ListItem category={category3} />
          <ListItem category={category2} />
          <ListItem category={category3} />
          <ListItem category={category1} />
        </div>
      </div>
    </div>
  );
};
