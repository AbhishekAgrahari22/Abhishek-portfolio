import React, { useEffect, useState } from 'react';

const Blogs = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://gql.hashnode.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `{
          user(username: "your-hashnode-username") {
            publication {
              posts(page: 0) {
                title
                brief
                slug
              }
            }
          }
        }`
      })
    })
    .then(res => res.json())
    .then(data => setPosts(data.data.user.publication.posts));
  }, []);

  return (
    <section id="blogs" className="container py-5">
      <h2 className="mb-4">Latest Blog Posts</h2>
      <div className="row">
        {posts.map((post, i) => (
          <div key={i} className="col-md-6 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.brief}</p>
                <a href={`https://your-hashnode-username.hashnode.dev/${post.slug}`} target="_blank" className="btn btn-outline-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;