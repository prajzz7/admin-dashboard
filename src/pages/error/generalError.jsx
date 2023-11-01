import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const GeneralError = () => {
  const navigate = useNavigate()
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
        <h1>Error</h1>
        <span>Something's not right</span>
        {/* <Link to="../../"><span>Go back</span></Link> */}
        <button style={{width:'100px'}} onClick={()=>navigate(-1)}>Go back</button>
    </div>
  )
}

export default GeneralError