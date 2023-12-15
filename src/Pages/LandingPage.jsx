import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <>
      <div className='container mt-5'>
        <div className="row align-items-center m-5 mt-2">
          <div className="col-lg-5">
            <h3 style={{ height: '110px' }}>Welcome to <span className='text-warning'>Media  Player</span></h3>
            <p style={{ textAlign: 'justify' }}>Media player App. Will allow you to add and remove uploaded videos,also helps to arrange them in different categories by providing drag and drop functionalities.</p>
            <Link to={'/home'} className='btn btn-info mt-2 fw-bolder'>Get Started</Link>
          </div>
          <div className="col"></div>
          <div className="col-lg-6">
            <img className='img-fluid' src="http://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" />
          </div>
        </div>
        <div className="features">
          <h3 style={{height:'55px'}} className='text-center'>featutres</h3>
          <div className="cards mt-5 d-flex justify-content-between">
            {/* card 1 */}
            <Card style={{ width: '22rem' }}>
              <Card.Img width={'300px'} height={'300px'} variant="top" src="http://i.pinimg.com/originals/53/97/7e/53977ec36a46d13a45ceeb5974b3d117.gif" />
              <Card.Body>
                <Card.Title style={{height:'45px'}}>Managing Videos</Card.Title>
                <Card.Text>
                 User can upload, view and remove the videos.
                </Card.Text>
              </Card.Body>
            </Card>
            {/* card 2 */}
            <Card style={{ width: '22rem' }}>
              <Card.Img width={'300px'} height={'300px'} variant="top" src="https://i.pinimg.com/originals/18/a0/a3/18a0a33c874e26a55fe2456347567ae9.gif" />
              <Card.Body>
                <Card.Title style={{height:'45px'}}>Categorize Videos</Card.Title>
                <Card.Text>
                 user can categories the videos according to their performance using drag and drop features.
                </Card.Text>
              </Card.Body>
            </Card>
            {/* card 3 */}
            <Card style={{ width: '22rem' }}>
              <Card.Img width={'300px'} height={'300px'} variant="top" src="https://cdn.dribbble.com/users/497438/screenshots/2084032/xtyf_1.gif" />
              <Card.Body>
                <Card.Title style={{height:'45px'}}>Watch Videos</Card.Title>
                <Card.Text>
                 User  are able to see the histroy of watched videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row mt-5 border rounded align-items-center p-5">
          <div className="col-lg-5">
            <h3 style={{height:'103px'}} className='text-warning mb-4'>Simple, Fast and Powerful</h3>
            <p style={{textAlign:'justify'}}><span className='fs-5'>Play Everything</span>: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias fugiat in adipisci, earum molestias impedit . </p>
            <p style={{textAlign:'justify'}}><span className='fs-5'>categorize Videos</span>: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias fugiat in adipisci, earum molestias impedit . </p>
            <p style={{textAlign:'justify'}}><span className='fs-5'>Managing History</span>: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias fugiat in adipisci, earum molestias impedit . </p>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
          <iframe width="853" height="480" src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage