import React, {useContext, useState} from 'react'
import {DateRangePicker} from 'react-dates'
import moment from 'moment'
import AppContext from '../context/app-context'
import {setStartDate, setEndDate} from '../generators/filters'





const Calendar = () => {
  const [state, setState] = useState({focusedInput: null})
  const {dispatchFilter ,filter} = useContext(AppContext)

  const onDatesChange = ({startDate, endDate}) => {
    dispatchFilter(setStartDate(startDate))
    dispatchFilter(setEndDate(endDate))

  }

  const onFocusChange = (focusedInput) => setState({focusedInput})

  console.log('calendar :', filter)
  return (
    <div>
      <DateRangePicker 
        startDate={filter.startDate}
        startDateId="startDateId"
        endDate={filter.endDate}
        endDateId="endDateId"
        onDatesChange={onDatesChange}
        focusedInput={state.focusedInput}
        onFocusChange={onFocusChange}
        isOutsideRange={() => false}
        showClearDates={true}
        readOnly={true}
      />
    </div>
  )
}

export default Calendar