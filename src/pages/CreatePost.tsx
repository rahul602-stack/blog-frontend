import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../services/api';
import { useAuth } from '../context/AuthContext';
import './styles/CreatePost.css';

const CreatePost: React.FC = () => {
  const [content, setContent] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user || user.role !== 'WRITER') {
    navigate('/');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createPost(content, user.token);   // ✅ pass both content + token
      navigate('/');
    } catch (err) {
      setError('Post creation failed');
    }
  };

  return (
    <div className="container">
      <h1>Create Post</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit} className="post-form">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your post here..."
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
