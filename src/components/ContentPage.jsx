
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import PostModel from './PostModel';
import Posts from './Posts';

const ContentPage = () => {
  const {user} = useSelector(state => state.userState);
  const {loading} = useSelector(state => state.articleState);

  const [showModel, setShowModel] = useState(false);
  const [assetArea, setAssetArea] = useState("");
  const [shareImage, setShareImage] = useState("");
  const [videoLink, setVideoLink] = useState("");

  const handleClick = () => {
    setShowModel(!showModel);
  };

  const switchAssetArea = (area) => {
    setShareImage("");
    setVideoLink("");
    setAssetArea(area);
    setShowModel(true);
  };
    
  return (
    <div className='content-page'>
      <div className='add-post p-3 bg-mainbg rounded-3'>
        <div className=' d-flex align-items-center gap-3'>
          <div className='rounded-circle'>
            {user && user.photoURL 
              ? (<img src={user.photoURL} className='rounded-circle' style={{width:'48px', margin:'-3px'}}/> )
              : (<img src='/images/undefined-image.png' alt='unnamed' className='rounded-circle' style={{width:'48px', margin:'-3px'}}/>)
            }
          </div>
          <button onClick={handleClick} disabled={loading ? true : false} className='border-0 bg-transparent w-100 p-0' type='button' data-bs-toggle="modal" data-bs-target="#exampleModal">
            <input type='text' placeholder='Start Post' className='border rounded-pill p-2 w-100' />
          </button>
        </div>
        <div className='add-post-container d-flex align-items-center justify-content-around flex-wrap pt-4'>
          <button onClick={() => switchAssetArea("image")} className='add-post-btn'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='#378FE9' width='20px'>
              <path d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/>
            </svg>
            <span className='react-btn text-black-50 fw-semibold'>Photo</span> 
          </button>
          <button onClick={() => switchAssetArea("media")} className='add-post-btn'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#5F9B41" className="mercado-match" width="25" height="25" focusable="false">
              <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
            </svg>
            <span className='react-btn text-black-50 fw-semibold'>Video</span>
          </button>
          <button onClick={handleClick} className='add-post-btn'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#C37D16" className="mercado-match" width="24" height="24" focusable="false">
              <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
            </svg>
            <span className='react-btn text-black-50 fw-semibold'>Event</span>
          </button>
          <button onClick={handleClick} className='add-post-btn'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#E16745" width="24" height="24" focusable="false">
              <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
            </svg>
            <span className='react-btn text-black-50 fw-semibold'>Write article</span>
          </button>
        </div>
      </div>
      <Posts/>
      <PostModel 
        showModel={showModel} handleClick={handleClick}
        setShowModel={setShowModel} 
        assetArea={assetArea} setAssetArea={setAssetArea} 
        switchAssetArea={switchAssetArea}
        shareImage={shareImage} setShareImage={setShareImage}
        videoLink={videoLink} setVideoLink={setVideoLink}
      />
    </div>
  )
};
export default ContentPage;
