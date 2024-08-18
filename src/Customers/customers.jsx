import { createContext, useState } from "react";

import UserLayout from "./userLayout";
export const CustomerContext=createContext({
  customers:[],
  lastID:0,
  userAdd:()=>null,
  updateUser:()=>null,
  deleteUser:()=>null
});

export default function Customers(){
 
   const [customers,setCustomer]=useState([]); 
   const [lastID,setLastId]=useState(0); 
const userAdd=(data)=>{setCustomer((prevState)=>[...prevState,{
id:data.payload.id,  
name:data.payload.name, 
ordre:data.payload.ordre,  
price:data.payload.price  
}]);
setLastId(prevState=>prevState+1);
window.history.back();
}

const deleteUser=(data)=>{ 
  setCustomer((prevState)=>prevState.filter(customer=>customer.id!==parseInt(data.payload.id)));
window.history.back();
  }
const updateUser=(data)=>{
  const {id,...rest}=data.payload;
  setCustomer((prevState)=>prevState.map(customer=>{
    if(customer.id===id){
return {id:customer.id,...rest}
    }
    return customer;
   }) 
  );
  window.history.back();

  }
  
  
  return<div className="h-screen">
    <CustomerContext.Provider value={{
    customers:customers,
    lastID:lastID,
    userAdd:userAdd,
    updateUser:updateUser,
    deleteUser:deleteUser

    }}>
    <UserLayout/>

    </CustomerContext.Provider>

  </div>  
}
