import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email")} />
            <br />
            <input {...register("password")} />
            <br />
            <input type="submit" />
            <br />
          </form>
        </div>
        <div>
          <Link to="/signup">If you have don't account? please signup </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
