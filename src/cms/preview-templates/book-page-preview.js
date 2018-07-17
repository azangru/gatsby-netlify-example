import React from 'react';

const BookPagePreview = ({ entry, widgetFor }) => {
  console.log('entry', entry, 'widgetFor', widgetFor);
  console.log('title?', entry.getIn(['data', 'title']));
  return null;
};

export default AuthorPagePreview;
