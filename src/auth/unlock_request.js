import React from 'react'
import { 
  InputField,
  AppButton,
  RequestUnlockSchema,
  AxiosRequest
} from '../components'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const UnlockRequest = ({on_sucess, on_failure}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RequestUnlockSchema),
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
            <h5 className='mb-4'>Request Unlock Your Account</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputField
                type='email'
                label='Email'
                name='email'
                register={register}
                error={errors.email?.message}
              />
              <div className='mt-3 mb-3'>
                <AppButton
                  type='submit'
                  variant="primary"
                  size="xl"
                  button_text='Request Unlock'
                />
              </div>
              <div className='text-center'>
                <Link to='/login'>Sign In</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export {UnlockRequest}
