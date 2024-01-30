import React from 'react'

const TextAreaField = ({ label, register, rows, name }) => (
  <div className='form-group'>
    {label && <label htmlFor={name}>{label}</label>}
    <textarea {...register(name)} rows={rows} id={name} />
  </div>
)

export { TextAreaField }
