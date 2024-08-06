import React from 'react';
import homeLogo from '../../assets/girl.jpg'
import './Home.css';


function Home() {
    return (
        <>
        <div className="flex justify-center p-4">
          <div className='container grid grid-cols-2 text-gray-700'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Bem vinde ao meu Blog!</h2>
              <p className='text-xl'>Expresso aqui meus pensamentos e opniões</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver postagens</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;