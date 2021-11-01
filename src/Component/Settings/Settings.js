import React from 'react';
import {Button} from 'react-bootstrap'
import {Form} from 'react-bootstrap'

const Settings = () => {

    const toggleDarkMode=()=>{
       
        
    }
    
    const toggleFont=()=>{
        
    }



    return (
			<div>
				<div className='card'>
					<h2>Settings</h2>
				</div>
				<div>
					<Button classname='darkmode' variant='outline-dark'>
						DarkMode
					</Button>
					<Button className='font' variant='outline-primary'>
						FontSize
					</Button>
				</div>
				<Form.Label htmlFor='exampleColorInput'>
					<h2>
					Background color</h2></Form.Label>
				<Form.Control
					type='color'
					id='exampleColorInput'
					defaultValue='#563d7c'
					title='Choose your color'
				/>
			</div>
		);
};

export default Settings;