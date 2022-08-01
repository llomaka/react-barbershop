import axios from 'axios';

axios.defaults.baseURL = 'https://7b20ae47-eab5-4eb0-8239-4bc52da2623a.mock.pstmn.io/price';

// export const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

export default async function getPriceList() {
  const { data } = await axios();
  return data;
}
