import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostsById } from "../../services/api";

const UserPosts = () => {
  const params = useParams();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPostsById(params.userId).then((data) => setPosts(data));
  }, [params.userId]);
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserPosts;
