import { Link } from 'gatsby'
import React from 'react'

const TableOfContents = ({ items }) => {

  const renderItemsRecursively = (items) => {
    return (
      <ol>
        {items.map(i => (
          <li key={i.url}>
            <Link to={i.url}>
              {i.title}
            </Link>
            {i.items && renderItemsRecursively(i.items)}
          </li>
        ))}
      </ol>
    )
  }

  return (
    <>
      {renderItemsRecursively(items)}
    </>
  )
}

export default TableOfContents