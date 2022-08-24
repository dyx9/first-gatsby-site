import * as React from 'react'
import { Link } from 'gatsby'


const TagsList = ({ nodes }) => {

  console.log("From comp");
  console.log(nodes);

  return (
    <>
      <ul> {
        nodes.map(node => (
          <p>{node.fieldValue}</p>
        ))
      } </ul>
    </>
  )
}

export default TagsList