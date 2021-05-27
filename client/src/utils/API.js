import axios from "axios";

export default {
  login: function(userData){
    return axios.post("/api/user/login", userData);
  },
  logout: function(){
    return axios.get("/api/user/logout");
  },
  signup: function(userData){
    return axios.post("/api/user/signup", userData);
  },
  getUser: function(){
    return axios.get("/api/user/data");
  }
};