import { Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import './app.css';
import ContentCarousel from './components/ContentCarousel';

export default function App() {
   return (
      <main className='App'>
         <section className='container p-sm-2 p-md-5'>
            <Routes>
               <Route path='/' element={<ContentCarousel />} />
               <Route path='/portfolio' element={<Portfolio />} />
            </Routes>
         </section>
      </main>
   );
}
