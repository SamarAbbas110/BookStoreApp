import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast"

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/"

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup successfully");  //react hot toast for Successfull
          navigate(from, {replace : true})
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        console.log("User data:", res.data.user); //storing password in local storage
      })
      .catch((err) => {
        if(err.response){
          toast.error(err.response.data.message);  //react hot toast for reject
        }
      });
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="modal-box ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Signup</h3>
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your FullName"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("fullname", { required: true })}
              />
              {errors.fullname && (
                <p className="text-red-500">This field is required</p>
              )}
            </div>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-500">This field is required</p>
              )}
            </div>
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="text-red-500">This field is required</p>
              )}
            </div>
            <div className="flex justify-around mt-5">
              <button className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-600">
                Login
              </button>
              <p to="/">
                Have an Account?
                <span
                  className="underline text-pink-500 hover:text=pink-600 cursor-pointer "
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </span>
                <Login />
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
