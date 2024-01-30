import React from 'react'

function ModalHeader({ title, handleClose }) {
  return (
    <div className='modal_header px-4'>
      <h6 className='modal-title'>{title}</h6>
      <img
        src={require(`../src/images/cancel.png`)}
        alt='cancel'
        onClick={handleClose}
        className='cursor-pointer'
      />
    </div>
  )
}

export { ModalHeader }
