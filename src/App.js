import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ArticalList from './ArticalList';


const articles = [
  {
    img: 'images/grid-list/00-52-29-429_640.jpg',
    title: 'Breakfast',
    link: 'http://www.google.com',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/burger-827309_640.jpg',
    title: 'Tasty burger',
    link: 'http://www.google.com',
    author: 'pashminu',
  },
  {
    img: 'images/grid-list/camera-813814_640.jpg',
    title: 'Camera',
    link: 'http://www.google.com',
    author: 'Danson67',
  },
  {
    img: 'images/grid-list/morning-819362_640.jpg',
    title: 'Morning',
    link: 'http://www.google.com',
    author: 'fancycrave1',
  },
  {
    img: 'images/grid-list/hats-829509_640.jpg',
    title: 'Hats',
    link: 'http://www.google.com',
    author: 'Hans',
  },
  {
    img: 'images/grid-list/honey-823614_640.jpg',
    title: 'Honey',
    link: 'http://www.google.com',
    author: 'fancycravel',
  },
  {
    img: 'images/grid-list/vegetables-790022_640.jpg',
    title: 'Vegetables',
    link: 'http://www.google.com',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/water-plant-821293_640.jpg',
    title: 'Water plant',
    link: 'http://www.google.com',
    author: 'BkrmadtyaKarki',
  },
];


class App extends Component {
  render() {
    return (
      <div className="App">
        <ArticalList articles={articles}/>
      </div>
    );
  }
}

export default App;
