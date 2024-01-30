import React from 'react'
import { 
  ViewDetails,
  Items,
  Bank,
  ModalHeader,
  NoRecord,
  AppButton
} from '../components'

const View = ({
  Modal,
  Tab,
  Tabs,

  view,
  items,
  influencers,
  user_type,
  modal,
  handleApi,
  onHide
}) => {

  const handleSelect = (key) => {
    handleApi(key, modal.id)
  }

  return (
    <Modal
      show={true}
      size='lg'
      centered
      className='customModal'
      onHide={onHide}
    >
      <ModalHeader
        title={`${user_type} - ${view && view.email ? view.email : ''}`}
        handleClose={onHide}
      />

      <div className='px-4 py-4'>
        {modal.type === 'bank' ? (
          <Bank AppButton={AppButton}/>
        ) : (
          <Tabs
            defaultActiveKey='view'
            onSelect={handleSelect}
            id='fill-tab-example'
            className='setup_tabs'
          >
            <Tab eventKey='view' title='View'>
              <div className='tab_panel'>
                <ViewDetails view={view}/>
              </div>
            </Tab>
            <Tab eventKey='items' title='Items'>
              <div className='tab_panel'>
                <Items items={items} NoRecord={NoRecord}/>
              </div>
            </Tab>
            <Tab
              eventKey='influencers'
              title={
                user_type === 'Merchant' ? 'Influencers' : 'Sub Influencers'
              }
            >
              <div className='tab_panel'>
                <table striped bordered hover>
                  <thead>
                    <tr>
                      <th className='text-center'>ID</th>
                      <th>Name</th>
                      <th>E-mail</th>
                    </tr>
                  </thead>
                  <tbody>
                    {influencers && influencers.length > 0 ? (
                      influencers.map((data, index) => {
                        return (
                          <tr key={index}>
                            <td className='text-center'>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                          </tr>
                        )
                      })
                    ) : (
                      <NoRecord colSpan='8' />
                    )}
                  </tbody>
                </table>
              </div>
            </Tab>
          </Tabs>
        )}
      </div>
    </Modal>
  )
}

export default View
