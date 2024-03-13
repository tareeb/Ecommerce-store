import Image from 'next/image'


interface ServiceCardProps {
  title: string;
  details: string;
  src: string;
}



const featuresdata =  [
    {
      name: "Free Delivery",
      description: "Hassle-free delivery with no additional shipping charges." , 
      imgsrc : "/shipping.png"
    },
    {
      name: "Money Back Guarantee",
      description: "Shop with confidence as we offer money-back guarantee.",
      imgsrc : "/moneyback.png"
    },
    {
      name: "Premium Quality",
      description: "Experience excellence with our premium quality products.",
      imgsrc : "/premium.png"
    },
    {
      name: "24/7 Customer Support",
      description: "Get assistance anytime, anywhere to all your queries.",
      imgsrc : "/support.png"
    }
]




const ServiceSection = () => {
  return (
    <section className="lg:p-10 md:p-8 p-6 bg-slate-500">

      <div className="container mx-auto">

        {/* <div className="-mx-4 flex flex-wrap">
          
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-5">
              <h2 className="mb-3 text-xl font-bold leading-[1.2] text-white sm:text-xl md:text-lg">
                What We Offer
              </h2>
            </div>
          </div>
        </div> */}

        <div className="flex flex-wrap">

        {
          featuresdata.map((feature) => (
            <ServiceCard 
              key={feature.name}
              src={feature.imgsrc}
              title={feature.name}
              details={feature.description}
            />
          ))
        } 

        </div>
      </div>
    </section>
  );
};

export default ServiceSection;




const ServiceCard : React.FC<ServiceCardProps> = ({ src , title, details }) => {
  return (
      <div className="w-full md:w-1/2 lg:w-1/4 mb-9 lg:mb-0 border-r-2 border-slate-700 bg-slate-300 p-7 shadow-2 hover:shadow-lg">

          <div className="w-full mb-4 flex items-center justify-center">
            <Image
                src={src}
                width={50}
                height={50}
                alt=""
              />
          </div>
          <h4 className="mb-2 text-lg text-slate-900 font-semibold text text-center ">
            {title}
          </h4>
          <p className="text-slate-800 text-center">{details}</p>
      </div>
  );
};
