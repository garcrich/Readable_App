import fetch from 'cross-fetch'
// Action Types
export const FETCH_CATEGORIES = 'fetch_categories';

const ROOT_URL = 'http://localhost:3001/'
const CATEGORIES = 'categories'

//This is the action creator
export function fetchCategories() {
    const request = fetch(
    `${ROOT_URL}${CATEGORIES}`,
    {
        method: 'GET',
        headers: { 'Authorization': 'super-secure-authorization' }
    })
    .then(res => {
        if (res.status >= 400) {
            throw new Error("Bad response from server");
        }
        return res.json();
    })
    .then(data => {
        return data.categories;
    })
    .catch(err => {
        console.error(err);
    })
    
    return {type: FETCH_CATEGORIES, payload: request}
}