import './App.css'
import Theme2 from './pages/theme2'
import Buttons from './components/buttons'
import Album from "./components/theme"
import Home from './pages/theme1'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
const App=()=>{
  return(
    <div>


<Router>
      <Routes>
      <Route path="/" element={<Buttons/>}/>

        <Route path="/theme1" element={<Home/>}/>
          <Route path='/theme2' element={<Home />} />
          <Route path="/theme3" element={<Theme2 />} />
 
      </Routes>
    </Router>


    </div>
  )
}
export default App