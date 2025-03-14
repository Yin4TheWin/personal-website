import Head from 'next/head';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/home.module.css';
import Image from 'next/image';

import { Fade, Zoom } from "react-awesome-reveal";
import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faBook, faBriefcase, faGraduationCap, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [randomQuote, setRandomQuote] = useState("");
  useEffect(() => {
    const quotes = [
      "I wish thee every possible fortune. Health, wealth, love, and above all, problems worth solving.",
      "Be glad of thy chosen path. It is, after all, thine.",
      "如果有来生, 我还是会选择和你在一起报税、开洗衣店。",
      "Deep roots are not reached by the frost",
      "🎵 有你陪喝醉了又何妨 🎵",
      "If the Sun refuses to shine, we will be the Sun.",
      "Whiskey neat, Coffee black, Bed at three",
    ];
    const randInd = Math.floor(Math.random() * quotes.length);
    setRandomQuote(
      quotes[randInd]
    );
  }, []);

  return (
    <div className={styles.center}>
      <Head>
        <title>Franklin Yin</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Hello! I'm Franklin, a student and software engineer. Welcome to my little island on the Internet!" />
        <meta name="og:image" content="/images/headshot2.jpg" />
      </Head>
      <header className={styles.header}>
        <Fade triggerOnce>
          <Image
            priority
            src="/images/headshot2.jpg"
            className={utilStyles.borderCircle}
            height={184}
            width={184}
            alt="Franklin Yin"
          />
        </Fade>
        <Fade triggerOnce>
          <h1 className={utilStyles.heading2Xl}>
            <Fade delay={500} cascade damping={0.03} triggerOnce>
              Franklin Yin
            </Fade>
          </h1>
          <Fade delay={850} triggerOnce>
            <p className={utilStyles.quote}>
              {randomQuote}
            </p>
          </Fade>
        </Fade>
        <Zoom delay={800} triggerOnce>
          <p className={utilStyles.headingMd}>Welcome! I'm Franklin, a student and software engineer.</p>
          <main className={styles.panelContainer}>
            <div className={styles.navigationPanel}>
              <h2>Quick Links</h2>
              <ul>
                <li><Link href="/blog">My Blog</Link></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/Yin4TheWin">Cool Projects</a></li>
                <li><a href="https://docs.franklinyin.com/">Documentation</a></li>
              </ul>
            </div>
            <div className={styles.aboutPanel}>
              <h2>About</h2>
              <ul className={styles.aboutList}>
                <li>
                  <FontAwesomeIcon icon={faLocationDot} size="lg" className={styles.icon} />
                  <span>Mountain View, CA</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faBriefcase} size="lg" className={styles.icon} />
                  <span>Software Engineer @ Google</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faGraduationCap} size="lg" className={styles.icon} />
                  <span>Georgia Tech, M.S. (2024 - )</span>
                </li>
                <li>
                  <span>Rutgers University, B.S. (2020 - 2024)</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faBook} size="lg" className={styles.icon} />
                  <span>Currently Reading: <i>The Three Body Problem</i>, by Cixin Liu (trans. Ken Liu)</span>
                </li>
              </ul>
            </div>
          </main>
          <section className={styles.socialIcons}>
            <a href="https://www.instagram.com/yinforthewin/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="lg" className={styles.icon} />
            </a>
            <a href="https://github.com/Yin4TheWin" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="lg" className={styles.icon} />
            </a>
            <a href="https://www.linkedin.com/in/franklin-yin-67301a1aa/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="lg" className={styles.icon} />
            </a>
            <a href="mailto:chat@franklinyin.com">
              <FontAwesomeIcon icon={faEnvelope} size="lg" className={styles.icon} />
            </a>
          </section>
        </Zoom>
      </header>
    </div>
  );
}
