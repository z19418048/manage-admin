const set = (key, value) => {
  localStorage.setItem(key, value);
};

const get = (key) => {
  return localStorage.getItem(key);
};

export default {
  set,
  get,
};
