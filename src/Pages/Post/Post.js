import React from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Profile from "../../Components/Sidebar/Profile";
import useAuth from "../../Hooks/useAuth";

const Post = () => {
  const { user, posts } = useAuth();
  const { id } = useParams();
  const post = posts.filter((x) => x._id === id);

  return (
    <>
      <Header></Header>
      <div className="md:grid grid-cols-5 mt-5">
        <div className="col-span-4 px-5 mt-5">
          <div className="bg-white rounded-lg p-5">
            <Link to="/" className="flex items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-left"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="15 6 9 12 15 18" />
                </svg>
              </div>
              <div className="ml-5 font-medium uppercase">Go Back</div>
            </Link>
          </div>

          <div className="bg-white rounded-lg p-5 mt-5 mb-10 grid grid-cols-3">
            <div className="p-2">
              <img className="w-full rounded-lg" src={post[0].image} alt="" />
            </div>
            <div className="col-span-2 p-2 divide-y divide-dashed">
              <div className="p-2">
                <p className="text-2xl font-medium">{post[0].title}</p>
                <p className="text-xs text-gray-400">
                  {post[0].location} &#183; {post[0].author} &#183; Time
                </p>
              </div>
              <div className="p-2 text-sm">
                <p>{post[0].description}</p>
              </div>
              <div className="p-5 grid grid-cols-2">
                <div className="flex items-center justify-center font-semibold">
                  Rating: {post[0].rating}&nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-star"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#ffbf00"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                  </svg>
                </div>
                <div className="flex items-center justify-center font-semibold">
                  Cost: $<>{post[0].cost}</>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5">{user.email && <Profile></Profile>}</div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Post;
