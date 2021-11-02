import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap'
import { useHistory } from 'react-router';

const Home = ({loggedIn,setLoggedIn}) => {
    let history = useHistory()

    function signOut(params) {
			localStorage.removeItem('token');
            setLoggedIn(false)
            history.push('/')
		}   

    return (
        <div className='container'>
            <div className='mt-5 p-5 bg-light'>
                <h1 className='display-4'>Welcome to postland </h1>
                <p className='lead'>A fullstack application that uses react and django</p>
                <hr className='my-4' />
               {!loggedIn ? (<>
               <p>Please Log in</p>
                <Link to='/login' className='btn btn-dark btn-lg' >Login</Link></>):(
                    <>
                    <p>Would you like to sign out </p>
                    <Button onClick={signOut}>Sign Out ?</Button>
                    </>
                )}
            </div>
            
        </div>
    );
};

export default Home;