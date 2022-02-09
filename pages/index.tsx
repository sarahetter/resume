import type { NextPage } from "next"
import Head from "next/head"
import Container from "../components/Container"
import Job from "../components/Job"
import MainSection from "../components/MainSection"
import Sidebar from "../components/Sidebar"
import SidebarSection from "../components/SidebarSection"

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Sarah Etter Resume</title>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto:500,900"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css"
        />
        <meta
          name="description"
          content="Resume documenting full stack engineer qualifications."
        />
      </Head>
      <Sidebar>
        <h1>Sarah Etter</h1>
        <SidebarSection>
          <p>
            Hi! My name is Sarah Etter. I currently specialize in Front-End
            development. I have experience working autonomously and as a team
            leader: training interns, leading junior developers and remote
            workers, and interfacing with external contract teams of up to 20
            people.
          </p>
        </SidebarSection>
        <SidebarSection title="About Me">
          <ul>
            <li>Live in Saskatoon, Canada</li>
            <li>Full Stack Engineer with over 7 years experience</li>
            <li>Key Programming Languages: JavaScript, PHP</li>
            <li>Conference Speaker</li>
            <li>Musician</li>
          </ul>
        </SidebarSection>
        <SidebarSection title="Contact Me">
          <ul>
            <li>
              <a href="mailto:sarah@sarahetter.com">sarah@sarahetter.com</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/sarah-etter/">
                https://www.linkedin.com/in/sarah-etter/
              </a>
            </li>
            {/* Insert phone number here, but not on github :) */}
          </ul>
        </SidebarSection>
        <SidebarSection title="See My Work">
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
            <li />
          </ul>
        </SidebarSection>
      </Sidebar>
      <main>
        <MainSection title="Work Experience">
          <Job
            title="Software Engineer II - Elasticsearch Inc (2018/12 - present)"
            companyDescription="Elasticsearch builds search, observability, and security solutions"
          >
            <p>
              As a UI engineer on the Cloud team, I work on Elastic's Cloud
              product - a managed Elasticsearch service. I work with a large
              team to architect and code the front end application. I also test,
              review code, and spend time on a support on call rotation.
            </p>
            <p>Key Achievements:</p>
            <ul>
              <li>
                Developed the redesign & refactor of the Create Elasticsearch
                Deployment flow
              </li>
              <li>
                Added the feature to add keystore secrets to Elasticsearch on
                Cloud
              </li>
              <li>
                Engineered the CI/CD flow to improve the functionality of
                automated testing for our application
              </li>
            </ul>
          </Job>
          <Job
            title="Software Engineer - Territorial (2014/01 - 2018/11)"
            companyDescription="Territorial is a digital product & branding agency"
          >
            <p>
              As a full stack web developer at a small company, I had the
              opportunity to build each of the companies products from the
              ground up. Territorial works on large CMS implementations, IOT big
              data applications, geographical mapping apps, and an internal
              startup mental health tracking app. I communicated with clients
              directly.
            </p>
            <p>Key Achievements:</p>
            <ul>
              <li>Created version control processes</li>
              <li>Implemented accessibility best practices</li>
              <li>Leading CI/CD activities</li>
              <li>
                Lead developer on a project that led to a client's company
                acquisition for 63.5 million dollars
              </li>
            </ul>
          </Job>
          <Job title="Web Developer - Freelance (2012 - 2018)">
            <p>
              I created plain HTML / CSS / jQuery or WordPress based websites
              for clients including food trucks, home builders, and agricultural
              sales.
            </p>
          </Job>
        </MainSection>
        <MainSection title="Skills / Technologies">
          <ul className="SkillsList">
            <li>PHP</li>
            <li>JavaScript, ECMAScript</li>
            <li>TypeScript</li>
            <li>Laravel</li>
            <li>React / Redux</li>
            <li>AWS (EC2, ElastiCache, IAM, S3, SQS)</li>
            <li>Google Cloud</li>
            <li>Docker</li>
            <li>Gitlab-CI</li>
            <li>Git</li>
            <li>Accessibility</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>GraphQL</li>
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
  )
}

export default Home
