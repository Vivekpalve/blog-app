import React, { useEffect, useState } from "react";
import userContext from "./UserContext";
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    data: {},
    login: false,
  });

  // useEffect(()=>{
  //   setUser({
  //       name:"vivek palve"
  //   })
  // },[])

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
