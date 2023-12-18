import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/home.module.css';
import {  getPostIds } from '../lib/post_factory';
import utilStyles from '../styles/utils.module.css';

export async function getStaticProps() {
    const postsData = getPostIds();
    return {
      props: {
        postsData
      },
    };
}

export default function NotFound({ postsData }) {
  return <div className={styles.center}>
      <Head>
        <title>{"404 Not Found :("}</title>
        <meta name="description" content="The page you are requesting should not exist. And yet, there is something here in the supposed nothingness..."/>
      </Head>
      <header className={styles.header}>
        <h1 className={utilStyles.headingXl}>This Page Should Not Exist (404 Error)</h1>
        <p>
            This page should not exist. And yet, there is something here in the supposed nothingness...who are we to determine the nature of reality, anyway, when we are but a speck in the unknowable universe?
        </p>
        <p>
                <Link href="/">Go home</Link> | <Link href={
                    `/posts/${postsData[Math.floor(Math.random() * postsData.length)].params.id}`
                }>Go exploring</Link> | <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Go away</a>
              </p>
        <hr/>
      </header>
  </div>;
}