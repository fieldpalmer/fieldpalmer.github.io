import Landing from './Landing';
import { LiaChevronDownSolid } from 'react-icons/lia';
import { LiaChevronUpSolid } from 'react-icons/lia';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Portfolio from './Portfolio';
import ProjectDetail from './ProjectDetail';

export default function App() {
   return (
      <div className='App'>
         <div className='Glass-Pane'>
            <span className='navIcon chevronUp'>
               <LiaChevronUpSolid />
            </span>
            <Routes>
               <Route path='/' component={Landing} />
               {/* <Route path='/portfolio' component={Portfolio} /> */}
               {/* <Route path='/portfolio/detail' component={ProjectDetail} /> */}
            </Routes>
            {/* <Landing /> */}
            {/* <Portfolio /> */}
            {/* <ProjectDetail /> */}
            <span className='navIcon chevronDown'>
               <LiaChevronDownSolid />
            </span>
         </div>
      </div>
   );
}
