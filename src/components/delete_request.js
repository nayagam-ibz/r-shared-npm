import React from 'react'
import { Modal, Button } from 'react-bootstrap'

function DeleteModal({ handleClose, handleDelete, text_type }) {
  return (
    <Modal 
      show={true}
      onHide={handleClose}
      keyboard={true} 
      centered
    >
      <Modal.Body className='custom_body py-5'>
        <div className='text-center'>
          <div className='mb-4'>
            You sure you wanna {text_type ? text_type : 'Delete?'}
          </div>
          <div className='d-flex align-items-center justify-content-center'>
            <Button
              variant='default'
              size='sm'
              onClick={handleClose}
              className='px-3'
            >
              Close
            </Button>
            <Button
              variant='primary'
              size='sm'
              onClick={handleDelete}
              className='mx-3 px-3'
            >
              Yes
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export { DeleteModal }
