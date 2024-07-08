
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import One from './pages/One';
import Two from './pages/Two';
import AddUser from './pages/AddUser';
import UpdateUser from './pages/UpdateUser';
import User from './pages/User';

function App() {
  return (
    <>
     <BrowserRouter>
 <Routes> 
   <Route path='/' element={<One/>}></Route>
  <Route path='/Login' element={<Two/>}></Route>
  <Route path='/user' element={<User/>}></Route>
  <Route path='/add' element={<AddUser/>}></Route>
  <Route path='/update/:id' element={<UpdateUser/>}></Route>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
