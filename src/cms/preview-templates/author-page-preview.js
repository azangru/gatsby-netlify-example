import React from 'react';

import AuthorPage from '../../components/author-page';

const AuthorPagePreview = ({ entry }) => {
  const name = entry.getIn(['data', 'name']);
  let books = entry.getIn(['data', 'books']);
  const body = entry.getIn(['data', 'body']);

  books = books ? books
    .filter(book => Boolean(book.get('book')))
    .toJS()
    .map(({ book }) => book)
    : [];

  return (
    <AuthorPage
      name={name}
      books={books}
      content={body}
    />
  );
};

export default AuthorPagePreview;
