import axios from 'axios';

export const connectApi = async (API, TOKEN, action = 'GET', body = {}) => {
  const { data } = await axios({
    method: action,
    headers: { 'Authorization': TOKEN },
    url: API,
    data: body
  });

  return data ;
}
