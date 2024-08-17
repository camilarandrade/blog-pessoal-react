import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'

function Navbar() {
  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
      handleLogout()
      alert('Usuário deslogado com sucesso')
      navigate('/login')
  }

  let navbarComponent

  if(usuario.token !== "") {
    navbarComponent = (
     <div className='w-full bg-custom-purple text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-abril text-custom-gray'>meu.blog.pessoal</div>

            <div className='flex gap-4'>
              {/* <Link to='/login' className='font-jura hover:underline'>Login</Link> */}
              <Link to='/home' className='font-jura hover:text-custom-gray'>home</Link>
              <Link to='/postagens' className='font-jura hover:text-custom-gray'>postagens</Link>
              <Link to='/temas' className='font-jura hover:text-custom-gray'>temas</Link>
              <Link to='/cadastroTema' className='font-jura hover:text-custom-gray'>cadastrar tema</Link>
              <Link to='/perfil' className='font-jura hover:text-custom-gray'>perfil</Link>
              <Link to='' onClick={logout} className='font-jura hover:text-custom-gray'>sair</Link>
            </div>
          </div>
        </div>
  )
}

return (
  <>
    {navbarComponent}
  </>
)
}

export default Navbar