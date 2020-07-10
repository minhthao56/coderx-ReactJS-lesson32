import "./App.css";
import React, { Component } from "react";
import BookList from "./components/BookList";
import booksApi from "./api/bookApi";
import Nav from "./components/Nav";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      titile: [],
    };
  }
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };
  onSubmit = (event) => {
    event.preventDefault();
    const params = {
      q: this.state.value,
    };
    booksApi.findBook(params).then((res) => {
      this.setState({
        titile: res,
      });
    });
  };

  componentDidMount() {
    booksApi.getAll().then((res) => {
      this.setState({ titile: res });
    });
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="container-fluid">
          {/*Find books */}
          <div className="form-find">
            <form onSubmit={this.onSubmit}>
              <label>
                {" "}
                Find book <br />
                <input
                  type="text"
                  name="q"
                  value={this.state.value}
                  onChange={this.handleChange}
                  placeholder="Type title here"
                />
              </label>
              <button type="submit">Find</button>
            </form>
          </div>
          <div className="container-list">
            {/* list Books */}
            {this.state.titile.map((tlbook, key) => {
              return (
                <BookList
                  tl={tlbook.tl}
                  description={tlbook.description}
                  price={tlbook.price}
                  image={tlbook.image}
                  key={key}
                  _id={tlbook._id}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
