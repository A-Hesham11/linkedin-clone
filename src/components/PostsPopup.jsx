import React, { Fragment, useEffect, useRef, useState } from 'react';

const PostsPopup = ({index, hidePost, sethidePost, showPopup, setShowPopup}) => {

    const [disabled, setDisabled] = useState(true);
    const boxRef = useRef(null);

    function handleClickOutside (event) {
        if (showPopup && boxRef.current && !boxRef.current.contains(event.target)) {
            document.addEventListener("click", setShowPopup(false));
        };
    };

    const handleChange = (e) => {
        setDisabled(e.empty)
    };

    const handleHidePost = (e, index) => {
        e.preventDefault()
        const newHidePost = [...hidePost]
        newHidePost[index] = true;
        sethidePost(newHidePost);
        localStorage.setItem("hidePost", JSON.stringify(newHidePost));
    };

    useEffect(() => {
        const localStorageBtn = JSON.parse(localStorage.getItem("hidePost"));
        if (localStorageBtn) {
          sethidePost(localStorageBtn);
        } 
    }, []);

    return (
        <Fragment>
            {showPopup[index] &&
                <div className='popup-post' onClick={handleClickOutside}>
                    <div ref={boxRef} className='post-select bg-mainbg rounded-3'>
                        <div className='d-flex align-items-center justify-content-between border-bottom px-3 py-2'>
                            <p className='m-0 text-textColor fs-5'>Don’t want to see this</p>
                            <button className='bg-transparent border-0' onClick={() => setShowPopup(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width={20} fill='#666666'>
                                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                </svg>
                            </button>
                        </div>
                        <div className='popup-ratio m-2'>
                            <p className='ms-3 my-2'>Tell us why to help improve the feed.</p>
                            <form onSubmit={(e) => handleHidePost(e, index)} onChange={handleChange}>
                                <input type="radio" id="1" name="contact" value="I'm not interested in the author" />
                                <label htmlFor="1" className='text-black-50'>I'm not interested in the author</label><br/>
                            
                                <input type="radio" id="2" name="contact" value="I'm not interested in this topic" />
                                <label htmlFor="2">I'm not interested in this topic</label><br/>
                            
                                <input type="radio" id="3" name="contact" value="I've seen too many posts on this topic" />
                                <label htmlFor="3">I've seen too many posts on this topic</label><br/>
        
                                <input type="radio" id="4" name="contact" value="I've seen this post before" />
                                <label htmlFor="4">I've seen this post before</label><br/>
                            
                                <input type="radio" id="5" name="contact" value="This post is old" />
                                <label htmlFor="5">This post is old</label><br/>
                            
                                <input type="radio" id="6" name="contact" value="It's something else" />
                                <label htmlFor="6">It's something else</label><br/>
                                <div className='d-flex justify-content-end pb-3 pe-4'>
                                <button type="submit" disabled={disabled} 
                                    style={{backgroundColor: disabled ? "#EBEBEB" : "#0a66c2", color: disabled ? "A4A4A4": "#FFF"}}  
                                    className='rounded-pill border-0 mt-2 px-3 py-1 fw-semibold'
                                >
                                    Submit
                                </button>
                                </div>
                            </form>
                        </div>
        
                    </div>
                </div>
            }
        </Fragment>
    );
};
export default PostsPopup;
