import Link from "next/link";
import Image from "next/image";
import {Button} from "./../Elements/Button";

export const CardProduct = ({
  link_url = "#",
  text_title = "PRODUCT TITLE",
  text_price,
  text_category,
}) => {
  return (
    <Link href={link_url}>
      <article className='cardProduct_article_base'>
        <div className='cardProduct_inner_default'>
          <Image
            alt='Picture of the author'
            src='/f6.webp'
            width={500}
            height={700}
          />
        </div>
        <div className='cardProduct_text_wrapper'>
          <p
            className='cardProduct_text_style_base
            cardProduct_text_style'>
            {text_title}
          </p>
          <p
            className='cardProduct_text_style_base
            cardProduct_text_style'>
            {text_price}
          </p>
        </div>
        <p
          className='cardProduct_text_style_base
          cardProduct_text_style'>
          {text_category}
        </p>
      </article>
    </Link>
  );
};
// src='https://via.placeholder.com/500x600/996600'
