import React from "react";
import Head from "next/head";
import "../assets/scss/styles.scss";
import Container from "../components/Container";

const Index = () => (
  <Container>
    <Head>
      <title>Sarah Etter Resume</title>
    </Head>
    <style jsx>
      {`
        .Sidebar {
          flex: 1 100%;
          padding: 20px;
          font-size: 14px;
        }
        .Sidebar h1 {
          font-size: 4em;
          text-transform: uppercase;
        }
        main {
          flex: 1 100%;
          padding: 20px;
        }
        main h2 {
          color: #003d5b;
          font-size: 1.2em;
          font-weight: 800;
          margin: 8px 0 5px;
        }
        main h3 {
          font-size: 1em;
          font-weight: 500;
          color: #30638e;
          margin: 0 0 5px;
        }
        main p {
          margin-top: 0;
        }
        ul {
          list-style: none;
          padding: 0;
        }

        .SidebarSection {
          margin-bottom: 35px;
        }
        .SidebarSection__Title {
          font-size: 1.2em;
          text-transform: uppercase;
        }

        @media all and (min-width: 800px) {
          main {
            flex: 4 0px;
          }
          .Sidebar {
            flex: 1 0px;
          }
        }
        @media print {
          main {
            flex: 3 0px;
          }
          .Sidebar {
            flex: 1 0px;
          }
        }
      `}
    </style>
    <div className="Sidebar">
      <h1>Sarah Etter</h1>
      <div className="Summary SidebarSection">
        <p>
          Fullstack Engineer with leadership experience and a specialization in
          Front-End & DevOps.
        </p>
      </div>
      <div className="ContactInfo SidebarSection">
        <h2 className="SidebarSection__Title">Contact Information</h2>
        Saskatoon, Canada <br />
        <a href="mailto:sarah@sarahetter.com">sarah@sarahetter.com</a>
      </div>
      <div className="Profiles SidebarSection">
        <h2 className="SidebarSection__Title">Profiles</h2>
        <ul>
          <li>
            <a href="https://github.com/sarahetter">
              https://github.com/sarahetter
            </a>
          </li>
          <li>
            <a href="https://codepen.io/sarahetter">
              https://codepen.io/sarahetter
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sarah-etter/">
              https://www.linkedin.com/in/sarah-etter/
            </a>
          </li>
        </ul>
      </div>
    </div>
    <main>
      <h2>Work Experience</h2>
      <article className="Job">
        <h3>Software Engineer - Territorial</h3>
        <p className="Job__Duration">2014/01 - Present</p>
        <p className="Job__Description">
          Worked as a full stack web developer at a digital product & branding
          agency. I created processes around version control, testing,
          accessibility, and CI/CD. I worked in diverse environments, including
          as a solo developer, training interns, leading junior developers and
          remote workers, and with external contractor teams of up to 20 people.
          I handled client communication and training. I acted as a project lead
          and lead developer for a project that lead to a client's purchase for
          63.5 million.
        </p>
      </article>
      <article className="Job">
        <h3>Web Developer - Freelance</h3>
        <p className="Job__Duration">2012 - Present</p>
        <p className="Job__Description">
          Created plain HTML / CSS or WordPress based websites for clients.
        </p>
      </article>
      <h2>Skills / Technologies</h2>
      <ul>
        <li>PHP</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript, ECMAScript</li>
        <li>Laravel</li>
        <li>React / Redux</li>
        <li>SQL</li>
        <li>AWS (EC2, S3, SQS, IAM)</li>
        <li>Git</li>
        <li>Docker</li>
        <li>Statistics, Mathematics</li>
        <li>Accessibility</li>
        <li>Google Cloud Platform</li>
      </ul>
      <h2>Education</h2>
      <p>
        2015 - Diploma in Computer Systems Technology - Saskatchewan Polytechnic
      </p>
      <h2>Conferences & Workshops</h2>
      <p>Volunteer as instructor & mentor with Canada Learning Code</p>
      <p>
        Conference Speaker on topics such as CSS Performance and Rendering, SVG
        Basics & Animation, Geographical Mapping Applications, Arduino & IOT,
        AMP
      </p>
    </main>
  </Container>
);

export default Index;
