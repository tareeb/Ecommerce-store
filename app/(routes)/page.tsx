import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

import getMostPopularProducts from "@/actions/get-mostpopular";
import getTopSellerProducts from "@/actions/get-topseller";
import getProductsBasedonUser from "@/actions/get-recommendedProducts";

import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

import { auth } from "@clerk/nextjs";

import { SignedIn , SignedOut} from "@clerk/nextjs";
import getCustomerId from "@/actions/get-customerid";
import { Product } from "@/types";


export const revalidate = 0;

const HomePage = async () => {

  const { userId } = auth();

  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("00e4810e-1d15-48cb-9037-cd423f3b9603");

  const MostPopularProducts = await getMostPopularProducts();
  const TopSellerProducts = await getTopSellerProducts();
  
  let recommendedProducts : Product[] = [];
  if(userId){
    const customerId = getCustomerId(userId);
    recommendedProducts = await getProductsBasedonUser(customerId);
  }


  return (
    <Container>
      <div className="space-y-10 pb-10">

        <Billboard 
          data={billboard}
        />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>

        <SignedIn>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Products For You" items={recommendedProducts.slice(0,8)} />   
        </div>
        </SignedIn>

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Most Popular Products" items={MostPopularProducts.slice(0,8)} />   
        </div>

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Top Selling Products" items={TopSellerProducts.slice(0,8)} />   
        </div>

      </div>
    </Container>
  )
};

export default HomePage;
