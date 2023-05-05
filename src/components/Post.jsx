import React from "react";
import {  CardText } from "reactstrap";
// import he from "he";
import "../components/Post.css";
import { Link } from "react-router-dom";
const Post = ({ post }) => {
  const MAX_LENGTH = 40;
  const content = post.content.replace(/<[^>]+>/g, "").substring(0, MAX_LENGTH) + " ...";

  return (
    <div className="card-container">
      <div className="box">
        <h3>{post.title}</h3>
        <CardText dangerouslySetInnerHTML={{ __html: content }} />
        <div>
          <Link className="btn btn-secondary" to="/post">Read More</Link>
        </div>
      </div>
      
    </div>
  );
};
export default Post;
