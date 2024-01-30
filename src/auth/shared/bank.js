import React,{ Fragment } from 'react'
import { 
  InputField,
  AppButton
} from '../../components'
import { useForm } from 'react-hook-form'

const BankForm = ({ handleFormData, prevStep, form }) => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (formData) => {
    if (form === 'update_form') {
      // dispatch(updateProifleRequest(formData))
    } else {
      handleFormData(formData, 'submit')
    }
  }

  return (
    <>
      {form !== 'update_form' && (
        <h6 className='sub_title'> Bank Information</h6>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          name='routing_number'
          label='Routing Number'
          register={register}
        />
        <InputField
          name='account_number'
          label='Account Number'
          register={register}
        />
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
              button_text="Submit"
            />
          </div>
        )}
      </form>
    </>
  )
}

export {BankForm}
