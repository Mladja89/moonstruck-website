import React, { useRef, useEffect } from "react";
import "./tabs.scss";
import moveToStripe from "./subcomponents/moveToStripe";

const Tabs = () => {
  const pageList = ["_Development", "_Audits", "_Workshops", "_Support"];
  const backgroundRef = useRef(null);
  const listRef = useRef(null);
  const menuItemRefs = useRef([]);
  const allRefs = { backgroundRef, menuItemRefs };

  console.log("nebitno:", moveToStripe);
  useEffect(() => {
    for (const menuItem of menuItemRefs.current) {
      menuItem.onmousedown = () => {
        const clickedItem = menuItem.id.split("menu-")[1];
        moveToStripe(clickedItem);
      };
    }
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
            <span>{name}</span>
          </li>
        ))}
      </ul>
      <div className="stripe-wrapper">
        <div className="stripe-container">
          <div className="stripe-item" id="_Development">
            We provide custom software development: from the design of UI/UX,
            full stack development to support and maintenance. On demand we
            deliver new products or help you to re-engineer and upgrade your
            existing solutions, or to facilitate integration with other systems.
          </div>
          <div className="stripe-item" id="_Audits">
            We offer insight into the overall quality and functionality of the
            project– evaluating volume and complexity, assessing the feasibility
            of the proposed software, system architecture and tech stack. We
            perform code audits, ensuring that the software is written to the
            highest engineering standards. We do security audits to detect
            potential software vulnerabilities, and performance reviews setting
            system benchmarks.
          </div>
          <div className="stripe-item" id="_Workshops">
            Once product development is finalized, we can offer support and
            increase scalability, ensuring that the software continues to
            operate at a high level. Based on your needs, we provide periodic
            spot checks via our engineering or dedicated maintenance and support
            teams. Lastly, we make sure that your solution scales with
            increasing customer demand.
          </div>
          <div className="stripe-item" id="_Support">
            We offer ideation and product design workshops – helping to apply
            structured reasoning to your product ideas. We will assist you to
            create a product design document and a technical brief that can be
            accurately estimated (in time and cost) and ensure precise solution
            delivery. Our comprehensive services can be provided on premise or
            remotely.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
