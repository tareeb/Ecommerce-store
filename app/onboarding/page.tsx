import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";
import Link from "next/link";
import axios from "axios"

import { Roles } from "@/types";


export default function OnBoardingPage()
  {

    const { userId } = auth();

    if (!userId) {
        redirect('/sign-in');
    }

    const setRole = async () => {

        try {
            const data = {
                userrole: Roles.Buyer ,
                userId: userId
            }
            //await axios.post('/api/user/role', data);
            await axios.post(`${process.env.Admin_URL}/api/user/role`, data);

            console.log('Role set');
        }
        catch (error: any) {
            console.log(error);
        }
    }

    
    setRole();

    return (
        <div className="border-4 border-slate-900 rounded-md flex flex-col p-10">
            <h1>Welcome to Ecommerece Store</h1>
            <h1>You have signned up as a <b>Seller</b></h1>

            <div className="flex flex-col items-center justify-center gap-3">
                <h1>Lets get started</h1>
                <Link href="/" className="block w-full bg-blue-600 border-3 border-slate-900 mt-6 text-white rounded-lg py-3 text-center">Continue</Link>
                
            </div>

        </div>
    );
}
