import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { Table } from 'react-bootstrap'
import { getsHistoryAPI, removeHistoryAPI } from '../services/allAPI'

function WatchHistory() {
  const [history,setHistory]= useState([])
  useEffect(()=>{
    getHistory()
  },[])
  const getHistory = async ()=>{
    const result = await getsHistoryAPI()
    if(result.status==200){
      setHistory(result.data)
    }else{
      console.log("API Failed");
      console.log(result.message);
    }
  }
  const removeHistoryItem = async (id)=>{
    await removeHistoryAPI(id)
    getHistory()
  }
  return (
   <>
   <div className='container mt-5 d-flex justify-content-between'>
    <h3 style={{height:'55px'}}>Watch History</h3>
    <Link to={'/home'}><i class="fa-solid fa-left-long me-2"></i> Back to Home</Link>
   </div>
   <Table striped bordered hover>
      <thead>
          <tr>
            <th>#</th>
            <th>Video caption</th>
            <th>URL</th>
            <th>TimeStamp</th>
            <th><i class="fa-solid fa-ellipsis"></i></th>
          </tr>
      </thead>
   <tbody>
        
        {history?.length>0? history?.map((video,index)=>(
          <tr>
          <td>{index+1}</td>
          <td>{video?.caption} </td>
          <td><a href={video?.link} target='_blank'>{video?.link}</a></td>
          <td>{video?.timeStamp}</td>
          <td><button onClick={()=>removeHistoryItem(video?.id)} className='btn'><i  style={{height:'20px'}} class="fa-solid fa-trash text-danger"></i></button></td>
        </tr> 
        )):
             <p className='fw-bolder text-danger fs-4'>your watch history is Empty!!!</p>
            }
        
         </tbody>
      
    </Table>
   </>
  )
}

export default WatchHistory