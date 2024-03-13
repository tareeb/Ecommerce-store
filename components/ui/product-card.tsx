"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

import Currency  from "@/components/ui/currency";
import IconButton  from "@/components/ui/icon-button";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";

interface ProductCard {
  data: Product
}

const ProductCard: React.FC<ProductCard> = ({
  data
}) => {
  const previewModal = usePreviewModal();
  const cart = useCart();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };

  const placeholderURL = "https://res.cloudinary.com/deo0gfshc/image/upload/v1709099534/kqfrigvpdsveynnd78rq.png"
  
  return ( 
    <div onClick={handleClick} className=" bg-gradient-to-b from-blue-200 to-white group overflow-hidden
      cursor-pointer pb-5 rounded-full space-y-4 shadow-slate-600 shadow-md
      transition duration-300 hover:shadow-lg hover:shadow-slate-800 max-w-[200px] max-h-[350px]">

      {/* Image & actions */}
      <div className="aspect-square relative">
        <Image 
          src={data.images?.[0]?.url || placeholderURL} 
          alt={data.name} 
          fill
          className="aspect-square object-cover rounded-md h-90"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton 
              onClick={onPreview} 
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart} 
              icon={<ShoppingCart size={20} className="text-gray-600" />} 
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="text-center space-y-2 p-1">
        <div>
          <p className="font-medium text-lg">{data.name}</p>
          <p className="text-sm text-gray-500">{data.category?.name}</p>
        </div>
        {/* Price & Reiew */}
        <div>
          <Currency value={data?.price} />
        </div>  
      </div>
    </div>
  );
}

export default ProductCard;
