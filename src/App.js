import { Routes,Route } from 'react-router-dom';
import './App.css';
import { Footer,Navbar } from './components';
import './fonts/Nexa-Bold.otf'
import './fonts/Nexa-Light.otf'
import './fonts/nexa-black.otf'
import './fonts/nexaregular.otf'
import { Home } from './pages';

function App() {
  return (
    <div className="">
      {/* <Navbar/> */}
   <Routes>
    <Route exact path='/' element={<Home/>}>

    </Route>
   </Routes>
    <Footer/>
    </div>
  );
}

export default App;
