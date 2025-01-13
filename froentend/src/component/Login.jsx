// import React from 'react'

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate=useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit= (data) =>{
    console.log(data);
    navigate("/")
  } 

  return (
    <div>
    <div className="modal-box mt-64 ml-96 pl-11 ">
  <form onSubmit={handleSubmit(onSubmit)}>
    {/* if there is a button in form, it will close the modal */}
    <Link to="/"  className="btn btn-sm btn-circle btn-ghost absolute right-1 top-2">✕</Link>
  {/* </form> */}
  <h3 className="font-bold text-xl ">Log in</h3>
  <label className="input input-bordered flex items-center gap-2 mt-4">
<input {...register("email", { required: true })} type="email" className="grow" placeholder="Email" />
{errors.email && <span className="text-red-500"> email Required </span>}
</label>


  <label className="input input-bordered flex items-center gap-2 mt-4">

<input {...register("password", { required: true })} type="password" className="grow" placeholder="Password" />
{errors.password && <span className="text-red-500"> password requierd </span>}
</label>


<button  type="submit" className="btn btn-secondary mt-4" >login</button>
</form>
</div>

  </div>
  )
}
