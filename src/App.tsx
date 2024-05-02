import * as React from "react";

import GithubSVG from "./components/GithubSVG/GithubSVG";
import LinkedinSVG from "./components/LinkedinSVG/LinkedinSVG";

import styles from "./App.module.css";

type AppProps = {};

function App(props: AppProps) {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <h1>Julian Visser</h1>
        <h2>Computer Scientist</h2>
        <div className={styles.iconContainer}>
          <a className={styles.icon} href="https://github.com/justmejulian">
            <GithubSVG />
          </a>
          <a
            className={styles.icon}
            href="https://www.linkedin.com/in/julian-visser-8b4b21180/"
          >
            <LinkedinSVG />
          </a>
        </div>
        <div>
          <p>
            Hi my name is Julian.
          </p>
          <p>
            I am a <b>Full Stack Software Engineer</b>.
          </p>
          <p>
            Currently working 80% at <b>Energy Grupper Schweiz</b> in Zurich.
            <br />
            &
            <br />
            Finishing up my
            <b> Masters in Computer Science </b>
            at the
            <br />
            <b> ZHAW School of Engineering.</b>
          </p>
          <p>
            I have a love for design and an intrinsic need to know how things work
            <br />
            and I am always trying and learning new things in and outside the office.
          </p>
          <p>
            If you want to know more about me check out my{" "}
            <b>
              <a href="https://github.com/justmejulian/resume/blob/master/resume/resume.pdf">
                CV
              </a>
            </b>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
