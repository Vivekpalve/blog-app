import React, { useContext, useState } from "react";
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
import { toast } from "react-toastify";
import { loginUser } from "../../services/User_service";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  const [loginDetail, setLoginDetail] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setLoginDetail({
      ...loginDetail,
      [field]: actualValue,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(loginDetail);
    if (
      loginDetail.username.trim() === "" &&
      loginDetail.password.trim() === ""
    ) {
      toast.error("UserName and Password is Required");
      return;
    } else if (loginDetail.username.trim() === "") {
      toast.error("UserName is Required");
      return;
    } else if (loginDetail.password.trim() === "") {
      toast.error("password is Required");
      return;
    }

    //submit the data to server to generate  token
    loginUser(loginDetail)
      .then((jwtTokenData) => {
        console.log("uesr login: ");
        console.log(jwtTokenData);
        toast.success("User sign-in sucessfully !!");
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 400 || error.response.status === 404) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong on server !!");
        }
      });
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <BoxContainer>
        <FormContainer>
          <Input
            type="email"
            id="email"
            value={loginDetail.username}
            placeholder="Email"
            onChange={(e) => handleChange(e, "username")}
          />
          <Input
            type="password"
            id="email"
            value={loginDetail.password}
            placeholder="Password"
            onChange={(e) => handleChange(e, "password")}
          />
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <MutedLink href="#">Forget your password?</MutedLink>
        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton type="submit">Signin</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#">
          Don't have an accoun?{" "}
          <BoldLink href="#" onClick={switchToSignup}>
            Signup
          </BoldLink>
        </MutedLink>
      </BoxContainer>
    </form>
  );
}
