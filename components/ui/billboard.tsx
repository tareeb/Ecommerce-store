import { Billboard } from "@/types";

interface BillboardProps {
  data: Billboard;
}

const Billboard: React.FC<BillboardProps> = ({
  data
}) => {
  console
  console.log(data)
  return ( 
    <div className="p-4 sm:p-6 lg:p-8 overflow-hidden bg-slate-200">
      <div style={{ backgroundImage: `url(${data?.imageUrl})` }} className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">

        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div style={{ textShadow: `0px 0px 29px rgba(0,0,0,0.60)` }}      
               className="font-light text-white md:text-3xl sm:text-5xl lg:text-6xl shadow-md
                          sm:max-w-xl max-w-xs z-10" 
                          >
            {data?.label}
            <div className="font-light text-white md:text-1xl sm:text-2xl lg:text-3xl ">
              Find Gifts For All Your Loved ones
            </div>
          </div>
        </div>

      </div>
    </div>
   );
};

export default Billboard;
