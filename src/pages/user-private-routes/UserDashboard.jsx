import React from "react";
import Base from "../../components/Base";
import AddPost from "../../components/AddPost";
import { Container } from "reactstrap";
import "../user-private-routes/UserDashboard.css";
const UserDashboard = () => {
  return (
    <Base>
      <Container className="bg">
        <AddPost />
      </Container>
    </Base>
  );
};

export default UserDashboard;
