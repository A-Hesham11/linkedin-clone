import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { auth } from './firebase';
import { changeUser } from './redux/actions/actions';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(changeUser(authUser));
      } else {
        dispatch(changeUser(null));
      }
    })
  }, [dispatch]);

  return (

    <div className='app'>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/home' element={
            <Fragment>
              <Header/>
              <Home/>
            </Fragment>
        }/>
        
      </Routes>
    </div>    
  )
}

export default App




