

const PostsList = ({ posts, title }) => {
  return (
    <div className="post-list">
      {posts.map(post => (
        <div className="post-preview" key={post.id} >
          <a href={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
            <p>Written by {post.author}</p>
          </a>
        </div>
      ))}
    </div>
  );
}

export default PostsList;