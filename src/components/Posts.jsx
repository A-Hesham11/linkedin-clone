import React, { Fragment, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Dropdown } from 'react-bootstrap';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { getArticlesAPI } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import PostsPopup from './PostsPopup';

const Posts = () => {
    const {articles} = useSelector(state => state.articleState);
     const {loading} = useSelector(state => state.articleState);
    const {user} = useSelector(state => state.userState);
    const dispatch = useDispatch();

    const [showPopup, setShowPopup] = useState(Array(articles.length).fill(false));
    const [hidePost, sethidePost] = useState(Array(articles.length).fill(false));
    const [buttonStates, setButtonStates] = useState(Array(articles.length).fill(false));
    const [likeCount, setLikeCount] = useState(Array(articles.length).fill(Number(0)));

    useEffect(() => {
        dispatch(getArticlesAPI());
    }, []);

    const handleBtnSetting = (index) => {
        const newShowpopup = {showPopup};
        if(!newShowpopup[index]) {
            newShowpopup[index] = true;
        };
        setShowPopup(newShowpopup);
    };

    const handleRemovePost = async (id) => {
        try {
            await deleteDoc(doc(db, 'articles', id));
        } catch (error) {
            console.log(error);
        };
    };

    const handleShowPost = (index) => {
        const newHidePost = [...hidePost]
        newHidePost[index] = false;
        sethidePost(newHidePost);
        setShowPopup(false);
        localStorage.setItem("hidePost", JSON.stringify(newHidePost));
    };

    const handleBtnLike = (index) => {
        const newButtonStates = [...buttonStates];
        const newLikeCount = [...likeCount];
        if (newButtonStates[index]) {
          newButtonStates[index] = false;
          newLikeCount[index] = Number(0);
        } else {
          newButtonStates[index] = true;
          newLikeCount[index] = Number(1);
        };
        setButtonStates(newButtonStates);
        setLikeCount(newLikeCount);
        localStorage.setItem("buttonStates", JSON.stringify(newButtonStates));
        localStorage.setItem("likeCount", JSON.stringify(newLikeCount));
    };

    useEffect(() => {
        const localStorageBtn = JSON.parse(localStorage.getItem("buttonStates"));
        if (localStorageBtn) {
          setButtonStates(localStorageBtn);
        } 
    }, []);

    useEffect(() => {
        const localStorageBtn = JSON.parse(localStorage.getItem("likeCount"));
        if (localStorageBtn) {
          setLikeCount(localStorageBtn);
        } 
    }, []);

    return (
        <div>
            {articles.length === 0 
                ? (<p className='mt-4 text-center text-black-50'>There are no articles</p>) 
                : (<Fragment>
                    {loading &&
                    <div className='loader d-flex w-100'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='#378FE9' width='50'>
                            <path d="M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z"/>
                        </svg>
                    </div>
                    }
                    {articles.length > 0 && articles.map((article, index) => (
                        <Fragment key={article.id}>
                            {hidePost[index] 
                                ?(<div className='post p-3 bg-mainbg rounded-3 mt-3 mb-2'>
                                        <h4>Thanks for your feedback</h4>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <p className='mb-1'>You won't see this post in your feed again</p>
                                            <button className='text-textColor border-0 rounded-pill fw-semibold px-2 py-1' style={{backgroundColor:"#EEF3F8"}} onClick={() => handleShowPost(index)}>Show</button>
                                        </div>
                                    </div>
                                )
                                : (
                                    <div className={` post p-3 bg-mainbg rounded-3 mt-3 mb-2 position-relative`} key={index} >
                                        <div className='d-flex align-items-start gap-3'>
                                            <div className='rounded-circle'>
                                                <img src={article.actor.image} className='rounded-circle' style={{width:'48px', margin:'-3px'}}/>
                                            </div>
                                            <div className='postUser-info'>
                                                <span className='m-0 fw-semibold'>{article.actor.userName}</span>
                                                <span>{article.actor.userEmail}</span>
                                                <span>{article.actor.date.toDate().toLocaleDateString()}</span>
                                            </div>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="none" className='postBtn-delete text-muted p-0 border-0' style={{fontSize:'0.8rem', marginTop:'-3px'}}>
                                                    <span className=''>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                                                            <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
                                                        </svg>
                                                    </span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className='setting-dropdown dropdown.menu border-0' style={{minWidth:'7rem'}}>
                                                    {user && user.email !== article.actor.userEmail
                                                        ? (
                                                        <Dropdown.Item className='fs-6 d-flex align-items-center gap-2' onClick={() => handleBtnSetting(index)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width={20} fill='#666666'>
                                                            <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"/>
                                                            </svg>
                                                            <span className='text-textColor'>I don't want to see this</span>
                                                        </Dropdown.Item>
                                                        )
                                                        : ("")
                                                    }
                                                    {user && user.email === article.actor.userEmail 
                                                        ? (
                                                        <Dropdown.Item className='fs-6 d-flex align-items-center gap-2' onClick={() => handleRemovePost(article.id)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={16} fill='#666666'>
                                                            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                                                            </svg>
                                                            <span className='text-textColor'>Delete post</span>
                                                        </Dropdown.Item>
                                                        )
                                                        : ("")
                                                    }
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <PostsPopup index={index} 
                                                hidePost={hidePost} 
                                                sethidePost={sethidePost} 
                                                showPopup={showPopup} 
                                                setShowPopup={setShowPopup}
                                            />
                                        </div>
                                        <div className='py-3'>
                                            <p dir="auto">{article.description}</p>
                                            <a>
                                            {!article.shareImage 
                                                && article.video ? (<ReactPlayer width='100%' url={article.video}/>) 
                                                : article.shareImage && <img src={article.shareImage} className="img-fluid"/>
                                            }
                                            </a>
                                        </div>
                                        <div className='pb-2 border-bottom d-flex align-items-center justify-content-between'>
                                            <button className='border-0 bg-transparent p-0'>
                                                <img src='/images/like.svg' alt='like'/>
                                                <img src='/images/love.svg' alt='love'/>
                                                <span className='show-comment'>{likeCount[index] || 0}</span>
                                            </button>
                                            <div>
                                                <button className='border-0 bg-transparent '>
                                                <span className='show-comment'>{article.comments} Comments </span>
                                                </button>
                                                <button className='border-0 bg-transparent '>
                                                <span className='show-comment'> 0 Share</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className='add-post-container post-content-box d-flex align-items-center justify-content-between pt-3'>
                                            <button onClick={() => handleBtnLike(index)} className='add-post-btn'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='21' style={{fill: buttonStates[index] ? "#0A66C2" : "#666666"  }} >
                                                    <path d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.2s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16H286.5c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8H384c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H32z"/>
                                                </svg>
                                                <span className='react-btn  fw-semibold' style={{color: buttonStates[index] ? "#0A66C2" : "#00000080" }} >Like</span>
                                            </button>
                                            <button className='add-post-btn'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#666666" className="mercado-match" width="24" height="24" focusable="false">
                                                    <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
                                                </svg>
                                                <span className='react-btn text-black-50 fw-semibold'>Comment</span>
                                            </button>
                                            <button className='add-post-btn'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width='20' fill='#666666'>
                                                    <path d="M400 255.4V240 208c0-8.8-7.2-16-16-16H352 336 289.5c-50.9 0-93.9 33.5-108.3 79.6c-3.3-9.4-5.2-19.8-5.2-31.6c0-61.9 50.1-112 112-112h48 16 32c8.8 0 16-7.2 16-16V80 64.6L506 160 400 255.4zM336 240h16v48c0 17.7 14.3 32 32 32h3.7c7.9 0 15.5-2.9 21.4-8.2l139-125.1c7.6-6.8 11.9-16.5 11.9-26.7s-4.3-19.9-11.9-26.7L409.9 8.9C403.5 3.2 395.3 0 386.7 0C367.5 0 352 15.5 352 34.7V80H336 304 288c-88.4 0-160 71.6-160 160c0 60.4 34.6 99.1 63.9 120.9c5.9 4.4 11.5 8.1 16.7 11.2c4.4 2.7 8.5 4.9 11.9 6.6c3.4 1.7 6.2 3 8.2 3.9c2.2 1 4.6 1.4 7.1 1.4h2.5c9.8 0 17.8-8 17.8-17.8c0-7.8-5.3-14.7-11.6-19.5l0 0c-.4-.3-.7-.5-1.1-.8c-1.7-1.1-3.4-2.5-5-4.1c-.8-.8-1.7-1.6-2.5-2.6s-1.6-1.9-2.4-2.9c-1.8-2.5-3.5-5.3-5-8.5c-2.6-6-4.3-13.3-4.3-22.4c0-36.1 29.3-65.5 65.5-65.5H304h32zM72 32C32.2 32 0 64.2 0 104V440c0 39.8 32.2 72 72 72H408c39.8 0 72-32.2 72-72V376c0-13.3-10.7-24-24-24s-24 10.7-24 24v64c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V104c0-13.3 10.7-24 24-24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H72z"/>
                                                </svg>
                                                <span className='react-btn text-black-50 fw-semibold'>Share</span>
                                            </button>
                                            <button className='add-post-btn'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#666666" className="mercado-match" width="24" height="24" focusable="false">
                                                    <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
                                                </svg>
                                                <span className='react-btn text-black-50 fw-semibold'>Send</span>
                                            </button>
                                        </div>
                                    </div>
                                )
                            }
                        </Fragment>
                    ))};
                </Fragment>
                )
            }
        </div>
    );
};
export default Posts;