import React, { useContext, useEffect, useRef } from "react";
import Base from "../components/Base";
import { useNavigate, useParams } from "react-router-dom";
import userContext from "../context/UserContext";
import { doUpdatePost, loadPost } from "../services/Post_service";
import { useState } from "react";
import { toast } from "react-toastify";
import "../pages/UpdatePost.css";
import { Input, Label, Button, Container } from "reactstrap";
import JoditEditor from "jodit-react";
import { loadAllCategories } from "../services/Category_service";
const UpdatePost = () => {
  const editor = useRef(null);
  const [categories, setCategories] = useState([]);
  const { postIdd } = useParams();
  const object = useContext(userContext);
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  useEffect(() => {
    console.log(post);
     console.log(post?.user?.userId + " " + object?.user?.data?.userId);
    if (post) {
      if (post?.user?.userId !== object?.user?.data?.userId) {
        console.log("heelo");
        toast.error("This is not your post!!");
        navigate("/");
      }
    }
    
  }, []);
  useEffect(() => {
    //load all category
    loadAllCategories()
      .then((data) => {
        // console.log(data);
        setCategories(data);
      })
      .catch((error) => {
        console.log(error);
      });

    //load the post from database
    loadPost(postIdd)
      .then((data) => {
        // console.log(post.categoryId+""+data.category.categoryId);
        // setPost({ ...data, categoryId: data.category.categoryId });
        if (data) {
          // Add null check here
          console.log(data);
          setPost({ ...data, categoryId: data.category.categoryId });
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("error in loading post");
      });
  }, [postIdd]);

  const handleChange = (event, fieldName) => {
    setPost({
      ...post,
      [fieldName]: event.target.value,
    });
  };

  const submitUpdatedPost = (event) => {
    event.preventDefault();
    console.log(post);
    doUpdatePost(
      { ...post, category: { categoryId: post.categoryId } },
      post.postId
    )
      .then((res) => {
        console.log(res);
        toast.success("Post updated");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error in upading post");
      });
  };

  const updatePosted = () => {
    return (
      <div className="main">
        {/* {JSON.stringify(post)} */}
        <section className="container">
          <header>Update your post</header>
          <form onSubmit={submitUpdatedPost} class="form">
            <div className="input-box">
              <Label for="post">Post Title</Label>
              <Input
                type="text"
                id="title"
                placeholder="Enter the title of your post here!!"
                onChange={(event) => handleChange(event, "title")}
                name="title"
                value={post.title}
              />
            </div>
            <div className="input-box">
              <Label for="category">Category</Label>
              <Input
                type="select"
                id="category"
                name="categoryId"
                placeholder="Enter the title of your post here!!"
                onChange={(event) => handleChange(event, "categoryId")}
                defaultValue={0}
                value={post.categoryId}
              >
                <option value={0} disabled selected>
                  --Select Category--
                </option>
                {categories.map((category) => (
                  <option value={category.categoryId} key={category.categoryId}>
                    {category.categoryTitle}
                  </option>
                ))}
              </Input>
            </div>
            {/* file field */}
            <div className="mt-3">
              <Label for="image">Select post image</Label>
              <Input id="image" type="file" onChange={""} accept="images/*" />
            </div>
            <div className="input-box">
              <Label>Post Content</Label>
              {/* <Input
              type="textarea"
              id="content"
              placeholder="Enter the content of your post here!!"
              style={{ height: "250px" }}
            /> */}
              <JoditEditor
                ref={editor}
                value={post.content}
                onChange={(newContent) =>
                  setPost({ ...post, content: newContent })
                }
              />
            </div>
            <Button type="submit">Update post</Button>
          </form>
        </section>
      </div>
    );
  };

  return (
    <Base>
      <Container>
        {/* <h1>{postId}</h1> */}
        {post && updatePosted()}
      </Container>
    </Base>
  );
};

export default UpdatePost;
