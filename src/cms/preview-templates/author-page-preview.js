import React from 'react';

import AuthorPage from '../../components/author-page';

const AuthorPagePreview = ({ entry, widgetFor }) => {
  const name = entry.getIn(['data', 'name']);
  let books = entry.getIn(['data', 'books']);
  const body = widgetFor('body'); // markdown widget (used for file body) is a React component

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
