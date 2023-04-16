import axios from 'axios';

const fdcKey = process.env.REACT_APP_FDC_KEY;

const search = async (query) => axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${fdcKey}&query=${query}&pageSize=5&pageNumber=1`);

export default search;