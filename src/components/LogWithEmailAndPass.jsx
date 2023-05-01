import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "./Provider/Provider";

const LogWithEmailAndPass = () => {
  const { logInEmailAndPass } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    logInEmailAndPass(data.email, data.password);
  };
  const forgotHandler = () => {
    console.log("hallo");
  };
  return (
    <div className="card border w-1/4  mx-auto bg-gray-100 p-10">
      <h1 className="card-title pb-4 text-center mx-auto  font-bold">
        Login your account
      </h1>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)} className="mt-2">
        <label htmlFor="email" className="text-xl  font-semibold">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          {...register("email")}
          placeholder="Enter your email"
          className="form-control w-full outline-none p-3 text-lg ring ring-purple-500 my-3 ring-offset-1 rounded-sm shadow"
        />
        <label htmlFor="password" className="text-xl font-semibold ">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          {...register("password")}
          placeholder="Enter your password"
          className="form-control w-full outline-none p-3 text-lg ring ring-purple-500 my-3 ring-offset-1 rounded-sm shadow"
        />
        <button type="submit" className="btn btn-active w-full">
          Login
        </button>
        <p className="text-center mt-2 text-lg font-semibold">
          Don't Have An Account?{" "}
          <Link to="/register" className="text-red-500">
            Register
          </Link>
          <br />
          <span
            onClick={forgotHandler}
            className="cursor-pointer underline-offset-4 underline decoration-blue-400 decoration-2"
          >
            Forgot passwort
          </span>
        </p>
      </form>
    </div>
  );
};

export default LogWithEmailAndPass;
