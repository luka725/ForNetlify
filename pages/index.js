import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
  return (
    <>
      <ArticleList articles={articles} />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};