import { Routes, Route } from 'react-router-dom';
import Pane from './components/Pane';
import './app.css';

export default function App() {
   return (
      <main className='App'>
         <section className='container px-0'>
            <Routes>
               <Route path='/' element={<Pane />} />
            </Routes>
         </section>
      </main>
   );
}
