import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
// import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import './app.css';

export default function App() {
   return (
      <main className='App'>
         <section className='container'>
            <Routes>
               <Route path='/' element={<Landing />} />
               {/* <Route path='/portfolio' element={<Portfolio />} /> */}
               <Route path='/projects' element={<Projects />} />
               <Route path='/projects/project' element={<ProjectDetail />} />
               <Route path='/contact' element={<Contact />} />
            </Routes>
         </section>
      </main>
   );
}
