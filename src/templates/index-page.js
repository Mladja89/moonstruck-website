import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tabs from "../components/tabs/tabs";
import MobileTabs from "../components/tabs/mobiletabs";

import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";

const IndexPage = ({ data }) => {
  const features = [
    {
      id: 1,
      featureList: ["Hybrid Blockchain", "Applications", "Development"],
    },
    {
      id: 2,
      featureList: ["Private", "Blockchain", "Development"],
    },
    {
      id: 3,
      featureList: ["Smart Contract", "Development and", "Audits"],
    },
    {
      id: 4,
      featureList: ["DApp", "Development"],
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  const refSlide1 = useRef(null);
  const refSlide2 = useRef(null);
  const refSlide3 = useRef(null);
  const [blogStatus, setBlogStatus] = useState("");
  const blogTop = useRef(null);
  // const [mobile, setMobile] = useState(typeof window !== "undefined" && window.matchMedia("(max-width: 992px)"));

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        setMobile(true);
      }
    }
  }, []);

  useEffect(() => {
    ScrollTrigger.getAll().forEach((ST, i) => {
      if (ST.vars.end === "+=500") {
        return
      } else {
        ST.kill()
      }
      
    });

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBlogStatus("Enter");
          // position("VISIBLE") // do things if visible
          return;
        }
        if (entry.boundingClientRect.top > 0) {
          setBlogStatus("Bellow");
          // position("BELOW") // do things if below
        } else {
          setBlogStatus("Above");
          // position("ABOVE") // do things if above
        }
      },
      {
        root: null,
        threshold: 0,
      }
    );

    observer.observe(blogTop.current);

    const sections = [refSlide1, refSlide2].map((ref) => ref.current);
    sections.forEach((panel, i) => {
      if (mobile) {
        // ScrollTrigger.create({
        //   trigger: panel,
        //   start: "top top",
        //   markers: false,
        //   pin: true,
        //   pinSpacing: false,
        //   scrub: true,
        // });
        return
      } else {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          markers: false,
          pin: true,
          pinSpacing: false,
          scrub: true,
          snap: {
            snapTo: 1 / (sections.length - 1),
            duration: { min: 0, max: 1 },
            delay: 0,
            ease: "power2.inOut",
            inertia: true,
            onStart: (a) => {
              // setScrollAcion(a.direction);
            },
          },
        });
      }
    });

    const element = refSlide1.current;
    gsap.fromTo(
      element.querySelector(".moon-bg"),
      {
        opacity: 1,
        backgroundPositionY: "50%",
        transform: `translateY(${mobile ? "0" : "0"})`
      },
      {
        opacity: 0,
        backgroundPositionY: "110%",
        transform: `translateY(${mobile ? "50%" : "0"})`,
        scrollTrigger: {
          trigger: element.querySelector(".sec-1"),
          start: "top top",
          end: `center ${!mobile ? "150%" : "200%"}`,

          scrub: true,
        },
      }
    );

    gsap.fromTo(
      element.querySelector(".moon-bg2"),
      {
        opacity: 0,
        backgroundPositionY: "50%",
        transform: `translateY(${mobile ? "0" : "0"})`
      },
      {
        opacity: 1,
        backgroundPositionY: "110%",
        transform: `translateY(${mobile ? "50%" : "0"})`,
        scrollTrigger: {
          trigger: element.querySelector(".sec-1"),
          start: "top top",
          end: `center ${!mobile ? "150%" : "200%"}`,
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      element.querySelector(".sec-wrapper-1"),
      {
        opacity: 1,
        y: 0,
      },
      {
        opacity: 0,
        y: -1200,
        scrollTrigger: {
          trigger: element.querySelector(".sec-1"),
          start: "top top",
          end: "center center",
          markers: false,
          scrub: true,
        },
      }
    );
    const element2 = refSlide2.current;
    if (mobile === false) {
      gsap.fromTo(
        element2.querySelector(".sec-wrapper-2"),
        {
          opacity: 1,
          y: 0,
        },
        {
          opacity: 0,
          y: -500,
          scrollTrigger: {
            trigger: element2.querySelector(".sec-wrapper-2"),
            // duration: { min: 0, max: 0.1 },
            start: "center-=200px center-=200px",
            // end: "+=500",
            // markers: true,
            scrub: true,
          },
        }
      );
    }
  }, [refSlide1, refSlide2, refSlide3, blogTop, mobile]);
  const proba = () => {
    console.log(mobile)
  }
  return (
    <Layout refSlide1={refSlide1} blogStatus={blogStatus} mobile={mobile}>
      <section className="panel sec-1" ref={refSlide1}>
        <div className="sec-wrapper sec-wrapper-1">
          <div className="title-wrapper">
            <h2 onClick={proba}>Simply functional</h2>
            <h3>
              Taking on the challenges and complexity <br></br> of your idea, we
              simplify your equation<br></br> and make it work, simply,
              functional.
            </h3>
          </div>
        </div>
        <div className="moon-bg"></div>
        <div className="moon-bg2"></div>
      </section>
      <section id="whatwedo" className="panel sec-2" ref={refSlide2}>
        <div className="sec-wrapper sec-wrapper-2">
          <div className="title-wrapper">
            <h2>
              <span>what we do </span>
            </h2>
            <div className="sec-2-desc">
              <p>
                We provide full cycle software development from idea and design
                to <br></br> support and maintenance. Based on your needs we can
                deliver <br></br> new products, and help you to re-engineer and
                upgrade <br></br>
                existing products or services.
              </p>
            </div>
          </div>
          <div className="whatwedo">
            {!mobile ? <Tabs></Tabs> : <MobileTabs></MobileTabs>}
          </div>
        </div>
        <div className="moon-bg"></div>
      </section>
      <section
        className={`panel ${mobile ? "mobile-panel" : ""} sec-3`}
        ref={refSlide3}
      >
        <div className="sec-wrapper sec-wrapper-3">
          <div className="title-wrapper">
            <h2>
              <span>blockchain </span> development
            </h2>
            <h6>
              Experienced team with unique insights and sector-specific
              knowledge in building transformative blockchain solutions can
              assist you to accelerate your company with hands-on development
              support from inception through all phases of growth.
            </h6>
          </div>
          <div className="features-wrapper">
            {features.map((feature, index) => {
              return (
                <div key={index} className="feature-item">
                  <span className="number">0{feature.id}</span>
                  <ul className="features-list">
                    {feature.featureList.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="approach-wrapper">
            <div className="bubles">
              <div className="buble b1">Ideation and Design</div>
              <div className="buble b2">
                Proof of Concept <br></br> Development
              </div>
              <div className="buble b3">MVP & Launch</div>
              <div className="buble b4">Scaling and Support</div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="blog-custom">
        <span ref={blogTop} className="invisible"></span>
        <BlogRoll></BlogRoll>
      </section>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
