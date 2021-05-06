import Link from "next/link";
import Image from "next/image";
import {Button} from "./../Elements/Button";

export const CardProduct = ({
  link_url = "#",
  article_base = "mb-4 bg-pink",
  outer_default,
  inner_default = "w-11/12",
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
        <div className={[inner_default].join(" ")}>
          <Image
            alt='Picture of the author'
            src='/f1.jpg'
            width={500}
            height={700}
          />
        </div>
        <div
          className={[text_wrapper, inner_default].join(
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
// src='https://via.placeholder.com/500x600/996600'
