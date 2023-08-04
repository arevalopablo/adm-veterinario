import React, { useState } from 'react'
import Form from './form/Form'
import { patient } from './form/formData'


const VetMain = () => {
    const [state, setState] = useState(true)
  return (
    <div style={{margin: 'auto'}} className='container py-4'>
        <h1 className='my-5 text-center'>Seguimiento de Pacientes <span className='text-violet'>Veterinaria</span></h1>
        
        <div className='d-flex justify-content-between'>
            <div className='w-75 mx-3'>
                <div className='my-2 text-center'>
                    <h2>Formulario</h2>
                    <p>Añade Pacientes y <span className='text-violet'>Administralos</span></p>
                </div>
                <div  className='py-3'>
                    <form action="">
                            {patient.map((data) => (
                                <Form {...data}/>
                            ))}
                            <div className='d-flex flex-column mb-3'>
                                <label htmlFor="" className='form-label fw-bold'>SYMTOMPS?</label>
                                <textarea name="" id="" cols="30" rows="5" placeholder='Write your comments'></textarea>
                            </div>
                        
                            <button className='btn btn-primary w-100'>Get appointment</button>
                    </form>
                </div>

            </div>
            {!state ? 
                <div className='m-2 text-center w-100'>
                    <h2>No hay Pacientes</h2>
                    <p>Comienza cargando pacientes <span className='text-violet'>y apareceran en este lugar</span></p>
                </div> 
                : 
                <div className=' w-100 m-2 text-center'>
                    <h2>Listado de Pacientes</h2>
                    <p>Administra tus <span className='text-violet'>Pacientes y Citas</span></p>
                    <div className='border rounded p-3 text-start'>
                        <p className='fw-bold'>Pet Name:</p>
                        <p className='fw-bold'>Pet's Owner:</p>
                        <p className='fw-bold'>Email:</p>
                        <p className='fw-bold'>Appointment date:</p>
                        <p className='fw-bold'>Symtoms:</p>
                        <div className='d-flex justify-content-between'>
                            <button className='btn btn-warning'>Edit</button>
                            <button className='btn btn-danger'>Delete</button>
                        </div>
                </div>
            </div>}

        </div>
        
    </div>
  )
}

export default VetMain