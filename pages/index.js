import { useEffect, useState } from "react";
import Head from "next/head";
import { useProductsStore } from "../store/store";
import { HomeBanners, HomeBlog, HomeExplore, HomeOff, HomePopular } from "../components";
import { Wrapper } from "../components/utils";

const Home = () => {
  const [popularProducts, setPopularProducts] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const productsData = useProductsStore().products;

  useEffect(() => {
    setPopularProducts(productsData.slice(0, 6));
    setBlogPosts(productsData.slice(10, 13));
  }, [productsData]);

  return (
    <>
      <Head>
        <title>H & N Shop</title>
        <meta name="description" content="Shop" />
      </Head>
      <Wrapper>
        <HomeBanners />
        {/* Explore section */}
        <HomeExplore />
        {/* popular products section */}
        <HomePopular popularData={popularProducts} />
        {/* off section */}
        <HomeOff />
        {/* Our Blog */}
        <HomeBlog blogData={blogPosts} />
      </Wrapper>
    </>
  );
};

export default Home;
