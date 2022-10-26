import * as React from 'react'
import * as styles from './main.module.scss';


const Main = ({ children }) => {

  return (
    <div className={styles.content}>
      {children}
    </div>
  )
}

export default Main