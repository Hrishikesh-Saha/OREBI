import React from "react";
import Bredcumbs from "./Layer/Bredcumbs";
import Container from "./Container";

import Button from "./Layer/Button";
import CartProducts from "./CartProducts";
import { useSelector } from "react-redux";

const Cart = () => {

  const cartItems = useSelector(state => state.cart)
  console.log(cartItems);

  return (
    <>
      <Container className={"mt-[124px]"}>
        <Bredcumbs />
      </Container>

      <Container className={"mt-[136px] mb-[54px] w-full"}>
        <div className="top flex justify-between w-full py-8 pl-5 bg-[#F5F5F3] pr-[146px]">
          <div>
            <h6 className="text-[#262626] font-sans leading-[23px] font-bold">
              Product
            </h6>
          </div>
          <div>
            <h6 className="text-[#262626] font-sans leading-[23px] font-bold">
              Price
            </h6>
          </div>
          <div>
            <h6 className="text-[#262626] font-sans leading-[23px] font-bold">
              Quantity
            </h6>
          </div>
          <div>
            <h6 className="text-[#262626] font-sans leading-[23px] font-bold">
              Size
            </h6>
          </div>
          <div>
            <h6 className="text-[#262626] font-sans leading-[23px] font-bold">
              Total
            </h6>
          </div>
        </div>

        {
          cartItems.cart.map((item) => (
            <CartProducts {...item} />
          ))
        }

        <div className="coupon border w-full py-9 px-5 flex justify-between">
          <p className="font-sans font-bold text-[14px] cursor-pointer">
            Apply coupon
          </p>
          <p className="font-sans font-bold text-[14px] cursor-pointer">
            Update cart
          </p>
        </div>

        <div className="cart-details mt-[54px] flex flex-col items-end">
          <h5 className="text-[20px] font-sans font-bold">Cart totals</h5>
          <div className="grid grid-cols-2 grid-rows-2 w-[648px] mt-8 flex-wrap">
            <div className="box border pl-5 py-4">
              <h6 className="font-bold font-sans">Subtotal</h6>
            </div>
            <div className="box border py-4 pl-5">
              <p className="text-[#767676] font-sans">389.99 $</p>
            </div>
            <div className="box border py-4 pl-5">
              <h6 className="font-bold font-sans">Total</h6>
            </div>
            <div className="box border py-4 pl-5">
              <p className="font-sans">389.99 $</p>
            </div>
          </div>
          <Button className={"mt-[30px]"} btnText={"Proceed to Checkout"} />
        </div>
      </Container>
    </>
  );
};

export default Cart;
