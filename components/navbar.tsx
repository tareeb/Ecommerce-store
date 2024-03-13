import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = async () => {
  const categories = await getCategories();

  return ( 
    <div className="bg-slate-200">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">

          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">GiftShop</p>
          </Link>

          <MainNav data={categories} />
          
          <div className="ml-auto flex items-center gap-x-4">

            <NavbarActions />

            <SignedIn>
                <UserButton afterSignOutUrl="/" />
            </SignedIn>

            <SignedOut>
                <SignInButton />
            </SignedOut>

          </div>
        </div>
      </Container>
    </div>
  );
};
 
export default Navbar;
