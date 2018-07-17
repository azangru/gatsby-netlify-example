import React from 'react';

const AuthorPagePreview = ({ entry, widgetFor }) => {
  console.log('entry', entry, 'widgetFor', widgetFor);
  console.log('name?', entry.getIn(['data', 'name']));
  return null;
  return (
    <AboutPageTemplate
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
    />
  );
};

export default AuthorPagePreview;
