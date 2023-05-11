import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { loadAllCategories } from "../services/Category_service";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const CategorySideNavbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadAllCategories()
      .then((data) => {
        setCategories([...data]);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error in loading Categories");
      });
  }, []);
  return (
    <div>
      <ListGroup>
        <ListGroupItem className="border-0">All Blogs</ListGroupItem>
        {categories &&
          categories.map((cat, index) => {
            return (
              <ListGroupItem
                tag={Link}
                to={"/categories/" + cat.categoryTitle + "/" + cat.categoryId}
                className="border-0"
                key={index}
                action={true}
              >
                {cat.categoryTitle}
              </ListGroupItem>
            );
          })}
      </ListGroup>
    </div>
  );
};

export default CategorySideNavbar;
