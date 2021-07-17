import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import "./allnew.scss";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import Headroom from "react-headroom";
import { Link } from "gatsby";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TemplateWrapper = ({ children, refSlide1, blogStatus, mobile }) => {
  const { title, description } = useSiteMetadata();
  const [blogStatusLayout, setBlogStatusLayout] = useState("");
  const headroomF = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    setBlogStatusLayout(blogStatus);
  }, [blogStatus]);
  const logo = useRef(null);
  const links = useRef(null);

  useEffect(() => {
    const logoElement = logo.current;
    const linksElement = links.current;
    if (refSlide1) {
      const element = refSlide1.current;
      gsap.fromTo(
        [
          logoElement.querySelector(".white"),
          linksElement.querySelector(".links-black"),
        ],
        {
          opacity: 0,
          visibility: 0,
          zoom: 1,
        },
        {
          opacity: 1,
          visibility: 1,
          zoom: 0.8,
          scrollTrigger: {
            trigger: element.querySelector(".sec-1"),
            start: "top top",
            end: "+=500",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        [
          logoElement.querySelector(".black"),
          linksElement.querySelector(".links-white"),
        ],
        {
          opacity: 1,
          visibility: 1,
          zoom: 1,
        },
        {
          opacity: 0,
          visibility: 0,
          zoom: 0.8,
          display: "none",
          scrollTrigger: {
            trigger: element.querySelector(".sec-1"),
            start: "top top",
            end: "+=500",
            scrub: true,
          },
        }
      );
    }
  }, [logo, mobile, refSlide1]);

  return (
    <div>
      <style>
        {"\
        strong{\
          font-weight: 600;\
        }\
      "}
      </style>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <link rel="icon" href="/img/logo/favicon.png" type="image/x-icon" />
      </Helmet>
      {/* <Navbar /> */}
      <header>
        <Headroom
          ref={headroomF}
          disable={blogStatusLayout === "Bellow" ? true : false}
        >
          <div className="header-wrapper">
            <Link to="/" ref={logo} className="h-left">
              <span className="white">
                <img src={`${withPrefix("/")}img/logo/logo-white.png`}></img>
              </span>
              <span className="black">
                <img src={`${withPrefix("/")}img/logo/logo-black.png`}></img>
              </span>
            </Link>
            <div ref={links} className="h-right">
              <div className="links-black">
                <Link to="/">About</Link>
                <Link to="/#whatwedo">What we do</Link>
                <Link to="/#blog">Work</Link>
                <Link to="/">Contact</Link>
              </div>
              <div className="links-white">
                <Link to="/">About</Link>
                <Link to="/#whatwedo">What we do</Link>
                <Link to="/#blog">Work</Link>
                <Link to="/#contact">Contact</Link>
              </div>
            </div>
          </div>
        </Headroom>
      </header>
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
