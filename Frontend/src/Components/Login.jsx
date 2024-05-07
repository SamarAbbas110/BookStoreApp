import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can replace this with your login logic
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </Link>
          <h3 className="font-bold text-lg">Login</h3>
          <div className="mt-4 space-y-2">
            <label>Email</label>
            <br />
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="text-red-500">This field is required</p>}
          </div>
          <div className="mt-4 space-y-2">
            <label>Password</label>
            <br />
            <input
              type="password"
              placeholder="Enter your Password"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("password", { required: true })}
            />
            {errors.password && <p className="text-red-500">This field is required</p>}
          </div>
          <div className="flex justify-around mt-5">
            <button className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-600">
              Login
            </button>
            <p>
              Not Registered?{" "}
              <Link to="/signup" className="underline text-pink-500 hover:text-pink-600 cursor-pointer">
                Sign up Now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default Login;
