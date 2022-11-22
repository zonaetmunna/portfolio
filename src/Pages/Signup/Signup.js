import React, { useContext } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/ContextProvider";

const Signup = () => {
  // navigation
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
    <div className="d-flex justify-content-center align-items-center my-5 bg-light">
      <div>
        {error && <Spinner animation="grow" />}
        {!isLoading && (
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className=""
                placeholder=""
                {...register("name", { required: true })}
              />
              <br />
              <input
                className=""
                placeholder="password"
                {...register("email", { required: true })}
              />
              <br />
              <input
                className=""
                placeholder=""
                {...register("password", { required: true })}
              />
              <br />
              <input
                className=""
                placeholder="Re-Passowrd"
                {...register("RePassword", { required: true })}
              />
              <br />
              <Button variant="primary" className="m-2" type="submit">
                Signup
              </Button>{" "}
            </form>
          </div>
        )}
        <div>
          <Link className="" to="/login">
            If you have account? please login{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
