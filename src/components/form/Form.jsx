import React from 'react'

const Form = (props) => {
    const {label, type, placeholder} = props

  return (
   <div className='bg-white'>
    <form>
      <div className="mb-3">
        <label for="exampleInputEmail1" className='fw-bold'>{label}</label>
        <input type={type} className="form-control" placeholder={placeholder}/>
      </div>
    </form>
   </div>


  
  )
}

export default Form