//isLoggedIn=>

export const isLoggedIn = () => {
  let data = localStorage.getItem("data");
  if (data != null) return true;
  else return false;
};

//doLogin=>  data=>set to LocalStorage

export const doLogin = (data,next) => {
  localStorage.setItem("data", JSON.stringify(data));
  next();
};

//doLogout=> remove from logcal storage
export const doLogout = (next) =>{
    localStorage.removeItem("data");
    next();
}

//get currentUser
export const getCurrentUserDetails = () =>{
    if(isLoggedIn()){
        return JSON.parse(localStorage.getItem("data")).user;
    }else{
        return undefined;
    }
}

//for getting token
export const getToken = () =>{
if(isLoggedIn()){
  return JSON.parse(localStorage.getItem("data")).token;
}else{
  return null;
}
}