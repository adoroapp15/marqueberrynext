import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import Link from "next/link";
import ImageView from "@components/ImageView";

import { useRouter } from 'next/router';

import { getSortedProjectsData, getAllProjectsIds, getProjectData } from "@library/projects";

import {
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TwitterShareButton
} from "react-share";

const ProjectDetail = ( props ) => {
  
  const postData = props.data;
  let prev_id, next_id, prev_key, next_key = 0;

  props.projects.forEach(function(item, key){
    if ( item.id == postData.id ) {
      prev_key = key - 1;
      next_key = key + 1;
    }
  })

  props.projects.forEach(function(item, key){
    if ( key == prev_key ) {
      prev_id = item.id;
    }
    if ( key == next_key ) {
      next_id = item.id;
    }
  });

  const { asPath } = useRouter();
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : '';
  const shareUrl = `${origin}${asPath}`;
  console.log(shareUrl);

  return (
    <Layouts>
      <PageBanner pageTitle={postData.title} pageDesc={postData.type} />
      
      {/* Onovo Project Detail */}
			<section className="onovo-section gap-top-140">
				<div className="container">

					{/* Image */}
					<div className="gap-bottom-80">
            <div className="project-image">
						  <img src={postData.image} alt={postData.title} />
            </div>
					</div>

					<div className="row gap-bottom-80">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">

              {postData.contentHtml != "" &&
              <>
                {/* Description */}
                <div className="onovo-text">
                  <div dangerouslySetInnerHTML={{__html : postData.contentHtml}} />
                </div>
              </>
              }

						</div>
					 
					</div>
          
          {typeof postData.gallery != "undefined" &&
          <>
					{/* Gallery items */}
					<div className="row gap-row gallery-items onovo-custom-gallery">

            {postData.gallery.items.map((item, key) => (
						<div key={`gallery-item-${key}`} className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
							<div className="gallery-item">
								<a href={item.image} className="mfp-image">
									<img src={item.image} alt={item.alt} />
								</a>
							</div>
						</div>
            ))}

					</div>
          </>
          }

          {typeof postData.additional != "undefined" &&
          <>
					{/* Description */}
					<div className="onovo-text gap-top-80">
						<h6 className="text-uppercase">{postData.additional.heading}</h6>
						<div dangerouslySetInnerHTML={{__html : postData.additional.content}} />
					</div>
          </>
          }

				</div>
			</section>

			{/* Onovo Navs */}
			<section className="onovo-section">
				<div className="container">

					{/* Navigation */}
					<div className="onovo-page-navigation">
						<div className="onovo-page-navigation-content">
              {prev_id != 0 && prev_id != undefined &&
							<Link href={`/projects/${prev_id}`} className="page-navigation__prev">
								<span className="onovo-prev onovo-hover-2">
									<i />
								</span>
							</Link>
              }
							<Link href="/projects" className="page-navigation__posts">
								<i className="fas fa-th" />
							</Link>
              {next_id != 0 && next_id != undefined &&
							<Link href={`/projects/${next_id}`} className="page-navigation__next">
								<span className="onovo-next onovo-hover-2">
									<i />
								</span>
							</Link>
              }
						</div>
					</div>
					
				</div>
			</section>
      
      <ImageView />

    </Layouts>
  );
};
export default ProjectDetail;

export async function getStaticPaths() {
    const paths = getAllProjectsIds()

    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getProjectData(params.id)
    const allProjects = await getSortedProjectsData()

    return {
      props: {
        data: postData,
        projects: allProjects
      }
    }
}