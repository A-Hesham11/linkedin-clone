import { Timestamp } from 'firebase/firestore';
import React, { Fragment, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { postArticleAPI } from '../redux/actions';

const PostModel = (props) => {
    const [editorText, setEditorText] = useState('');
    const {user} = useSelector(state => state.userState);

    const boxRef = useRef(null); 
    
    const dispatch = useDispatch();

    const reset = (e) => {
        setEditorText("");
        props?.setShareImage("");
        props?.setVideoLink("");
        props?.setAssetArea("");
        props?.handleClick(e);
    };

    const handleChange = (e) => {
        const image = e.target.files[0];
        if (image === "" || image === undefined) {
            alert(`Not an image , the file is a ${typeof image}`);
            return;
        } else {
            props?.setShareImage(image);
        };
    };

    const handlePostArticles = (e) => {
        e.preventDefault();
        if (e.target !== e.currentTarget) {
            return;
        };
        const payload = {
            image: props.shareImage,
            video: props.videoLink,
            user:user,
            description: editorText,
            timestamp: Timestamp.now(),
        }
        dispatch(postArticleAPI(payload));
        reset(e);
    };

    function handleClickOutside (event) {
        if (props.showModel && boxRef.current && !boxRef.current.contains(event.target)) {
            document.addEventListener("click", props.setShowModel(false));
        };
    };

    return (
    <Fragment>
        {props.showModel 
            ?  (
                <div className='popup-post' onClick={handleClickOutside}>
                    <div ref={boxRef} className='post-model bg-mainbg rounded-3' style={{maxWidth:'552px', margin:'50px auto'}}>
                        <div className='d-flex align-items-center justify-content-between border-bottom px-3 py-2'>
                            <p className='m-0 text-textColor fs-5'>Create a post</p>
                            <button onClick={(e) => reset(e)} className='close-btn border-0 bg-transparent rounded-circle' style={{width:'40px', height:'40px'}}>
                                <img src='/images/close-icon.svg' alt='close'/>
                            </button>
                        </div>
                        <div className='popup-content' style={{padding:'30px 35px', maxHeight:'75vh'}}>
                            {user && user.photoURL 
                                ? (<img src={user.photoURL} className='rounded-circle' style={{width:'48px', margin:'-3px'}}/> )
                                : (<img src='/images/undefined-image.png' alt='unnamed' className='rounded-circle' style={{width:'48px', margin:'-3px'}}/>)
                            }
                            <span className='fw-bold ps-3'>{user.displayName}</span>
                            <div className='mt-4 w-100'>
                                <textarea 
                                    value={editorText} 
                                    onChange={(e) => setEditorText(e.target.value)} 
                                    className='border-0 w-100' 
                                    placeholder='What do you want to talk about?'
                                    autoFocus={true}
                                    dir="auto"
                                    style={{ overflowY:'hidden', resize:"none", minHeight:'70px'}}
                                />
                                {props.assetArea === 'image' 
                                    ? (<div>
                                            <input type='file' name='image' id='file' className='d-none' onChange={handleChange}/>
                                            <p>
                                                <label htmlFor='file' style={{cursor:'pointer', marginBottom:'15px',paddingRight:'30px', display:'block', textAlign:'center'}}>Select an image to share</label>
                                            </p>
                                            
                                            {props.shareImage && (<img src={URL.createObjectURL(props.shareImage)} alt='img' style={{width:"100%", maxHeight:"40vh"}} />)}
                                    </div>)
                                    : props.assetArea === 'media' && (
                                        <Fragment>
                                            <input type='text' 
                                                style={{width:'100%', height:'30px', margin:'15px 0px', padding:'18px 10px'}}
                                                placeholder='Please input a video link' 
                                                value={props.videoLink} 
                                                onChange={(e) => props.setVideoLink(e.target.value)}
                                            />
                                            {props.videoLink && (
                                                <ReactPlayer width='100%' height="310px" url={props.videoLink} />
                                            )}
                                        </Fragment>
                                    )
                                }
                            </div>
                        </div>
                        <div className='px-3 d-flex align-items-center justify-content-between pb-2'>
                            <div className='d-flex align-items-center'>
                                <div className='share border-end pe-2'>
                                    <button onClick={() => props.switchAssetArea('image')} className='share-btn border-0 bg-transparent rounded-circle'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='#0A66C2' width={21}>
                                            <path d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/>
                                        </svg>
                                    </button>
                                    <button onClick={() => props.switchAssetArea('media')} className='share-btn border-0 bg-transparent rounded-circle'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={25} fill='red'>
                                            <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                                        </svg>
                                    </button>                        
                                </div>
                                <button className='share-btn border-0 bg-transparent rounded-pill ms-2'>
                                    <img src='/images/comment-icon.svg' alt='share-image'/>
                                    <span className='ms-1'>Anyone</span>
                                </button>
                            </div>
                            <button 
                                className={`${!editorText ? 'disabled-btn' : 'text-white bg-primary' } border-0 rounded-pill  px-4 py-1 `}
                                onClick={(e) => handlePostArticles(e)}
                            >
                                Post
                            </button>
                        </div>
                    </div>                
                </div>
                )
            : ''
        }
    </Fragment>
    );
};
export default PostModel;

