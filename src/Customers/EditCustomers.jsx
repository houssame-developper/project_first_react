import { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { CustomerContext } from "./customers";
import { useParams } from "react-router-dom";
export default function EditCustomers(){
 const inputName=useRef();
 const inputOrdre=useRef();
 const inputPrice=useRef();
const context=useContext(CustomerContext);
const param=useParams();
const [currentCustomer,setCurrentCustomer]=useState({}); 

useEffect(()=>{
  const {id}=param;
  const customer=context.customers.filter(customer=>customer.id===parseInt(id));
  if(customer.length>0){
    setCurrentCustomer(...customer);
  }else{
    console.error("customer not found");
  }
   console.log(customer)},[]);

 const  handlerSubmit=(e)=>{
  e.preventDefault();
 context.updateUser({payload:{
    id:parseInt(param.id),
    name:inputName?.current.value,
    ordre:inputOrdre?.current.value,  
    price:inputPrice?.current.value,  
    
   }});  
 }; 

return<>
<h1 className="text-3xl shadow-sm text-center">Edit customer</h1>
<form className="flex flex-col justify-center w-screen" onSubmit={handlerSubmit}>
<div className="flex justify-center font-extrabold mb-4 ml-3">
  <label htmlFor="id" className="pt-2">id:</label>
  <input type="text" className="p-2 w-4/6 ml-3  border border-white" defaultValue={currentCustomer?.id} readOnly  name="id" id="id"/>
  </div>
<div className="flex justify-center mb-4">
<label htmlFor="name" className="font-bold block">name</label>
<input type="text" ref={inputName} defaultValue={currentCustomer?.name} className="p-2  w-4/6 border border-black ml-3 rounded" name="name" id="name" placeholder="Name" />
</div>
<div className="flex justify-center  mb-4">
<label htmlFor="ordre" className="font-bold block ">ordre</label>
  <select name="ordre" ref={inputOrdre} defaultValue={currentCustomer?.ordre} key={currentCustomer?.ordre} className="p-2 border border-black rounded ml-3 w-4/6" id="ordre">
  <option value="">Select ordre</option>
 <option value="pizza">Pizza</option>
 <option value="tacoes">Tacos</option>
 <option value="hunburger">Hunburger</option>
  </select>
  </div>
  <div className="flex justify-center mb-4">
  <label htmlFor="price"  className="font-bold block">price</label>
<input type="number" ref={inputPrice} defaultValue={currentCustomer?.price} className="p-2  w-4/6  border border-black ml-3 rounded" step={0.01} min={0} placeholder="Price" name="price" id="price"/> 
</div>
<div className="flex justify-center mb-4 ml-12">
<button className="p-2 text-center w-5/6  mx-auto block border  rounded-3xl bg-amber-400 hover:bg-amber-200 text-white text-extrabold shadow-2xl tracking-widest [text-shadow:2px_2px_1px_black]">EDIT</button>  
</div>

</form>
</>
}