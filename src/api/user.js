import { get } from "@/api/request.js";

const me = () => {
  return get("/users/me");
};

export default {
  me,
};
