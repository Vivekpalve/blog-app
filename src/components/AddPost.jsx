import React, { useEffect, useRef, useState } from "react";
import { Input, Label, Button } from "reactstrap";
import "../components/AddPost.css";
import { loadAllCategories } from "../services/Category_service";
import JoditEditor from "jodit-react";
import { toast } from "react-toastify";
import { createPost as doCreatePost } from "../services/Post_service";
import { getCurrentUserDetails } from "../auth";
// import getCurrentUser
const AddPost = () => {
  const editor = useRef(null);
  // const [content, setcontent] = useState("");
  const [categories, setCategories] = useState([]);
  const [user, setUser] = useState(undefined);
  const [post, setPost] = useState({
    title: "",
    content: "",
    categoryId: "",
  });

  useEffect(() => {
    setUser(getCurrentUserDetails());
    loadAllCategories()
      .then((data) => {
        console.log(data);
        setCategories(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const fieldChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const contentfieldChanged = (data) => {
    setPost({ ...post, content: data });
  };

  //create post function
  const createPost = (event) => {
    event.preventDefault();
    console.log(post);
    if (post.title.trim() === "") {
      toast.error("title is required!!");
      return;
    }
    if (post.content.trim() === "") {
      toast.error("content is required!!");
      return;
    }
    if (post.categoryId === "") {
      toast.error("select some category is required!!");
      return;
    }

    ////submit the form on server
    post["userId"] = user.userId;
    doCreatePost(post)
      .then((data) => {
        toast.success("Post created!!");
        // console.log(post);
        setPost({
          title: "",
          content: "",
          categoryId: "",
        });
      })
      .catch((error) => {
        toast.error("Something Went Wrong!!");
        // console.log(error);
      });
  };

  return (
    <div className="main">
      <section className="container">
        <header>Create your post</header>
        <form onSubmit={createPost} class="form">
          <div className="input-box">
            <Label for="post">Post Title</Label>
            <Input
              type="text"
              id="title"
              placeholder="Enter the title of your post here!!"
              onChange={fieldChange}
              name="title"
            />
          </div>
          <div className="input-box">
            <Label for="category">Category</Label>
            <Input
              type="select"
              id="category"
              name="categoryId"
              placeholder="Enter the title of your post here!!"
              onChange={fieldChange}
              defaultValue={0}
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
              onChange={contentfieldChanged}
            />
          </div>
          <Button type="submit">Create post</Button>
        </form>
      </section>
    </div>
  );
};

export default AddPost;
