import React from 'react'
import ReactPaginate from 'react-paginate'

let by_orders = [
  'ID Ascending',
  'ID Descending',
  'Name Ascending',
  'Name Descending',
  'Paid Earnings Ascending',
  'Paid Earnings Descending',
]

function Pagination({ pageCount, handlePageChange, order_status }) {
  const onPageChange = (selectedObject) => {
    handlePageChange(selectedObject.selected + 1)
  }

  return (
    <div className='row d-flex align-items-center mt-4'>
      <div className='col-md-9'>
        <ReactPaginate
          pageCount={pageCount}
          pageRange={2}
          onPageChange={onPageChange}
          containerClassName={'pagination_container'}
          previousLinkClassName={'page'}
          breakClassName={'page'}
          nextLinkClassName={'page'}
          pageClassName={'page'}
          disabledClassNae={'disabled'}
          activeClassName={'active'}
          nextLabel='Next'
          previousLabel='Prev'
        />
      </div>
      {order_status && (
        <div className='col-md-3'>
          <div className='d-flex align-items-center'>
            <label style={{ width: 100 }} className='mb-0'>
              By Order
            </label>
            <select className='form-control'>
              {by_orders &&
                by_orders.map((value, index) => (
                  <option key={index} value={value}>
                    {value}
                  </option>
                ))}
            </select>
          </div>
        </div>
      )}
    </div>
  )
}

export { Pagination }
