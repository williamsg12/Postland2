import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { Container,Navbar,Nav } from 'react-bootstrap';

const NavBar = () => {
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
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavBar;
