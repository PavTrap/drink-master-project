import axios from 'axios';
const BASE_URL = 'https://drink-master-back-end.onrender.com';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTg4ZmIyMjQ0Nzc2MjQ3ZmRjOTFmMiIsImlhdCI6MTY5MzIxMzQ3NiwiZXhwIjoxNzI0NzQ5NDc2fQ.9pXsJ0oGndHLljJkph9dB5c_GAvE82inXsGfs8UHmlc'

export const fetchInstance = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Authorization': `Bearer ${TOKEN}`
	},
});


export const fetchCategory = async () => {
	try {
		const { data } = await fetchInstance('/api/recipes/category-list');
		return data;
	} catch (e) {
		console.log(e);
	}
};

export const fetchGlasses = async () => {
	try {
		const { data } = await fetchInstance('/api/glasses');
		return data;
	} catch (e) {
		console.log(e);
	}
};

export const fetchIngredients = async () => {
	try {
		const { data } = await fetchInstance('/api/ingredients/list');
		return data;
	} catch (e) {
		console.log(e);
	}
};


export const fetchRecipes = async () => {
	try {
		const { data } = await fetchInstance('/api/recipes');
		return data;
	} catch (e) {
		console.log(e);
	}
};