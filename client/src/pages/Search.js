import React, {Component} from 'react';
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron';
import SearchForm from '../components/SearchForm';
import Card from '../components/Card';

const bookResults = googleApiResults => {
  const bookArray = [];

  googleApiResults.map(book => {

    const formattedBook = {
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      googleId: book.id,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.canonicalVolumeLink
    };

    bookArray.push(formattedBook);
    return bookArray
  });
  return bookArray;
};

class Search extends Component {
  state = {
    search: '',
    results: [],
    error: ''
  };

  saveBook = event => {

    const chosenBook = this.state.results.find(book => book.googleId === event.target.id);

    const newSave = {
      title: chosenBook.title,
      authors: chosenBook.authors,
      description: chosenBook.description,
      googleId: chosenBook.googleId,
      image: chosenBook.image,
      link: chosenBook.link
    };

    API.saveBook(newSave)
    console.log(newSave);
  };

  handleInputChange = event => {
    this.setState({search: event.target.value})
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getBooks(this.state.search)
      .then(res => {
        const formattedArray = bookResults(res.data.items);
        this.setState({results: formattedArray});
      })
      .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="container">
        <Jumbotron/>
        <SearchForm
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <Card
          books={this.state.results}
          buttonAction={this.saveBook}
          buttonType="btn btn-success mt-2"
          buttonText="Save Book"
        />
      </div>
    );
  }
}

export default Search;