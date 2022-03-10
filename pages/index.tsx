import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import ClonedLikes from "../components/cloned-likes";
import Likes from "../components/likes";
import OptimisedName from "../components/optimised-name";
import Posts from "../components/posts";
import RootStatePosts from "../components/root-state-posts";
import UnoptimisedName from "../components/unoptimised-name";
import { useAppDispatch } from "../hooks/use-app-dispatch";
import { addPost } from "../store/posts-slice";
import { addLike, toggleName } from "../store/user-slice";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  console.log("Home Rendering");
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>

      <main className={styles.main}>
        <div>
          <div
            style={{
              display: "flex",
              columnGap: "5rem",
              justifyContent: "space-between",
            }}
          >
            <OptimisedName />
            <UnoptimisedName />
          </div>
          <div
            style={{
              display: "flex",
              columnGap: "5rem",
              justifyContent: "space-between",
            }}
          >
            <Likes />
            <ClonedLikes />
          </div>
          <div
            style={{
              display: "flex",
              columnGap: "5rem",
              justifyContent: "space-between",
            }}
          >
            <Posts />
            <RootStatePosts />
          </div>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <h2>Redux Actions</h2>
          <button onClick={() => dispatch(addLike())}>Like</button>
          <button
            style={{ marginLeft: "1rem" }}
            onClick={() => dispatch(toggleName())}
          >
            Switch
          </button>
          <button
            style={{ marginLeft: "1rem" }}
            onClick={() => dispatch(addPost())}
          >
            Add Post
          </button>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <h2>Page Links</h2>
          <Link href="/static">Static</Link>
          <span style={{ marginLeft: "1rem" }}>
            <Link href="/ssg">SSG</Link>
          </span>
        </div>
      </main>
    </div>
  );
};

export default Home;
