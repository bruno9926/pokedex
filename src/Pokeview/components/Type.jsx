import React from 'react';
import './Type.scss';

const Type = ({type}) => {
  return (
    <div className={`j-type-${type}`}>{type}</div>
  )
}

export default Type;