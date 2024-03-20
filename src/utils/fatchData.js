import { api } from "../api/api";

const fetchPosts = async ({ queryKey }) => {
  const response = await api.get(
    `/posts?_page=${queryKey[1].page}&_per_page=${queryKey[1].perPage}`
  );
  return response.data;
};
const fetchPost = async ({ queryKey }) => {
  const response = await api.get(`/${queryKey[0]}/${queryKey[1]}`);
  return response.data;
};

export { fetchPosts, fetchPost };
