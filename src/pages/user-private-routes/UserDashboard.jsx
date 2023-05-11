import React, { useEffect, useState } from "react";
import Base from "../../components/Base";
import AddPost from "../../components/AddPost";
import { Container } from "reactstrap";
import "../user-private-routes/UserDashboard.css";
import { getCurrentUserDetails } from "../../auth";
import { loadPostUserWise } from "../../services/Post_service";
import { toast } from "react-toastify";
import Post from "../../components/Post";
import { deletePostService } from "../../services/Post_service";
const UserDashboard = () => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    console.log(getCurrentUserDetails());
    setUser(getCurrentUserDetails());
    loadPostData();
  }, []);

  const loadPostData = () => {
    loadPostUserWise(getCurrentUserDetails().userId)
      .then((data) => {
        console.log(data);
        setPosts([...data]);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error in loading user post");
      });
  };

  //function to delete post

  const deletePost = (post) => {
    //going to delete post
    deletePostService(post.postId)
      .then((data) => {
        console.log(data);
        toast.success("Post is Deleted!!");
        // loadPostData();
        let newPosts = posts.filter((p) => p.postId !== post.postId);
        setPosts([...newPosts]);
      })
      .catch((error) => {
        console.log(error);
        toast.error("error in deleteing post!!");
      });
  };

  return (
    <Base>
      <Container className="bg">
        <AddPost />
      </Container>
      <Container>
        {posts.map((post, index) => {
          return <Post post={post} key={index} deletePost={deletePost} />;
        })}
      </Container>
    </Base>
  );
};

export default UserDashboard;
