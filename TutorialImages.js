import React from 'react';
import './TutorialImages.css'; // You can create a separate CSS file for tutorials if needed
import ArticleName from './ArticleName';
import ArticleDescription from './ArticleDescription';
import ArticleContent from './ArticleContent';

const tutorialData = [
  {
    name: 'Tutorial 1',
    description: 'tutorial description 1 sbhfb wdbrweh bwh ehfbweh hebfewh whb whfw h weh f',
    author: 'Author 1',
    imageURL: '/pic4.jpeg', // Replace with actual URL
  },
  {
    name: 'Tutorial 2',
    description: 'tutorial description 2 f dhfd bfhifbr gbehge fbrjfb  wrjbfrfb',
    author: 'Author 2',
    imageURL: 'https://picsum.photos/seed/picsum/300/200', // Replace with actual URL
  },

  {
    name: 'Tutorial 3',
    description: 'tutorial description 2 f dhfd bfhifbr gbehge fbrjfb  wrjbfrfb',
    author: 'Author 2',
    imageURL: '/pic5.jpeg', // Replace with actual URL
  },
  // Add more tutorials here
];

const TutorialImages = () => {
  return (
    <>
      <h2 className="featured-title">FEATURED TUTORIALS</h2>
      <div className="tutorial-images">
        {tutorialData.map((tutorial, index) => (
          <div key={index} className="image-container">
            <img src={tutorial.imageURL} alt={tutorial.name} className="small-image" />
            <ArticleName name={tutorial.name} />
            <ArticleDescription description={tutorial.description} />
            <hr />
            <ArticleContent author={tutorial.author} />
          </div>
        ))}
      </div>
      <div className="see-all-container">
        <button className="see-all-button">See All Tutorials</button>
      </div>
    </>
  );
};

export default TutorialImages;
