import React from "react";

function Cards({ item }) {
  if (!item) {
    return null; 
  }

  return (
    <>
    <div className="mt-5 my-10 p-3">
      <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white border">
        <figure>
          <img src={item.image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">₹{item.price}</div>
            <div className="badge badge-outline hover:bg-pink-500 hover:text-white hover:p-3 cursor-pointer">Buy Now</div>
            </div>
         </div>
          </div>
        </div>
    </>
  );
}

export default Cards;
