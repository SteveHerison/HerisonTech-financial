import Publicar from "@/../public/iconsPixels/Shopping-Shipping-Receipt-Slip--Streamline-Pixel.svg";
import Image from "next/image";
import { data } from "@/data/data";
import Link from "next/link";

const Posts = () => {
  const limit = 4;
  return (
    <div className="flex flex-col gap-y-5 bg-blue-900 p-4 rounded-xl ">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">Post</h2>
        <Link className="" href="/publicar">
          <p>See Datails - </p>
        </Link>
      </div>
      <div className="flex flex-col h-full gap-y-5 md:gap-y-0 md:gap-x-3 md:flex-row">
        <div className="flex items-center w-full h-full p-2 gap-x-3 shadow-md bg-blue-950 rounded-xl">
          <Image src={Publicar} alt="f" width={20} height={20} />
          <div>
            <p>total</p>
            <strong className="text-xl text-yellow-200 xl:text-2xl font-custom font-jetBrains">
              $900,00
            </strong>
          </div>
        </div>

        <ul className="grid items-center w-full grid-cols-2 gap-4">
          {data.pots.slice(0, limit).map((item, index) => (
            <li key={index}>
              <div
                className="w-full px-2 border-l-4"
                style={{ borderLeftColor: item.theme }}
              >
                <span>
                  <p>{item.name}</p>
                  <strong className="text-yellow-300 font-jetBrains text-sm md:">
                    {item.total.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </strong>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Posts;
