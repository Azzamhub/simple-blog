import Head from 'next/head'
import styles from '../styles/Home.module.css';

import Link from 'next/link';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Alert from '../components/alert';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

const x = ()=>(<><h1>wowo Head1</h1></>);
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({allPostsData}) {
  return (
    <Layout x>
      <Head>
        <title>Blog buitl with NextJs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
       <section className={utilStyles.headingMd}>
        <p>A simple blog !</p>
        <p>
          This blog was built as a practice to learn NextJs
          <a href="https://nextjs.org/learn">See more NextJs tutorials</a>.
        </p>
        <p className={utilStyles.note}>Note! Contents are powered by chatGPT </p>
      </section>
      
      <section className={utilStyles.headingMd + utilStyles.padding1px}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
        <li className={utilStyles.listItem} key={id}>
        <Link href={`/posts/${id}`}>{title}</Link>
        <br />
        <small className={utilStyles.lightText}>
          <Date dateString={date} />
        </small>
      </li>
          ))}
        </ul>
      </section>
    </Layout>
       

      
 

  )
}


