import React, { useEffect, useState } from "react";
import Base from "../components/Base";
import { useParams } from "react-router-dom";
import CategorySideNavbar from "../components/CategorySideNavbar";
import "../pages/Categories.css";
import { loadPostCategoryWise } from "../services/Post_service";
import { toast } from "react-toastify";
import Post from "../components/Post";
import { deletePostService } from "../services/Post_service";
const Categories = () => {
  const [posts, setPosts] = useState([]);
  const { categoryId, categoryTitle } = useParams();

  useEffect(() => {
    console.log(categoryId, categoryTitle);
    loadPostCategoryWise(categoryId)
      .then((data) => {
        setPosts([...data]);
      })
      .catch((error) => {
        console.log(error);
        toast.error("error in loading post");
      });
  }, [categoryId]);

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
      <div>Category</div>
      <div>
        {posts &&
          posts.map((post, index) => {
            return <Post deletePost={deletePost} key={index} post={post} />;
          })}
        {posts.length <= 0 ? <h1>No post in this category</h1> : ""}
      </div>
      <div>
        <div class="extra-card-containerss">
          <div class="cardss square-cardss">
            <h4>
              <CategorySideNavbar />
            </h4>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Categories;
