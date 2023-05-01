import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "./Provider/Provider";

const Register = () => {
  const { emailAndPass } = useContext(AuthContext);
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => {
    const { name, password, email } = data;
    emailAndPass(email, password,name);
  };
  return (
    <div className="card border w-1/4  mx-auto bg-gray-100 p-10">
      <h1 className="card-title pb-4 text-center mx-auto  font-bold">
        Login your account
      </h1>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name" className="text-xl font-semibold">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          {...register("name")}
          required
          placeholder="Enter your name"
          className="form-control w-full outline-none p-3 text-lg ring ring-purple-500 my-3 ring-offset-1 rounded-sm shadow"
        />
        <label htmlFor="email" className="text-xl font-semibold">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          {...register("email")}
          required
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
          min="6"
          max="12"
          required
          placeholder="Enter your password"
          className="form-control w-full outline-none p-3 text-lg ring ring-purple-500 my-3 ring-offset-1 rounded-sm shadow"
        />
        <button type="submit" className="btn btn-active w-full">
          Register
        </button>
        <p className="text-center mt-2 text-lg font-semibold">
          All Ready Have An Account?{" "}
          <Link to="/login" className="text-red-500">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
