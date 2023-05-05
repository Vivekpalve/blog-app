import { privateAxios } from "./Helper";
import { myAxios } from "./Helper";
//create post function
export const createPost = (postData) => {
  //console.log(postData);
  return privateAxios
    .post(`/user/${postData.userId}/category/${postData.categoryId}/posts`, postData)
    .then((response) => response.data);
};



export const loadAllPost = (pageNumber,pageSize) =>{
    return myAxios.get(`/posts?pageNumber=${pageNumber}&pageSize=${pageSize}`).then(response=>response.data)
}