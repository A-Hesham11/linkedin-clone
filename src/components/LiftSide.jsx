import React, { Fragment, useState } from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux';

const LiftSide = () => {
  const [showGroups, setShowGroups] = useState(false);
  const {user} = useSelector(state => state.userState);

  const handleBtnShow = () => {
    setShowGroups(!showGroups);
  };
  
  return (
    <div>
      <Card >
        <div className='position-relative'>
          <Card.Img variant="top" src="/images/profile-bachground.svg" />
          <div className='profile-img rounded-circle w-30 bg-white position-absolute'>
            <Card.Img variant="top" src='images/profile-photo.svg' className='p-3'/>
          </div>
        </div>
        <Card.Body className='text-center pb-2'>
          <Card.Title className='text-center mt-4' style={{position:'relative', zIndex:'2'}}>Welcome, {user && user.displayName}</Card.Title>
          <Button variant="none" className='border-0' style={{color:'#0a66c2', fontSize:'14px'}} >Add a photo</Button>
        </Card.Body>
            <ListGroup className={`${showGroups ? "show-groups" : "hide-groups"} list-group-flush`}>
              <ListGroup.Item >
                <Card.Link href="#" >
                  <div className='d-flex align-items-center justify-content-between'>
                    <p className='text-black fw-semibold m-0' style={{fontSize:"14px"}}><span className='text-black-50'>Connections</span><br/>Grow your network</p>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 640 512"
                      width='23px'
                    >
                      <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/>
                    </svg>
                  </div>
                </Card.Link>
              </ListGroup.Item>
              <ListGroup.Item>
                <Card.Link href="#">
                  <div className='d-flex align-items-center'>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 384 512"
                        width='16px'
                      >
                        <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
                      </svg>
                      <span className='ms-2 fw-semibold text-black' style={{fontSize:"14px"}}>My Items</span>
                  </div>
                </Card.Link>
              </ListGroup.Item>
            </ListGroup>
          
      </Card>
      <Card className={`${showGroups ? 'show-groups' : 'hide-groups'}`} style={{ marginTop:'15px'}}>
        <Card.Body>
          <Card.Link href="#" className='group-item text-black fw-semibold'>Groups</Card.Link>
          <div className='d-flex align-items-center justify-content-between'>
            <Card.Link href="#" className='group-item text-black fw-semibold'>Events</Card.Link>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 448 512"
              width='17px'
              cursor='pointer'
            >
              <path d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"/>
            </svg>
          </div>
          <Card.Link href="#" className='group-item text-black fw-semibold'>Follows Hashtags</Card.Link>      
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item className='list-item text-center py-2'>
            <Card.Link href="#" style={{fontSize:"14px", fontWeight:"600"}}>Discover more</Card.Link>
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <button onClick={handleBtnShow} className='my-3 show-btn d-md-none bg-transparent'>
        {!showGroups 
          ? <Fragment>
              <span className='me-1'>Show More</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
              </svg>
            </Fragment>
          : <Fragment>
              <span className='me-1'>Show Less</span> 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                <path d="M15 11L8 6.39 1 11V8.61L8 4l7 4.61z"></path>
              </svg> 
            </Fragment>
        }
      </button>
    </div>
  )
};
export default LiftSide;