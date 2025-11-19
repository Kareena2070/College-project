import React from 'react';
import './PostCard.css'; 


const PostCard = ({ title, body }) => {
  return (
    <div className="post-card">
      <h2 className="post-title">{title}</h2>
      <p className="post-body">{body}</p>
      <button className="read-btn">Read More</button>
    </div>
  );
};

export default PostCard;