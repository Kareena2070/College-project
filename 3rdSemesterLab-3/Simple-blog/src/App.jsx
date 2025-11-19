import { useState, useEffect } from 'react';
import './App.css';
import PostCard from './components/PostCard';

function App() {
  const [posts, setPosts] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data.slice(0, 10)); 
        setLoading(false);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []); 

  return (
    <div className="app-container">
      <header>
        <h1> Student Blog </h1>
      </header>
      
      <main>
        {loading ? (
          <p>Loading content...</p>
        ) : (
          <div className="post-list">
            {posts.map(post => (
              
              <PostCard key={post.id} title={post.title} body={post.body} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;