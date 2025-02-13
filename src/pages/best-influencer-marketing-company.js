import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedPostsData } from "@library/posts";
import { getSortedProjectsData } from "@library/projects";
import { getSortedServicesData } from "@library/services";
import { getSortedTeamData } from "@library/team";

import Services3Section from "@components/sections/Services3";
import Services5Section from "../components/sections/Service5";
import Team2Section from "@components/sections/Team2"
import PricingSection from "@components/sections/Pricing"
import CallToAction2Section from "@components/sections/CallToAction2"
import PartnersSection from "@components/sections/Partners"
import HistorySlider1 from "../components/sliders/History1";

const Hero3Slider = dynamic( () => import("@components/sliders/Hero3"), { ssr: false } );
const Testimonial2Slider = dynamic( () => import("@components/sliders/Testimonial2"), { ssr: false } );
const HistorySlider = dynamic( () => import("@components/sliders/History"), { ssr: false } );
const LatestPostsSlider = dynamic( () => import("@components/sliders/LatestPosts"), { ssr: false } );

const Home3 = (props) => {
  return (
    <Layouts darkHeader>
      <>
        {/* <Hero3Slider projects={props.projects} /> */}
        <Services5Section services={props.services} />
        <HistorySlider1 />
        {/* <PricingSection /> */}
        <LatestPostsSlider posts={props.posts} />
        <CallToAction2Section />
        <PartnersSection />
      </>
    </Layouts>
  );
};
export default Home3;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();
  const allServices = getSortedServicesData();
  const allProjects = getSortedProjectsData();
  const allTeam = getSortedTeamData();

  return {
    props: {
      posts: allPosts,
      projects: allProjects,
      services: allServices,
      team: allTeam
    }
  }
}