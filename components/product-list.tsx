import ProductCard from "@/components/ui/product-card";
import { Product } from "@/types";
import NoResults from "@/components/ui/no-results";
import StyledHeading from "./ui/styledHeading";

interface ProductListProps {
  title: string;
  subtitle:string;
  items: Product[];
  maxItems?: number;
}

const ProductList: React.FC<ProductListProps> = ({
  title,
  subtitle,
  items,
  maxItems,
}) => {

  const displayedItems = maxItems ? items.slice(0, maxItems) : items;

  return (
    <div className="flex flex-col gap-y-8 p-6 sm:p-8 lg:p-10 pb-6">

      <div className="space-y-4 lg:px-16 sm:p-2">

        <div className="font-satisfy text-3xl text-center">
          <StyledHeading text={title} />
          <div className="font-light text-lg lg:mb-8 sm:mb-6">
              {subtitle}
              {/* <StyledHeading text={subtitle} /> */}
          </div>
        </div>

        
        
        {items.length === 0 && <NoResults />}
        
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
                                        sm:gap-4 md:gap-6 lg:gap-8 space-y-2">
          {
            displayedItems.map((item) => (
              <ProductCard key={item.id} data={item} />
              ))}
        </div>

      </div>

    </div>
   );
}
 
export default ProductList;
