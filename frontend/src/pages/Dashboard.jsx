import Card from "../components/Card"
import Dropdown from "../components/Dropdown"
import Navbar from "../components/Navbar"
import Box from "../components/Box"
import CheckBalance from "../components/CheckBalance"
import { useState } from "react"

export default function Dashboard () {
    const [isOpen,setIsOpen]=useState(false)

    const CheckBalanceHandler=()=>{
        setIsOpen((curr)=>!curr)
    }
    return (
        <>
        <div>
            <Navbar />
            this is dashboard
       <Card/>
      <div className="flex justify-center gap-10 ">
      <Box heading={"initiate payment"} color={"bg-green-400"}/>
      <div className="" onClick={CheckBalanceHandler}>
         <Box heading={"check balance"} color={"bg-red-300"} />
         {isOpen ? <CheckBalance /> : ""}
        </div>
      </div>
        </div>
        </>
    )
}