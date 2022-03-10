import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Likes from "../components/likes";
import styles from "../styles/Home.module.css";

const ClientSidePage: NextPage = () => {
  const date = new Date();

  return (
    <div className={styles.container}>
      <Head>
        <title>Static Page</title>
      </Head>

      <main className={styles.main}>
        <h1>Static Page</h1>
        <div>
          Server Build Time: {date.toLocaleDateString()} (
          {date.toLocaleTimeString()})
        </div>
        <Link href="/">Back to home</Link>
        <Likes />
      </main>
    </div>
  );
};

export default ClientSidePage;
