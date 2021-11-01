import { Route } from 'react-router';
import './App.css';
import NavBar from './Component/NavBar/NavBar';
import Home from './Component/Home/Home'
import Profile from './Component/Profile/Profile'
import Post from './Component/Posts/Post'
import Settings from './Component/Settings/Settings';
import Login from './Component/login/Login'

function App() {
  return (
    <div>
     <NavBar />

     <Route exact path='/' component={Home} />
     <Route path='/profile'component={Profile}/>
     <Route path='/posts' component={Post} />
     <Route path='/setting' component={Settings} />
     <Route path='/login' component={Login} />
    </div>
  );
}

export default App;
