import React from "react";
import Base from "../components/Base";
import userContext from "../context/UserContext";
const About = () => {
  return (
    <userContext.Consumer>
      {(user) => (
        <div>
          <Base>
            <h1>This is About Page</h1>
            <h1>Welcome user:{user.user && user.user.data.name}</h1>
          </Base>
        </div>
      )}
    </userContext.Consumer>
  );
};

export default About;
