import React from 'react';
import './StatBar.scss';

const StatBar = ({name, value, fill}) => {

    let modifiedName = name.replace('-', ' ');

    return (
        <div className='o-stat-bar-container'>
            <div className='o-stat-bar-details-container'>
                <p className='o-stat-bar-text'>{modifiedName}</p>
                <p className='o-stat-bar-text'>{value}</p>
            </div>
            <div className='o-stat-bar-loader'>
                <div className='o-stat-bar-fill' style={{width: fill > 100 ? '100%' : `${fill}%`}}></div>
            </div>
        </div>
  )
}

export default StatBar