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
      <article
        className={[article_base, outer_default].join(" ")}>
        <Image
          alt='Picture of the author'
          layout='responsive'
          width={500}
          height={600}
          src='https://via.placeholder.com/500x600/996600'
        />
        <div
          className={[text_wrapper, inner_default].join(
            " "
          )}>
          <span
            className={[
              text_bg,
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
