import React from 'react'

const Footer = ({length}) => {

 

  return (
    <footer>{length} list {(length===1)?"Item":"Items"}</footer>
  )
}

export default Footer