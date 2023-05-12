


export async function getSearchResults(keyword:string, countryCode:string){

    return fetch(`https://amazon23.p.rapidapi.com/product-search?query=${keyword}&country=${countryCode}`, {
        "method": "GET",
        "headers": {
            'X-RapidAPI-Key': 'fedf2331camshe69ca68156e1816p10c161jsnf8a87b5d3489',
            'X-RapidAPI-Host': 'amazon23.p.rapidapi.com'
          },
        })
        
}