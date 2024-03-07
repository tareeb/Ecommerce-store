import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

import getMostPopularProducts from "@/actions/get-mostpopular";
import getTopSellerProducts from "@/actions/get-topseller";

import getCustFreqPurchase from "@/actions/get-custFreqPurchase";
import getCustMostPurchase from "@/actions/get-custMostPurchase";
import getCustRecommendations from "@/actions/get-custRecommendations";

import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

import HeroSection from "@/components/herosection";

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
  
  let custRecommendations : Product[] = [];
  let custFreqPurchase : Product[] = [];
  let custMostPurchase : Product[] = [];

  if(userId){
    const customerId = getCustomerId(userId);
    custRecommendations = await getCustRecommendations(customerId);
    custFreqPurchase = await getCustFreqPurchase(customerId);
    custMostPurchase = await getCustMostPurchase(customerId);
  }


  return (
    <Container>
      <div className="space-y-10 pb-10">

        <Billboard 
          data={billboard}
        />

        {/* <HeroSection/> */}

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>

        <SignedIn>

            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
              <ProductList title="Products You May Like" items={custRecommendations} />   
            </div>

            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
              <ProductList title="Frequently Purchased By You" items={custFreqPurchase} />
            </div>

            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
              <ProductList title="Most Purchases By You" items={custMostPurchase} />
            </div>

        </SignedIn>

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Most Popular Products" items={MostPopularProducts} />   
        </div>

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Top Sellers Across the Store" items={TopSellerProducts} />   
        </div>

      </div>
    </Container>
  )
};

export default HomePage;
