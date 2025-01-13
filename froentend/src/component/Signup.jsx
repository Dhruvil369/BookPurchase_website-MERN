import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // This will log form data to the console
    navigate("/login");
  };

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <div className="dark:bg-slate-900 dark:text-white modal-box mt-64 ml-96 pl-11">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Close button */}
          <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-1 top-2">✕</Link>

          <h3 className="font-bold text-xl">Sign up</h3>

           {/* Name Input */}
           <p className="mt-4">UserName</p>
          <label className="input input-bordered flex items-center gap-2 mt-4">
            <br />
            <input
              {...register("text", { required: true })}
              required="true"
              type="text"
              className="grow"
              placeholder="User Name"
            />
            <br />
            {errors.text && <span className="text-red-500">UserName is Required</span>}
          </label>

          {/* Email Input */}
          <p className="mt-4">Email</p>
          <label className="input input-bordered flex items-center gap-2 mt-4">
            <br />
            <input
              {...register("email", { required: true })}
              required="true"
              type="email"
              className="grow"
              placeholder="Email"
            />
            <br />
            {errors.email && <span className="text-red-500">Email Required</span>}
            {/* {if(email.include)}
            {errors.email && <span className="text-red-500">Email is required</span>} */}
            
          </label>

          {/* Password Input */}
          <p className="mt-4">Password</p>
          <label className="input input-bordered flex items-center gap-2 mt-4">
            <input
              {...register("password", { required: true })}
              type="password"
              className="grow"
              placeholder="Password"
            />
            {errors.password && <span className="text-red-500">Password is required</span>}
          </label>

          {/* Submit Button */}
          <div className="flex justify-around mt-6">
            <button type="submit" className="btn btn-secondary">
              Signup
            </button>
          </div>
        </form>

        {/* Redirect to Login */}
        <p className="mt-8">
          Have an account?{" "}
          <button
            className="underline text-blue-500"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}
