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
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div style={{ backgroundImage: `url(${data?.imageUrl})` }} className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
      <div className="absolute inset-0 bg-black opacity-20 rounded-xl"></div>

        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-light text-white text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs z-10">
            {data?.label}
            <div className="font-light text-white text-sm ">
              <p>Find Gifts For All Your Loved ones</p>
            </div>
          </div>
        </div>

      </div>
    </div>
   );
};

export default Billboard;
