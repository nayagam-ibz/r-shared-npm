import React from 'react'
import { useState } from 'react'

const ToggleSwitch = () => {
  const [checked, setChecked] = useState(false)

  const handleChange = (e) => {
    setChecked(e.target.checked)
  }

  return (
    <label className='toggleSwitch mb-3'>
      <input checked={checked} type='checkbox' onChange={handleChange} />
      <div />
      <span>
        {checked ? 'Enable' : 'Disable'} Auto accepts Influencer Invitation
        After Registration
      </span>
    </label>
  )
}

export { ToggleSwitch }
