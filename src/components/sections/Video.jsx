import { useEffect } from "react";
import Data from "@data/sections/video.json";
import { circleText } from "@common/utilits";

const VideoSection = () => {
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
    <>
      	{/* Marque Berry | a meme company Video */}
		<section className="onovo-section">
			<div className="container">

				{/* video */}
				<div className="onovo-video" data-onovo-overlay data-onovo-scroll>
					<div className="image" onClick={ (e) => clickedVideoButton(e) } style={{"backgroundImage": "url(/images/about.jpg)"}} />
					<iframe className="js-video-iframe" />
					<div className="play onovo-circle-text">
						<div className="arrow" />
						<div className="label onovo-text-black onovo-circle-text-label">{Data.label}</div>
					</div>
				</div>

			</div>
		</section>
    </>
  );
};

export default VideoSection;