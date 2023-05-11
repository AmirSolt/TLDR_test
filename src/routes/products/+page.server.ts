



import {getSearchResults} from './amazonScraper'
import {searchSchema} from '$lib/schemas/products';

export const load = async ({url}) => {
    const kw = url.searchParams.get('kw');

    if(!searchSchema.safeParse({keyword: kw}).success){
        return {
            error: true,
            message: "Invalid keyword",
            products: [],
            kw:'error'
        }
    }

    console.log("====================================")
    console.log("Starting scraping products")

    console.time("Scraping products")

    // let products = await getSearchResults(kw??'', 'US')
    // if(products.status !== 200){
    //     return {
    //         error: true,
    //         message: "Error while getting products",
    //         products: [],
    //         kw:'error'
    //     }
    // }
    // products = await products.json()

    let products = await getSearchResults(kw)

    console.timeEnd("Scraping products")

    return{
        kw,
        products: products
    }
};