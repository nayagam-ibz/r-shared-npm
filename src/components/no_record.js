import React from 'react'

function NoRecord({ colSpan }) {
  return (
    <tr>
      <td colSpan={colSpan}>
        <div className='d-flex align-items-center justify-content-center'>
          <div className='text-center py-5'>
            <p className='mb-0'>No Record Found</p>
          </div>
        </div>
      </td>
    </tr>
  )
}

export { NoRecord }
