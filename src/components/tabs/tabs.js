import React, { useRef, useEffect, useState } from "react";
import "./tabs.scss";
import moveToStripe from "./subcomponents/moveToStripe";

const Tabs = () => {
  const pageList = ["_Development", "_Audits", "_Workshops", "_Support"];
  const backgroundRef = useRef(null);
  const listRef = useRef(null);
  const menuItemRefs = useRef([]);
  const allRefs = { backgroundRef, menuItemRefs };
  const [activeClass, setActiveClass] = useState("_Development");

  useEffect(() => {
    for (const menuItem of menuItemRefs.current) {
      menuItem.onmousedown = () => {
        const clickedItem = menuItem.id.split("menu-")[1];
        setActiveClass(clickedItem);
        moveToStripe(clickedItem);
      };
    }
    moveToStripe(activeClass);
  }, []);

  return (
    <div className="tabs-wrapper">
      <ul ref={listRef}>
        {pageList.map((name, index) => (
          <li
            ref={(el) => (menuItemRefs.current[index] = el)}
            key={index}
            id={`menu-${name}`}
          >
            <span className={activeClass === name ? "active" : ""}>{name}</span>
          </li>
        ))}
      </ul>
      <div className="stripe-wrapper">
        <div className="stripe-container">
          <div
            className={`stripe-item ${
              activeClass !== "_Development" ? "fade" : "active"
            }`}
            id="_Development"
          >
            <span className="text">
              We provide custom software development: from the design of UI/UX,
              full stack development to support and maintenance. On demand we
              deliver new products or help you to re-engineer and upgrade your
              existing solutions, or to facilitate integration with other
              systems.
            </span>
            <span className="animation-wrapper ani-1">
              <div className="icon icon6">
                <div className="moon top"></div>
                <div className="planet"></div>
                <div className="ring"></div>
                <div className="ring planet"></div>
                <div className="planetoid"></div>
                <div className="moon bottom"></div>
              </div>
            </span>
          </div>
          <div
            className={`stripe-item ${
              activeClass !== "_Audits" ? "fade" : "active"
            }`}
            id="_Audits"
          >
            <span className="text">
              We offer insight into the overall quality and functionality of the
              project– evaluating volume and complexity, assessing the
              feasibility of the proposed software, system architecture and tech
              stack. We perform code audits, ensuring that the software is
              written to the highest engineering standards. We do security
              audits to detect potential software vulnerabilities, and
              performance reviews setting system benchmarks.
            </span>
            <span className="animation-wrapper ani-1">
              <div className="icon icon11">
                <div className="planet">
                  <div className="line line1"></div>
                  <div className="line line2"></div>
                  <div className="line line3"></div>
                  <div className="line line4"></div>
                  <div className="line line5"></div>
                  <div className="line line6"></div>
                  <div className="line line7"></div>
                  <div className="line line8"></div>
                  <div className="line line9"></div>
                </div>
              </div>
            </span>
          </div>
          <div
            className={`stripe-item ${
              activeClass !== "_Workshops" ? "fade" : "active"
            }`}
            id="_Workshops"
          >
            <span className="text">
              Once product development is finalized, we can offer support and
              increase scalability, ensuring that the software continues to
              operate at a high level. Based on your needs, we provide periodic
              spot checks via our engineering or dedicated maintenance and
              support teams. Lastly, we make sure that your solution scales with
              increasing customer demand.
            </span>

            <span className="animation-wrapper ani-1">
              <div className="icon icon8">
                <div className="moon top"></div>
                <div className="planet"></div>
                <div className="ring"></div>
                <div className="planetoid"></div>
                <div className="moon bottom"></div>
              </div>
            </span>
          </div>
          <div
            className={`stripe-item ${
              activeClass !== "_Support" ? "fade" : "active"
            }`}
            id="_Support"
          >
            <span className="text">
              We offer ideation and product design workshops – helping to apply
              structured reasoning to your product ideas. We will assist you to
              create a product design document and a technical brief that can be
              accurately estimated (in time and cost) and ensure precise
              solution delivery. Our comprehensive services can be provided on
              premise or remotely.
            </span>

            <span className="animation-wrapper ani-1">
              <div className="icon icon15">
                <div className="planetoid"></div>
                <div className="sattelite">
                  <div className="solarpanel left"></div>
                  <div className="body"></div>
                  <div className="solarpanel right"></div>
                  <div className="dish"></div>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
