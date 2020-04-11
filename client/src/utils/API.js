import axios from "axios";
const APIKEY = "";

export default {
  search: function(query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${APIKEY}`);
  }
};
