import { CustomerContext } from "./customers";
import { useContext } from "react";
import TableCustomer from "./tableCustomer";

export default function TableCustomers({customers}){
      const context=useContext(CustomerContext);
return<> 
    <table className="w-screen  [border-spacing:2.75rem]  py-3">
    <thead>
    <tr className="border border-black border-opacity-25 py-3 bg-slate-400 shadow-md  font-extrabold text-white [text-shadow:2px_2px_3px_black]">
    <th className="border  border-black border-opacity-25 w-1/12 py-3">id</th>
          <th className="border  border-black border-opacity-25 w-2/12 py-3 " >Name</th>
          <th className="border  border-black border-opacity-25  w-2/12 py-3">Ordre</th>
          <th className="border  border-black  border-opacity-25 w-1/12 py-3">Price</th>
         <th className="border  border-black border-opacity-25 w-4/12 py-3">Action</th>
   </tr>
    </thead>
   <tbody>
   {context?.customers.length>0?context.customers.map((customer,key)=><TableCustomer key={key} customer={customer}/>):
   <td colSpan={5} className="text-bold text-center text-xl tracking-wider shadow-xl">no items</td>}
   </tbody>
  </table>  
  </>
}