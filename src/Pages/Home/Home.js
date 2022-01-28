import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import NewPostBox from "../../Components/NewPost/NewPostBox";
import Pagination from "../../Components/Pagination/Pagination";
import Posts from "../../Components/Posts/Posts";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Home = () => {
  return (
    <>
      <Header></Header>
      <div className="md:grid grid-cols-5">
        <div className="col-span-4">
          <Carousel></Carousel>
          <NewPostBox></NewPostBox>
          <Posts></Posts>
        </div>
        <div>
          <Sidebar></Sidebar>
        </div>
      </div>
      {/* <Pagination></Pagination> */}
      <Footer></Footer>
    </>
  );
};

export default Home;
