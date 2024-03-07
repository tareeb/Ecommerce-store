import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_Recommendation_API_URL}/topselling`;
const product_URL =`${process.env.NEXT_PUBLIC_API_URL}/products/getlist`;

const getTopSellerProducts = async () : Promise<Product[]> => {    
    try{

        const res = await fetch(URL);
        const data = await res.json();

        if (data.error){
            console.error("returning empty " , data.error);
            return [] ;
        }

        const topsellingproducts = data.products ;

        const requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ products: topsellingproducts })
        };
        
        const topsellingproductsdata = await fetch(product_URL , requestOptions);
        
        return topsellingproductsdata.json();
    }

    catch (error){
        console.error(error);
        return [] ; 
    }

};

export default getTopSellerProducts;
