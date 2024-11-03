import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Dropdown() {
    const name = localStorage.getItem("name")
    const email = localStorage.getItem("email")

    const navigate =useNavigate()
    const logout =()=>{
        localStorage.removeItem("token")
        localStorage.removeItem("name")
        localStorage.removeItem("email")
        navigate("/login")
    }
    return (
        <>
            <div className="absolute top-[4rem] right-4 h-[10rem] w-[18rem] bg-white text-black shadow-lg z-10 rounded-lg">
                <div className="p-4 border-b font-medium text-[1rem] ">{name}</div>
                <div className="p-4 border-b font-medium text-[1rem]">{email}</div>
                <div className="p-4 font-semibold bg-red-600 text-[1rem] text-white flex items-center gap-5" onClick={logout}>Logout
                    <IoIosLogOut className="text-[1.5rem]" />
                </div>
            </div>
        </>
    );
}
