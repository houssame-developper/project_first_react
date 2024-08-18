import { Link } from "react-router-dom";

 export default function TableCustomer({customer}){
    return<>

   <tr className="border border-black border-opacity-25 shadow-md bg-zinc-100 font-bold ">
    <th className="border  border-black border-opacity-25  p py-3" >{customer?.id}</th>
        <td className="border border-black border-opacity-25 py-3 pl-1">{customer?.name}</td>
        <td className="border border-black border-opacity-25 py-3 pl-1 text-center">{customer?.ordre}</td>
        <td className="border border-black border-opacity-25 py-3 pl-1 text-center">{customer?.price}DH</td>
       <td className="border border-black border-opacity-25 py-3 pl-1">
         <Link to={`/${customer?.id}/edit`} className="m-3 px-7 py-2 border border-orange-500 rounded bg-orange-600 text-white hover:bg-orange-300">Edit</Link>
          <Link to={`/${customer?.id}/delete`} className="m-3 px-7 py-2 border border-red-500 rounded bg-red-600 text-white hover:bg-red-300">delete</Link>
         </td>
 </tr>
    </>
 }