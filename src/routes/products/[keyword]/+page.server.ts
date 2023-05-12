




import {searchSchema} from '$lib/schemas/products';
import {getSearchResults} from './sampleData'
// import {getSearchResults} from './amazonScraper'

export const load = async ({params}) => {

    const {keyword} = params;
    
    console.log(keyword)

    // if(!searchSchema.safeParse(keyword).success)
    //     return {status: 400, message: 'Invalid search term', streamed:{products:[]}};

    console.log("[keyword]/+page.server.ts")


    return{
        streamed:{

            products: await getSearchResults(keyword, "US")
        }
    }

};