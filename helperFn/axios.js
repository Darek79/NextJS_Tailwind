import axios from "axios";

export async function dataFetcher(url) {
  try {
    const {data} = await axios.get(url);
    console.log(data, "data");
    return data;
  } catch (error) {
    if (error)
      throw new Error(
        "something went wrong, please try again"
      );
  }
}
