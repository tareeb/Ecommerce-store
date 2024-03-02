"use client";

import axios from "axios";

import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";

import { useUser } from "@clerk/nextjs";


const Summary = () => {

  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  const { isSignedIn, user } = useUser();


  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price)
  }, 0);

  const onCheckout = async () => {

    if(!isSignedIn){
      toast.error("Sign in to place order");
      return;
    }

    if(items.length === 0){
      toast.error("No items in cart");
      return;
    }

    if(!user){
      toast.error("User not found");
      return;
    }

    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
      productIds: items.map((item) => item.id),
      userId: user?.id
    });

    console.log(response.data.status);

    if (response.data.status == 500){
      toast.error(response.data.message);
    }

    if(response.data.message === "success"){
      removeAll();
      toast.success("Order placed successfully");
    }
    

  }

  return ( 
    <div
      className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 className="text-lg font-medium text-gray-900">
        Order summary
      </h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
         <Currency value={totalPrice} />
        </div>
      </div>

      <Button onClick={onCheckout} disabled={items.length === 0} className="w-full mt-6">
        Checkout
      </Button>

      

    </div>
  );
}
 
export default Summary;
