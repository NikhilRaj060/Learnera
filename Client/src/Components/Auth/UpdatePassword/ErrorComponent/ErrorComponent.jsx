
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function ErrorComponent({req, setErrorValue}) {

  const handleClick = () =>{
    setErrorValue(false)
  }

  const [isPath,setIsPath] = useState(false)
  if (req.path && !isPath) {
    setIsPath(true);
  }
  return (
    <>
      <div className='font-bold md:text-2xl'>
       {req.message}
       <br/>
        {isPath ? <div><Link to={req.path} className='text-[#11B4CF]' onClick={handleClick} >Click here </Link>{req.text}</div> : ""}
      </div>
    </>
  )
}

export default ErrorComponent