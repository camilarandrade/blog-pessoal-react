import React from 'react'
import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'

interface CardTemaProps {
  tema: Tema
}

function CardTemas({tema}: CardTemaProps) {
  return (
    <div className='border-custom-purple rounded-33px border flex flex-col rounded overflow-hidden justify-between'>
      <header className='py-2 bg-custom-gray font-actor text-white font-bold text-2xl'>Tema</header>
      <p className='p-8 text-3xl bg-white h-full font-actor'>{tema.descricao}</p>
      <div className="flex">
        <Link to={`/editarTema/${tema.id}`} className='w-full text-slate-100 bg-custom-lightgreen hover:bg-custom-darkgreen flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarTema/${tema.id}`} className='text-slate-100 bg-custom-red hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardTemas