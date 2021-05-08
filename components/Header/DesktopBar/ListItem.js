import Link from "next/link";
import {v4} from "uuid";
export const ListItem = ({category}) => (
  <ul className='ul_default'>
    {category.map((el, i) => {
      if (i === 0) {
        return (
          <Link href={`/${el}`} key={v4()}>
            <li className='li_title'>{el}</li>
          </Link>
        );
      } else {
        return (
          <Link href={`/${el}`} key={v4()}>
            <li className='li_normal'>{el}</li>
          </Link>
        );
      }
    })}
  </ul>
);
