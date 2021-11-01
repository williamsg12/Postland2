const API_URL =
	window.location.hostname === 'localhost'
		? 'http://localhost:8000'
		: 'https://grim-spider-92723.herokuapp.com/messenger/';

export default API_URL;
