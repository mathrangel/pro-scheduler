import axios from '../axios/index'

export function getTest() {
  return axios
    .get('/')
    .then((res) => res.data)
    .catch((err) => err)
}
