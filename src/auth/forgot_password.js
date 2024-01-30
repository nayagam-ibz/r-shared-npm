import React from 'react'
import {
  InputField,
  AppButton,
  ForgotPasswordSchema,
  AxiosRequest
} from '../components'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const  ForgotPassword = ({on_sucess, on_failure}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ForgotPasswordSchema),
  })

  const onSubmit = (formData) => {
    AxiosRequest(formData, on_sucess, on_failure)
    reset()
  }

  return (
    <div className='container'>
      <div className='col-md-4 offset-4'>
        <div className='vh-100 d-flex align-items-center justify-content-center'>
          <div className='vw-100'>
            <h5 className='mb-4'>Forgot Password?</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputField
                label='Email'
                name='email'
                register={register}
                error={errors.email?.message}
              />
              <div className='mb-3 mt-3'>
                <AppButton 
                  type="submit"
                  variant='primary'
                  size='xl'
                  button_text="Send Password Reset Information"
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

export { ForgotPassword }
