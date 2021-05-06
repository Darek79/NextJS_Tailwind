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
      <article
        className={[article_base, outer_default].join(" ")}>
        <Image
          alt='Picture of the author'
          layout='responsive'
          width={500}
          height={300}
          src='/fg1.jpg'
        />
        <div
          className={[text_wrapper, inner_default].join(
            " "
          )}>
          <span
            className={[
              text_bg,
              text_border,
              text_color,
              text_font,
              text_default,
            ].join(" ")}>
            {text_title}
          </span>
        </div>
      </article>
    </Link>
  );
};
// src='https://via.placeholder.com/500x250/996600'