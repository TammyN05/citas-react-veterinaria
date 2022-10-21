import { useState, useEffect } from 'react'
import Error from './Error';

const Formulario = () => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion del formulario
    if( [ nombre, propietario, email, fecha, sintomas ].includes('') ){
      console.log('Hay al menos un campo vacio')

      setError(true)
      return;
    }

    setError(false)

    //Objeto Paciente
    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas
    }
   
    setPacientes([...pacientes, objetoPaciente]);

    //Reiniciar el form
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }
   

  return (
    <div className='md:w-1/2 lg:w-2/5'>
        <h2 className='font-black text-3xl text-center'>
          Seguimiento pacientes</h2>

          <p className='text-lg mt-5 text-center mb-10'>Añade pacientes y {''}
            <span className='text-indigo-600 font-bold '>Administralos</span>
          </p>

          <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-10 px-5 m-4'>

          { error &&  <Error>Todos los campos son obligatorios</Error> }

            <div className='mb-5'>
              <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>Nombre paciente...</label>
              <input 
                id='mascota'
                type="text"
                placeholder='Nombre de la mascota'
                className='border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-lg' 
                value={nombre}
                onChange={ (e) => setNombre(e.target.value)}
              />
            </div>

            <div className='mb-5'>
              <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>Nombre propietario</label>
              <input 
                id='propietario'
                type="text"
                placeholder='Nombre del propietario...'
                className='border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-lg' 
                value={propietario}
                onChange={ (e) => setPropietario(e.target.value)}
              />
            </div>

            <div className='mb-5'>
              <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>E-mail</label>
              <input 
                id='email'
                type="email"
                placeholder='Correo electónico...'
                className='border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-lg' 
                value={email}
                onChange={ (e) => setEmail(e.target.value)}
              />
            </div>

            <div className='mb-5'>
              <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>Alta</label>
              <input 
                id='alta'
                type="date"
                className='border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-lg' 
                value={fecha}
                onChange={ (e) => setFecha(e.target.value)}
              />
            </div>

            <div className='mb-5'>
              <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>Nombre paciente</label>
              <textarea 
                id='sintomas'
                className='border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-lg'
                placeholder='Describe los sintomas'
                value={sintomas}
                onChange={ (e) => setSintomas(e.target.value)}
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