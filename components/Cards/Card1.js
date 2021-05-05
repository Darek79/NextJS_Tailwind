import Link from "next/link";
import Image from "next/image";
import {Button} from "./../Elements/Button";
import PropTypes from "prop-types";

const Card1 = ({
  link_url = "#",
  article_base,
  outer_default,
  inner_default,
  div_img_wrapper,
  text_wrapper = "flex justify-center",
  text = "SUMMER VIBES",
  text_style_base = "font-Roboto font-bold tracking-wider py-2",
  text_style_color = "text-gray-50",
  text_size,
  img_url = "https://via.placeholder.com/500x600/996600",
}) => {
  return (
    <Link href={link_url}>
      <article
        className={[article_base, outer_default].join(" ")}>
        <div
          className={[div_img_wrapper, inner_default].join(
            " "
          )}>
          <Image
            alt='my test img'
            layout='responsive'
            width={500}
            height={600}
            src={img_url}
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
            {text}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default Card1;
