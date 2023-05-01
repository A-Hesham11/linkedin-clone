import React from 'react'
import { Container} from 'react-bootstrap';
import ContentPage from './ContentPage';
import LiftSide from './LiftSide';
import RightSide from './RightSide';

const Home = () => {
  return (
    <div className='home mt-4'>
        <Container>
            <div className='row mb-5 justify-content-end'>
                <div className='col-lg-3 col-md-4 col-12 px-sm-2'>
                    <LiftSide/>
                </div>
                <div className='col-lg-6 col-md-8 col-12' style={{padding:'0px 12px'}}>
                    <ContentPage/>
                </div>
                <div className='col-lg-3 col-md-8 col-12 px-sm-2'>
                    <RightSide/>
                </div>
            </div>
        </Container>
    </div>
  )
};
export default Home;
