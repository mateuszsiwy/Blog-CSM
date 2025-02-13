import React, { useEffect, useState } from "react";

const Presentations = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/blog") // Tu podłączysz CMS
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <section id="blog" className="py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Prezentacje</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold">{article.title}</h3>
              <p className="mt-2 text-gray-600">{article.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Presentations;
