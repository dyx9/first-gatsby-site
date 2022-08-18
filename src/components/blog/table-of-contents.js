import { Link } from 'gatsby';
import React from 'react';
import * as styles from './table-of-contents.module.scss';

const TableOfContents = ({ items }) => {

  const renderItemsRecursively = (items) => {
    return (
      <ol>
        {items.map(i => (
          <li key={i.url}>
            <Link to={i.url} className={styles.test}>
              {i.title}
            </Link>
            {i.items && renderItemsRecursively(i.items)}
          </li>
        ))}
      </ol>
    )
  }

  return (
    <div className={styles.tocContainer}>
      {renderItemsRecursively(items)}
    </div>
  )
}

export default TableOfContents