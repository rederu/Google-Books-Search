import React, {Component} from 'react';
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron';
import Card from '../components/Card';

class Saved extends Component {
  state = {books: []};

  // Method to Query the API/Database to GET all the books in the database.
  loadSaved = () => {
    API.getBooks()
      .then(res => this.setState({books: res.data}))
      .catch(err => console.log(err))
  };

  // Method to DELETE a particular book from the database.
  deleteBook = event => {
    API.deleteBook(event.target.id)
      .then(res => this.loadSaved())
      .catch(err => console.log(err))
  };

  componentDidMount() {
    this.loadSaved()
  }

  render() {
    return (
      <div className="container">
        <Jumbotron/>
      </div>
    )
  }
}

export default Saved;