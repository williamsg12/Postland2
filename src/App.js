import { Route } from 'react-router';
import './App.css';
import NavBar from './Component/NavBar/NavBar';
import Home from './Component/Home/Home'
import Profile from './Component/Profile/Profile'
import Posts from './Component/Posts/Posts'
import Settings from './Component/Settings/Settings';
import Login from './Component/login/Login'
import Post from './Component/Posts/Post'
import Signup from './Component/login/Signup';

function App() {
  return (
    <div>
     <NavBar />

     <Route exact path='/' component={Home} />
     <Route path='/profile'component={Profile}/>
     <Route path='/post' component={Post} />
     <Route path='/posts' component={Posts} />
     <Route path='/setting' component={Settings} />
     <Route path='/login' component={Login} />
     <Route path='/signup' component={Signup} />
    </div>
  );
}

export default App;
