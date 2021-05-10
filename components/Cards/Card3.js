import Link from "next/link";
import Image from "next/image";
import {Button} from "./../Elements/Button";

export const Card3 = ({
  link_url = "#",
  article_base,
  outer_default,
  inner_default,
  text_wrapper,
  text_title = "NEW STUFF",
  text_bg,
  text_border,
  text_color = "text-gray-50",
  text_font = "font-Roboto",
  text_default = "py-2 px-2 font-bold text-2xl tracking-wider",
}) => {
  return (
    <Link href={link_url}>
      <article className='card3_article_base click_class'>
        <div className='hover_class'>
          <Image
            alt='Picture of the author'
            layout='responsive'
            width={500}
            height={300}
            src='/fg1.webp'
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
