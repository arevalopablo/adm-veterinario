import React from 'react'

const CustomButton = (props) => {
  const {className, text, onClick} = props

  return (
    <button onClick={onClick || null} className={className || 'btn btn-primary'}>{text || 'Boton'}</button>
  )
}

export default CustomButton

{/* <button className='btn btn-warning'>Edit</button> */}