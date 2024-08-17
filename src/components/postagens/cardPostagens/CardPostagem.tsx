import React from 'react'
import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'

interface CardPostagemProps {
  post: Postagem
}

function CardPostagem({post}: CardPostagemProps) {
  return (
    <div className='border-custom-purple rounded-33px border flex flex-col rounded overflow-hidden justify-between'>
      <div>
        <div className="flex w-full bg-custom-purple font-actor py-2 px-4 items-center gap-4">
          <img src={post.usuario?.foto} className='h-12 rounded-50px' alt="" />
          <h3 className='text-lg font-bold text-center uppercase '>{post.usuario?.nome}</h3>
        </div>
        <div className='p-4 '>
          <h4 className='text-actor font-semibold uppercase'>{post.titulo}</h4>
          <p className='text-actor'>{post.texto}</p>
          <p className='text-actor'>Tema: {post.tema?.descricao}</p>
          <p className='text-actor'>Data: {new Intl.DateTimeFormat(undefined, {
                    dateStyle: 'full',
                    timeStyle: 'medium',
                  }).format(new Date(post.data))}</p>
        </div>
      </div>
      <div className="flex">
      <Link to={`/editarPostagem/${post.id}`} className='w-full text-white bg-custom-lightgreen hover:bg-custom-darkgreen flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarPostagem/${post.id}`} className='text-white bg-custom-red hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardPostagem