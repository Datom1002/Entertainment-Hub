import { BrowserRouter} from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';
import SimpleBottomNavigation from './components/MainNav';
import { Container } from '@mui/system';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';
//import { Route } from '@mui/icons-material';
//import { Switch } from '@mui/material';
import {Route,Routes} from 'react-router-dom';

function App() {
  return(
    <BrowserRouter>
      <Header />
      <div className="app"> 

        <Container>
          <Routes>
            <Route exact path = '/' element={<Trending/>}/>
            <Route path = '/movies' element={<Movies/>}/>
            <Route path = '/series' element={<Series/>}/>
            <Route path = '/search' element={<Search/>}/>
          </Routes>
        </Container>

      </div>

      <SimpleBottomNavigation />
    </BrowserRouter>  
    );
}

export default App;
