import React, { useState } from 'react'

const RightSide = () => {
  const [followOne, setFollowOne] = useState(false);
  const [followTwo, setFollowTwo] = useState(false);
  const [followThree, setFollowThree] = useState(false);
  const handleFollowOne= (e) => {
    e.preventDefault();
    setFollowOne(!followOne);
  };
  const handleFollowTwo= (e) => {
    e.preventDefault();
    setFollowTwo(!followTwo);
  };
  const handleFollowThree= (e) => {
    e.preventDefault();
    setFollowThree(!followThree);
  };

  return (
    <div className='right-side'>
      <div className='add-feed bg-mainbg p-3 rounded-3'>
        <p className='fw-semibold'>Add to your feed</p>
        <ul className='p-0 mb-4'>
          <li className='d-flex align-items-center gap-2'>
            <a href='https://www.linkedin.com/in/a-hesham22'>
              <img src='/images/me.jpeg' alt='feed-img' width='50' className='rounded-circle'/>
            </a>
            <div>
              <a href='https://www.linkedin.com/in/a-hesham22'>
                <div className='lh-sm mb-2'>
                  <p className='m-0 text-black'>Ahmed Hesham</p>
                  <span className='text-feed'>Front-End Developer</span>
                </div>
              </a>
              <button  onClick={handleFollowOne} className={`${followOne ? 'following' : "bg-transparent"} follow-btn px-2 d-flex align-items-center gap-1 border-muted rounded-pill`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15px" cursor="pointer" fill='#666666'>
                  <path d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"></path>
                </svg>
                <span>{followOne ? "Following" : "Follow"}</span>
              </button>
            </div>
          </li>
        </ul>
        <ul className='p-0 mb-3'>
          <li className='d-flex align-items-center gap-2'>
            <a href='https://www.linkedin.com/in/a-hesham22'>
              <img src='/images/jobs.jpeg' alt='feed-img' width='50' className='rounded-circle'/>
            </a>
            <div>
              <a href='https://www.linkedin.com/company/jobs-%D9%88%D8%B8%D8%A7%D8%A6%D9%81/'>
                <div className='lh-sm mb-2'>
                  <p className='m-0 text-black'>Job | وظيفة</p>
                  <span className='text-feed'>Company • Staffing and Recruiting</span>
                </div>
              </a>
              <button onClick={handleFollowTwo} className={`${followTwo ? 'following' : "bg-transparent"} follow-btn px-2 d-flex align-items-center gap-1 border-muted rounded-pill`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15px" cursor="pointer" fill='#666666'>
                  <path d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"></path>
                </svg>
                <span>{followTwo ? "Following" : "Follow"}</span>
              </button>
            </div>
          </li>
        </ul>
        <ul className='p-0 mb-4'>
          <li className='d-flex align-items-center gap-2'>
            <a href='https://www.linkedin.com/in/a-hesham22'>
              <img src='/images/egypt-job.jpeg' alt='feed-img' width='50' className='rounded-circle'/>
            </a>
            <div>
              <a href='https://www.linkedin.com/showcase/%D9%88%D8%B8%D8%A7%D8%A6%D9%81-%D9%85%D8%B5%D8%B1/'>
                <div className='lh-sm mb-2'>
                  <p className='m-0 text-black'> وظائف مصر</p>
                  <span className='text-feed'>Staffing and Recruiting cairo</span>
                </div>
              </a>
              <button  onClick={handleFollowThree} className={`${followThree ? 'following' : "bg-transparent"} follow-btn px-2 d-flex align-items-center gap-1 border-muted rounded-pill`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="15px" cursor="pointer" fill='#666666'>
                  <path d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"></path>
                </svg>
                <span>{followThree ? "Following" : "Follow"}</span>
              </button>
            </div>
          </li>
        </ul>
        <div className='m-0 fw-semibold' style={{fontSize:'14px'}}>
          View all recommendations
          <span className='ps-2'>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 512 512"
              width='15'
              fill='#666666'
            >
              <path d="M334.5 414c8.8 3.8 19 2 26-4.6l144-136c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22l0 72L32 192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l288 0 0 72c0 9.6 5.7 18.2 14.5 22z"/>
            </svg>
          </span>
         </div>
      </div>
      <div className='add-ads bg-mainbg p-2 rounded-3 my-3 w-100'>
        <img className='img-fluid w-100' src='/images/banner-image.jpg' alt='banner'/>
      </div>
    </div>
  )
};
export default RightSide;


