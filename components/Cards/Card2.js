import Link from "next/link";
import Image from "next/image";

export const Card2 = ({
  link_url = "#",
  article_base,
  outer_default,
  inner_default,
  text_wrapper,
  text_title,
  text_bg,
  text_color,
  text_font,
  text_default,
}) => {
  return (
    <Link href={link_url}>
      <article className='card2_article_base click_class'>
        <div className='hover_class'>
          <Image
            alt='Picture of the author'
            layout='responsive'
            width={600}
            height={600}
            src='/f7.webp'
          />
        </div>
        <div className='card2_text_wrapper'>
          <span
            className='
            card2_text_bg
            card2_text_color
            card2_text_font
            card2_text_default
            '>
            {text_title}
          </span>
        </div>
      </article>
    </Link>
  );
};
// src='https://via.placeholder.com/500x600/996600'
