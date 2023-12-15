import React,{useState} from 'react'
import { Button, Modal, Form ,FloatingLabel } from 'react-bootstrap'

function Add() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
   <>
  <div className="d-flex align-items-center">
    <h5 style={{height:'45px'}}>Upload New Video</h5>
    <button onClick={handleShow} style={{color:'white'}} className='btn'><i style={{height:'40px'}} class="fa-solid fa-photo-film fa-2x"></i></button>
  </div>
  <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload New Video Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the Details!!!!</p>
        <FloatingLabel
        controlId="floatingInputId"
        label="Uploading video Id"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Uploading video Id" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInputCaption"
        label="Uploading video Caption"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Uploading video Caption" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInputImg"
        label="Uploading video Image URL"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Uploading video Image URL" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInputLink"
        label="Uploading video Youtube Link"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Uploading video Youtube Link" />
      </FloatingLabel>
     
     
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="btn btn-info">Upload</Button>
        </Modal.Footer>
      </Modal>
   </>
  )
}

export default Add