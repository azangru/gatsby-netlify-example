import React, { Component, Fragment } from 'react';
import { Link, graphql } from "gatsby";

import AuthorPage from '../components/author-page';

export default class AuthorPageTemplate extends Component {

  getName() {
    return this.props.data.author.frontmatter.name;
  }

  getImage() {
    return this.props.data.author.frontmatter.image;
  }

  getBooks() {
    const books = this.props.data.books;
    const edges = books ? books.edges : [];
    return edges
      .map(edge => edge.node)
      .map(node => node.frontmatter);
  }

  getBody() {
    return this.props.data.author.html;
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
  query AuthorQuery($id: String!, $slug: String!) {
    author: markdownRemark(fields: { slug: { eq: $slug }}) {
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
    books: allMarkdownRemark(filter: { frontmatter: { authors: { elemMatch: { author_id: { eq: $id } } } } }) {
      edges {
        node {
          frontmatter {
            book_title
          }
        }
      }
    }
  }
`;
