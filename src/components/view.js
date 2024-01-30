import React from 'react'
import { Modal } from 'react-bootstrap'
import { 
	ModalHeader,
	InviteForm,
	RemoveUnderscore
} from '../components';

function View({
	data,
	type,
	title,
	onHide,
	handleInviteRequest,
}) {

	const handleClose = () => {
    onHide()
  }

  return (
    <Modal
      show={true}
      size='lg'
      centered
      className='customModal'
      onHide={handleClose}
    >
      <ModalHeader 
        title={`Invite ${title}`}
        handleClose={handleClose}
      />
      <div className='px-4 py-4'>
        <div className="view_div">
          {type === "form" ?
            <InviteForm 
              handleInviteRequest={handleInviteRequest}
            />
            :
            <div>
				      {Object.keys(data).map((key) => (
				      	<div key={key}>
		              <span className="text-capitalize">
		                {RemoveUnderscore(key)} :
		              </span>
		              {data[key]}
		            </div>
				      ))}
				    </div>
          }
		    </div>
	     </div>
    </Modal>
  )
}

export { View }
