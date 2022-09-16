import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./component/AddUser";
import EditUser from "./component/EditUser";
import NavbarComponents from "./component/NavbarComponents";
import UserList from "./component/UserList";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponents />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
