import React from 'react'
import Header from './Header'

const Login = () => {

    const [showLoginForm, setShowLoginForm] = React.useState(false);

    const togleLoginForm = () => {
        setShowLoginForm(!showLoginForm);
    }

  return (
    <div>
        <Header />
        <div className="absolute w-full h-full z-[-1]">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/4ffe3d37-1fc1-4d93-b61a-1fa58c11ccff/web/PT-en-20251124-TRIFECTA-perspective_6156b547-3c06-43a4-9019-8a1c331cd14c_large.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/4ffe3d37-1fc1-4d93-b61a-1fa58c11ccff/web/PT-en-20251124-TRIFECTA-perspective_6156b547-3c06-43a4-9019-8a1c331cd14c_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/4ffe3d37-1fc1-4d93-b61a-1fa58c11ccff/web/PT-en-20251124-TRIFECTA-perspective_6156b547-3c06-43a4-9019-8a1c331cd14c_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/4ffe3d37-1fc1-4d93-b61a-1fa58c11ccff/web/PT-en-20251124-TRIFECTA-perspective_6156b547-3c06-43a4-9019-8a1c331cd14c_small.jpg 959w" alt="" aria-hidden="true" class="default-ltr-iqcdef-cache-19j6xtr"></img>
        </div>
            <form className="bg-black/75 absolute w-4/12 p-12 my-36 mx-auto z-50 text-white left-0 right-0">
                <h1 className="text-3xl font-bold mb-6 text-center"> {showLoginForm ? "Sign In" : "Sign Up"}</h1>
                <input type="email" placeholder="Email Address"  className="w-full my-2 px-2 py-2 border border-gray-800 bg-gray-900 rounded-sm"/>
                <input type="password" placeholder="Password" className="w-full my-2 mb-3 px-2 py-2 border border-gray-800 bg-gray-900 rounded-sm" />
                <button className="bg-red-700 rounded-sm py-3 mb-8 w-full">GET STARTED</button>
                <p onClick={togleLoginForm} >New to Netflix? Sign up now.</p>
                <p className="text-gray-500 font-extralight pt-7">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
            </form>
    </div>
  )
}

export default Login
