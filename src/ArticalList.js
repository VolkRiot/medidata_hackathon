import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    overflowY: 'auto',
  },
};

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const ArticalList = (props) => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      {props.articles.map((article) => (
        <a href={article.link} target="_blank" key={article.img}>
          <GridTile
            title={article.title}
            subtitle={<span>by <b>{article.author}</b></span>}
          >
            <img src={article.img} />
          </GridTile>
        </a>
      ))}
    </GridList>
  </div>
);

export default ArticalList;