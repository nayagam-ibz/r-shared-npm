import React, {useState} from 'react'

import {
  GeneralForm,
  OrganizationForm,
  ContactForm,
  BankForm
} from './shared'

import { AxiosRequest } from '../components'
import { Link } from 'react-router-dom'

const Registration = ({on_sucess, on_failure}) => {
  const [values, setValues] = useState({})
  const [step, setstep] = useState(1)

  const nextStep = () => {
    setstep(step + 1)
  }

  const prevStep = () => {
    setstep(step - 1)
  }

  const handleInputData = (data, form) => {
    setValues({ ...values, ...data })
    if (form === 'submit') {
      AxiosRequest({...values, ...data}, on_sucess, on_failure)
    }
  }

  return (
    <div className='container'>
      <div className='col-md-4 offset-4'>
        <div className='vh-100 d-flex align-items-center justify-content-center'>
          <div className='vw-100'>
            <div className=''>
              <h5 className='mb-4'>Sign Up</h5>
              <p>
                Already have an account?
                <Link to='/login' className='px-2'>
                  Sign In
                </Link>
              </p>
            </div>
            {step === 1 && (
              <GeneralForm
                nextStep={nextStep}
                handleFormData={handleInputData}
              />
            )}

            {step === 2 && (
              <OrganizationForm
                nextStep={nextStep}
                prevStep={prevStep}
                handleFormData={handleInputData}
              />
            )}

            {step === 3 && (
              <ContactForm
                nextStep={nextStep}
                prevStep={prevStep}
                handleFormData={handleInputData}
              />
            )}

            {step === 4 && (
              <BankForm 
                prevStep={prevStep}
                handleFormData={handleInputData}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export { Registration }
