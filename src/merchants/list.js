import React from 'react'
import {
  NoRecord,
  DeleteModal,
  AppButton,
  FilterForm,
  BulkImport
} from '../components'
import View from './view'

const MerchantList = ({
  merchants,
  merchant_view,
  items,
  influencers,
  user_type,
  merchantRequest,
  inviteRequest
}) =>  {
  const [view_modal, set_view_modal] = useState({
    show: false,
    type: null,
    id: null,
  })
  const [popup, setPopup] = useState({ show: false, id: null })

  const handleShow = (type, id) => {
    merchantRequest(type, id)
    set_view_modal({ 
      show: true,
      type: type,
      id: id
    })
  }

  const hanldeInviteRequest = () => {
    inviteRequest('remove', popup.id)
    setPopup({ 
      show: false, 
      id: null
    })
  }

  return (
    <main className='p-4'>
      <h5 className='mb-4'>Manage Merchants</h5>
      <div className='row d-flex align-items-center mb-3'>
        <div className='col-md-7'>
          <FilterForm />
        </div>
        <div className='col-md-5 d-flex justify-content-end'>
          <BulkImport 
            exportData={[]} 
            title='item.csv' 
            acitve={false} 
          />
        </div>
      </div>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th className='text-center' width='5'>
              S.No
            </th>
            <th>Email</th>
            <th width='10%' className='text-center'>
              Bank Status
            </th>
            <th width='15%'></th>
          </tr>
        </thead>
        <tbody>
          {merchants && merchants.length > 0 ? (
            merchants.map((data) => {
              return (
                <tr key={data.id}>
                  <td className='text-center'>{data.id}</td>
                  <td>{data.email}</td>
                  <td className='text-center'>
                    <AppButton 
                      type="button"
                      variant='primary'
                      size='sm'
                      button_text="verifying"
                      onClick={() => handleShow('bank', data.id)}
                    />
                  </td>
                  <td className='text-center d-flex align-items-center justify-content-space'>
                    <AppButton 
                      type="button"
                      variant='info'
                      size='sm'
                      button_text="Manage"
                      align_class='mx-2'
                      onClick={() => handleShow('view', data.id)}
                    />
                    <AppButton 
                      type="button"
                      variant='danger'
                      size='sm'
                      button_text="Delete"
                      align_class='mx-2'
                      onClick={() => setPopup({ show: true, id: data.id })}
                    />
                  </td>
                </tr>
              )
            })
          ) : (
            <NoRecord colSpan='8' />
          )}
        </tbody>
      </table>

      {popup.show && (
        <DeleteModal      
          handleClose={() => setPopup(false, null)}
          handleDelete={() => hanldeInviteRequest()}
          text_type='Remove?'
        />
      )}

      {view_modal.show && (
        <View
          onHide={() => set_view_modal(false)}
          view={merchant_view}
          modal={view_modal}
          items={items}
          user_type={user_type}
          influencers={influencers}
          handleApi={handleShow}
        />
      )}
    </main>
  )
}

export {MerchantList}