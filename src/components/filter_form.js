import React, {useState} from 'react'
import { orderFilter, affiliateFilter } from '../helpers/json'
import { SelectField, AppButton, StyledInput } from '../components'
import DateRangePicker from 'react-bootstrap-daterangepicker'
import 'bootstrap-daterangepicker/daterangepicker.css';
import { useForm } from 'react-hook-form'
import moment from 'moment'

const FilterForm = ({ type, filter_only_date, filter_request_api }) => {
  const [startDate, setStartDate] = useState(
    moment().subtract(1, 'month').format('MM-DD-YYYY'),
  )
  const [endDate, setEndDate] = useState(moment().format('MM-DD-YYYY'))

  const showDatePicker = () => {}
  const handleDateRangePicker = (event, picker) => {
    const StartDate = moment(picker.startDate).format('MM-DD-YYYY')
    const EndDate = moment(picker.endDate).format('MM-DD-YYYY')
    setStartDate(StartDate)
    setEndDate(EndDate)
  }

  const { register, handleSubmit } = useForm({
    defaultValues: {
      start_date: startDate,
      end_date: endDate,
    },
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='row filter_form' id="filter_form">
        <div className={filter_only_date ? 'col-md-7' : 'col-md-5'}>
          <DateRangePicker
            onApply={(event, picker) => handleDateRangePicker(event, picker)}
            onShow={showDatePicker}
            initialSettings={{
              startDate: startDate,
              endDate: endDate,
            }}
          >
            <StyledInput type='text' className='form-control sm' id='fileinput' />
          </DateRangePicker>
        </div>
        {!filter_only_date && (
          <div className='col-md-5'>
            <SelectField
              name='filter_optios'
              register={register}
              options={type === 'order' ? orderFilter : affiliateFilter}
              default_value='Select Filter Status'
              removeClass={false}
              size="sm"
            />
          </div>
        )}
        <div className='col-md-2 mr-0'>
          <AppButton 
            variant='btn-primary'
            type='submit'
            size="md"
            button_text='Filter'
          />
        </div>
      </div>
    </form>
  )
}

export { FilterForm }
