
import './App.css';
import Navbar from './components/Navi';
import Greeting from './components/greeting';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <div>
        <Navbar name="Mercredi"/>
        <Greeting name="Aziz" age="24"/>
        <Greeting name="Farah"/>
        <Greeting name="Yasser"> gfgfjhfgjfhjfjfhjfhjg</Greeting>
        <Footer/>       
      </div>
    </div>
  );
}

export default App;
