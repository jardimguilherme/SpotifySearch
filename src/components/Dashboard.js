import React, { useState } from "react";

import {
  initiateGetResult,
} from "../actions/result";
import { connect } from "react-redux";
import SearchResult from "./SearchResult";
import SearchForm from "./SearchForm";
import Header from "./Header";
import Loader from "./Loader";

const Dashboard = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("albums");

  const handleSearch = (searchTerm) => {
    setIsLoading(true);
    props.dispatch(initiateGetResult(searchTerm)).then(() => {
      setIsLoading(false);
      setSelectedCategory("albums");
    });
  };

  const { albums, artists, playlist } = props;
  const result = { albums, artists, playlist };

  return (
    <React.Fragment>
      {
        <div>
          <Header />
          <SearchForm handleSearch={handleSearch} />
          <Loader show={isLoading}>Loading...</Loader>
          <SearchResult
            result={result}
            selectedCategory={selectedCategory}
          />
        </div>
      }
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    albums: state.albums,
    artists: state.artists,
    playlist: state.playlist,
  };
};

export default connect(mapStateToProps)(Dashboard);
