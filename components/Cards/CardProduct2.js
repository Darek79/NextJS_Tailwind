import Link from "next/link";
import Image from "next/image";
import {Button} from "./../Elements/Button";

export const CardProduct2 = ({
  link_url = "#",
  article_base = "mb-4 bg-pink",
  outer_default,
  width_default = "w-full",
  img_src,
  text_wrapper = "flex justify-between",
  text_title = "PRODUCT TITLE",
  text_price = "22 €",
  text_category = "SHOES",
  text_style_base = "font-Roboto  font-bold tracking-wider px-4 py-2",
  text_size,
  text_style_color = "text-gray-50",
}) => {
  return (
    <Link href={link_url}>
      <article
        className={[article_base, outer_default].join(" ")}>
        <div className={[width_default].join(" ")}>
          <Image
            alt='Picture of the author'
            layout='responsive'
            width={400}
            height={650}
            src='/f2.jpg'
          />
        </div>
        <div
          className={[width_default, text_wrapper].join(
            " "
          )}>
          <p
            className={[
              text_style_base,
              text_style_color,
              text_size,
            ].join(" ")}>
            {text_title}
          </p>
          <p
            className={[
              text_style_base,
              text_style_color,
              text_size,
            ].join(" ")}>
            {text_price}
          </p>
        </div>
        <p
          className={[
            text_style_base,
            text_style_color,
            text_size,
          ].join(" ")}>
          {text_category}
        </p>
      </article>
    </Link>
  );
};
