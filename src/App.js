import { Route } from 'react-router';
import './App.css';
import NavBar from './Component/NavBar/NavBar';
import Home from './Component/Home/Home'
import Profile from './Component/Profile/Profile'
import Post from './Component/Posts/Post'
import Settings from './Component/Settings/Settings';

function App() {
  return (
    <div>
     <NavBar />

     <Route path='/' component={Home} />
     <Route path='/profile'component={Profile}/>
     <Route path='/posts' component={Post} />
     <Route path='/setting' component={Settings} />
    </div>
  );
}

export default App;
