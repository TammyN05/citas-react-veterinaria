import React from 'react'

const Paciente = ({paciente}) => {
  return (
    <div className='m-5 bg-white shadow-md px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {""}<span className='font-normal normal-case'>{paciente.nombre}</span></p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>propietario: {""}<span className='font-normal normal-case'>Tammy</span></p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta: {""}<span className='font-normal normal-case'>12/10/2022</span></p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>sintomas: {""}<span className='font-normal normal-case'>Ullamco minim anim dolore dolor culpa nisi sunt.Laborum nulla sunt dolore anim non elit sint ut.Ullamco minim anim dolore dolor culpa nisi sunt.Laborum nulla sunt dolore anim non elit sint ut.</span></p>
        </div>
  )
}

export default Paciente