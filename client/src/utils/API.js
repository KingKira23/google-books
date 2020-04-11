import axios from "axios";

export default {
    getBooks: function () {
        return axios.get("/api/books");
    },

    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },

    searchBook: function (query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20`);
    }
};
