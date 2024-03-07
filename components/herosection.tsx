import Image from "next/image";

const HeroSection = () => {
    return (
      <div className="flex items-center justify-center">
        {/* Text Section */}
        <div className="text-center">
          <h1 className="text-3xl font-light text-black">
            Gifts for Everyone
          </h1>
        </div>
  
        {/* Image Section */}
        <div className="w-42 h-42 relative">
        <Image 
          src="/../public/gift.webp" 
          alt="A gift shop for Everyone"
          className="aspect-square object-cover rounded-md "
        />
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  