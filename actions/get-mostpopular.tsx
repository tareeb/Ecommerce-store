import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_Recommendation_API_URL}/mostpopular`;
const product_URL =`${process.env.NEXT_PUBLIC_API_URL}/products/getlist`;

const getMostPopularProducts = async () : Promise<Product[]> => {    
    try{

        const res = await fetch(URL);
        const data = await res.json();

        if (data.error){
            console.error("returning empty " , data.error);
            return [] ;
        }

        const mostPopularProducts = data.products ;

        const requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ products: mostPopularProducts })
        };
        
        const mostPopularProductsdata = await fetch(product_URL , requestOptions);
        
        return mostPopularProductsdata.json();
    }

    catch (error){
        console.error(error);
        return [] ; 
    }

};

export default getMostPopularProducts;
