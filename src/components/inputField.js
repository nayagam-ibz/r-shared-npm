import React from 'react'
import { StyledInput, StyledLabel } from '../components'

const InputField = ({
  label,
  name,
  register,
  type,
  error,
  placeholder,
  disable,
}) => (
  <div className='form-group'>
    {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
    <StyledInput
      type={type}
      {...register(name)}
      placeholder={placeholder}
      disabled={disable}
      id={name}
      className={`form-control ${error ? 'input_error' : ''}`}
    />
    <div className='error_div'>{error}</div>
  </div>
)

export { InputField }
