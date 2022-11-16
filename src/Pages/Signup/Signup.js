import React, { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/ContextProvider";

const Signup = () => {
  const navigate = useNavigate();
  const { error, isLoading, signup } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    if (data.password === !data.repassword) {
      return false;
    }
    signup(data.email, data.password, data.name, navigate);
  };
  return (
    <div>
      {error && <Spinner animation="grow" />}
      {!isLoading && (
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input className="" {...register("name")} />
            <br />
            <input className="" {...register("email")} />
            <br />
            <input className="" {...register("password")} />
            <br />
            <input className="" {...register("RePassword")} />
            <br />
            <input className="" type="submit" />
            <br />
          </form>
        </div>
      )}
      <div>
        <Link className="" to="/login">
          If you have account? please login{" "}
        </Link>
      </div>
    </div>
  );
};

export default Signup;
