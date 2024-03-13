import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

import getMostPopularProducts from "@/actions/get-mostpopular";
import getTopSellerProducts from "@/actions/get-topseller";

import getCustFreqPurchase from "@/actions/get-custFreqPurchase";
import getCustMostPurchase from "@/actions/get-custMostPurchase";
import getCustRecommendations from "@/actions/get-custRecommendations";

import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

import Billboard from "@/components/ui/billboard";
import HeroSection from "@/components/herosection";
import ServiceSection from "@/components/service-section";

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

        <Billboard 
          data={billboard}
        />

        {/* <HeroSection/> */}

        <div className="bg-slate-300">
            <ProductList 
              title="Featured Products" 
              subtitle="New Arrivals in the Store" 
              items={products} />
        </div>

        <ServiceSection />

        <SignedIn>

            <div className=" bg-slate-200">
              <ProductList 
                title="Products You May Like"  
                subtitle="Recommended Products Tailored for You"
                items={custRecommendations} />   
            </div>

            <div className=" bg-slate-300">
              <ProductList 
                title="Your Repeat Favorites" 
                subtitle="Items You Love and Keep Coming Back To"
                items={custFreqPurchase} />
            </div>

            <div className=" bg-slate-200">
              <ProductList 
                title="Your Most Purchased" 
                subtitle="Most Bought Items by You"
                items={custMostPurchase} />
            </div>

        </SignedIn>

        <div className=" bg-slate-300">
          <ProductList 
            title="Most Popular" 
            subtitle="Trending Products in the Store"
            items={MostPopularProducts} />   
        </div>

        <div className=" bg-slate-200">
          <ProductList 
            title="Top Sellers" 
            subtitle="Bestsellers of the Moment Storewide"
            items={TopSellerProducts} />   
        </div>

    </Container>
  )
};

export default HomePage;
