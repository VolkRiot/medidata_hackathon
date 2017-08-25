import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ArticalList from './ArticalList';
import SearchBar from 'material-ui-search-bar'
import * as _ from 'lodash';
import NYTApi from './ApiHelper.js/NYTApi';

// let articles = [
//   {
//     img: 'images/2017/08/25/crosswords/25wordplay-puffer/25wordplay-puffer-articleLarge.jpg',
//     title: 'Breakfast',
//     link: 'http://www.google.com',
//     author: 'jill111',
//   },
//   {
//     img: 'images/2017/08/25/crosswords/25wordplay-puffer/25wordplay-puffer-articleLarge.jpg',
//     title: 'Tasty burger',
//     link: 'http://www.google.com',
//     author: 'pashminu',
//   },
//   {
//     img: 'images/2017/08/25/crosswords/25wordplay-puffer/25wordplay-puffer-articleLarge.jpg',
//     title: 'Camera',
//     link: 'http://www.google.com',
//     author: 'Danson67',
//   },
//   {
//     img: 'images/2017/08/25/crosswords/25wordplay-puffer/25wordplay-puffer-articleLarge.jpg',
//     title: 'Morning',
//     link: 'http://www.google.com',
//     author: 'fancycrave1',
//   },
//   {
//     img: 'images/2017/08/25/crosswords/25wordplay-puffer/25wordplay-puffer-articleLarge.jpg',
//     title: 'Hats',
//     link: 'http://www.google.com',
//     author: 'Hans',
//   },
//   {
//     img: 'images/2017/08/25/crosswords/25wordplay-puffer/25wordplay-puffer-articleLarge.jpg',
//     title: 'Honey',
//     link: 'http://www.google.com',
//     author: 'fancycravel',
//   },
//   {
//     img: 'images/2017/08/25/crosswords/25wordplay-puffer/25wordplay-puffer-articleLarge.jpg',
//     title: 'Vegetables',
//     link: 'http://www.google.com',
//     author: 'jill111',
//   },
//   {
//     img: 'images/2017/08/25/crosswords/25wordplay-puffer/25wordplay-puffer-articleLarge.jpg',
//     title: 'Water plant',
//     link: 'http://www.google.com',
//     author: 'BkrmadtyaKarki',
//   },
// ];


class App extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      currentSearch: '',
    };

    this.debouncedSearch = _.debounce(this.search, 1000);
  }

  inputChanged = (val) => {
    console.log(val);
    this.setState({currentSearch: val });
    this.debouncedSearch(val);
  }

  search = (term) => {
    (new NYTApi()).runQuery(term)
      .then((result) => {
        console.log(result);
        var articles = _.map(result.data.response.docs, (doc) => {
          return {
            img: _.get(doc, 'multimedia[0].url'),
            title: _.get(doc, 'headline.main'),
            link: doc.web_url,
            author: 'jill111',
          }
        });
        this.setState({ articles });
      });

    this.debouncedSearch.cancel();
  }





  render() {
    return (
      <div className="App">
        <div  style={{ marginBottom: 30 }} >
          <SearchBar
            onChange={(val) => this.inputChanged(val)}
            onRequestSearch={() => this.search(this.state.currentSearch) }
            style={{
              margin: '0 auto',
              maxWidth: 800
            }}
          />
        </div>
        <ArticalList articles={this.state.articles}/>
      </div>
    );
  }
}

export default App;
