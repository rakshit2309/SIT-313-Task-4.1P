// ArticleDescription.js
import React from 'react';
import './ArticleDescription.css'; // Import the corresponding CSS

const ArticleDescription = ({ description }) => {
  return (
    <p className="image-description">{description}</p>
  );
};

export default ArticleDescription;
