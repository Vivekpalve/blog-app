import React, { useContext, useEffect, useState } from "react";
import { CardText, Button } from "reactstrap";
// import he from "he";
import "../components/Post.css";
import { Link } from "react-router-dom";
import { getCurrentUserDetails, isLoggedIn } from "../auth";
import userContext from "../context/UserContext";
const Post = ({ post, deletePost }) => {
  const userContextData = useContext(userContext);
  const MAX_LENGTH = 40;
  const content =
    post.content.replace(/<[^>]+>/g, "").substring(0, MAX_LENGTH) + " ...";

  const printDate = (numbers) => {
    return new Date(numbers).toString().substring(4, 15);
  };

  const [user, setUser] = useState({});
  const [login, setLogin] = useState(null);

  useEffect(() => {
    // console.log(user.category.categoryTitle);
    setUser(getCurrentUserDetails());
    setLogin(isLoggedIn());
  }, []);
  return (
    <div className="card-container">
      <div className="box">
        <h3>{post.title}</h3>
        <CardText>
          <b>By {post.user.name}</b> on <b>{printDate(post.addedDate)}</b>
        </CardText>
        <CardText dangerouslySetInnerHTML={{ __html: content }} />
        <div>
          <Link className="btn btn-secondary" to={"/posts/" + post.postId}>
            Read More
          </Link>
          {userContextData.user.login ? (
            user && user.userId === post.user.userId ? (
              <Button
                onClick={(event) => deletePost(post)}
                color="danger"
                className="ms-2"
              >
                Delete
              </Button>
            ) : (
              ""
            )
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
export default Post;
