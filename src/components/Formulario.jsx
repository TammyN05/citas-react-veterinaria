import { useState, useEffect } from 'react'

const Formulario = () => {

  const [nombre, setNombre] = useState('');

   

  return (
    <div className='md:w-1/2 lg:w-2/5'>
        <h2 className='font-black text-3xl text-center'>
          Seguimiento pacientes</h2>

          <p className='text-lg mt-5 text-center mb-10'>Añade pacientes y {''}
            <span className='text-indigo-600 font-bold '>Administralos</span>
          </p>

          <form className='bg-white shadow-md rounded-lg py-10 px-5 '>
            <div className='mb-5'>
              <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>Nombre paciente...</label>
              <input 
                id='mascota'
                type="text"
                placeholder='Nombre de la mascota'
                className='border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-lg' 
              />
            </div>

            <div className='mb-5'>
              <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>Nombre propietario</label>
              <input 
                id='propietario'
                type="text"
                placeholder='Nombre del propietario...'
                className='border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-lg' 
              />
            </div>

            <div className='mb-5'>
              <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>E-mail</label>
              <input 
                id='email'
                type="email"
                placeholder='Correo electónico...'
                className='border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-lg' 
              />
            </div>

            <div className='mb-5'>
              <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>Alta</label>
              <input 
                id='alta'
                type="date"
                className='border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-lg' 
              />
            </div>

            <div className='mb-5'>
              <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>Nombre paciente</label>
              <textarea 
                id='sintomas'
                className='border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-lg'
                placeholder='Describe los sintomas'
              />
            </div>

            <input 
              type="submit"
              className='text-white uppercase font-bold border-2 w-full p-2 mt-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 cursor-pointer'
              value="Agregar paciente"
            />
          </form>
    </div>
  )
}

export default Formulario