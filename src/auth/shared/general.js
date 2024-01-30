import React, {useEffect} from 'react'
import { 
  InputField,
  CheckBox,
  AppButton
} from '../../components'
import { useForm } from 'react-hook-form'

const GeneralForm = ({ nextStep, handleFormData, update_form, user }) => {
  const { 
    register,
    handleSubmit,
    getValues,
    setValue
  } = useForm()

  const registration_type = register('registration_type')

  const handleChange = () => {
    const values = getValues()
    handleFormData(values)
    nextStep()
  }

  useEffect(() => {
    if (user) {
      const fields = Object.keys(user)
      fields && fields.forEach((field) => setValue(field, user[field]))
    }
  }, [user, setValue])

  return (
    <form>
      <InputField
        name='email'
        label='Email'
        disable={update_form ? true : false}
        register={register}
      />
      {update_form && (
        <InputField
          name='password'
          type='password'
          label='Current password'
          register={register}
        />
      )}
      <InputField
        name={update_form ? 'new_password' : 'password'}
        type='password'
        label={update_form ? 'New Password' : 'Password'}
        register={register}
      />
      <InputField
        name={
          update_form ? 'new_password_confirmation' : 'password_confirmation'
        }
        type='password'
        label={
          update_form ? 'New Password Confirmation' : 'Password Confirmation'
        }
        register={register}
      />
      {update_form ? (
        <div className='mt-3'>
          <AppButton
            type='submit'
            button_type='half'
            button_text='Save Changes'
          />
        </div>
      ) : (
        <div className='form-group'>
          <div className='py-3'>Registration Type</div>
          <CheckBox
            type='radio'
            label='Merchant'
            name='registration_type'
            value='merchant'
            register={register}
            onChange={(e) => {
              registration_type.onChange(e)
              handleChange(e)
            }}
          />
          <CheckBox
            type='radio'
            label='Influencer'
            name='registration_type'
            value='influencer'
            register={register}
            onChange={(e) => {
              registration_type.onChange(e)
              handleChange(e)
            }}
          />
        </div>
      )}
    </form>
  )
}

export { GeneralForm }
