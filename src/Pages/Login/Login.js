import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/ContextProvider";

const Login = () => {
  const { login, error, isLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    login(data.email, data.passord, navigate);
    reset();
  };
  return (
    <div className="d-flex justify-content-center align-items-center my-5 bg-light">
      <div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input label="email" {...register("email")} />
            <br />
            <input label="passowrd" {...register("password")} />
            <br />
            <Button variant="primary" className="m-2" type="submit">
              Signup
            </Button>{" "}
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
