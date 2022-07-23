import NavBar from './components/NavBar'
// import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import Footer from './components/Footer'
import CarouSel from './components/CarouSel'
import Foundation from './components/Foundation';
import Review from './components/Review'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/Cards';
import About from './components/AboutUs'

function App() {
  return (
    < >
      
        <NavBar />
        {/* <CarouSel />
        <Foundation />
        <Review />
        <Cards /> */}
        <About /> 
        <Footer />
      
    </>
  );
}

export default App;
