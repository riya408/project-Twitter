import React from "react";
import Footer from "../../atoms/Footer/footer";
import Following from "../Followings/following";
import rightStyle from "../Right/right.module.css";
import Search from "../Search/search";
import Trending from "../Trend/trending";

const Right = () => {
  return (
    <div className={rightStyle.main}>
    <section className={rightStyle.section}>
      <Search />
      <Trending />
      <Following />
      <Footer />
    </section>
    </div>
  );
};

export default Right;
