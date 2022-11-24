import { post } from "./request";
const create = ({ username, password }) => {
  return post("/tokens", { username, password });
};

export default {
  create,
};
