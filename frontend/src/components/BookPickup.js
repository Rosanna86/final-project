import React, { useState } from "react"
import moment from "moment"
import DatePicker from "react-datepicker"
import addMonths from '@jsbits/add-months'
import PickupModal from "./Modal"

import "react-datepicker/dist/react-datepicker.css"

const BookPickup = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  // const [showModal, setShowModal] = useState(false)
  // const [hideModal, setHideModal] = useState(true)

  const formattedDate = moment(selectedDate).format('YYYY-MM-DD')

  const onChange = (date) => {setSelectedDate(date)}

  return (
    <div>
    <h3>Book a pickup!</h3>
      <DatePicker
        value={formattedDate}
        onChange={onChange}
        minDate={new Date()}
        maxDate={addMonths(new Date(), 1)}
        showDisabledMonthNavigation
      />
      <PickupModal formattedDate = {formattedDate}/>
      {/* <button onClick = {() => setShowModal(true)}>Confirm</button>
      {showModal && <Modal setShowModal={setShowModal} />}
      <p>{JSON.stringify(formattedDate)}</p> */}
    </div>
  )
}

export default BookPickup