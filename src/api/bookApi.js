import axiosClient from "./axiosClient";

const booksApi = {
  getAll: () => {
    const url = "books/api/books";
    return axiosClient.get(url);
  },
  findBook: (params) => {
    const url = "books/find";
    return axiosClient.get(url, { params });
  },
};

export default booksApi;
