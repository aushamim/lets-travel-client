import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Profile from "../../Components/Sidebar/Profile";
import useAuth from "../../Hooks/useAuth";

const Post = () => {
  const { user } = useAuth();
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
              <img
                className="w-full rounded-lg"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                alt=""
              />
            </div>
            <div className="col-span-2 p-2 divide-y divide-dashed">
              <div className="p-2">
                <p className="text-2xl font-medium">Title</p>
                <p className="text-xs text-gray-400">
                  Location &#183; Author &#183; Time
                </p>
              </div>
              <div className="p-2 text-sm">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Molestias voluptas voluptatum rem ex maiores aliquid error
                  quis beatae sequi architecto! Doloribus dolor facilis possimus
                  ipsum eos sit saepe quo expedita!
                </p>
              </div>
              <div className="p-5 grid grid-cols-2">
                <div className="flex items-center justify-center font-semibold">
                  Rating: 5&nbsp;
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
                  Cost: $500
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
