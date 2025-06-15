import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllPosts, createComment } from '../services/api';
import { Post } from '../types';
import { useAuth } from '../context/AuthContext';
import './styles/PostDetail.css';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const fetchedPost = await getAllPosts();
        const singlePost = fetchedPost.find((p: Post) => p.id === Number(id));
        setPost(singlePost ?? null);
      } catch (err) {
        setError('Failed to fetch post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <h1>Post Detail</h1>
      <p>{post?.content}</p>
    </div>
  );
};

export default PostDetail;
