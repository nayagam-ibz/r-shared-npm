import React from 'react'
import { read, utils, writeFile } from 'xlsx'

function BulkImport({ 
  handleBulkImport,
  exportData,
  title,
  acitve 
}) {
  const handleImport = ($event) => {
    const files = $event.target.files
    if (files.length) {
      const file = files[0]
      const reader = new FileReader()
      reader.onload = (event) => {
        const wb = read(event.target.result)
        const sheets = wb.SheetNames
        if (sheets.length) {
          const rows = utils.sheet_to_json(wb.Sheets[sheets[0]])
          handleBulkImport(rows)
        }
      }
      reader.readAsArrayBuffer(file)
    }
  }

  const handleExport = () => {
    if (exportData && exportData.length > 0) {
      const result = exportData.flatMap(Object.keys)
      const uniqueNames = Array.from(new Set(result))
      const headings = [uniqueNames]
      const wb = utils.book_new()
      const ws = utils.json_to_sheet([])
      utils.sheet_add_aoa(ws, headings)
      utils.sheet_add_json(ws, exportData, { origin: 'A2', skipHeader: true })
      utils.book_append_sheet(wb, ws, 'Report')
      writeFile(wb, title)
    }
  }

  return (
    <div className='d-flex align-items-center'>
      {acitve && (
        <div className='px-3'>
          <input
            type='file'
            className='d-none'
            id='inputGroupFile'
            onChange={handleImport}
            accept='.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'
          />
          <label
            className='text-center mb-0 d-flex align-items-center cursor-pointer'
            htmlFor='inputGroupFile'
          >
            <img
              src={require(`../src/images/import.png`)}
              alt='import'
              width='16'
            />
            <p className='mb-0 px-2 add_text'>Import</p>
          </label>
        </div>
      )}
      <div onClick={handleExport} className='d-flex align-items-center'>
        <p className='mb-0 px-2 add_text'>Export</p>
      </div>
    </div>
  )
}

export { BulkImport }
