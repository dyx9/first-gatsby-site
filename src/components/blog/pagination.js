import React from 'react'
import { Link } from 'gatsby'
import * as styles from './pagination.module.scss';

const Pagination = ({ pageContext }) => {

  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <div className={styles.paginationContainer}>
      {!isFirst && (
        <Link to={`/blog/`+prevPage} rel="prev">
          ← Previous Page
        </Link>
      )}
  
      {!isLast && (
        <Link to={`/blog/`+nextPage} rel="next">
          Next Page →
      </Link>
      )}
    </div>
  )
}

export default Pagination