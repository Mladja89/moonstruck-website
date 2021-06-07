import React, { useRef, useEffect, useState } from "react";
import PropTypes, { func } from "prop-types";
import { Link, graphql } from "gatsby";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tabs from "../components/tabs/tabs";

import Layout from "../components/Layout";
import Features from "../components/Features";
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

  const { frontmatter } = data.markdownRemark;
  gsap.registerPlugin(ScrollTrigger);

  const refSlide1 = useRef(null);
  const refSlide2 = useRef(null);
  const refSlide3 = useRef(null);
  const [scrollAction, setScrollAcion] = useState("nebitnosrkoz");

  useEffect(() => {
    const sections = [refSlide1, refSlide2].map(
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
        snap: {
          snapTo: 1 / (sections.length - 1),
          duration: { min: 0, max: 1 },
          delay: 0,
          ease: "power2.inOut",
          inertia: true,
          onStart: (a) => {
            // console.log("TESsT", a);
            setScrollAcion(a.direction);
          }
        },
      });
    });
    

    // ScrollTrigger.create({

    // });

    const element = refSlide1.current;
    gsap.fromTo(
      element.querySelector(".moon-bg"),
      {
        opacity: 1,
        backgroundPositionY: "50%",
      },
      {
        opacity: 0,
        backgroundPositionY: "110%",
        scrollTrigger: {
          trigger: element.querySelector(".sec-1"),
          start: "top top",
          end: "center 100%",
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
        backgroundPositionY: "110%",
        scrollTrigger: {
          trigger: element.querySelector(".sec-1"),
          start: "top top",
          end: "center 100%",
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
        y: -1200,
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

    // const element2 = refSlide2.current;
    // gsap.fromTo(
    //   element2.querySelector(".sec-wrapper-2"),
    //   {
    //     opacity: 1,
    //     y: 0,
    //   },
    //   {
    //     opacity: 0,
    //     y: -400,
    //     scrollTrigger: {
    //       trigger: element2.querySelector(".sec-2"),
    //       // duration: { min: 0, max: 0.1 },
    //       start: "top top",
    //       end: "center center",
    //       markers: true,
    //       scrub: true,
    //     },
    //   }
    // );
  }, [refSlide1, refSlide2, refSlide3]);

  return (
    <Layout scrollTriggerAction={scrollAction}>
      <section className="panel sec-1" ref={refSlide1}>
        <div className="sec-wrapper sec-wrapper-1">
          <div className="title-wrapper">
            <h2>Simply functional</h2>
            <h3>
              Taking on the challenges and complexity <br></br> of your idea, we
              simplify your equation<br></br> and make it work, simply,
              functional.
            </h3>
          </div>
          <div className="sec-1-desc">
            <p>
              We provide full cycle software development from idea and design to{" "}
              <br></br> support and maintenance. Based on your needs we can
              deliver <br></br> new products, and help you to re-engineer and
              upgrade <br></br>
              existing products or services.
            </p>
          </div>
        </div>
        <div className="moon-bg"></div>
        <div className="moon-bg2"></div>
      </section>
      <section className="panel sec-2" ref={refSlide2}>
        <div className="sec-wrapper sec-wrapper-2">
          <div className="title-wrapper">
            <h2>
              <span>what we do </span> services
            </h2>
          </div>
          <div className="whatwedo">
            <Tabs></Tabs>
          </div>
        </div>
        <div className="moon-bg"></div>
      </section>
      <section className="panel sec-3" ref={refSlide3}>
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
            <h2>approach</h2>
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

      <section className="nebitnopanel">
        <span>assadodkosakdok</span>
        <span>assadodkosakdok</span>
        <span>assadodkosakdok</span>
        <span>assadodkosakdok</span>
        <span>assadodkosakdok</span>
        <span>assadodkosakdok</span>
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
