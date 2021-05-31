import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tabs from "../components/tabs/tabs"

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";

const IndexPage = ({ data }) => {

  const { frontmatter } = data.markdownRemark;
  gsap.registerPlugin(ScrollTrigger);

  const refSlide1 = useRef(null);
  const refSlide2 = useRef(null);
  const refSlide3 = useRef(null);

  useEffect(() => {
    const sections = [refSlide1, refSlide2, refSlide3].map(
      (ref) => ref.current
    );
    sections.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        markers: false,
        pin: true,
        pinSpacing: false,
        scrub: true,
      });
    });

    ScrollTrigger.create({
      // snap: 1 / (sections.length - 1)
      snap: {
        snapTo: 1 / (sections.length - 1),
        duration: { min: 0, max: 1 },
        delay: 0,
        ease: "power2.inOut",
        inertia: true,
      },
    });

    const element = refSlide1.current;
    gsap.fromTo(
      element.querySelector(".moon-bg"),
      {
        opacity: 1,
        backgroundPositionY: "50%",
      },
      {
        opacity: 0,
        backgroundPositionY: "100%",
        scrollTrigger: {
          trigger: element.querySelector(".sec-1"),
          start: "top top",
          end: "center center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      element.querySelector(".moon-bg2"),
      {
        opacity: 0,
        backgroundPositionY: "50%",
      },
      {
        opacity: 1,
        backgroundPositionY: "100%",
        scrollTrigger: {
          trigger: element.querySelector(".sec-1"),
          start: "top top",
          end: "center center",
          markers: false,
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
        y: -800,
        scrollTrigger: {
          trigger: element.querySelector(".sec-1"),
          // duration: { min: 0, max: 0.1 },
          start: "top top",
          end: "center center",
          markers: false,
          scrub: true,
        },
      }
    );
  }, [refSlide1, refSlide2, refSlide3]);

  return (
    <Layout>
      <section className="panel sec-1" ref={refSlide1}>
        <div className="sec-wrapper sec-wrapper-1">
          <div className="title-wrapper">
            <h2>Simply functional</h2>
            <h3>
              Taking on the challenges and complexity <br></br> of your idea, we simplify
              your equation<br></br> and make it work, simply, functional.
            </h3>
          </div>
          <div className="sec-1-desc">

            <p>
              We provide full cycle software development from idea and
              design to <br></br> support and maintenance. Based on your needs we can
              deliver <br></br> new products, and help you to re-engineer and upgrade <br></br>
              existing products or services.
            </p>
          </div>
        </div>
        <div className="moon-bg"></div>
        <div className="moon-bg2"></div>
      </section>
      <section className="panel sec-2" ref={refSlide2}>
        <div className="sec-wrapper">
          <div className="title-wrapper">
            <h2><span>what we do </span> services</h2>
          </div>
          <div className="whatwedo">
            <Tabs></Tabs>
          </div>
          <div></div>
        </div>
        <div className="moon-bg"></div>
      </section>
      <section className="panel sec-3" ref={refSlide3}>
        <div className="sec-wrapper sec-wrapper-3"></div>
      </section>

      {/* <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      /> */}
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
