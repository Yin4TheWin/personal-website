import Head from 'next/head';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/home.module.css';
import Image from 'next/image';

import { Fade, Zoom } from "react-awesome-reveal";
import { useEffect, useState } from 'react';

export default function Home() {
  const [randomQuote, setRandomQuote] = useState("");

  useEffect(() => {
    const quotes = [
      "如果有来生, 我还是会选择和你在一起报税、开洗衣店。",
      "If the Sun refuses to shine, we will be the Sun.",
    ];
    setRandomQuote(
      quotes[Math.floor(Math.random() * quotes.length)]
    );
  }, []);

  return (
    <div className={styles.center}>
      <Head>
        <title>Franklin Yin</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Hello! I'm Franklin, a student and software engineer. Welcome to my little island on the Internet!" />
      </Head>
      <header className={styles.header}>
        <Fade>
          <Image
            priority
            src="/images/headshot.jpg"
            className={utilStyles.borderCircle}
            height={164}
            width={164}
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
            <p className={utilStyles.headingMd}>Hello! I'm Franklin, a student and software engineer. Welcome to my little island on the Internet!</p>
            <p>
              (Check out my {' '}<Link href="/blog">blog</Link> and {' '}<a target="_blank" rel="noopener noreferrer" href="https://github.com/Yin4TheWin">cool projects</a>. Or, if you must, some{' '}<a href="https://docs.franklinyin.com/">documentation</a>.)
            </p>
          </section>
        </Zoom>
      </header>
    </div>
  );
}
