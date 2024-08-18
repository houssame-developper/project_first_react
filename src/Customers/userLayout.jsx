import {BrowserRouter,Link, Route, Routes}  from "react-router-dom"
import AddCustomers from "./AddCustomers"
import EditCustomers from "./EditCustomers"
import TableCustomers from "./tableCustomers"
import DeleteCustomers from "./DeleteCustomers"
export default function UserLayout(){
    return<>
  <BrowserRouter>
  <nav className="w-screen flex gap-6 bg-blue-600">
<span className="text-2xl text-white ml-2 py-2">food perfect</span>
    <ul className="w-screen list-none flex gap-3">
    <li className="text-white hover:bg-blue-400 border text-pretty rounded-lg m-2 font-extrabold cursor-pointer">
    <Link to={'/'} className="text-center  mt-4 px-4 block">List customers</Link>
        </li>
        <li className="text-white hover:bg-blue-400 border  rounded-lg m-2  font-extrabold cursor-pointer">
            <Link to={'/create'} className="text-center  mt-4 px-4 block">Add customer</Link>
        </li>
       
    </ul>
  </nav>
  <Routes>
 <Route index element={<TableCustomers/>}/>
 <Route path="/create" element={<AddCustomers/>}/>
 <Route path="/:id/edit" element={<EditCustomers/>}/>
 <Route path="/:id/delete" element={<DeleteCustomers/>}/>
</Routes>
  </BrowserRouter>
    </>
}