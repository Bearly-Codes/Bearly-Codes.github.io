import logo from './logo.svg';
import './App.scss';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css"
import Namepage from './Pages/Namepage/Namepage';
import StarBackground from './Pages/Starbackground/Starbackground';
import Aboutme from './Pages/AboutMe/Aboutme';
import Container from 'react-bootstrap/Container';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
import CustomNavbar from './Pages/Navbar/Navbar';

function App() {
  // Todo plan out the containers for everything
  return (
    <div className="App">
      <StarBackground/>
      <Namepage/>
      <Container className="B">
        <Aboutme/>
        <Projects/>
        <Contact/>
        
      </Container>
    </div>
  );
}

export default App;
