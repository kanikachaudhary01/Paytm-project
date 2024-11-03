import { FaRegUser } from "react-icons/fa";
import Dropdown from "./Dropdown";
import { useState } from "react";

export default function Navbar () {
    const [isOpen, setIsOpen] = useState(false);

    const dropdownHandler = () => {
        setIsOpen((curr) => !curr)
    }
    return (
        <>
            <div className="relative">
                <div className="flex justify-between items-center p-3 bg-blue-700">
                    <div className="font-semibold text-white text-[2rem]">PayU</div>
                    <div className="text-white text-[2rem] mr-4" onClick={dropdownHandler}>
                        <FaRegUser />
                        {isOpen ? <Dropdown/> : ""}
                    </div>
                </div>
            </div>
        </>
    )
}