import './App.css';
import Nav from '../comp/Nav';
import Taskarea from '../comp/task-area/Taskarea';
import { Routes, Route } from 'react-router-dom';
import Important from '../pages/important/Important';
import Complete from '../pages/complete/Complete.jsx';
import Do_it_now from '../pages/doitnow/Do_it_now';

function App() {
  return (
    <div className='maindiv flex'>
      <Nav />
      <Routes>
        <Route path='/' element={<Taskarea />} />
        <Route path='/important' element={<Important />} />
        <Route path='/complete' element={<Complete />} />
        <Route path='/do-it-now' element={<Do_it_now />} />
      </Routes>
    </div>
  );
}

export default App;
