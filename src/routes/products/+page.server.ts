
const sample = {
    "position": {
        "page": 1,
        "position": 1,
        "global_position": 1
    },
    "asin": "B0B3HMB6YN",
    "price": {
        "discounted": true,
        "current_price": 65.99,
        "currency": "USD",
        "before_price": 69.99,
        "savings_amount": 4,
        "savings_percent": 5.72
    },
    "reviews": {
        "total_reviews": 1112,
        "rating": 4.6
    },
    "url": "https://www.amazon.com/dp/B0B3HMB6YN",
    "score": "5115.20",
    "sponsored": false,
    "amazonChoice": false,
    "bestSeller": false,
    "amazonPrime": false,
    "title": "Call of Duty: Modern Warfare II - Xbox Series X & Xbox One",
    "thumbnail": "https://m.media-amazon.com/images/I/81YeBLA3U4L._AC_UY218_.jpg"
}


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

    return{
        kw,
        products: Array(10).fill(sample)
    }
};