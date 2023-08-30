
import './App.css';
import React from 'react';
import Navbar from './Navbar';
import CoverImage from './CoverImage';
import ArticleImages from './ArticleImages';
// import ArticleName from './ArticleName';
import Navbar2 from './Navbar2';
import Footer from './Footer';
import Footer2 from './Footer2'; 
import TutorialImages from './TutorialImages';
function App() {
  return (
   <>
    <div className="App">
      <Navbar />
      <CoverImage/>
      <ArticleImages/>
      <TutorialImages/>
      <Navbar2 />
     <Footer/>{}
     <Footer2 />
    </div>
   </>
  );
}

export default App;
