import axios from 'axios';
const { token } = JSON.parse(localStorage.getItem('persist:auth'));
const normatizedToken = JSON.parse(token);


axios.defaults.baseURL = "https://drink-master-back-end.onrender.com/";
axios.defaults.headers.common.Authorization = `Bearer ${normatizedToken}`


export const fetchCategory = async () => {
	try {
		const { data } = await axios.get('/api/recipes/category-list');
		return data;
	} catch (e) {
		console.log(e);
	}
};

export const fetchGlasses = async () => {
	try {
		const { data } = await axios.get('/api/glasses');
 
		return data;
	} catch (e) {
		console.log(e);
	}
};

export const fetchIngredients = async () => {
	try {
		const { data } = await axios.get('/api/ingredients/list');
		return data;
	} catch (e) {
		console.log(e);
	}
};


export const fetchRecipes = async () => {
	try {
		const { data } = await axios.get('/api/recipes');
		return data;
	} catch (e) {
		console.log(e);
	}
};


export const addCocktail = async (data) => {
	try {
		const res = await axios.post('/api/own', data);
		return res;
	} catch (e) {
		return(e)
	}
};