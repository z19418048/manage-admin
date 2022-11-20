import { post } from "./request";
const create = (usrname, password) => {
  return post("/tokens", { usrname, password });
};

export default {
  create,
};
