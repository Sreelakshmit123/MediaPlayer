import React from 'react'
import {Link} from 'react-router-dom'
import { Table } from 'react-bootstrap'

function WatchHistory() {
  return (
   <>
   <div className='container mt-5 d-flex justify-content-between'>
    <h3 style={{height:'55px'}}>Watch History</h3>
    <Link to={'/home'}><i class="fa-solid fa-left-long me-2"></i></Link>
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
        <tr>
          <td>1</td>
          <td>Leo Trailer</td>
          <td><a href="https://www.youtube.com/watch?v=Po3jStA673E"target='_blank'>https://www.youtube.com/watch?v=Po3jStA673E</a></td>
          <td>13/12/2023</td>
          <td><button className='btn'><i class="fa-solid fa-trash text-danger"></i></button></td>
        </tr>   
      </tbody>
    </Table>
   </>
  )
}

export default WatchHistory