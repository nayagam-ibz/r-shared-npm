import React from 'react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import { useForm } from 'react-hook-form'
import { InputField, AppButton } from '../components'

let email_template =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <a href='/registraion'> join as Click here</a>"

const InviteForm = ({ handleInviteRequest, title}) => { 

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (formData) => {
    handleInviteRequest(formData)
    reset()
    onHide()
  }

  const handleClose = () => {
    reset()
    onHide()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className=' row d-flex align-items-center mb-3'>
        <div className='form-group mb-4'>
          <label>Invite Requst Content</label>
          <CKEditor
            editor={ClassicEditor}
            data={email_template}
            onChange={(event, editor) => {
              const data = editor.getData()
              reset({ description: data })
            }}
          />
        </div>
        <div className='pe-0 col-md-6'>
          <InputField
            type='email'
            label='Email'
            name='email'
            register={register}
            error={errors.email?.message}
          />
        </div>
        <div className='text-center mt-1 col-md-1'>
          OR
        </div>
        <div className='ps-0 col-md-5'>
          <InputField
            type='number'
            label='Phone Number'
            name='phone_number'
            register={register}
            error={errors.phone_number?.message}
          />
        </div>
      </div>
      <AppButton 
        type="submit"
        variant='btn-primary'
        size='md'
        button_text="Submit"
      />
    </form>
  )
}

export { InviteForm } 
