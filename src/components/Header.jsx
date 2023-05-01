import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Dropdown, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../redux/actions';
import useScrollDirection from './NavbarScroll'
import CardPage from './CardPage';

const Header = () => {
    const [show, setShow] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const scrollDirection = useScrollDirection();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();
    const {user} = useSelector(state => state.userState);
    const navigate = useNavigate();

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        setIsVisible(scrollTop > 100);
    };

    const handleClick = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
    };
    
    window.addEventListener('scroll', handleScroll);

    useEffect(() => {
        if(!user) {
            navigate('/')
        }
    }, [user])

    const handleButton = (e) => {
        e.preventDefault();
        if (user) {
            dispatch(logoutUser());
        };
    };

  return (
    <nav className={`header navbar navbar-expand-md bg-mainbg p-0 sticky ${ scrollDirection === "down" ? "hide" : "show"}`} style={{zIndex:'1000'}} >
        <div className='container flex-nowrap'>
            <div className='d-flex align-items-center justify-content-center'>
                <Link  to='/home' className="navbar-brand me-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='#0A66C2' width='35px'>
                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                    </svg>
                </Link>
                <div className='position-relative'>
                    <input type="text" placeholder='Search' style={{width: "100%", backgroundColor:'#EEF3F8', padding:'6px 38px', border:"none"}}/>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='15px' style={{position:'absolute', top:'11px', left:'15px'}} >
                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                    </svg>
                </div>
            </div>
            <div className='nav-right' id="navbarNavDropdown">
                <ul className="text-center d-flex align-items-center m-0 p-0">
                    <div className='nav-left d-flex justify-content-center w-100 bg-mainbg'>
                        <div className=' text-center d-flex align-items-center gap-4'>
                            <li className="nav-item home">
                                <Link to='/home' onClick={handleClick}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width='24px' fill='#666666'>
                                        <path d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185V64c0-17.7-14.3-32-32-32H448c-17.7 0-32 14.3-32 32v36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32v69.7c-.1 .9-.1 1.8-.1 2.8V472c0 22.1 17.9 40 40 40h16c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2H160h24c22.1 0 40-17.9 40-40V448 384c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64 24c0 22.1 17.9 40 40 40h24 32.5c1.4 0 2.8 0 4.2-.1c1.1 .1 2.2 .1 3.3 .1h16c22.1 0 40-17.9 40-40V455.8c.3-2.6 .5-5.3 .5-8.1l-.7-160.2h32z"/>
                                    </svg>
                                    <p style={{color:'#666666', fontSize:'12px', margin:'0px'}}>Home</p>
                                </Link>
                            </li>
                            <li className="nav-item network">
                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width='26px' fill='#666666'>
                                        <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"/>
                                    </svg>
                                    <p style={{color:'#666666', fontSize:'12px', margin:'0px'}}>My Network</p>
                                </a>
                            </li>
                            <li className='nav-item job'>
                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='23px' fill='#666666'>
                                        <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"/>
                                    </svg>
                                    <p style={{color:'#666666', fontSize:'12px', margin:'0px'}}>Jobs</p>
                                </a>
                            </li>
                            <li className='nav-item message'>
                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='21px' fill='#666666'>
                                        <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/>
                                    </svg>
                                    <p style={{color:'#666666', fontSize:'12px', margin:'0px'}}>Messaging</p>
                                </a>
                            </li>
                            <li className='nav-item p-1 notifications'>
                                <a>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width='21px' fill='#666666'>
                                        <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/>
                                    </svg>
                                    <p style={{color:'#666666', fontSize:'12px', margin:'0px'}}>Notifications</p>
                                </a>
                            </li>
                        </div>
                    </div>
                    <div className='d-flex align-items-center'>
                        <li className='nav-item sign-out me-lg-2' style={{padding:'0px 10px'}}>
                            {user && user.photoURL 
                                ? (<img src={user.photoURL} className='rounded-circle' style={{width:'25px', margin:'-3px'}}/> )
                                : (<img src='/images/undefined-image.png' alt='unnamed' className='rounded-circle' style={{width:'25px', margin:'-3px'}}/>)
                            }
                            <Dropdown>
                                <Dropdown.Toggle variant="none" className='text-muted p-0 border-0' style={{fontSize:'0.8rem', marginTop:'-3px'}}>
                                    <span className='d-flex gap-1'>
                                        Me 
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width='11px'>
                                            <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                                        </svg>
                                    </span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='dropdown.menu down-centered border-0' style={{minWidth:'7rem', textAlign:'center'}}>
                                    <Dropdown.Item onClick={handleButton} className='fs-6'>Sign Out</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li className='nav-item border-start ps-3 work'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#666666" width="21px" >
                                <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
                            </svg>
                            <Button variant="none" className='p-0 border-0' style={{fontSize:"12px", marginBottom:'3px'}} onClick={handleShow}>
                                <span className='d-flex gap-1'>
                                    Work 
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width='11px'>
                                        <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                                    </svg>
                                </span>
                            </Button>
                            <Offcanvas show={show} onHide={handleClose} placement='end'>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Work</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <CardPage/>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
  </nav>
  )
};
export default Header;

