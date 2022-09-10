import * as React from 'react'
import kebabCase from "lodash/kebabCase"
import { Link } from 'gatsby'
import { FiTag } from 'react-icons/fi'
import { BsDot } from 'react-icons/bs'
import * as styles from './tags-list.module.scss';


const TagsList = ({ nodes }) => {

  let currentPath = '';
  if (typeof window !== 'undefined') {
    currentPath = window.location.href;
  }

  return (
    <>
      <ul className={styles.tagsListContainer}> {
        nodes.map(node => (
          <li key={node.fieldValue}>
            <Link
              className={currentPath.includes(kebabCase(node.fieldValue)) ? styles.active : undefined}
              to={`/blog/tags/${kebabCase(node.fieldValue)}`}>
                <FiTag /> {'\u00A0'} {node.fieldValue} <BsDot /> {node.totalCount}
            </Link>
          </li>
        ))
      } </ul>
    </>
  )
}

export default TagsList