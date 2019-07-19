//client/src/components/Search/Search.js
import React from "react";

const Search = () => {
  return (
    <div className="searchForm border m-4">
      <div>
        <p> Book Search </p>
      </div>
      <div className="card border-0 d-flex justify-content-center m-2">
      <form className="card card-sm">
        <div className="card-body row no-gutters align-items-center">
          <i className="col-auto" />
        </div>
        <div className="col">
          <input className="form-control formcontrol-lg form-control-borderless" type="search" placeholder="Search"></input>
        </div>
        <button className="btn btn-lg btn-success" type="submit">Search</button>
      </form>
      </div>
    </div>
  );
}

export default Search;