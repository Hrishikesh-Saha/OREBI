import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineRefresh } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/CartSlice";

const Li = ({ name, icon, onclick }) => {
  return (
    <li
      onClick={onclick}
      className="flex justify-end gap-x-2 items-center cursor-pointer"
    >
      <p className="transition-all duration-300 font-sans md:text-base text-[10px] font-bold text-black md:text-[#767676] hover:text-black">
        {name}
      </p>
      {icon}
    </li>
  );
};

const Product = ({ name, price, productImage, brand, offer, className }) => {
  const dispatch = useDispatch();

  let offerEye;

  if (offer != undefined) {
    offerEye = true;
  } else {
    offerEye = false;
  }

  let [OfferEye, setOfferEye] = useState(offerEye);

  return (
    <div className={`md:w-[370px] w-[147px] relative ${className}`}>
      <div className="image w-full h-[207px] md:h-[370px] relative group cursor-pointer">
        <img
          className="aspect-[3/2] w-full h-full object-contain mix-blend-color-burn"
          src={productImage}
          alt="missing"
        />

        <div className="overlay md:opacity-0 visible md:invisible md:group-hover:visible group-hover:opacity-100 transition-all duration-300  w-full absolute px-3 py-2 md:px-7 md:py-6 bottom-0 right-0 bg-white bg-opacity-40">
          <ul className="flex flex-col gap-2 md:gap-5">
            <Li name={"Add to Wish List"} icon={<FaHeart />} />
            <Li name={"Compare"} icon={<HiOutlineRefresh />} />
            <Li
              name={"Add to Cart"}
              icon={<FaShoppingCart />}
              onclick={() =>
                dispatch(addToCart({ name, price, productImage}))
              }
            />
          </ul>
        </div>
      </div>

      <div
        className={`offer absolute left-2 top-2 md:left-5 md:top-5 bg-[#262626] py-1 px-3 md:py-2 md:px-8 ${
          OfferEye ? "visible" : "invisible"
        }`}
      >
        <p className="text-white font-bold text-[12px] md:text-[14px] font-sans">
          {offer}%
        </p>
      </div>
      <div className="text w-full flex justify-between mt-6">
        <p className="font-sans md:text-[20px] text-[14px] font-bold">{name}</p>
        <p className="font-sans md:text-[16px] text-[10px] leading-[30px] text-[#767676]">
          ${price}
        </p>
      </div>
      <p className="md:mt-4 mt-1 text-[#767676] text-[10px] md:text-[16px] leading-[30px] font-sans">
        {brand}
      </p>
    </div>
  );
};

export default Product;
