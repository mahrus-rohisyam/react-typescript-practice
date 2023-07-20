import axios from "axios";
import { ArticleType } from "../../../@types/ArticleType";
import { useEffect } from "react";

type Props = {
  articles: ArticleType[];
};

const baseUrl = "http://103.175.216.13:9090";

const ApiPage = () => {
  const getApi = async () => {
    axios
      .get("http://103.175.216.13:9090/articles")
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getApi()
  })

  return (
    <main>
      <h1>Api PAGE</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad aspernatur
        similique veniam debitis dolorum vero laboriosam minima cupiditate ex
        explicabo eius non quaerat ducimus facere veritatis ea nihil, quibusdam
        fugiat!
      </p>

      <article></article>
    </main>
  );
};

export default ApiPage;
