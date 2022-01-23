import axios from 'axios';

export const baseUrl ="https://bayut.p.rapidapi.com";

export const fetchAPI =  async (url)=> {
    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '03d3500397mshb57a9f345614189p1a1816jsn94e738b6de0e'
          }
    });

    return data;
}