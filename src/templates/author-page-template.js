import React, { Component, Fragment } from 'react';
import { Link, graphql } from "gatsby";

export default class AboutPageTemplate extends Component {

  getName() {
    return this.props.data.markdownRemark.frontmatter.name;
  }

  getBooks() {
    return this.props.data.markdownRemark.frontmatter.books
      .map(book => book.book);
  }

  getBody() {
    return this.props.data.markdownRemark.html;
  }

  render() {
    return (
      <Fragment>
        <h1>
          {this.getName()}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: this.getBody() }}/>
        { this.renderBooks() }
        <Link to="/">На главную</Link>
      </Fragment>
    );
  }

  renderBooks() {
    const books = this.getBooks().map((book, index) => (
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


export const pageQuery = graphql`
  query AuthorQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug }}) {
      id
      html
      frontmatter {
        name
        books {
          book {
            title
          }
        }
      }
    }
  }
`;
