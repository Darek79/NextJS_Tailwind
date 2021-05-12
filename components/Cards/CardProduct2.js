import Link from "next/link";
import Image from "next/image";
import {Button} from "./../Elements/Button";

export const CardProduct2 = ({
  link_url = "#",
  text_title,
  text_price,
  text_category,
  priority = false,
  // card_prod_default = "mb-4 max-w-sm overflow-hidden",
  // click_behavior = "cursor-pointer",
  // bg_color = "bg-red-200",
}) => {
  return (
    <Link href={link_url}>
      <article className='cardProduct2_article_base click_class'>
        <div className='cardProduct2_inner_default hover_class'>
          <Image
            alt='Picture of the author'
            layout='responsive'
            width={300}
            height={450}
            src='/f6.webp'
            priority={priority}
          />
        </div>
        <div className='cardProduct2_text_wrapper'>
          <p className='cardProduct2_text_style_base cardProduct2_text_style'>
            {text_title}
          </p>
          <p className='cardProduct2_text_style_base cardProduct2_text_style'>
            {text_price}
          </p>
        </div>
        <p className='cardProduct2_text_style_base cardProduct2_text_style'>
          {text_category}
        </p>
      </article>
    </Link>
  );
};
