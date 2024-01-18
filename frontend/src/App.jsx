import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Cover from "./components/Cover";
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cover/>}/>
        <Route path="user" element={<UserList/>}/>
        <Route path="add" element={<AddUser/>}/>
        <Route path="user/edit/:id" element={<EditUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;