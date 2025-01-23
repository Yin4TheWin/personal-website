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

export default function Home() {
  const [randomQuote, setRandomQuote] = useState("");
  useEffect(() => {
    const quotes = [
      "I wish thee every possible fortune. Health, wealth, love, and above all, problems worth solving.",
      "Be glad of thy chosen path. It is, after all, thine.",
      "如果有来生, 我还是会选择和你在一起报税、开洗衣店。",
      "🎵 怎么爱你都不嫌多 🎵",
      "有你相伴这一路 多么多么自由",
      "If the Sun refuses to shine, we will be the Sun.",
      "Whiskey neat, Coffee black, Bed at three",
      "I hold it true, whate'er befall; I feel it, when I sorrow most...",
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
        <meta name="og:image" content="/images/headshot2.jpg"/>
      </Head>
      <header className={styles.header}>
        <Fade>
          <Image
            priority
            src="/images/headshot2.jpg"
            className={utilStyles.borderCircle}
            height={184}
            width={184}
            alt="Franklin Yin"
          />
        </Fade>
        <Fade>
          <h1 className={utilStyles.heading2Xl}>
            <Fade delay={500} cascade damping={0.03}>
              Franklin Yin
            </Fade>
          </h1>
          <Fade delay={850}>
            <p className={utilStyles.quote}>
              {randomQuote}
            </p>
          </Fade>
        </Fade>
        <Zoom delay={800}>
          <section>
            <p className={utilStyles.headingMd}>Welcome! I'm Franklin, a student and software engineer.</p>
            <p>
              (Check out my {' '}<Link href="/blog">blog</Link> and {' '}<a target="_blank" rel="noopener noreferrer" href="https://github.com/Yin4TheWin">cool projects</a>. Or, if you must, some{' '}<a href="https://docs.franklinyin.com/">documentation</a>.)
            </p>
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
          </section>
        </Zoom>
      </header>
    </div>
  );
}
