import Button from 'react-bootstrap/Button';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import PostUser from './components/postUser/PostUser';
import UpdateUser from './components/updateUser/UpdateUser';
import NoMatch from './components/noMatch/NoMatch';
import Header from './components/header/Header'

function App() {
  return (
    <>
     <Header></Header>
    <Routes>
      <Route path='/' element={<Dashboard/>}></Route>
      <Route path='/user' element={<PostUser/>}></Route>
      <Route path='/user/:id' element={<UpdateUser/>}></Route>
      <Route path='*' element={<NoMatch/>}></Route>
    </Routes>
    </>
  );
}

export default App;
