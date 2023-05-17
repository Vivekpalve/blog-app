import { privateAxios } from "./Helper";
import { myAxios } from "./Helper";
//create post function
export const createPost = async (postData) => {
  //console.log(postData);
  const response = await privateAxios
    .post(
      `/user/${postData.userId}/category/${postData.categoryId}/posts`,
      postData
    );
  return response.data;
};

//get all post
export const loadAllPost = async (pageNumber, pageSize) => {
  const response = await myAxios
    .get(
      `/posts?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=addedDate&sortDir=desc`
    );
  return response.data;
};

//load single post of given id

export const loadPost = async (postId) => {
  const response = await myAxios.get("/posts/" + postId);
  return response.data;
};

//upload post photo

export const uploadPostImage = async (image, postId) => {
  let formData = new FormData();
  formData.append("image", image);
  const response = await privateAxios
    .post(`/post/image/upload/${postId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  return response.data;
};

//get post by categories

export const loadPostCategoryWise = async (categoryId) => {
  const response = await privateAxios
    .get(`/category/${categoryId}/posts`);
  return response.data;
};

//get post by login user

export const loadPostUserWise = async (userId) => {
  const response = await privateAxios
    .get(`/user/${userId}/posts`);
  return response.data;
};

//delete post

export const deletePostService = async (postId) => {
  const response = await privateAxios
    .delete(`/posts/${postId}`);
  return response.data;
};

//update post

export const doUpdatePost = async (post, postId) => {
  console.log(post);
  const response = await privateAxios
    .put(`/posts/${postId}`, post);
  return response.data;
};
