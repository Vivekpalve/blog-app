import React, { useContext, useState } from "react";
import { signUp } from "../../services/User_service";
import { toast } from "react-toastify";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  //handle data
  const handleChange = (event, property) => {
    //dynamic changing value
    setData({ ...data, [property]: event.target.value });
  };

  //submitting the form
  const submitForm = (event) => {
    event.preventDefault();
    //data validation

    // if(error.isError){
    //   toast.error("Enter the valid data");
    //   setError({
    //     ...error,isError:false})
    //   return;
    // }
    if (
      data.name.trim() === "" &&
      data.email.trim() === "" &&
      data.password.trim() === "" &&
      data.about.trim() === ""
    ) {
      toast.success("All fields are required !!");
      return;
    } 
    if (data.name.trim() === "") {
      toast.success("UserName is required !!");
      return;
    }
    if (data.email.trim() === "") {
      toast.success("Email is required !!");
      return;
    }
    if (data.password.trim() === "") {
      toast.success("Password is required !!");
      return;
    }
    if (data.about.trim() === "") {
      toast.success("About is required !!");
      return;
    }

    //call server api for sending data
    signUp(data)
      .then((resp) => {
        console.log(resp);
        console.log("sucess log");
        toast.success("User sign-up sucessfully !!");
        setData({
          name: "",
          email: "",
          password: "",
          about: "",
        });
      })
      .catch((error) => {
        console.log(error);
        console.log("error log");
        //handling all the error in proper way
        toast.error("Enter the valid data");
        setError({
          errors: error,
          setError: true,
        });
      });
  };

  return (
    <form onSubmit={(e) => submitForm(e)}>
      <BoxContainer>
        <FormContainer>
          <Input
            type="text"
            id="name"
            placeholder="Enter Name"
            onChange={(e) => handleChange(e, "name")}
            value={data.name}
            invalid={error.errors?.response?.data?.name ? true : false}
          />
          <Input
            type="email"
            id="email"
            placeholder="Enter Email"
            onChange={(e) => handleChange(e, "email")}
            value={data.email}
          />
          <Input
            type="password"
            id="password"
            placeholder="Enter Password"
            onChange={(e) => handleChange(e, "password")}
            value={data.password}
          />
          <Input
            type="textarea"
            id="about"
            placeholder="Enter About You"
            onChange={(e) => handleChange(e, "about")}
            value={data.about}
          />
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <SubmitButton type="submit">Signup</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink>
          Already have an account?
          <BoldLink href="" onClick={switchToSignin}>
            Sign in
          </BoldLink>
        </MutedLink>
      </BoxContainer>
    </form>
  );
}
