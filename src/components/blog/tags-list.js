import * as React from 'react'
import { Link } from 'gatsby'


const TagsList = ({ nodes }) => {

  return (
    <>
      <ul> {
        nodes.map(node => (
          <li key={node.fieldValue}>
            <Link
              to={`/blog/tags/${node.fieldValue}`}>
                {node.fieldValue}
            </Link>
          </li>
        ))
      } </ul>
    </>
  )
}

export default TagsList