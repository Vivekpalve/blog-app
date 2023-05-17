import React from "react";
import Base from "../components/Base";
import "../pages/Home.css";
import NewFeed from "../components/NewFeed";
import { Link } from "react-router-dom";
import CategorySideNavbar from "../components/CategorySideNavbar";
import { isLoggedIn } from "../auth";
import { Button } from "reactstrap";
// import { Container } from "reactstrap";
const Home = () => {
  return (
    <Base>
      <div className="mm">
        <NewFeed />
      </div>
      {isLoggedIn && <div class="extra-card-containers">
        <div class="cardd square-card">
          <h4>
            Unlock the power of mindfulness in your writing: Blog About it now!
          </h4>
          <Button className="bttn" to="/signup">
            Click here
          </Button>
        </div>
      </div>}
      <div class="extra-card-containers">
        <div class="cards square-cards">
          <h4>
            <CategorySideNavbar />
          </h4>
        </div>
      </div>
    </Base>
  );
};

export default Home;
