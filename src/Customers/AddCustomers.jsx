import { useRef } from "react";
import { useContext } from "react";
import { CustomerContext } from "./customers";
import { useEffect } from "react";

export default function AddCustomers(){
    const context=useContext(CustomerContext)
 const inputName=useRef();
 const inputOrdre=useRef();
 const inputPrice=useRef();
useEffect(()=>{
console.log(context)},[]);
 const  handlerSubmit=(e)=>{
 e.preventDefault();
 context.userAdd({payload:{
    id:context.lastID,
    name:inputName.current.value,
    ordre:inputOrdre.current.value,  
    price:inputPrice.current.value,  
    
   }});  
inputName.current.value="";
inputOrdre.current.value="";
inputPrice.current.value="";
 }; 

return<>
<h1 className="text-3xl shadow-sm text-center">Add customer</h1>
<form className="flex flex-col justify-center w-screen" onSubmit={handlerSubmit}>
<div className="flex justify-center font-extrabold mb-4 ml-3">
  <label htmlFor="id" className="pt-2">id:</label>
  <input type="text" className="p-2 w-4/6 ml-3 border border-white focus:outline-none focus:border-white" readOnly value={context.lastID} /> 
   </div>
<div className="flex justify-center mb-4">
<label htmlFor="name" className="font-bold block">name</label>
<input type="text" ref={inputName} className="p-2  w-4/6 border border-black ml-3 rounded" name="name" id="name" placeholder="Name" />
</div>
<div className="flex justify-center  mb-4">
<label htmlFor="ordre" className="font-bold block ">ordre</label>
  <select name="ordre" ref={inputOrdre} className="p-2 border border-black rounded ml-3 w-4/6" id="ordre">
 <option value="">Select ordre</option>
 <option value="pizza">Pizza</option>
 <option value="tacoes">Tacos</option>
 <option value="hunburger">Hunburger</option>
  </select>
  </div>
  <div className="flex justify-center mb-4">
  <label htmlFor="price"  className="font-bold block">price</label>
<input type="number" ref={inputPrice} className="p-2  w-4/6  border border-black ml-3 rounded" step={0.01} min={0} placeholder="Price" name="price" id="price"/> 
</div>
<div className="flex justify-center mb-4 ml-12">
<button className="p-2 text-center w-5/6  mx-auto block border  rounded-3xl bg-amber-400  text-white text-extrabold shadow-2xl tracking-widest [text-shadow:2px_2px_1px_black]">ADD</button>  
</div>

</form>
</>
}