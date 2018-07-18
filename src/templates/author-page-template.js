import React, { Component, Fragment } from 'react';
import { Link, graphql } from "gatsby";

import AuthorPage from '../components/author-page';

export default class AuthorPageTemplate extends Component {

  getName() {
    return this.props.data.markdownRemark.frontmatter.name;
  }

  getImage() {
    return this.props.data.markdownRemark.frontmatter.image;
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
        <AuthorPage
          name={this.getName()}
          books={this.getBooks()}
          content={this.getBody()}
          image={this.getImage()}
        />
        <Link to="/">На главную</Link>
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
        image {
          url
          caption
        }
        books {
          book {
            title
          }
        }
      }
    }
  }
`;
