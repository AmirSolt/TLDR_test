
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




// var http = require('http');
const amazonScraper = require('amazon-buddy');
var fs = require('fs');



function getPrice(result){
    return `${result.price.current_price} ${result.price.currency}`
}

function getCategories(result){
    return result.categories.map((category) => category.category)
}

function getProductSpecifications(result){
    let product_information = result.product_information
    Object.keys(product_information).forEach(
        (key, index) => {
            if(!product_information[key]){
                delete product_information[key]
            }
        });
    return product_information
}

async function getProductInformation(asin){
    const product_by_asin = await amazonScraper.asin({ asin: 'B07PKDKC53' });
    let result = product_by_asin.result[0];
    return {
        "title":result.title,
        "description":result.description,
        "feature_bullets":result.feature_bullets,
        "price":getPrice(result),
        "categories":getCategories(result),
        "product_specifications":getProductSpecifications(result)
    }
}

async function getReviews(asin){
    const reviews = await amazonScraper.reviews({ asin: asin, number: 50 });
    return reviews.result.map((review) => review.review)
}



const scraper =  async () => {
    try {
        console.log("Starting scraping products")

        console.time('main');

        let asin = 'B07PKDKC53'
    
        // const products = await amazonScraper.products({ keyword: 'Bag', number: 50 });
        
        
        let product_information = await getProductInformation(asin)
        let reviews = await getReviews(asin)
        
        console.log(`Found ${reviews.length} reviews`)

        const data = {
            "product_information":product_information,
            "reviews":reviews
        }

        fs.writeFile ("product_data.json", JSON.stringify(data), function(err) {
            if (err) throw err;
            console.log('complete');
            }
        );

        console.timeEnd('main');

    } catch (error) {
        console.log(error);
    }
}