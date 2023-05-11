import { privateAxios } from "./Helper";
import { myAxios } from "./Helper";
//create post function
export const createPost = (postData) => {
  //console.log(postData);
  return privateAxios
    .post(
      `/user/${postData.userId}/category/${postData.categoryId}/posts`,
      postData
    )
    .then((response) => response.data);
};

//get all post
export const loadAllPost = (pageNumber, pageSize) => {
  return myAxios
    .get(
      `/posts?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=addedDate&sortDir=desc`
    )
    .then((response) => response.data);
};

//load single post of given id

export const loadPost = (postId) => {
  return myAxios.get("/posts/" + postId).then((response) => response.data);
};

//upload post photo

export const uploadPostImage = (image, postId) => {
  let formData = new FormData();
  formData.append("image", image);
  return privateAxios
    .post(`/post/image/upload/${postId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data);
};

//get post by categories

export const loadPostCategoryWise = (categoryId) => {
  return privateAxios
    .get(`/category/${categoryId}/posts`)
    .then((response) => response.data);
};

//get post by login user

export const loadPostUserWise = (userId) => {
  return privateAxios
    .get(`/user/${userId}/posts`)
    .then((response) => response.data);
};

//delete post

export const deletePostService = (postId) => {
  return privateAxios
    .delete(`/posts/${postId}`)
    .then((response) => response.data);
};
