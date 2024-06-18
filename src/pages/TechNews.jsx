import React from "react";
import useFetchNews from "../hooks/useFetchNews.ts";
import axios from "axios";

const TechNews = () => {
  const {news, loading,error} = useFetchNews();
  
  if (loading) return;
  if (error) return <div>Error fetching data</div>;

  return (
    <div className="w-full min-h-screen bg-primary text-white">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full justify-center">
        <div>
          <p className="text-white text-3xl font-bold inline border-b-4 border-pink-700">
            Tech News
          </p>
          <p className="text-gray-300 py-3">Some Tech update to keep up with</p>
        </div>
        <div className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-3">
          {news.map((article, index) => (
            <div className="border rounded-lg bg-tertiary p-4 shadow-lg">
              <a
                href={article.url}
                target="_blank"
                className="text-lg font-bold hover:underline"
              >
                {article.title}
              </a>
              <p className="text-md">{article.description}</p>
              <img src={article.urlToImage} alt={article.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechNews;
