import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Login successfully!"); //react hot toast for Successfull
          document.getElementById("my_modal_3").close();
          setTimeout(() => { //for delay the toast message
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }

        console.log("User data:", res.data.user); //storing password in local storage
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.message); //react hot toast for Error
          setTimeout(() => {}, 2000);
        }
      });
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById("my_modal_3").close()}
          >
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
            {errors.email && (
              <p className="text-red-500">This field is required</p>
            )}
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
            {errors.password && (
              <p className="text-red-500">This field is required</p>
            )}
          </div>
          <div className="flex justify-around mt-5">
            <button className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-600">
              Login
            </button>
            <p>
              Not Registered?{" "}
              <Link
                to="/signup"
                className="underline text-pink-500 hover:text-pink-600 cursor-pointer"
              >
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
