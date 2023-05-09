export const load = async ({url}) => {
    const kw = url.searchParams.get('kw');
    return{
        kw
    }
};