import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const PickupModal = ({ formattedDate }) => {
  const [showModal, setShowModal] = useState(false)
  const handleOpen = () => setShowModal(true)
  const handleClose = () => setShowModal(false)
 
  // const { selectedDate } = props
  // const date = (props.selectedDate)

  return (
    <div>
      <Button onClick={handleOpen}>Confirm</Button>
      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" variant="h6" component="h2">
            Thank you for using our service!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Confirmed pick up at { formattedDate }.
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default PickupModal