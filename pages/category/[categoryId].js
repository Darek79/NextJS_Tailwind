import {useRouter} from "next/router";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import {MainWrapperDiv} from "./../../components/MainResponsive/MainWrapperBox";
import {HeaderMain} from "./../../components/Header/HeaderMain";
import Header from "../../components/Elements/GridItem";
import Main from "../../components/Elements/GridItem";
import Footer from "../../components/Elements/GridItem";
import Card1 from "./../../components/Cards/Card1";
import ItemSplitter from "../../components/Elements/GridItem";
import {Card2} from "./../../components/Cards/Card2";
import {Card3} from "./../../components/Cards/Card3";
import {CardProduct} from "./../../components/Cards/CardProduct";
import {CardProduct2} from "./../../components/Cards/CardProduct2";
import {CardVideo} from "../../components/Cards/CardVideo";

export default function Category({data}) {
  const router = useRouter();
  console.log(router.query.categoryId);
  console.log(data);
  if (data === undefined) {
    return <div>LOADING...</div>;
  }
  return (
    <MainWrapperDiv>
      <Head>
        <title>Category Page</title>
        <meta
          name='description'
          content='Generated by create next app'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'></meta>
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Mansalva&family=Rajdhani:wght@600&family=Roboto&display=swap'
          rel='stylesheet'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header classes='header_default_div'>
        <HeaderMain />
      </Header>
      <Main classes='main_default_style'>
        <div className='grid xl:grid-cols-xlcont md:grid-cols-mdcont sm:grid-cols-smcont gap-x-4'>
          <CardProduct2
            text_title='nice blouse'
            text_price='22 $'
            text_category='summer collection'
          />
          <CardProduct2 />
          <CardProduct2 />
          <CardProduct2 />
          <CardProduct2
            text_title='nice blouse'
            text_price='22 $'
            text_category='summer collection'
          />
          <CardProduct2 />
          <CardProduct2 />
          <CardProduct2 />
          <CardProduct2
            text_title='nice blouse'
            text_price='22 $'
            text_category='summer collection'
          />
          <CardProduct2 />
          <CardProduct2 />
          <CardProduct2 />
        </div>
      </Main>
    </MainWrapperDiv>
  );
}
// export async function getStaticProps(context) {
//   const {params} = context;

//   const id = params.categoryId;
//   const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
//   const {data} = await axios.get(url);

//   return {
//     props: {data},
//   };
// }

// export async function getStaticPaths() {
//   return {
//     paths: [
//       {
//         params: {categoryId: "1"},
//       },
//     ],
//     fallback: "blocking",
//   };
// }

export async function getServerSideProps(context) {
  const c = context;
  console.log(c.params.categoryId, "server");

  return {
    props: {data: "111"},
  };
}
