import Link from "next/link";
import Image from "next/image";
import {Button} from "./../Elements/Button";
import PropTypes from "prop-types";

const Card1 = ({
  link_url = "/category/1",
  text = "SUMMER VIBES",
  img_url = "/f3.webp",
  priority=false
}) => {
  return (
    <Link href={link_url}>
      <article className='card1_default click_class'>
        <div className='card1_div_img_wrapper_default hover_class'>
          <Image
            alt='my test img'
            layout='responsive'
            width={500}
            height={600}
            src={img_url}
            priority={priority}
          />
        </div>
        <div className='card1_text_wrapper_default'>
          <p
            className='card1_text_style_base
            card1_text_style_color
            card1_text_size'>
            {text}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default Card1;

// img_url = "https://via.placeholder.com/500x600/996600",
