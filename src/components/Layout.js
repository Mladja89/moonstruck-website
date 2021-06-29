import React, {useRef} from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
// import './all.sass'
import './allnew.scss'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'
import Headroom from "react-headroom";
import { Link } from "gatsby";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TemplateWrapper = ({ children, scrollTriggerAction }) => {
  const { title, description } = useSiteMetadata()
  const headroomF = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  // window.headd = headroomF.current
  // console.log('test333', scrollTriggerAction);
  // headroomF.current.disable()
  // const Perform = (direction) => {
  //   console.log(direction);
  //   if (typeof headroomF != "undefined" && headroomF.current.state.state === "unpinned") {
  //     headroomF.current.pin()
  //   }
  // }

  // useEffect(() => {
  //   Perform(scrollTriggerAction) to be made later
  // }, [scrollTriggerAction]);

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      {/* <Navbar /> */}
      <header>
      <Headroom ref={headroomF} disable >
        <div className="header-wrapper">
          <div className="h-left">
            <span></span>
          </div>
          <div className="h-right">
          <Link to="/">
            About
          </Link>
          <Link to="/">
            What we do
          </Link>
          <Link to="/">
            Work
          </Link>
          <Link to="/">
            Contact
          </Link>
          </div>
        </div>
      </Headroom>
      </header>
      <div>{children}</div>
      {/* <Footer /> */}
    </div>
  )
}

export default TemplateWrapper
