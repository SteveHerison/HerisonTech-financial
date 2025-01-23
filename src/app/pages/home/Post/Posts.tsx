import Publicar from "@/../public/iconsPixels/Shopping-Shipping-Receipt-Slip--Streamline-Pixel.svg";
import Image from "next/image";

const Posts = () => {
  return (
    <div className="flex flex-col gap-y-5 bg-blue-900 p-4 rounded-xl ">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">Post</h2>
        <p>See Datails - </p>
      </div>
      <div className="flex flex-col h-full gap-y-5 md:gap-y-0 md:gap-x-3 md:flex-row">
        <div className="flex items-center w-full h-full p-2 gap-x-3 shadow-md bg-blue-950 rounded-xl">
          <Image src={Publicar} alt="f" width={20} height={20} />
          <div>
            <p>total</p>
            <strong className="text-xl text-yellow-200 xl:text-2xl font-custom">
              $900,00
            </strong>
          </div>
        </div>
        <div className="grid items-center w-full grid-cols-2 gap-4">
          <div className="w-full px-4 border-l-4 border-red-600">
            <span>
              <p>Savings</p>
              <strong className="text-yellow-300 font-custom">$159</strong>
            </span>
          </div>
          <div className="w-full px-4 border-l-4 border-blue-500">
            <span>
              <p>Savings</p>
              <strong className="text-yellow-300 font-custom">$40</strong>
            </span>
          </div>
          <div className="w-full px-4 border-l-4 border-white">
            <span>
              <p>Savings</p>
              <strong className="text-yellow-300 font-custom">$110</strong>
            </span>
          </div>
          <div className="w-full px-4 border-l-4 border-yellow-400">
            <span>
              <p>Savings</p>
              <strong className="text-yellow-300 font-custom">$10</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
