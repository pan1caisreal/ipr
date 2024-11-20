import axios from 'axios';

import type { Posts } from '../types';

export const getPosts = async () => {
  const response = await axios.get<Posts[]>(
    'https://jsonplaceholder.typicode.com/posts',
  );

  return response.data;
};
