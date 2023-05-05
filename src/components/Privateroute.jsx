import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "../auth";

const Privateroute = () => {
//   const loggedIn = false;
//   if (isLoggedIn()) {
//     return <Outlet />;
//   } else {
//     return <Navigate to={"/signup"} />;
//   }

return isLoggedIn() ? <Outlet/> : <Navigate to={"/signup"} />;

  //   return (
  //     <>
  //     <div> This is Private route</div>
  //     <Outlet />
  //     </>
  //   )
};

export default Privateroute;
