




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