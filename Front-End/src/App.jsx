import {BrowserRouter,Route,Routes} from 'react-router-dom'
//Components
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Create from './Components/Create'
import Body from './Components/Body'
import Update from './Components/Update'

const App = () => {
  return (
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/create' element={<Create/>}></Route>
            <Route path='/' element={<Body/>}></Route>
            <Route path='/update' element={<Update/>}></Route>
          </Routes>
        <Footer/>
      </BrowserRouter>
  )
}

export default App