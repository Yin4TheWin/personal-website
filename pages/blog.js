import { useState } from 'react';

import Link from 'next/link';
import Head from 'next/head';

import Layout from '../components/blog_layout';
import utilStyles from '../styles/utils.module.css';
import { Fade } from "react-awesome-reveal";

import { getSortedPostsData } from '../lib/post_factory';
import Date from '../lib/date_formatter';

export async function getStaticProps() {
  const postsData = getSortedPostsData();
  return {
    props: {
      postsData,
    },
  };
}

export default function Blog({ postsData }) {
  const randomPost = postsData[Math.floor(Math.random() * postsData.length)].id;
  const [filter, setFilter] = useState("all");

  return (
    <Layout>
      <Head>
        <title>Blog - Franklin Yin</title>
      </Head>
      <Fade>
        <section className={`${utilStyles.headingMd}`}>
          <section>
            <h1 className={utilStyles.headingLg}>Blog Posts</h1>
            <p className={utilStyles.xs}>
              <Link href="/">Back to home</Link> | <Link href={`/posts/${randomPost}`}>Random post</Link> |
              Filter by: {' '}
              <span className={utilStyles.selectContainer}>
                <select
                  className={utilStyles.selectBox}
                  onChange={(e)=>{setFilter(e.target.value)}}
                >
                  <option value="all">All Posts</option>
                  <option value="select">Selected Works</option>
                  <option value="math">Math</option>
                  <option value="programming">Programming</option>
                  <option value="drafts">Drafts</option>
                </select>
                <span className={utilStyles.selectArrow}>▼</span>
            </span> 
            </p>
            
          </section>

          <ul className={utilStyles.list}>
            {postsData.filter(({ id, date, title, desc, rev, tags}) => tags.includes(filter)).map(({ id, date, title, desc, rev }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className={`${utilStyles.lightText} ${utilStyles.xs}`}>
                  <Date dateString={date} /> {rev && <>(rev. <Date dateString={rev} />)</>}
                </small>
                <br />
                <small className={utilStyles.xs}>
                  {desc}
                </small>
              </li>
            ))}
          </ul>
        </section>
      </Fade>
    </Layout>
  );
}
