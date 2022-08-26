import React from 'react'
// components
import SearchInput from './components/SearchInput/SearchInput';
import OrderBySelect from './components/OrderBySelect/OrderBySelect';
// styles
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <SearchInput />
        <div className="select-container">
          <OrderBySelect/>
        </div>
    </nav>
  )
}

export default Navbar