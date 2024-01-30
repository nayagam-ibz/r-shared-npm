import React, { useState } from 'react'
import {
  GeneralForm,
  OrganizationForm,
  ContactForm,
  BankForm
} from './shared'

import { Tab, Tabs} from 'react-bootstrap'

const UpdateProfile = ({ user }) => {
  const [active, setActive] = useState('general_form')

  const handleSelect = (key) => {
    setActive(key)
  }

  return (
    <main className='p-4'>
      <h5 className='mb-4'>Update Profile</h5>
      <Tabs
        defaultActiveKey='general_form'
        onSelect={handleSelect}
        id='fill-tab-example'
        className='setup_tabs'
      >
        <Tab eventKey='general_form' title='General Information'>
          <div className='tab_panel'>
            <div className='col-md-6'>
              <GeneralForm 
                update_form={true} 
                user={user && user}
              />
            </div>
          </div>
        </Tab>
        <Tab
          eventKey='organization_form'
          title={
            user && user.registration_type === 'merchant'
              ? 'Organization Information'
              : 'Community Information'
          }
        >
          <div className='tab_panel'>
            {active === 'organization_form' ? (
              <div className='col-md-6'>
                <OrganizationForm 
                  form='update_form'
                />
              </div>
            ) : null}
          </div>
        </Tab>
        <Tab eventKey='contact_form' title='Contact Information'>
          <div className='tab_panel'>
            {active === 'contact_form' ? (
              <div className='col-md-6'>
                <ContactForm 
                  form='update_form'
                />
              </div>
            ) : null}
          </div>
        </Tab>
        <Tab eventKey='bank_form' title='Bank Information'>
          <div className='tab_panel'>
            {active === 'bank_form' ? (
              <div className='col-md-6'>
                <BankForm 
                  form='update_form'
                />
              </div>
            ) : null}
          </div>
        </Tab>
      </Tabs>
    </main>
  )
}

export { UpdateProfile }
