import React, { Component, Fragment } from 'react';

export default class AuthorPage extends Component {

  static defaultProps = {
    books: [],
    image: {}
  }

  render() {
    const { name } = this.props;

    return (
      <Fragment>
        <h1>
          {name}
        </h1>
        { this.renderImage() }
        { this.renderContent() }
        { this.renderBooks() }
      </Fragment>
    );
  }

  renderImage() {
    const { image } = this.props;

    if (image.url) {
      return (
        <figure>
          <img src={image.url} />
          <figcaption>{image.caption}</figcaption>
        </figure>
      );
    }
  }

  renderContent() {
    const { content } = this.props;

    if (typeof content === 'string') {
      return <div dangerouslySetInnerHTML={{ __html: this.props.content }}/>;
    } else {
      return content;
    }
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
