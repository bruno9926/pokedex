import React from 'react';
import './Welcome.scss';
import WelcomeTitle from './components/WelcomeTitle/WelcomeTitle';

const Welcome = () => {
  return (
    <div className='welcome'>
        <WelcomeTitle/>
        <p>
          Bienvenido entrenador a tu pokedex, aquí podrás encontrar información de todos los pokemon registrados hasta la fecha.
        </p>
        <p>
          Selecciona cualquiera de los pokemon listados, también puedes usar la barra de búsqueda si quieres ser más específico.
        </p>
    </div>
  )
}

export default Welcome