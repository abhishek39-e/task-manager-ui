import './App.css';
import Nav from '../comp/Nav';
import Taskarea from '../comp/task-area/Taskarea';
import { Routes, Route } from 'react-router-dom';
import Important from '../pages/important/Important';
import Complete from '../pages/complete/Complete';

function App() {
  return (
    <div className='maindiv flex'>
      <Nav />

      <Routes>
        <Route path='/' element={<Taskarea />} />
        <Route path='/important' element={<Important />} />
        <Route path='/complete' element={<Complete />} />
      </Routes>
    </div>
  );
}

export default App;
