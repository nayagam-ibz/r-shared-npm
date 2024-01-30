import React from 'react'
import { Button } from 'react-bootstrap'
import { CustomButton } from '../components'

const AppButton = ({ 
  variant,
  size,
  type,
  onClick,
  button_text, 
  align_class 
}) => {
  return (
    <CustomButton
      variant={variant}
      type={type}
      size={size}
      onClick={onClick}
      className={`${variant} ${size} ${align_class}`}
    >
      {button_text}
    </CustomButton>
  )
}

export { AppButton }
