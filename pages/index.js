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
        aside {
          flex: 1 100%;
          padding: 20px;
          font-size: 14px;
        }
        aside h1 {
          font-size: 4em;
          text-transform: uppercase;
        }
        main {
          flex: 1 100%;
          padding: 20px;
        }
        main h1 {
          font-size: 1.2em;
          font-weight: 800;
          margin-top: 8px;
          color: #003d5b;
        }
        main h2 {
          font-size: 1em;
          font-weight: 500;
          color: #30638e;
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
          aside {
            flex: 1 0px;
          }
        }
        @media print {
          main {
            flex: 3 0px;
          }
          aside {
            flex: 1 0px;
          }
        }
      `}
    </style>
    <aside>
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
    </aside>
    <main>
      <h1>Work Experience</h1>
      <article className="Job">
        <h2>Software Engineer - Territorial</h2>
        <p className="Job__Duration">2014/01 - Present</p>
      </article>
      <h1>balsdkf</h1>
      <p>
        industry's standard dummy text ever since the 1500s, when an unknown
        printer took a galley more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is
        simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s, when
        an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the
        leap into electronic typesetting, remaining essentially unchanged. It
        was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>
    </main>
  </Container>
);

export default Index;
