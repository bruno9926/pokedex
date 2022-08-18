import React from 'react'

const WelcomeTitle = () => {
  return (
    <div className="title">
        <h2 className='welcome-title'>Pokedex React</h2>
        <div className="pokeballs">
            {
                Array.from(Array(3).keys()).map((_, index) => (
                    <img
                        key={'pokeball ' +  index}
                        src="./assets/img/Poke_Ball_icon.png"
                        alt={'pokeball ' +  index}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default WelcomeTitle