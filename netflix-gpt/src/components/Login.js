import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateEmail } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { updateProfile } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { BG_URL } from '../utils/constants'

const Login = () => {

    const [showLoginForm, setShowLoginForm] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const dispatch = useDispatch();

    const toggleLoginForm = () => {
        setShowLoginForm(!showLoginForm);
    }

    const handleButtonClick = () => {
        const message = checkValidateEmail(
            email?.current?.value,
            password?.current?.value
        );

        setErrorMessage(message);
        if (message) return;

        if (!showLoginForm) {
            // SIGN UP
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )

            .then((userCredential) => {
                const user = userCredential.user;

                updateProfile(user , {
                displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/114108923?v=4"
                }).then(() => {
                    const {uid, email, displayName, photoURL} = auth.currentUser;
                    dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                }).catch((error) => {
                    setErrorMessage(error.code + " - " + error.message);
                });

            })
            .catch((error) => {
                setErrorMessage(error.code + " - " + error.message);
            });

        } else {
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
            .then((userCredential) => {
                console.log(userCredential.user);
            })
            .catch((error) => {
                setErrorMessage(error.code + " - " + error.message);
            });
        }
    }

    return (
        <div>
            <Header />
            <div className="absolute w-full h-full z-[-1]">
                <img
                    src={BG_URL}
                    className="default-ltr-iqcdef-cache-19j6xtr"
                    alt=""
                />
            </div>

            <form
                onSubmit={e => e.preventDefault()}
                className="bg-black/75 absolute w-4/12 p-12 my-36 mx-auto z-50 text-white left-0 right-0"
            >
                <h1 className="text-3xl font-bold mb-6 text-center">
                    {showLoginForm ? "Sign In" : "Sign Up"}
                </h1>

                {!showLoginForm && (
                    <input
                        ref={name}
                        type="text"
                        placeholder="Full Name"
                        className="w-full my-2 px-2 py-2 border border-gray-800 bg-gray-900 rounded-sm"
                    />
                )}

                <input
                    ref={email}
                    type="email"
                    placeholder="Email Address"
                    className="w-full my-2 px-2 py-2 border border-gray-800 bg-gray-900 rounded-sm"
                />

                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="w-full my-2 mb-3 px-2 py-2 border border-gray-800 bg-gray-900 rounded-sm"
                />

                <p className="text-red-500 text-sm mb-6">{errorMessage}</p>

                <button
                    className="bg-red-700 rounded-sm py-3 mb-8 w-full"
                    onClick={handleButtonClick}
                >
                    {showLoginForm ? "Sign In" : "Sign Up"}
                </button>

                <p className="cursor-pointer" onClick={toggleLoginForm}>
                    {showLoginForm
                        ? "New to Netflix? Sign up now."
                        : "Already a user? Sign In."}
                </p>
            </form>
        </div>
    )
}

export default Login
