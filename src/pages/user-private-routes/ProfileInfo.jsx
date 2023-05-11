import React, { useContext } from "react";
import Base from "../../components/Base";
import userContext from "../../context/UserContext";

const ProfileInfo = () => {
 
  const user = useContext(userContext)
  return (
    <Base>
    <div>Here came my Profile Info</div>
    <h1>Welcome {user.name}</h1>
    </Base>
      
  );
};

export default ProfileInfo;
