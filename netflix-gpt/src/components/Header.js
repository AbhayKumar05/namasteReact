import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const signOutHandle = () => {
    const auth = getAuth();

    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
  }

  return (
    <div className="absolute bg-gradient-to-b from-black to-transparent flex justify-between w-full h-24 top-0 left-0 z-50">
        <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-2b10-79d7-bd01-e93db54ccc2d/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix Logo" className="h-12 ml-4 mt-4 cursor-pointer"/>

        <div className="flex mt-5">
            <img src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" 
              alt="Profile" 
              className="h-8 w-8 rounded-sm cursor-pointer mr-4"/>
            <button onClick={signOutHandle}
                className="rounded-sm text-white h-8 font-semibold cursor-pointer">
                Sign Out
            </button>
        </div>

    </div>
  
  )
}

export default Header
