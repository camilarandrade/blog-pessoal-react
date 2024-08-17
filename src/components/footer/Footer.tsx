import React, { useContext } from 'react'
import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import { AuthContext } from '../../contexts/AuthContext'

function Footer() {
  const { usuario, handleLogout } = useContext(AuthContext)
  let footerComponent

  let data = new Date().getFullYear()

  if (usuario.token !== '') {
    footerComponent = (
      <>
        <div className="w-full bg-custom-purple text-700 flex justify-center p-4">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-jura'>Desenvolvido por Camila Andrade </p>
            <p className='text-lg'>Acesse minhas redes sociais</p>
            <div className='flex gap-2'>
              <LinkedinLogo size={48} weight='bold' />
              <GithubLogo size={48} weight='bold' />
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {footerComponent}
    </>
  )
}

  export default Footer