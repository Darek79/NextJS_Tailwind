import Link from "next/link";
import Image from "next/image";
import {Button} from "./../Elements/Button";

export const CardProduct = ({
  box_style = "mb-4",
  width_default = "w-11/12",
  text_wrapper = "flex justify-between",
  text_title = "PRODUCT TITLE",
  text_price = "22 €",
  text_category = "SHOES",
  text_style_base = "font-Roboto text-2xl font-bold tracking-wider px-4 py-2",
  text_style_color = "text-gray-50",
}) => {
  return (
    <Link href='#'>
      <article className={[box_style].join(" ")}>
        <div className={[width_default].join(" ")}>
          <Image
            alt='Picture of the author'
            layout='responsive'
            width={500}
            height={600}
            src='https://via.placeholder.com/500x600/996600'
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
            ].join(" ")}>
            {text_title}
          </p>
          <p
            className={[
              text_style_base,
              text_style_color,
            ].join(" ")}>
            {text_price}
          </p>
        </div>
        <p
          className={[
            text_style_base,
            text_style_color,
          ].join(" ")}>
          {text_category}
        </p>
      </article>
    </Link>
  );
};
