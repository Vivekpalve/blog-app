import { myAxios } from "./Helper";

export const signUp = async (user) => {
  const response = await myAxios.post("/auth/register", user);
  return response.data;
};

export const loginUser = async (loginDetail) => {
  const response = await myAxios.post("/auth/login", loginDetail);
  return response.data;
};

export const getUser = async (userId) => {
  const response = await myAxios.get(`/users/${userId}`);
  return response.data;
};
