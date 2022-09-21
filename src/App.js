import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Navbar, Modal } from './components';
import { Home, Cart } from './pages';
function App() {
  return <main className='bg-gray-50 min-h-screen'>
    <BrowserRouter>
      <Navbar />
      <Modal />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </main>
}

export default App;
