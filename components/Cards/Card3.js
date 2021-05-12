import Link from "next/link";
import Image from "next/image";
import {Button} from "./../Elements/Button";

export const Card3 = ({
  link_url = "#",

  text_title = "NEW STUFF",
  img_url = "/f10.webp",
}) => {
  return (
    <Link href={link_url}>
      <article className='card3_article_base click_class'>
        <div className='hover_class'>
          <Image
            alt='Picture of the author'
            layout='responsive'
            priority={true}
            width={500}
            height={300}
            src={img_url}
          />
        </div>
        <div className='card3_text_wrapper'>
          <span
            className='card3_text_border
            card3_text_color
            card3_text_font
            card3_text_default'>
            {text_title}
          </span>
        </div>
      </article>
    </Link>
  );
};
// src='https://via.placeholder.com/500x250/996600'
