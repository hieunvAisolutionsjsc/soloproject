import logo from './logo.svg';
import './App.css';
import icon from "./img/earth-globe_icon-icons.com_70179.png" ; 
 
import data from "./data"
import Card from './components/Card/index';
function App() {
  return (
    <div className="App">
      <div className='top'>
<img src={icon} alt="" />
     <p>my travel journal.</p>
      </div>
      <div className='listcard'>
    {
      data.map((item , index)=>{
        return <Card 
        key ={index}
        {...item}

        />
      })
    }
    </div>
    </div>
  );
}

export default App;
