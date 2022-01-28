import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Post.css";

const Posts = () => {
  const { posts } = useAuth();

  return (
    <div className="block md:grid grid-cols-4 p-6">
      {/* Repeat Start */}
      {posts.length === 0 ? (
        <>
          <div className="flex items-center justify-center">
            <div
              class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-amber-600"
              role="status"
            >
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </>
      ) : (
        <>
          {posts.map((post) => (
            <Link
              key={post._id}
              to={`/post/${post._id}`}
              className="post p-2 relative cursor-pointer"
            >
              <img
                className="block object-cover object-center w-full h-full rounded-lg transition duration-500"
                src={post.image}
                alt=""
              />
              <div className="post-text-box absolute invisible bottom-8 left-8">
                <p className="post-text font-bold text-2xl">{post.title}</p>
                <p className="post-text font-bold">{post.location}</p>
              </div>
            </Link>
          ))}
        </>
      )}
      {/* Repeat End */}
    </div>
  );
};

export default Posts;
