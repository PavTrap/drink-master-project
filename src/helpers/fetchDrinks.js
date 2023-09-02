import axios from 'axios';
import setAuthHeader from './axiosHedder';

export const fetchDrinks = async token => {
	try {
		setAuthHeader(token);
		const { data } = await axios.get('/api/recipes/main-page');
		return data;
	} catch (e) {
		console.log(e);
	}
};