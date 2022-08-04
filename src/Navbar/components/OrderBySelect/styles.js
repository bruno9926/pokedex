const darkGray = '#393939';
const lightGray = '#434343';
const selectedOptionColor = '#1C8FD0';

const styles = {
  control: (provided) => ({
    ...provided,
    width: '16rem',
    backgroundColor: lightGray,
    border: 'none',
    boxShadow: '0px 4px 0px rgba(49, 49, 49, 0.96)',
    borderRadius: '5px',
    overflow: 'hidden'
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    border: `1px solid ${darkGray}`,
    backgroundColor: darkGray,
    cursor: 'pointer',
    color: '#fff',
    ':hover': {
        color: '#fff'
    }
  }),
  indicatorSeparator: () => ({
    display: 'none'
  }),
  option: (provided, state) => ({
    ...provided,
    fontWeight: '600',
    color: '#fff',
    fontSize: '1.125rem',
    backgroundColor:
        state.isSelected ? selectedOptionColor
        : state.isFocused ? lightGray
        : darkGray,
    ':active': {
        backgroundColor: darkGray
    }
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: lightGray
  }),
  singleValue: (provided) => ({
    ...provided,
    fontWeight: '600',
    color: '#fff',
    fontSize: '1.125rem'
  })
}

export default styles;