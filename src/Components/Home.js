import axios from "../axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import { useStateValue } from "../StateProvider";
import Navbar from "./Navbar";

function Home() {
  const [products, setProducts] = useState("");
  
  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get("/products/get");
      setProducts(data);
    };
    fetchdata();
  }, []);

  

  return (
    <Container>
      <Navbar />
      <Banner>
        <img src="./banner.jpg" alt="" />
        <img src="./mobile_banner.jpg" alt="" />
      </Banner>

      <Main>
        <Card 
          id={1}
          image={"https://m.media-amazon.com/images/I/81w1BbNiwAL._AC_UY327_FMwebp_QL65_.jpg"}
          title={"Apple Watch Series 9 [GPS 45mm]"}
          price={39999}
           rating={4}
        />
        <Card 
          id={2}
          image={"	https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_AA360_.jpg"}
          title={"Apple iPhone 14 (128) - Blue"}
          price={62999}
           rating={4}
        />
        <Card 
          id={3}
          image={"https://m.media-amazon.com/images/I/61VfL-aiToL._AC_UY327_FMwebp_QL65_.jpg"}
          title={"Samsung Galaxy S23 Ultra 5G (Green, 12GB, 256GB Storage)"}
          price={124999}
           rating={4}
        />
        <Card 
          id={4}
          image={"https://m.media-amazon.com/images/I/71qjUzUt+ML._AC_UY327_FMwebp_QL65_.jpg"}
          title={"OnePlus 11R 5G (Sonic Black, 16GB RAM, 256GB Storage)"}
          price={44999}
           rating={5}
        />
        <Card 
          id={5}
          image={"https://m.media-amazon.com/images/I/61amb0CfMGL._AC_UY327_FMwebp_QL65_.jpg"}
          title={"OnePlus 11 5G (Eternal Green, 16GB RAM, 256GB Storage)"}
          price={61999}
           rating={4}
        />
        <Card 
          id={6}
          image={"https://images-eu.ssl-images-amazon.com/images/I/619f09kK7tL._AC_UL320_SR320,320_.jpg"}
          title={"Apple iPhone 14 (128 GB) - Purple"}
          price={81990}
           rating={5}
        />

      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  background-color: rgb(234, 237, 237);
  max-width: 1400px;
  margin: auto;
  height: fit-content;
`;

const Banner = styled.div`
  width: 100%;
  img {
    width: 100%;
    -webkit-mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 2),
      rgba(0, 0, 0, 0.95),
      rgba(0, 0, 0, 0.85),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.55),
      rgba(0, 0, 0, 0)
    );

    &:nth-child(2) {
      display: none;
    }

    @media only screen and (max-width: 767px) {
      &:nth-child(1) {
        display: none;
      }

      &:nth-child(2) {
        display: block;
        -webkit-mask-image: none;
      }
    }
  }
`;

const Main = styled.div`
  display: grid;
  justify-content: center;
  place-items: center;
  width: 100%;

  grid-auto-rows: 420px;
  grid-template-columns: repeat(4, 280px);
  grid-gap: 20px;

  /* Mobile */
  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 50%);
    grid-gap: 0;
  }

  /* Tablets */

  @media only screen and (min-width: 767px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 30%);
  }

  @media only screen and (min-width: 767px) {
    margin-top: -130px;
    padding: 10px 0px;
  }
`;
export default Home;
