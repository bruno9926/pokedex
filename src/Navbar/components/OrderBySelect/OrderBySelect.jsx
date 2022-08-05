import React from 'react';
import Select from 'react-select';
import opts from './options';
import styles from './styles';

const options = [
  { value: opts.ORDER_BY_NUMBER, label: 'Ordernar por Número' },
  { value: opts.ORDER_ALPHABETICALLY, label: 'Ordenar Alfabéticamente' },
];

const OrderBySelect = () => {
  return (
    <Select
      isSearchable={false}
      defaultValue={options[0]}
      options={options}
      styles={styles}
    />
  )
}

export default OrderBySelect