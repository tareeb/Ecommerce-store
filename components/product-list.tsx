import ProductCard from "@/components/ui/product-card";
import { Product } from "@/types";
import NoResults from "@/components/ui/no-results";

interface ProductListProps {
  title: string;
  items: Product[];
  maxItems?: number;
}

const ProductList: React.FC<ProductListProps> = ({
  title,
  items,
  maxItems,
}) => {

  const displayedItems = maxItems ? items.slice(0, maxItems) : items;

  return (
    <div className="space-y-4 lg:px-16 sm:p-2">

      <h3 className="font-light text-3xl text-center lg:mb-6 sm:mb-4">{title}</h3>
      
      {items.length === 0 && <NoResults />}
      
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
                                       sm:gap-4 md:gap-6 lg:gap-8 space-y-2">
        {
          displayedItems.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>

    </div>
   );
}
 
export default ProductList;
