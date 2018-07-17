import CMS from 'netlify-cms';

import AuthorPagePreview from './preview-templates/author-page-preview';
import BookPagePreview from './preview-templates/book-page-preview';

CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('authors', AuthorPagePreview);
CMS.registerPreviewTemplate('books', BookPagePreview);
