import React, { useEffect, useState } from "react";
import Base from "../components/Base";
import { Link, useParams } from "react-router-dom";
import "../pages/PostPage.css";
import { loadPost } from "../services/Post_service";
import { toast } from "react-toastify";
import { Button, Card, CardBody, CardText, Input } from "reactstrap";
import { BASE_URL } from "../services/Helper";
import { createComment } from "../services/Comment_service";
import { isLoggedIn } from "../auth";
const PostPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setcomment] = useState({
    content: "",
  });
  useEffect(() => {
    //load all thing of postId
    loadPost(postId)
      .then((data) => {
        console.log(data);
        setPost(data);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong while loading post");
      });
  }, []);

  const printDate = (numbers) => {
    return new Date(numbers).toString().substring(4, 15);
  };

  const submitComment = () => {
    if (!isLoggedIn) {
      toast.error("Please login or signup first for comment!!");
      return;
    }
    if (comment.content.trim() === "") {
      toast.error("Comment can not be empty");
      return;
    }
    createComment(comment, post.postId)
      .then((data) => {
        console.log(data);
        toast.success("Comment Added!!");
        setPost({
          ...post,
          comments: [...post.comments, data.data],
        });
        setcomment({
          content: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Base>
      <Link to={"/"}>Home</Link>
      {/* <Container className="mt-4"> */}
      <div className="card-containers">
        <div className="cards">
          <Card className="mt-3">
            {post && (
              <CardBody>
                <CardText>
                  <h3>{post.title}</h3>
                </CardText>
                <CardText className="mt-3">
                  By <b>{post.user.name}</b> on{" "}
                  <b>{printDate(post.addedDate)}</b>
                </CardText>
                <div className="divder"></div>
                <div className="image-container mt-3">
                  <img
                    className="img-fluid"
                    src={BASE_URL + "/post/image/" + post.imageName}
                    alt=""
                  />
                </div>
                <CardText
                  className="mt-5"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                ></CardText>
              </CardBody>
            )}
          </Card>
          <div className="comments card card-containers">
            <div>
              <Input
                type="text"
                placeholder="Add a comment"
                value={comment.comment}
                onChange={(event) =>
                  setcomment({ content: event.target.value })
                }
              />
              <Button
                onClick={submitComment}
                className="mt-2 btn btn-secondary"
              >
                Add comment
              </Button>
            </div>

            <h3 className="mt-4">
              ({post ? post.comments.length : 0})Comments
            </h3>
            {post &&
              post.comments.map((c, index) => (
                <Card key={index}>
                  <CardBody>
                    <CardText className="con">{c.content}</CardText>
                  </CardBody>
                </Card>
              ))}
          </div>
        </div>
      </div>

      {/* </Container> */}
    </Base>
  );
};

export default PostPage;
