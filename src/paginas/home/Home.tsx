import React from 'react';
import homeLogo from '../../assets/home.jpg'
import './Home.css';
import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagem';
import ModalPostagem from '../../components/postagens/ModalPostagem/ModalPostagem';

function Home() {
  return (
    <>
      <div className="flex justify-center">
        <div className='container grid grid-cols-2 text-gray-700'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
            <p className='text-xl'>Expresso aqui meus pensamentos e opniões</p>

            <div className="flex justify-around gap-4">

            <ModalPostagem />
            <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver postagens</button>
            </div>
          </div>

          <div className="flex justify-center ">
            <img src={homeLogo} alt="" className='w-2/3' />
          </div>
        </div>
      </div>
      <ListaPostagens />

    </>
  );
}

export default Home;