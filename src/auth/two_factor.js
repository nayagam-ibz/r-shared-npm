import React from 'react'
import { 
  InputField, 
  AppButton,
  RequestOtpSchema
} from '../components'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const TwoFactorAuthentication = ({Link, handleFormSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RequestOtpSchema),
  })

  const onSubmit = (formData) => {
    handleFormSubmit(formData)
    reset()
  }

  return (
    <div className='container'>
      <div className='col-md-4 offset-4'>
        <div className='vh-100 d-flex align-items-center justify-content-center'>
          <div className='vw-100'>
            <div className='text-center mb-4'>
              <h5 className='mb-4'>Two-Factor Authentication</h5>
              <p>
                A text message with a verification code was send to your
                *****@gmail.com
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputField
                label='Verify OTP'
                name='otp_code'
                register={register}
                error={errors.otp_code?.message}
              />
              <div className='mt-3 mb-3'>
                <AppButton 
                  variant="primary"
                  size="xl"
                  type='submit'
                  button_text='Submit'
                />
              </div>
            </form>
            <div className='text-center'>
              <Link to='/'>Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { TwoFactorAuthentication }
