import React from 'react';
import './Type.scss';

const Type = ({name, type}) => {
  return (
    <div className={(`j-type-${type}`)}>{name}</div>
  )
}

export default Type;