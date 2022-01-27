import React from "react";
import useAuth from "../../Hooks/useAuth";
import NewPostPrompt from "../NewPost/NewPostPrompt";
import Profile from "./Profile";
import "./Sidebar.css";
import TopPlaces from "./TopPlaces";

const Sidebar = () => {
  const { user } = useAuth();
  return (
    <div className="sidebar p-5 sticky">
      <div className="sidebar-text hidden md:flex text-gray-600 justify-center flex-col">
        <p className="font-medium text-5xl mb-3">Let's Travel</p>
        <p className="font-medium text-3xl">
          Around the world. And tell the tale.
        </p>
      </div>
      {user.email && (
        <>
          <Profile></Profile>
          <NewPostPrompt></NewPostPrompt>
        </>
      )}
      <TopPlaces></TopPlaces>
    </div>
  );
};

export default Sidebar;
