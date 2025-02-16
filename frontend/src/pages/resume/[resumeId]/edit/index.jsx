import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

const EditResume = () => {
    const params=useParams();

    useEffect(()=>{
      console.log(params.resumeId);
    },[])
  return (
    <div>index</div>
  )
}

export default EditResume;