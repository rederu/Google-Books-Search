import React from 'react';

const SearchForm = (props) => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <form>
              <div className="row m-3">
                <div className="form-group col-md-10">
                  <input type="text" value={props.search} onChange={props.handleInputChange} id="book-search" placeholder="What're you searching for?" className="form-control form-control-underlined" />
                </div>
                <div className="form-group col-md-2">
                  <button type="submit" className="btn btn-primary rounded-pill btn-block shadow-sm" onClick={props.handleFormSubmit}>Search</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchForm;
