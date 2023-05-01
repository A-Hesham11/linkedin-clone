import {auth, db, provider, storage} from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import * as actions from './actions';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';

export function signInAPI() {
    return (dispatch) => {
        signInWithPopup(auth, provider)
        .then((payload) => {
            dispatch(actions.setUser(payload.user));
        }).catch((error) => {
            alert(error.message);
        });
    };
};

export const registerUser = (email, password) => {
    return (dispatch) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
            dispatch(actions.registerSuccess(user));
        }).catch((error) => {
            alert(error.message);
        });
    };
};

export const loginUser = (email, password) => {
    return (dispatch) => {
        signInWithEmailAndPassword(auth, email, password) 
        .then(({user}) => {
            dispatch(actions.loginSuccess(user));
        }).catch((error) => {
            alert(error.message);
        });
    };
};

export const logoutUser = () => {
    return (dispatch) => {
        signOut(auth)
        .then((res) => {
            dispatch(actions.logoutSuccess());
        }).catch((error) => {
            alert(error.message);
        });
    };
};

export function postArticleAPI (payload) {
    return (dispatch) => {
        dispatch(actions.setLoading(true))
        if (payload.image) {
            const storageRef = ref(storage, `images/${payload.image.name}`)
            const uploadRef = uploadBytesResumable(storageRef, payload.image)
            uploadRef.on("state_changed", (snapshot) => {
                const progress = Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is" + progress + "% done");
            }, (error) => {
                alert(error);
            }, () => {
                getDownloadURL(uploadRef.snapshot.ref).then((downloadURL) => {
                    const collRef = collection(db, "articles");
                    addDoc(collRef, {
                        actor: {
                            userEmail: payload.user.email,
                            userName: payload.user.displayName,
                            date: payload.timestamp,
                            image: payload.user.photoURL
                        },
                        comments:0,
                        video: payload.video,
                        description: payload.description,
                        shareImage: downloadURL,
                    })
                })
                dispatch(actions.setLoading(false));
            });
        } else if (payload.video) {
            const collRef = collection(db, "articles");
            addDoc(collRef, {
                actor: {
                    userEmail: payload.user.email,
                    userName: payload.user.displayName,
                    date: payload.timestamp,
                    image: payload.user.photoURL
                },
                comments:0,
                video: payload.video,
                description: payload.description,
                shareImage: payload.image,
            });
            dispatch(actions.setLoading(false));
        } else {
            const collRef = collection(db, "articles");
            addDoc(collRef, {
                actor: {
                    userEmail: payload.user.email,
                    userName: payload.user.displayName,
                    date: payload.timestamp,
                    image: payload.user.photoURL
                },
                comments:0,
                video: payload.video,
                description: payload.description,
                shareImage: payload.image,
            });
            dispatch(actions.setLoading(false));
        };
    };
};

export function getArticlesAPI() {
    return (dispatch) => {
        let payload;
        const collRef = collection(db, "articles");
        const orderedRef = query(collRef, orderBy('actor.date', "desc"));
        onSnapshot(orderedRef, (snapshot) => {
            payload = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            dispatch(actions.getArticles(payload))
        })
    };
};


