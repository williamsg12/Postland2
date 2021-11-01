import React from 'react';
import {Button} from 'react-bootstrap'


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
					<Button classname='darkmode'variant='outline-dark'>DarkMode</Button>
					<Button className='font' variant='outline-primary'>FontSize</Button>
				</div>
			</div>
		);
};

export default Settings;