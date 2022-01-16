import * as React from "react";
import "../index.scss";
import { Helmet } from "react-helmet";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import ThreeCanvas from "../components/three-canvas";
import Aboutme from "../components/Aboutme";

import battleships from "../images/battleships.png";
import natocivodo from "../images/natocivodo.png";
import odinbook from "../images/odinbook.png";
import odinbookapi from "../images/odinbookapi.png";

// data

const projects = [
  {
    text: "Battleships Game",
    image: battleships,
    github: "https://github.com/gkatrasnik/battleships-game",
    live: "https://gkatrasnik.github.io/battleships-game/",
    description:
      "For this game, I used vanilla JavaScript and CSS, all bundled together with Webpack. The game was developed using test driven developement and object oriented programming.",
  },
  {
    text: "Natoči Vodo",
    image: natocivodo,
    github: "https://github.com/gkatrasnik/natoci-vodo",
    live: "https://natoci-vodo.netlify.app/",
    description:
      "This is my personal project. The idea is, that people can add locations of drinking water sources. The app is build with React and Firebase, using also Firebase Auth services. I used Leaflet and MaterialUI libraries. App is a PWA hosted on Netlify.",
  },
  {
    text: "Odin Book",
    image: odinbook,
    github: "https://github.com/gkatrasnik/odin-book-frontend",
    live: "https://odinbook.netlify.app/",
    description:
      "Odin book is a 'fake' social network. Users can write posts and see their friends posts. Users can send and accept friend requests, and see notifications. The app is made with React and Bootstrap, styled with Sass. App is a PWA hosted on Netlify.",
  },
  {
    text: "Odin Book API",
    github: "https://github.com/gkatrasnik/odin-book-api",
    image: odinbookapi,
    description:
      "This is REST API for Odin Book frontend app. It is Made with NodeJS and Express. PassportJS takes care of authentication. MongoDB is database of choice and the app is hosted on Heroku.",
  },
];

const frontendSkills = [
  {
    name: "javaScript",
    icon: <i class="devicon-javascript-plain colored"></i>,
  },
  { name: "React", icon: <i class="devicon-react-original colored"></i> },
  { name: "Html5", icon: <i class="devicon-html5-plain colored"></i> },
  ,
  { name: "Css3", icon: <i class="devicon-css3-plain colored"></i> },
  { name: "SASS", icon: <i class="devicon-sass-original colored"></i> },

  { name: "Bootstrap", icon: <i class="devicon-bootstrap-plain colored"></i> },
  {
    name: "Tailwind",
    icon: <i class="devicon-tailwindcss-plain colored"></i>,
  },
  {
    name: "Material UI",
    icon: <i class="devicon-materialui-plain colored"></i>,
  },
  { name: "Gatsby", icon: <i class="devicon-gatsby-plain colored"></i> },
];
const backendSkills = [
  //backend
  { name: "NodeJS", icon: <i class="devicon-nodejs-plain colored"></i> },
  { name: "Express", icon: <i class="devicon-express-original "></i> },
  { name: "MongoDB", icon: <i class="devicon-mongodb-plain colored"></i> },
  { name: "Firebase", icon: <i class="devicon-firebase-plain colored"></i> },
];
//other
const otherSkills = [
  { name: "Git", icon: <i class="devicon-git-plain colored"></i> },
  { name: "Github", icon: <i class="devicon-github-original "></i> },
  { name: "Npm", icon: <i class="devicon-npm-original-wordmark colored"></i> },
  { name: "Jasmine", icon: <i class="devicon-jasmine-plain colored"></i> },
  { name: "Webpack", icon: <i class="devicon-webpack-plain colored"></i> },
  { name: "Linux", icon: <i class="devicon-linux-plain "></i> },
  { name: "Heroku", icon: <i class="devicon-heroku-plain colored"></i> },
];

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Gašper Katrašnik</title>

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
        />
        <meta
          name="google-site-verification"
          content="im__jZd2KkxF9OfY5O3OoD53mepZz8oEkucYRx58dA8"
        />
      </Helmet>
      <ThreeCanvas />
      <main>
        <Navigation />
        <Hero />
        <Aboutme />
        <Projects projects={projects} />
        <Skills
          frontendSkills={frontendSkills}
          backendSkills={backendSkills}
          otherSkills={otherSkills}
        />
        <Contact />
      </main>
    </>
  );
};

export default IndexPage;
