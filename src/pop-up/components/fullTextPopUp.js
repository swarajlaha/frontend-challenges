import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const FullTextPopUp = ({ show, setShow, text }) => {

  const handleClose = () => {
    setShow(false)
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{text}</Modal.Title>
        </Modal.Header>
      </Modal>
    </>
  )
}

export default FullTextPopUp
