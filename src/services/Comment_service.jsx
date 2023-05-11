//import { myAxios } from "./Helper";
import { privateAxios } from "./Helper";
export const createComment = (Comment,postId)=>{
    return privateAxios.post(`/post/${postId}/comments`,Comment)
}