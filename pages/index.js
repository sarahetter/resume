import React from "react";
import Head from "next/head";
import Container from "../components/Container";
import Job from "../components/Job";
import MainSection from "../components/MainSection";
import Sidebar from "../components/Sidebar";
import SidebarSection from "../components/SidebarSection";
import "../assets/scss/styles.scss";

const Index = () => (
  <Container>
    <Head>
      <title>Sarah Etter Resume</title>
      <meta
        name="description"
        content="Resume documenting full stack engineer qualifications."
      />
    </Head>
    <Sidebar>
      <h1>Sarah Etter</h1>
      <SidebarSection>
        <p>
          Fullstack Engineer with leadership experience and a specialization in
          Front-End & DevOps.
        </p>
      </SidebarSection>
      <SidebarSection title="Contact Information">
        Saskatoon, Canada <br />
        <a href="mailto:sarah@sarahetter.com">sarah@sarahetter.com</a>
      </SidebarSection>
      <SidebarSection title="Profiles">
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
      </SidebarSection>
    </Sidebar>
    <main>
      <MainSection title="Work Experience">
        <Job
          title="Software Engineer - Territorial"
          duration="2014/01 - Present"
        >
          <p>
            As a full stack web developer at a digital product and branding
            agency, I have created processes around version control, testing,
            accessibility, and CI/CD. I have experience working autonomously and
            as a team leader: training interns, leading junior developers and
            remote workers, and interfacing with external contract teams of up
            to 20 people. I have handled client communication and training. I
            have also acted as a project lead and lead developer for a project
            that lead to a client's purchase for 63.5 million.
          </p>
        </Job>
        <Job title="Web Developer - Freelance" duration="2012 - Present">
          <p>
            I created plain HTML / CSS / jQuery or WordPress based websites for
            clients.
          </p>
        </Job>
      </MainSection>
      <MainSection title="Skills / Technologies">
        <ul className="SkillsList">
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
      </MainSection>
      <MainSection title="Education">
        <p>
          2015 - Diploma in Computer Systems Technology - Saskatchewan
          Polytechnic
        </p>
      </MainSection>
      <MainSection title="Conferences & Workshops">
        <p>Volunteer as instructor & mentor with Canada Learning Code</p>
        <p>
          Conference Speaker on topics such as CSS Performance and Rendering,
          SVG Basics & Animation, Geographical Mapping Applications, Arduino &
          IOT, AMP
        </p>
      </MainSection>
    </main>
  </Container>
);

export default Index;
