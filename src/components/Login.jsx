import React, { useEffect, useState } from 'react';
import { Button, Container, Form, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { signInAPI, loginUser } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passShow, setPassShow] = useState(false);

    const {user} = useSelector(state => state.userState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/home');
        }
    }, [user])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) return;
        dispatch(loginUser(email, password));
    };

    const handleButton = (e) => {
        e.preventDefault();
        dispatch(signInAPI());
    };

  return (
    <Container className='my-2'>
      <Nav className='navbar '>
        <Link to='/' className='d-flex'>
            <span className='text-primary fw-bold fs-2'>Linked</span>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 448 512"
                style={{width:'30px', fill:"#0A66C2", marginLeft:'2px'}}
            >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
            </svg>
        </Link>
        <div className='d-flex gap-2'>
            <Link to='/register' className='join btn '>Join now</Link>
            <button className='sign btn border border-primary rounded-pill text-primary fw-bold fs-6 px-3 py-1 out'>Sign in</button>
        </div>
      </Nav>

      <div className='text-box d-flex align-items-center' style={{height:'80vh', justifyContent:'space-between', gap:'50px'}}>
        <div className='text-form w-50'>
            <h2 className='text-primary mb-4'>Welcome to the professional community</h2>
            <Form onSubmit={handleSubmit}>
                <input className='form-control rounded-pill mb-3 p-2 border border-main' 
                    type='email' 
                    placeholder='Your@email.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div style={{position:'relative'}}>
                    <input className='form-control mb-4 rounded-pill p-2 border border-main' 
                        type={passShow ? "text" : 'password'} 
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span style={{position: "absolute", top:"9px", right:"20px", cursor:'pointer', color:"#0A66C2"}} onClick={() => setPassShow(!passShow)}>
                        {passShow ? <i className="fa-regular fa-eye-slash"></i> : <i className="fa-regular fa-eye"></i>}
                    </span> 
                </div>
                <Button type='submit' className='w-100 border-0 rounded-pill mb-4 p-2 bg-primary text-secondary fw-semibold'>
                    Sign in
                </Button>
                <div className='line position-relative mb-0'>
                    <p className='text-center mb-2'>or</p>
                </div>
                <br></br>
                <button className='btn w-100 border border-main rounded-pill' onClick={handleButton}>
                    <img src='../images/google.svg' alt='google' className='pe-1'/>
                    Sign in with google
                </button>
                <div className='text-center mt-4 text-gray-50'>
                    New member on LinkedIn? <Link to='/register' className='fw-bold'>Join Now</Link>
                </div>
            </Form>
        </div>
        <div className='text-image w-50'>
            <img src='../images/login-img.svg' className='w-100' alt='hero'/>
        </div>
      </div>
    </Container>
  )
};
export default Login;

