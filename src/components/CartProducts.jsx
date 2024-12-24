import React, { useState } from "react";
import { Image } from "antd";
import { IoClose } from "react-icons/io5";
import Select from "./Layer/Select";

const CartProducts = ({ name, price, productImage}) => {
  let [count, setCount] = useState(1);
  return (
    <>
      <div className="bottom flex items-center w-full py-[30px] pl-5 border">
        <div className="flex items-center gap-10">
          <p className="cursor-pointer">
            <IoClose />
          </p>

          <Image
            src={productImage}
            width={100}
            height={100}
            className="object-cover"
          />

          <h6 className="text-[#262626] font-sans w-20 leading-[23px] font-bold">
            {name}
          </h6>
        </div>

        <div className="ml-[55px]">
          <h5 className="text-[#262626] font-sans text-[20px] font-bold">
            ${price}
          </h5>
        </div>

        <div className="ml-[265px] flex px-5 items-center border gap-x-[38px] py-1 text-[#767676] font-sans leading-[30px]">
          <p
            className="cursor-pointer"
            onClick={() => setCount(count > 1 ? (count -= 1) : count)}
          >
            -
          </p>
          <p> {count} </p>
          <p className="cursor-pointer" onClick={() => setCount((count += 1))}>
            +
          </p>
        </div>

        <Select className={"ml-[225px]"} />

        <div className="ml-[190px]">
          <h5 className="text-[#262626] font-sans text-[20px] font-bold">
            ${(count * price).toFixed(2)}
          </h5>
        </div>
      </div>
    </>
  );
};

export default CartProducts;
