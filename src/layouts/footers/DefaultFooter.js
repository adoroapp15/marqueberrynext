import Link from "next/link";
import appData from "@data/app.json";
import { useEffect } from "react";
import ImageView from "@components/ImageView";
import { footerSticky } from "@common/utilits";

const DefaultFooter = () => {
  useEffect(() => {
    footerSticky();
  }, []);

  return (
    <>
        {/* Footer */}
        <footer className="onovo-footer footer--dark">
            <div className="footer--default">
                <div className="container">

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">

                            {/* Description */}
                            <div className="onovo-text onovo-text-white">
                                <h5>Information</h5>
                             <p style={{"opacity": "0.6"}}>At Marque Berry, we turn your brand into a viral sensation with creative memes, influencer magic, and strategic distribution. Let’s make your brand unforgettable! </p>
                            </div>

                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 offset-lg-1">

                            {/* Get in Touch */}
                            <div className="onovo-text onovo-text-white">
                                <h5>Get in Touch</h5>
                                <p style={{"opacity": "0.6"}}>DLF CORPORATE GREENS, Tower-1, 608 Sector 74A, <br />Gurugram, Haryana 122101</p>
                                <p style={{"opacity": "0.6"}}>
                                    <a href="tel:+10204302973" className="onovo-lnk lnk--white" target="_blank">  89206 32128, 074007 05595</a><br />
                                    <a href="mailto:username@domain.com" className="onovo-lnk lnk--white" target="_blank">info@marqueberry.com</a>
                                </p>
                            </div>

                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">

                            {/* Privacy Policy */}
                            <div className="onovo-text onovo-text-white">
                            <h5>Important Links</h5>
                                    <figure className="gallery-item">
                                        <Link href="./about">
                                            <span>About us</span>
                                        </Link>
                                    </figure>
                                    <figure className="gallery-item">
                                        <Link href="./services">
                                            <span>Services</span>
                                        </Link>
                                    </figure>
                                    <figure className="gallery-item">
                                        <Link href="./blog">
                                            <span>Blogs</span>
                                        </Link>
                                    </figure>
                                    <figure className="gallery-item">
                                        <Link href="./projects">
                                            <span>Case study</span>
                                        </Link>
                                    </figure>
                                    <figure className="gallery-item">
                                        <Link href="./contact">
                                            <span>Contact Us</span>
                                        </Link>
                                    </figure>
                                <div className="col-4 col-xs-6 col-sm-6 col-md-4 col-lg-4">
                                    <figure className="gallery-item">
                                        <Link href="./Policy">
                                            <span>Privacy Policy</span>
                                        </Link>
                                    </figure>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="separator"></div>

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 align-self-center">

                            {/* Copyright */}
                            <div className="copyright onovo-text-white">
                                <div dangerouslySetInnerHTML={{__html: appData.footer.copy}} />
                            </div>

                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 align-right">

                            {/* Social */}
                            <div className="onovo-social-1 onovo-social-active">
                                <ul>
                                    {appData.social.map((item, key) => (
                                    <li key={`fsocial-item-${key}`}>
                                        <a className="onovo-social-link onovo-hover-2" href={item.link} title={item.title} target="_blank">
                                            <i className={item.icon}></i>
                                        </a>
                                    </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </footer>

        <ImageView />
    </>
  );
};
export default DefaultFooter;
