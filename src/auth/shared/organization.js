import React,{ Fragment } from 'react'
import { 
  InputField,
  AppButton
} from '../../components'
import { useForm } from 'react-hook-form'

const OrganizationForm = ({ nextStep, handleFormData, prevStep, form }) => {
  const { 
    register, 
    handleSubmit
  } = useForm()

  const onSubmit = (formData) => {
    if (form === 'update_form') {
      console.log(formData)
    } else {
      handleFormData(formData)
      nextStep()
    }
  }

  return (
    <>
      {form !== 'update_form' && (
        <h6 className='sub_title'>Organization Information</h6>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          name='organization_name'
          label='Organization Name'
          register={register}
        />
        <InputField
          name='website_url'
          label='Website URL'
          register={register}
        />
        <InputField
          name='email'
          type='email'
          label='Organization Email'
          register={register}
        />
        <InputField
          name='organization_phone_number'
          type='number'
          label='Phone Number'
          register={register}
        />
        {form === 'update_form' ? (
          <div className='mt-3'>
            <AppButton
              type='submit'
              button_type='half'
              button_text='Save Changes'
            />
            <AppButton 
              type="submit"
              variant='primary'
              size='medium'
              button_text="Save Changes"
            />
          </div>
        ) : (
          <div className='d-flex align-items-center justify-content-between mt-3'>
            <AppButton 
              type="button"
              variant='primary'
              size='medium'
              button_text="Go Back"
              onClick={prevStep}
            />
            <AppButton 
              type="submit"
              variant='primary'
              size='medium'
              button_text="Next"
            />
          </div>
        )}
      </form>
    </>
  )
}

export {OrganizationForm}
