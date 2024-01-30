import React,{ Fragment } from 'react'
import { 
  InputField,
  AppButton
} from '../../components'
import { useForm } from 'react-hook-form'

const ContactForm = ({ nextStep, handleFormData, prevStep, form }) => {
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
        <h6 className='sub_title'> Contact Information</h6>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='row'>
          <div className='col-md-6'>
            <InputField
              name='first_name'
              label='First Name'
              register={register}
            />
          </div>
          <div className='col-md-6'>
            <InputField
              name='last_name'
              label='Last Name'
              register={register}
            />
          </div>
        </div>
        <InputField
          name='phone'
          type='number'
          label='Phone'
          register={register}
        />
        <InputField 
          name='address' 
          label='Address'
          register={register}
        />
        <div className='row'>
          <div className='col-md-6'>
            <InputField 
              name='street'
              label='Street'
              register={register}
              />
          </div>
          <div className='col-md-6'>
            <InputField
              name='city'
              label='City'
              register={register}
            />
          </div>
          <div className='col-md-6'>
            <InputField 
              name='State'
              label='State'
              register={register}
            />
          </div>
          <div className='col-md-6'>
            <InputField
              name='postal_code'
              label='Postal Code'
              register={register}
            />
          </div>
        </div>
        {form === 'update_form' ? (
          <div className='mt-3'>
            <AppButton
              type='submit'
              button_type='half'
              button_text='Save Changes'
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

export {ContactForm}
