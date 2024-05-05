import React from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";



function todo({todo ,onRemovetodo}) {
  const {id,content} = todo;
  const removetodo = () => {
    onRemovetodo(id)
  }
  return (
    <div style={{fontSize:'23px',display:'flex',flexDirection:'row',justifyContent:'space-between',height:'45px',borderBottom:'1px solid lightgrey',marginTop:'10px',padding:'10px'}}>
        <div>
            {content}
        </div>
        <div>
        <CiCircleRemove onClick={removetodo}/>


    

        </div>
    </div>
  )
}

export default todo