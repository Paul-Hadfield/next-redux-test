import { GetStaticProps, GetStaticPropsResult, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

type Props = {
  time: string;
};

const ServerSidePage: NextPage<Props> = ({ time }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>SSG Page</title>
      </Head>

      <main className={styles.main}>
        <h1>SSG Page</h1>
        <div>Time on Server: {time}</div>
        <Link href="/">Back to home</Link>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const date = new Date();
  return {
    props: {
      time: `${date.toLocaleDateString()} (${date.toLocaleTimeString()})`,
    },
  };
};

export default ServerSidePage;
