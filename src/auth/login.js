import React from 'react'
import {
  InputField,
  CheckBox,
  AppButton,
  Validation,
  AxiosRequest
} from '../components'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const MyLogin = ({ on_sucess, on_failure}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Validation),
  })

  const onSubmit = (formData) => {
    AxiosRequest(formData, on_sucess, on_failure)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        label='Email'
        name='email'
        register={register}
        error={errors.email?.message}
      />
      <InputField
        type='password'
        label='Password'
        name='password'
        register={register}
        error={errors.password?.message}
      />
      <div className='mt-2 mb-3'>
        <AppButton 
          type="submit"
          variant='btn-primary'
          size='lg'
          button_text="Submit"
        />
      </div>
    </form>
  )
}

export {MyLogin}
