import axios from "axios"

import { useEffect ,useState} from "react"


export default function CheckBalance(){
    const [balance,setBalance]=useState()
    useEffect(()=>{
           async function fetchBalance() {
            try {
                const response=await axios.get("http://localhost:5000/api/transaction/balance" ,{
                    headers:{
                        "Content-Type":"application/json",
                        "Authorization":"Bearer "+ localStorage.getItem("token")
                    }
                })
                console.log (response.data)
                setBalance(response.data.account)
            } catch (error) {
                
            }
           }
           fetchBalance()
    },[])
    return(
        <>
        <div className="h-[10rem] w-[10rem] bg-white absolute top-[30rem]">
            {balance}
        </div>
        </>
    )
}