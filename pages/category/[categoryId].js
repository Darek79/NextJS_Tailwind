import {useRouter} from "next/router";
import {dataFetcher} from "./../../helperFn/axios";
import axios from "axios";

export default function Category({data}) {
  const router = useRouter();
  console.log(router.query.categoryId);
  console.log(data);
  if (data === undefined) {
    return <div>LOADING...</div>;
  }
  return (
    <div>
      category
      {console.log(data)}
      <p>{data.body}</p>
      <p>{data.title}</p>
      <p>{data.id}</p>
    </div>
  );
}
export async function getStaticProps(context) {
  const {params} = context;

  const id = params.categoryId;
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  const {data} = await axios.get(url);

  return {
    props: {data},
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {categoryId: "1"},
      },
    ],
    fallback: "blocking",
  };
}
