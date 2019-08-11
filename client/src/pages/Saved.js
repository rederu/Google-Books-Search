import React, {Component} from 'react';
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron';
import Card from '../components/Card';

class SavedBooks extends Component {
  state = {books: []};

  // Method to GET all the books in the database.
  loadSaved = () => {
    API.getBook()
      .then(res => this.setState({books: res.data}))
      .catch(err => console.log(err))
  };

  // Method to DELETE a particular book from the database.
  deleteBook = event => {
    API.deleteBook(event.target.id)
      .then(res => this.loadSaved())
      .catch(err => console.log(err))
  };

  // Lifecycle Method
  componentDidMount() {
    this.loadSaved()
  }

  render() {
    return (
      <div className="container">
        <Jumbotron/>
        <Card
          books={this.state.books}
          buttonAction={this.deleteBook}
          buttonType="btn btn-danger mt-2"
          buttonText="Delete Book"
        />
      </div>
    )
  }
}

export default SavedBooks;