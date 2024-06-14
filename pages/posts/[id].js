import Layout from '../../components/blog_layout';
import Head from 'next/head';
import Link from 'next/link';

import { getPostIds, getIndividualPostData } from '../../lib/post_factory';
import Date from '../../lib/date_formatter';

import utilStyles from '../../styles/utils.module.css';

export async function getStaticPaths() {
  const paths = getPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getIndividualPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return <Layout>
    <Head>
      <title>{postData.title + " - Franklin Yin"}</title>
      <meta name="description" content={postData.desc} />
    </Head>
    <article>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <p className={utilStyles.lightText + " " + utilStyles.xs}>
        {postData.desc}
      </p>
      <p className={utilStyles.xs}>
        <Link href="/blog">Back to blog</Link> | <Link href="/">Back to home</Link> | <Link href={
          `/posts/${postData.ids[Math.floor(Math.random() * postData.ids.length)].params.id}`
        }>Random post</Link>
      </p>
      <hr />
      <div className={utilStyles.lightText}>
        <Date dateString={postData.date} /> {postData.rev && <>(revised <Date dateString={postData.rev} />)</>}
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  </Layout>;
}