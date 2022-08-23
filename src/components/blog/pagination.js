import React from 'react'
import { Link } from 'gatsby'
import * as styles from './pagination.module.scss';

const Pagination = ({ 
  hasPrev,
  hasNext,
  prev,
  next,
  prevText,
  nextText,
  }) => {
  return (
    <div className={styles.paginationContainer}>
      {!hasPrev && (
        <Link to={`/blog/` + prev} rel="prev">
          ← {prevText}
        </Link>
      )}

      {!hasNext && (
        <Link to={`/blog/` + next} rel="next">
          {nextText} →
        </Link>
      )}
    </div>
  )
}

Pagination.defaultProps = {
  prevText: "PREV",
  nextText: "NEXT",
}

export default Pagination