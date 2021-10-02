import { graphql } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import HomeContainer from "../components/home/HomeContainer";
import Layout from "../components/Layout";

export default function IndexPage() {
  return (
    <Layout>
      <Helmet>
        <title>Hi, I am Zaw Linn Naing</title>
      </Helmet>
      <HomeContainer />
    </Layout>
  );
}


