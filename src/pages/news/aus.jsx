import Head from "next/head"

import HeroSection from "@/components/layout/HeroSection"
import ArticlesList from "@/components/features/articles/ArticlesList";

function AusNewsPage(props) {
  const { ausArticles } = props;

  return (
    <>
      <Head>
        <title>Codefeed | AusFeed</title>
      </Head>
      <HeroSection 
        title="Aus"
        description="Catch up on all the news from Aus"
        bgImage="/backgrounds/hero-news.webp"
      />

      {ausArticles.length > 0 && <ArticlesList articles={ausArticles}/>}
    </>
  )
}

// ngsp
export const getStaticProps = async () => {
  const response = await fetch(`https://newsapi.org/v2/everything?sources=abc-news-au&sortBy=publishedAt&pageSize=10&apiKey=${process.env.NEWS_API_KEY}`);
  const data = await response.json();
  const articles = data.articles;
  console.log(articles);

  // Error handling
  if(!response.ok){
    throw new Error(`Failed to fetch posts - Error ${response.status}: ${data.message}`)
  }

  return {
    props: {
      ausArticles: articles
    },
    revalidate: 60  // ISR
  };
};

export default AusNewsPage



// import Head from "next/head"
// import { useState, useEffect } from "react";

// import HeroSection from "@/components/layout/HeroSection"
// import ArticleItem from "@/components/features/articles/ArticleItem";
// import ArticlesList from "@/components/features/articles/ArticlesList";
// import Container from '@/components/common/Container/Container';

// function AusNewsPage(props) {
//   const {ausArticle}= props
//   // // 1.a initial state to store API DATA
//   // const [articles, setArticles] = useState([]);
//   // // CSR HOOK
//   // useEffect(() => {
//   //   // Sideeffects to be called
//   //   fetchArticles();
//   // },[])


//   // async function fetchArticles(){
//   //   try {
//   //     const response = await fetch(`https://newsapi.org/v2/everything?sources=abc-news-au&sortBy=publishedAt&pageSize=10&apiKey=9730e4dd6f194268b8fc4249fce13a26`);
//   //     const data = await response.json();
//   //     console.log(data);
//   //     setArticles(data.articles)

      


//   //   } catch(err) {
//   //     console.log(err);
//   //   }
//   // }
//   return (

//     <>
//       <Head>
//         <title>Codefeed | AusFeed</title>
//       </Head>
//       <HeroSection 
//         title="Aus"
//         description="Catch up on all the news from Aus"
//         bgImage="/backgrounds/hero-news.webp"
//       />
       
//        {articles.length > 0 && <ArticlesList articles={articles}/>}

//        {ausArticle.map(article => (
//         <div key={article.title}>
//           <h2>{article.title}</h2>
//         </div>
//       ))}

//     </>
//   )
// }

// export default AusNewsPage