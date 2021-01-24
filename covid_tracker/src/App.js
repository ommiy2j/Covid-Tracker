import { useEffect, useState } from 'react';
import './components/FontAwesome'
import './App.css';
import axios from 'axios'
import { Switch,Route } from 'react-router-dom';
import Home from './components/Home';
import Icon from './components/Icon';
import Nav from './components/Nav';
import About from './components/About';
import News from './components/News';



function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get('https://api.rootnet.in/covid19-in/stats/latest');
      console.log(result.data.data.regional)
      setData(result.data.data.summary)
    }
    fetchItems()
  },[setData])
  return (
    <div className="App">
      <Icon />
      <Nav />
      <Switch>
        <Route path='/home' exact component={() => <Home data={ data }/>} />
        <Route path='/news' component={News} />
        <Route path='/about' component={About} />
      </Switch>
    </div>
  );
}

export default App;
