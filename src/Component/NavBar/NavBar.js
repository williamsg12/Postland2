import React from 'react';
import './NavBar.css';
import { Link,useHistory } from 'react-router-dom';
import { Container,Navbar,Nav } from 'react-bootstrap';

const NavBar = ({ loggedin,setLoggedIn }) => {
	let history = useHistory();

	function signOut(event) {
		localStorage.removeItem('token');
		setLoggedIn(false)
		history.push('/');
	}
	return (
		<div className='side-nav'>
			<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
				<Container>
					<Link to='/' className='nav'>
						<h4 className='nav'>PostLand</h4>
					</Link>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='me-auto'>
							<Link to='/' className='nav'>
								<h4 className='nav'>Home</h4>
							</Link>
							<Link to='/posts' className='nav'>
								<h4 className='nav'>Post History</h4>
							</Link>
							<Link to='/post' className='nav'>
								<h4 className='nav'>Post</h4>
							</Link>
						</Nav>
						<Nav>
							<Link to='profile' className='nav'>
								<h4 className='nav'>Profile</h4>
							</Link>
							<Link to='setting' className='nav'>
								<h4 className='nav'>Settings</h4>
							</Link>
							{!loggedin ? (
								<Link to='/login' className='nav'>
									<h4 className='nav'>Sign In</h4>
								</Link>
							) : (
								<Link to='/' className='nav' onClick={signOut}>
									<h4 className='nav'>Sign Out</h4>
								</Link>
							)}
							<Link to='signup' className='nav'>
								<h4 className='nav'>Sign Up</h4>
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavBar;
