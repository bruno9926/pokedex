const darkGray = '#393939';
const lightGray = '#434343';
const selectedOptionColor = '#1C8FD0';
const height = '100%';

const styles = {
  container: (provided) => ({
    ...provided,
    height: height
  }),
  control: (provided) => ({
    ...provided,
    height: height,
    minHeight: height,
    width: '16em',
    backgroundColor: lightGray,
    border: 'none',
    boxShadow: '0px 0.25em 0px rgba(49, 49, 49, 0.96)',
    borderRadius: '0.3125em',
    overflow: 'hidden'
  }),
  valueContainer: (provided) => ({
    ...provided,
    height: height,
    alignSelf: 'baseline'
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    border: `0.0625em solid ${darkGray}`,
    backgroundColor: darkGray,
    cursor: 'pointer',
    color: '#fff',
    ':hover': {
        color: '#fff'
    }
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    height: '100%'
  }),
  indicatorSeparator: () => ({
    display: 'none'
  }),
  option: (provided, state) => ({
    ...provided,
    fontWeight: '600',
    color: '#fff',
    fontSize: '1.125em',
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
    fontSize: '1.125em'
  })
}

export default styles;