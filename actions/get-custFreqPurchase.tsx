import { Product } from "@/types";

//These are products recommended to user based on user profile

const URL = `${process.env.NEXT_PUBLIC_Recommendation_API_URL}/cust_freq_purchased`;
const product_URL =`${process.env.NEXT_PUBLIC_API_URL}/products/getlist`;

const getCustFreqPurchase = async (id : string) : Promise<Product[]> => {    
    try{    

        const res = await fetch(`${URL}\?name=${id}`);
        const data = await res.json();

        if (data.error){
            console.error("returning empty " , data.error);
            return [] ;
        }

        const recommended_products = data.products ;

        const requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ products: recommended_products })
        };
        
        const productsdata = await fetch(product_URL , requestOptions);
        
        return productsdata.json();
    }

    catch (error){
        console.error(error);
        return [] ; 
    }

};

export default getCustFreqPurchase;
