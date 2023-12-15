import React,{useState} from 'react'
import { Button, Modal, Form ,FloatingLabel } from 'react-bootstrap'

function Add() {
  const [uploadVideo,setUploadVideo] = useState({
    id:"",caption:"",url:"",link:""
  })
  const [show, setShow] = useState(false);
console.log(uploadVideo);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //https://www.youtube.com/watch?v=Po3jStA673E&t=1s
  //https://www.youtube.com/embed/Po3jStA673E

    // v= shesham ulla 11 digits
    // athin split cheyithal we get the link in seperate  like https://www.youtube.com/watch? and Po3jStA673E&t=1s and we want only 11 digits so slice use akki split akkiya rand index ittea 1 index eduth 0,11 digits edukum

      
  const getYoutubeEmbedLink = (e)=>{
    const {value} = e.target
    if(value.includes("v=")){
      let vID = value.split("v=")[1].slice(0,11)
      console.log(`https://www.youtube.com/embed/${vID}`);
      setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${vID}`})
    }else{
      setUploadVideo({...uploadVideo,link:""})
    }
  }
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
        <Form.Control type="text" placeholder="Uploading video Id" onChange={e=>setUploadVideo({...uploadVideo,id:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInputCaption"
        label="Uploading video Caption"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Uploading video Caption"onChange={e=>setUploadVideo({...uploadVideo,caption:e.target.value})}  />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInputImg"
        label="Uploading video Image URL"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Uploading video Image URL"onChange={e=>setUploadVideo({...uploadVideo,url:e.target.value})}  />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInputLink"
        label="Uploading video Youtube Link"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Uploading video Youtube Link"onChange={getYoutubeEmbedLink}   />
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