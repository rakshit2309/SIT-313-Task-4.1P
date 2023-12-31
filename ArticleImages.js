import React from 'react';
import './ArticleImages.css';
import ArticleName from './ArticleName';
import ArticleDescription from './ArticleDescription';
import ArticleContent from './ArticleContent';

const articleData = [
  {
    name: 'Image 1',
    description: 'description 1 sbhfb wdbrweh bwh ehfbweh hebfewh whb whfw h weh f',
    author: 'Author 1',
    imageURL: "pic1.jpeg"
  },
  {
    name: 'Image 2',
    description: 'description 2 f dhfd bfhifbr gbehge fbrjfb  wrjbfrfb',
    author: 'Author 2',
    imageURL: "pic2.jpeg "
  },
  {
    name: 'Image 3',
    description: 'description 3. sdfb  hwbefiweb  whbfewib ew whfweyif yeifbeiw i weibf',
    author: 'Author 3',
    imageURL: "pic3.jpeg"
  },
 
];

const ArticleImages = () => {
  return (
    <>
      <div className="article-images">
        {articleData.map((article, index) => (
          <div key={index} className="image-container">
            <img src={article.imageURL} alt={article.name} className="small-image" />
            <ArticleName name={article.name} />
            <ArticleDescription description={article.description} />
            <hr />
            <ArticleContent author={article.author} />
          </div>
        ))}
      </div>
      <div className="see-all-container">
        <button className="see-all-button">See All Articles</button>
      </div>

    </>
  );
};

export default ArticleImages;
