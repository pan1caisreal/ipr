import { useEffect, useState } from 'react';
import { Button, CircularProgress, Typography } from '@mui/material';

import type { Posts, Status } from './types';
import { getPosts } from './api';
import { Wrapper } from './styles';

export const FetchPosts = () => {
  const [posts, setPosts] = useState<Posts[] | null>(null);
  const [status, setStatus] = useState<Status | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetch = async () => {
    setStatus('loading');
    setError(null);

    try {
      const data = await getPosts();

      setPosts(data);
      setStatus('success');
    } catch (err) {
      setError('Не удалось загрузить данные');
      setStatus('error');
    }
  };

  useEffect(() => {
    fetch().then();
  }, []);

  if (status === 'loading') {
    return (
      <Wrapper>
        <CircularProgress />
        <Typography>Загрузка данных...</Typography>
      </Wrapper>
    );
  }

  if (status === 'error') {
    return (
      <Wrapper>
        <Typography color="error">{error}</Typography>
        <Button variant="contained" onClick={fetch}>
          Повторить
        </Button>
      </Wrapper>
    );
  }

  if (status === 'success' && posts) {
    return (
      <div style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Посты
        </Typography>
        {posts.map((post) => (
          <div key={post.id} style={{ marginBottom: '15px' }}>
            <Typography variant="h6">{post.title}</Typography>
            <Typography>{post.body}</Typography>
          </div>
        ))}
      </div>
    );
  }

  return null;
};
