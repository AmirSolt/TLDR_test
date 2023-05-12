
import { RAPIDAPI_KEY } from '$env/static/private'


export async function getSearchResults(keyword:string, countryCode:string){

    return fetch(`https://amazon23.p.rapidapi.com/product-search?query=${keyword}&country=${countryCode}`, {
        "method": "GET",
        "headers": {
            'X-RapidAPI-Key': RAPIDAPI_KEY,
            'X-RapidAPI-Host': 'amazon23.p.rapidapi.com'
          },
        })
        
}