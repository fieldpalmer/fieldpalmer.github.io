import { Routes, Route } from 'react-router-dom';
import Carousel from './components/Carousel';
import Portfolio from './components/Portfolio';
import './app.css';

export default function App() {
   return (
      <main className='App'>
         <section className='container p-sm-2 p-md-5'>
            <Routes>
               <Route path='/' element={<Carousel />} />
               <Route path='/portfolio' element={<Portfolio />} />
            </Routes>
         </section>
      </main>
   );
}
