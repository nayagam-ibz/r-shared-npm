import React from 'react'

const CheckBox = ({ name, type, label, terms, value, onChange, register }) => (
  <div className='form-group d-flex align-items-center'>
    <label
      htmlFor={name}
      className={type === 'radio' ? 'radio_container' : 'checkbox_container'}
    >
      {terms ? (
        <div>
          I accept the
          <a href='https://google.com/'>Terms of Service </a>
          and
          <a href='https://google.com/'>Privacy policy </a>
        </div>
      ) : (
        label
      )}
      <input
        type={type}
        {...register(name)}
        value={value}
        id={name}
        onChange={onChange}
      />
      <span
        className={type === 'radio' ? 'radio_checkmark' : 'chebox_checkmark'}
      ></span>
    </label>
  </div>
)

export { CheckBox }
