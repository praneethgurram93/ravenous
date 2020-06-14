import axios from 'axios';
import {apiKey, corsByPassURL} from "../configs/local";

export const search = async (term, location, sortBy) => (
  axios({
    url: `${corsByPassURL}api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
    method: 'get',
    headers: {
      Authorization: `Bearer ${apiKey}`
    }
  }).then(response => response.data)
);
