import React from 'react'
import { 
  InputField,
  AppButton,
  ChangePasswordSchema,
  AxiosRequest
} from '../components'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const ChangePassword = ({on_sucess, on_failure}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ChangePasswordSchema),
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
            <h5 className='mb-4'>Change Your Password</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
              <InputField
                type='password'
                label='New Password'
                name='new_password'
                register={register}
                error={errors.new_password?.message}
              />
              <InputField
                type='password'
                label='Confirm New Password'
                name='confirm_new_password'
                register={register}
                error={errors.confirm_new_password?.message}
              />
              <div className='mt-3 mb-3'>
                <AppButton 
                  type="submit"
                  variant='primary'
                  size='xl'
                  button_text="Change Password"
                />
              </div>
            </form>
            <div className='text-center'>
              <Link to='/login'>Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ChangePassword }
