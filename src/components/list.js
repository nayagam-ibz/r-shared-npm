import React, { useState } from 'react';
import { Table, Row, Col } from 'react-bootstrap';
import { 
  RemoveUnderscore,
  FilterForm,
  BulkImport,
  Pagination,
  NoRecord,
  AppButton,
  DeleteModal, 
  View 
} from '../components';

const TableData = ({ data, view_Data }) => {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const [modal, setModal] = useState({
    view_modal: false,
    id: null,
    delete_modal: false,
    type: null,
  });

  const data_headers = Object.keys(data[0]);

  const handleSort = (header) => {
    if (sortBy === header) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(header);
      setSortOrder('asc');
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a[sortBy] > b[sortBy] ? 1 : -1;
    } else {
      return a[sortBy] < b[sortBy] ? 1 : -1;
    }
  });

  const handleInviteRequest = (formData) => {
    console.log(formData)
    // Implement your logic here
  };

  const handlePageChange = (current_page) => {
    // Implement your logic here
  };

  const handleShow = (view_modal, id, delete_modal, type) => {
    setModal({
      view_modal: view_modal,
      id: id,
      delete_modal: delete_modal,
      type: type
    });
  };

  return (
    <div className="list_view container-fluid px-4 mt-4">
      <div
        className='add_text cursor-pointer mb-2'
        onClick={() => handleShow(true, null, false, 'form')}
      >
        + Invite Merchant
      </div>

      <Row>
        <Col md="6">
          <FilterForm />
        </Col>
        <Col md="6" className="d-flex justify-content-end">
          <BulkImport
            handleBulkImport={handleInviteRequest}
            exportData={data}
            acitve={true}
            title={`handleInviteRequest.csv`}
          />
        </Col>
      </Row>
      <Table>
        <thead>
          <tr>
            {data_headers.map(
              (header) =>
                header !== 'id' && (
                  <th key={header} onClick={() => handleSort(header)}>
                    {RemoveUnderscore(header)}
                  </th>
                )
            )}
            <th width='15%'></th>
          </tr>
        </thead>
        <tbody>
          {sortedData && sortedData.length > 0 ? (
            sortedData.map((row, index) => (
              <tr key={index}>
                {data_headers.map(
                  (header, columnIndex) =>
                    header !== 'id' && (
                      <td key={header}>
                        {columnIndex === 1 ? (
                          <a href="#" onClick={() => handleShow(true, row.id, false, 'view')}>
                            {row[header]}
                          </a>
                        ) : (
                          row[header]
                        )}
                      </td>
                    )
                )}
                <td>
                  <AppButton
                    type="button"
                    variant='btn-danger'
                    size='sm'
                    button_text="Delete"
                    onClick={() => handleShow(false, row.id, true, 'delete')}
                  />
                </td>
              </tr>
            ))
          ) : (
            <NoRecord colSpan='8' />
          )}
        </tbody>
      </Table>

      <Pagination 
        pageCount={2}
        handlePageChange={handlePageChange}
      />

      {modal.delete_modal && (
        <DeleteModal
          handleClose={() => handleShow(false, null, false, null)}
          handleDelete={() => handleDeleteRequest()}
          text_type='Remove?'
        />
      )}

      {modal.view_modal && (
        <View 
          title={view_Data.username}
          onHide={() => handleShow(false, null, false, null)}
          type={modal.type}
          data={view_Data}
          handleInviteRequest={() => handleInviteRequest()}
        />
      )}
    </div>
  );
};

export { TableData };
