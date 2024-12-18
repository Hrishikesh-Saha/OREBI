import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Product from './Product.jsx'
import Product1 from '/product1.png'
import VerticalProduct from './VerticalProduct.jsx';

// Example items, to simulate fetching from another resources.
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];



const Paginate = ({ itemsPerPage }) => {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {

    const getData = async () => {
    
      const responses = await fetch("https://dummyjson.com/products");
      const data = await responses.json();
      setItems(data.products)
    }

    getData()

  }, [])

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className='flex gap-x-10 flex-wrap gap-y-[50px] mt-[60px]'>
        <Items currentItems={currentItems} />
      </div>

      <div className='flex items-center mt-[50px] justify-between'>
        <ReactPaginate
          breakLabel="..."
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel=""
          previousClassName="page-item hidden"
          pageLinkClassName="page-link text-[14px] font-sans flex w-full h-full justify-center items-center"
          pageClassName="page-item  w-9 h-9 text-[#767676] border-[#F0F0F0] border-2 cursor-pointer"
          containerClassName="pagination flex gap-x-4 "
          activeClassName="active border-0 bg-black text-white"
          renderOnZeroPageCount={null}
          
        />

        <p className='text-[#767676] text-[14px] font-sans leading-[30px]'>Products from {itemOffset + 1} to {endOffset > items.length ? items.length : endOffset} of {items.length}</p>
      </div>
    </>
  );
}

let Items = ({ currentItems }) => {

  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <Product 

          key={index} 
          name={item.title} 
          offerEye={true} 
          offer={item.discountPercentage} 
          price={item.price} 
          brand={item.brand} 
          productImage={item.thumbnail}
          
          />
          // <VerticalProduct key={index} name={'Basic Crew Neck Tee'} offerEye={true} offer={'New'} price={'$44.00'} brand={'Black'} productImage={Product1}/>
        ))}
    </>
  );
}

export default Paginate
