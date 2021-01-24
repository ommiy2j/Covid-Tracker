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
import Loading from './components/Loading';



function App() {
  const [data, setData] = useState([]);
  const [isLoading, setloading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get('https://api.rootnet.in/covid19-in/stats/latest');
      console.log(result.data.data.regional)
      setData(result.data.data.summary)
      setloading(false)
    }
    fetchItems()
  },[setData])
  return (
    isLoading ? (
      <Loading />
    ):
      (
        <div className="App">
          <Icon />
          <Nav />
          <Switch>
            <Route path='/home' exact component={() => <Home data={ data }/>} />
            <Route path='/news' component={News} />
            <Route path='/about' component={About} />
          </Switch>
        </div>
   
      )
    
  );
}

export default App;
