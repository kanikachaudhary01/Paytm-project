function Box ({heading,color}){
return(
    <>
    <div className={`${color} w-[10rem] h-[15rem] rounded-lg flex justify-center items-center  font-semibold text-white`}>
        <div>{heading}</div>
    </div>
    </>
)
}
export default Box