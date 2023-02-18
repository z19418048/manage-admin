import { post } from "./request.js";
const create = ({ username, password }) => {
  return post("/tokens", { username, password });
};

export default {
  create,
};
