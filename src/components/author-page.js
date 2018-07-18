import React, { Component, Fragment } from 'react';

export default class AuthorPage extends Component {

  render() {
    const { name } = this.props;

    return (
      <Fragment>
        <h1>
          {name}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: this.props.content }}/>
        { this.renderBooks() }
      </Fragment>
    );
  }

  renderBooks() {
    let { books } = this.props;
    if (!books.length) return null;

    books = books.map((book, index) => (
      <div key={index}>
        {book.title}
      </div>
    ));
    
    return (
      <Fragment>
        <h2>
          Книги
        </h2>
        { books }
      </Fragment>
    );
  }

}
