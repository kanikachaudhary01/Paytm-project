import React,{useState} from "react"

const Signup=()=>{
    const [name,setName]=useState()
    const [mail,setMail]=useState()
    const [password,setPassword]=useState()
    function SignupHandler(){console.log(name,mail,password)}
    return(
        <div >
           <div className="h-screen w-screen  flex " >
            <div className="w-[50%] bg-blue-700 flex flex-col justify-center items-center ">
                <div className="text-white text-[3rem] ">PayU</div>
                <div className="text-white text-[1.5rem]">Secure and seamless payments</div>
            </div>
            <div className=" w-[50%]  flex flex-col justify-center items-center" >
                <div className="text-blue-700 text-[3rem] my-2">Signup</div>
                <div className="flex flex-col my-3">
                    <label htmlFor="name">Name</label>
                    <input className=" border rounded-lg border-black px-4 py-2 w-[20rem]" type="text" placeholder="enter the name" onChange={(e)=>setName(e.target.value)}  />
                </div>

                <div className="flex flex-col my-3">
                    <label htmlFor="name">E-mail</label>
                    <input className=" border rounded-lg border-black px-4 py-2 w-[20rem]" type="text" placeholder="enter the e-mail" onChange={(e)=>setMail(e.target.value)} />
                </div>

                <div className="flex flex-col my-3">
                    <label htmlFor="name">Password</label>
                    <input className=" border rounded-lg border-black px-4 py-2 w-[20rem]" type="text" placeholder="enter the password" onChange={function(e){setPassword(e.target.value)}} />
                </div>
                <div className="text-blue-700 underline flex justify-end ">
                    <a>Already have an account ?</a>
                </div>
                <div className="my-3">
                    <button className="bg-blue-700 text-white w-[20rem] rounded-lg py-4 text-[1.2rem] font-semibold  " onClick={SignupHandler}>Signup</button>
                </div>
            </div>
           </div>
        </div>
    )
}
export default Signup