import React from 'react'
import { StyledSelect, StyledLabel } from '../components'

const SelectField = ({
  options,
  label,
  name,
  register,
  default_value,
  removeClass,
  size
}) => (
  <div className={removeClass ? 'form-group' : ''}>
    {label && <StyledLabel> {label}</StyledLabel>}
    <StyledSelect {...register(name)} className={`form-control ${size}`}>
      <option value=''>{default_value}</option>
      {options &&
        options.map((value) => (
          <option key={value.id} value={value.name}>
            {value.name}
          </option>
        ))}
    </StyledSelect>
  </div>
)

export { SelectField }
