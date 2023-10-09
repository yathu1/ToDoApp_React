import React from 'react'

import ItemsList from './ItemsList';

const Content = ({items,handleCheck,handleDelete}) => {

  
   

  return (
   <>
    {(items.length)?(
      <ItemsList
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    ): (<p style={{marginTop:'auto',marginBottom:'auto'}}>No list availabe</p>)}
   
    </> 
  )
}

export default Content