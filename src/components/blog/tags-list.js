import * as React from 'react'
import kebabCase from "lodash/kebabCase"
import { Link } from 'gatsby'
import * as styles from './tags-list.module.scss';


const TagsList = ({ nodes }) => {

  return (
    <>
      <ul className={styles.tagsListContainer}> {
        nodes.map(node => (
          <li key={node.fieldValue}>
            <Link
              to={`/blog/tags/${kebabCase(node.fieldValue)}`}>
                {node.fieldValue} {node.totalCount}
            </Link>
          </li>
        ))
      } </ul>
    </>
  )
}

export default TagsList