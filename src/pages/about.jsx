import { useEffect } from "react";
import dynamic from "next/dynamic";
import Layouts from "@layouts/Layouts";

import { getSortedTeamData } from "@library/team";
import { getSortedServicesData } from "@library/services";

import CountUp from 'react-countup';
import { circleText } from "@common/utilits";

import PageBanner from "@components/PageBanner";
import Team2Section from "@components/sections/Team2"
import PartnersSection from "@components/sections/Partners"
import AwardsSection from "@components/sections/Awards"
import Services4Section from "@components/sections/Services4"

const HistorySlider = dynamic( () => import("@components/sliders/History"), { ssr: false } );
const Testimonial2Slider = dynamic( () => import("@components/sliders/Testimonial2"), { ssr: false } );

const About = (props) => {
  useEffect(() => {
    circleText();
  }, []);

  const clickedVideoButton = (e) => {
    e.preventDefault();

    e.target.parentNode.classList.add('active');
    let videoIframe = e.target.parentNode.querySelector('.js-video-iframe');
    let videoUrl = videoIframe.dataset.src;
    videoIframe.setAttribute('src', videoUrl);
  }

  return (
    <Layouts>
    	<PageBanner pageTitle={"About Us"} pageDesc={"Creative studio at the intersection of art, designand technology."} />
      
      	{/* Marqueberry About */}
	  	<section className="onovo-section gap-top-140 gap-bottom-140">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">

						{/* Heading */}
						<div className="onovo-heading gap-bottom-60">
							<div className="onovo-subtitle-1">
								<span> Welcome to Marqueberry </span>
							</div>
							<h2 className="onovo-title-2">
								<span> We are a meme marketing powerhouse, <br/>passionate about crafting viral moments <br/>and building brands with humor and creativity. </span>
							</h2>
							<div className="onovo-text">
								<p>Since our inception, we've partnered with brands to create campaigns that not only resonate but are remembered. Our expertise in meme culture, influencer marketing, and social media management ensures that we bring the right mix of creativity, strategy, and execution to every project.
Our team is a blend of meme connoisseurs, social media strategists, and creative thinkers who thrive on delivering exceptional results. From the first brainstorm to the final post, we’re committed to making your brand the next big thing in the meme world.
</p>
							</div>
						</div>

					</div>
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 offset-lg-1 hide-on-mobile">

						{/* Image */}
						<img src="/images/onovo-about-logo.png" alt="" />

					</div>
				</div>

				{/* Numbers items */}
				<div className="row gap-row gap-bottom-100">

					{/*number-item*/}
					<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
						<div className="onovo-counter">
							<div className="num onovo-text-white js-counter" data-end-value="23">
								<CountUp end="25" duration={7} enableScrollSpy={true} scrollSpyOnce={true} />
							</div>
							<div className="num-after onovo-text-white"> + </div>
							<div className="label"> Team members </div>
						</div>
					</div>

					{/*number-item*/}
					<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
						<div className="onovo-counter">
							<div className="num onovo-text-white js-counter" data-end-value="99">
								<CountUp end="120" duration={7} enableScrollSpy={true} scrollSpyOnce={true} />
							</div>
							<div className="num-after onovo-text-white"> + </div>
							<div className="label"> Completed Campaigns				</div>
						</div>
					</div>

					{/*number-item*/}
					<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
						<div className="onovo-counter">
							<div className="num onovo-text-white js-counter" data-end-value="12">
								<CountUp end="500" duration={7} enableScrollSpy={true} scrollSpyOnce={true} />
							</div>
							<div className="num-after onovo-text-white"> M+ </div>
							<div className="label"> Memes Delivered</div>
						</div>
					</div>

				</div>

				{/* Video */}
				<div className="onovo-video" data-onovo-overlay data-onovo-scroll>
					<div className="image" onClick={ (e) => clickedVideoButton(e) } style={{"backgroundImage": "url(/images/hero.jpg)"}} />
					<iframe className="js-video-iframe" data-src="https://www.youtube.com/embed/Gu6z6kIukgg?showinfo=0&rel=0&autoplay=1"></iframe>
					<div className="play onovo-circle-text" onClick={ (e) => clickedVideoButton(e) }>
						<div className="arrow" />
						<div className="label onovo-text-black onovo-circle-text-label"> Play Video - Play Video - Play Video - </div>
					</div>
				</div>

				{/* Description */}
				<div className="row gap-top-100">
					<div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
						<h5 className="text-uppercase">Our Mission</h5>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-8 col-lg-9">
					Since day one, our mission has been to empower brands with humor and creativity, crafting memorable campaigns that not only capture attention but also spark conversations. We specialize in turning trends into lasting impressions, blending the art of memes with the science of marketing.
					</div>
				</div>

				{/* Description */}
				<div className="row gap-top-60">
					<div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
						<h5 className="text-uppercase">Our Goal</h5>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-8 col-lg-9">
					Our goal is simple: make your brand the talk of the town. We aim to create engaging, shareable content that resonates with audiences and delivers measurable results. Whether it’s entertainment, tech, or culture, we’re here to add a splash of fun and strategy to your brand’s story.
					</div>
				</div>

				{/* Gallery */}
				<div className="row gap-top-100">
					<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
						<a href="/images/posts1.jpg" className="mfp-image">
							<img src="/images/about.jpg" alt="" />
						</a>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 gap-top-60">
						<a href="/images/posts2.jpg" className="mfp-image">
							<img src="/images/about1.jpg" alt="" />
						</a>
					</div>
				</div>

			</div>
		</section>

		<Services4Section services={props.services} />

		<AwardsSection />

      	{/* <HistorySlider /> */}

      	{/* <Team2Section team={props.team} /> */}

      	{/* <Testimonial2Slider /> */}

      	<PartnersSection />
      
    </Layouts>
  );
};
export default About;

export async function getStaticProps() {
  const allTeam = getSortedTeamData();
  const allServices = getSortedServicesData();

  return {
    props: {
      team: allTeam,
	  services: allServices
    }
  }
}