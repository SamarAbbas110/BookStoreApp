import React from "react";
import List from '../../public/list.json'
import Cards from "./Cards";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
     <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-32 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're Delighted to Have you{" "}
            <span className="text-pink-500">Here :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
            aut id sit fugiat iste, inventore distinctio labore nobis voluptatum
            deserunt ducimus maiores modi odit facilis quasi blanditiis
            dignissimos ex nemo qui eius! Ipsam, sapiente debitis provident
            molestias nesciunt exercitationem incidunt esse delectus, culpa
            eaque architecto magnam distinctio, tenetur temporibus quaerat.
          </p>
      
          <Link to={"/"}>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md mt-6 hover:bg-pink-600 duration-300">
            Back
            </button>
          </Link>
        </div>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {
            List.map((item) =>(
                <Cards key={item.id} item={item} />
            ))
        }
      </div>
    </>
  );
}

export default Course;
