import { useContext } from "react";
import { CustomerContext } from "./customers";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function DeleteCustomers(){
    const context=useContext(CustomerContext);
    const param=useParams();

useEffect(()=>{
console.log(context)},[]);
 const  handlerSubmit=(e)=>{
 e.preventDefault();
 context.deleteUser({payload:{
    id:param.id,
}});  

 }; 

return<>
<div className="text-center bg-red-300 text-red-700 border border-red-800 rounded my-4 mx-32 p-8  ">DO you realy want delete customer:</div>
<button className="p-2 text-center w-5/6  mx-auto block border  rounded-3xl bg-red-600  text-white text-extrabold shadow-2xl tracking-widest [text-shadow:2px_2px_1px_black]" 
onClick={handlerSubmit}
>DELETE</button>  
</>
}