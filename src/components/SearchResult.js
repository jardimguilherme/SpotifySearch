import React from 'react';
import AlbumsList from './AlbumsList';

const SearchResult = (props) => {
  const { result, selectedCategory } = props;
  const { albums } = result;
  return (
    <React.Fragment>
      {}
      <div className={`${selectedCategory === 'albums' ? '' : 'hide'}`}>
        {albums && <AlbumsList albums={albums} />}
      </div>
    </React.Fragment>
  );
};
export default SearchResult;