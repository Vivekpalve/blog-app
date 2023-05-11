import React from "react";
import Base from "../components/Base";
import "../pages/Home.css";
import NewFeed from "../components/NewFeed";
import { Link } from "react-router-dom";
import CategorySideNavbar from "../components/CategorySideNavbar";
// import { Container } from "reactstrap";
const Home = () => {
  return (
    <Base>
      <div className="mt-5">
        <NewFeed />
      </div>
      <div class="extra-card-container">
        <div class="card square-card">
          <h4>
            Unlock the power of mindfulness in your writing: Blog About it now!
          </h4>
          <Link className="btt" to="/signup">
            Click here
          </Link>
        </div>
      </div>
      <div class="extra-card-containers">
        <div class="cards square-cards">
          <h4>
           <CategorySideNavbar/>
          </h4>
        </div>
      </div>
    </Base>
  );
};

export default Home;
